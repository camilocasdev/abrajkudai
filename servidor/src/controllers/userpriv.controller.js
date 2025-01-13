import Usuario from "../models/user";
import cfig from '../config';
import jwt from 'jsonwebtoken';

export const getuser = async (req, res) => {

    
    const token = req.headers["x-access-token"];

    if (!token) return res.status(403).json({msg: "No token provided"})

    try {

        const decoded = jwt.verify(token, cfig.SECRET_KEY);
        req.UsuarioId = decoded.id;

        const usuario = await Usuario.findById(req.UsuarioId, {contrasena: 0});

        if (!usuario) return res.status(404).json({message: 'Usuario no encontrado'});

        res.status(200).json(usuario)

    } catch (error) {
        return res.status(401).json({message: 'Error'});
    }

}

