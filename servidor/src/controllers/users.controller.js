import Usuario from "../models/user.js";
import Role from "../models/role.js";
import Reserva from "../models/reserva.js"
import jwt from "jsonwebtoken";

export const get_user = async (req, res) => {
    const usuarios = await Usuario.find();
    
    res.status(200).json({msg:'¡Consulta realizada exitosamente!', data: usuarios})
}

export const del_user = async (req, res) => {
    const {userId} = req.params;
    const deleteUser = await Usuario.findByIdAndDelete(userId);

    res.status(204).json(deleteUser);
}

export const get_user_by_id = async (req, res) => {

    const {userId} = req.params;
    const userById = await Usuario.findById(userId);

    res.status(200).json({msg:'¡Usuario consultado exitosamente!', data: userById});
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
    
        

        jwt.sign({id: usuarioGuardado._id}, process.env.SECRET_KEY, {
            expiresIn: 864000 //24 Horas
        });
    
        res.status(201).json({msg:'¡Usuario creado exitosamente!', created: usuarioGuardado})
}

export const update_user = async (req, res) => {
    
    try {
        const actualizarUsuario = await Usuario.findByIdAndUpdate(req.params.userId, req.body, { new: true });
    
        if (!actualizarUsuario) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }
        
        res.status(200).json({msg:'¡Usuario modificado exitosamente!', updated: actualizarUsuario})
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Error al actualizar el usuario' });
    }
}

export const profileData = async (req, res) => {
    console.log('profileData')
    try {
        const token = req.cookies['Tookie'];

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        const usuario = await Usuario.findById(decoded.id, {contrasena: 0});
        const reservas = await Reserva.find({usuario: decoded.id}).sort({createdAt: -1}).populate({
            path: 'habitacion',
            model: 'Room'
        }).populate({
            path: 'tipo',
            model: 'Roomtype'
        })

        const confirmedBooking = await Reserva.find({usuario: decoded.id, estado: 'Pagado'}).sort({createdAt: -1}).populate({
            path: 'habitacion',
            model: 'Room'
        }).populate({
            path: 'tipo',
            model: 'Roomtype'
        })


        if (!usuario) {
            return(
                res.status(404).json({message: 'Usuario no encontrado'})
            )
        };

        
        res.status(200).json({error: false, userData: usuario, reservasData: reservas})

    } catch (error) {
        console.log(error)
        return res.status(401).json({
            error: true,
            message: 'Error al autenticar el token',
            redirect: '/signin?error=invalid_token'
        });
    }

}

export const logout = async (req, res) => {

    res.clearCookie('Tookie');
    res.clearCookie('accessToken')
    res.status(200).json({msg: 'Sesión cerrada', redirect: '/'});
    return;
}

export const newPassword = async (req, res) => {
    
    const coded = req.cookies['rupc']

    if (!coded) {
        res.status(401).json({
            error: true,
            msg: 'Sin datos disponibles, realice el proceso nuevamente',
            redirect: '/validation/forgotpassword?error=no%20data%20avaible'
        })
    }

    const data = jwt.verify(coded, process.env.SECRET_KEY)
    
    console.log(data)
}