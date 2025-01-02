import Usuario from '../models/user';
import jwt from 'jsonwebtoken';
import cfig from '../config'
import Role from '../models/role';

export const signIn = async (req, res) => {

    try {
        
        const usuarioEncontrado = await Usuario.findOne({correo: req.body.correo}).populate("role")
        
        if (!usuarioEncontrado) {
            return res.status(404).json({token: null, message: "Usuario no encontrado" });
        }

        if (!usuarioEncontrado.contrasena) {
            return res.status(401).json({ token: null, message: "Contraseña no encontrada" });
        }
        
        const matchPass = await Usuario.comparePassword(req.body.contrasena, usuarioEncontrado.contrasena);
        
        if (!matchPass) {
            return res.status(401).json({token: null, message: "Contraseña Invalida"})
        }
        const token = jwt.sign({id: usuarioEncontrado._id}, cfig.SECRET_KEY, {
            expiresIn: 86400
        });

        return res.json({ token });
    } catch (error) {
        console.log(error)
        res.status(400).json('Error al intentar hacer la comparación con la contraseña')
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

    res.status(200).json(usuarioGuardado)
    
};