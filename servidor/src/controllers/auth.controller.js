import Usuario from '../models/user';
import jwt from 'jsonwebtoken';
import cfig from '../config'
import Role from '../models/role';



export const signIn = async (req, res) => {
    try {

        const { correo, contrasena, keepSession } = req.body;
        
        const usuarioEncontrado = await Usuario.findOne({correo: correo}).populate("role")
        
        if (!usuarioEncontrado) {
            return res.status(401).json({token: null, msg: "Usuario no encontrado", redirect: '/signin?error=user_not_found'});
        }

        if (!usuarioEncontrado.contrasena) {
            return res.status(401).json({ token: null, msg: "Contraseña no encontrada", redirect: '/signin?error=password_not_found'});
        }
        
        const matchPass = await Usuario.comparePassword(contrasena, usuarioEncontrado.contrasena);
        
        if (!matchPass) {
            return res.status(401).json({token: null, msg: "Contraseña Invalida", redirect: '/signin?error=invalid_password'});
        }
        const tokens = [];
        if (keepSession === false) {
            ['accessToken', 'Tookie'].forEach((name, i) => {
                let expire;
                if (name === 'Tookie'){
                    expire = ({maxAge: cfig.EXPIRE_COOKIE[name]})
                }
                tokens[i] = jwt.sign({id: usuarioEncontrado._id, refresh: keepSession}, cfig.SECRET_KEY, {
                    expiresIn: cfig.EXPIRE_TOKEN[name]
                })
                res.cookie(name, tokens[i], {...cfig.COOKIE_CFG, ...expire})
            })
        } else {
            ['accessToken', 'Tookie'].forEach((name, i) => {
                tokens[i] = jwt.sign({id: usuarioEncontrado._id, refresh: keepSession}, cfig.SECRET_KEY, {
                    expiresIn: cfig.EXPIRE_TOKEN[name]
                })
                res.cookie(name, tokens[i], {...cfig.COOKIE_CFG, maxAge: cfig.EXPIRE_COOKIE[name]})
            })
        }

        // IMPLEMENTAR DOS TOKENS, UNO DE CORTA DURACIÓN Y OTRO DE RENOVACIÓN PARA REDUCIR RIESGOS.

        return res.json({ msg: "Usuario autenticado, iniciando sesión..." , token: tokens });
    } catch (error) {
        console.log(error)
        res.status(400).json('Error al autenticar el usuario')
    }
};
    
export const signUp = async (req, res) => {

    const { nombre, apellido, pais, identificacion, contrasena, correo, telefono, role } = req.body;

    const nuevoUsuario = new Usuario({
        nombre,
        apellido,
        pais,
        identificacion,
        contrasena: await Usuario.encryptPassword(contrasena),
        correo,
        telefono, 
        role
    })  

    if (role){
        const foundRoles = await Role.find({nombre:{$in: role}});
        nuevoUsuario.role = foundRoles.map(role => role._id);

        if (!nuevoUsuario.role.includes("usuario")){
            const defaultRole = await Role.findOne({nombre: 'usuario'});
            nuevoUsuario.role.push(defaultRole._id)
        }
    } else {
        const defaultRole = await Role.findOne({nombre: 'usuario'});
        nuevoUsuario.role = [defaultRole._id];
    }

    const emailFound = await Usuario.findOne({ correo: correo });

    if (emailFound) {
        return res.status(400).json({ msg: 'Correo ya existe' });
    }
    
    const identFound = await Usuario.findOne({ identificacion: identificacion });

    if (identFound) {
        return res.status(400).json({ msg: 'Identificación ya existe' });
    }

    const usuarioGuardado = await nuevoUsuario.save();

    jwt.sign({id: usuarioGuardado._id}, cfig.SECRET_KEY, {
        expiresIn: 864000 //24 Horas
    });

    res.status(200).json({ msg: 'Registro exitoso.' , usuarioGuardado})
};
