import Usuario from "../models/user";
import Role from "../models/role";
import jwt from "jsonwebtoken";
import cfig from '../config';

export const get_user = async (req, res) => {
    const usuarios = await Usuario.find();
    
    res.status(201).json(usuarios)
}

export const del_user = async (req, res) => {
    const {userId} = req.params;
    const deleteUser = await Usuario.findByIdAndDelete(userId);

    res.status(204).json(deleteUser);
}

export const get_user_by_id = async (req, res) => {

    const {userId} = req.params;
    const userById = await Usuario.findById(userId);

    res.status(201).json(userById);
}

export const add_user = async (req, res) => {
    
    const { nombre, apellido, contrasena, identificacion, pais, correo, telefono, role } = req.body;
    
        const nuevoUsuario = new Usuario({
            nombre,
            apellido,
            contrasena: await Usuario.encryptPassword(contrasena),
            identificacion,
            pais,
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
    
        const usuarioGuardado = await nuevoUsuario.save();
    
        

        jwt.sign({id: usuarioGuardado._id}, cfig.SECRET_KEY, {
            expiresIn: 864000 //24 Horas
        });
    
        res.status(200).json(usuarioGuardado)
        
}

export const update_user = async (req, res) => {
    
    try {
        const actualizarUsuario = await Usuario.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    
        if (!actualizarUsuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        
        res.status(200).json(actualizarUsuario)
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Error al actualizar el usuario' });
    }
}

export const privgetuser = async (req, res) => {
    
    const token = req.cookies['Tookie'];


    if (!token) return res.status(403).json({estado: 'error', msg: "No ha proporcionado un token, redirigiendo...", redirect: '/signin?error=not_logged' })

    try {

        const decoded = jwt.verify(token, cfig.SECRET_KEY);
        
        if (!decoded) console.log('El token ya expiró')

        req.UsuarioId = decoded.id;

        const usuario = await Usuario.findById(req.UsuarioId, {contrasena: 0});

        if (!usuario) return res.status(404).json({message: 'Usuario no encontrado'});

        res.status(200).json(usuario)

    } catch (error) {
        return res.status(401).json({
            error: true,
            message: 'Error al autenticar el token',
            redirect: '/signin?error=invalid_token'
        });
    }

}

export const logout = async (req, res) => {
    res.clearCookie('Tookie');
    res.status(200).json({message: 'Sesión cerrada'});
    return;
}
