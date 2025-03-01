import Reserva from '../models/reserva';
import cfig from '../config.js';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const createReserva = async (req, res) => {

    try {
        const { fechaInicio, fechaHasta, cantidad, habitacion } = req.body; //Falta el total y el estado de pago
        
        const token = req.cookies['Tookie']

        
        const decoded = jwt.verify(token, cfig.SECRET_KEY)
        
            const datos = {
                usuario: decoded.id,
                fechaInicio: fechaInicio,
                fechaHasta: fechaHasta,
                cantidad: cantidad,
                habitacion: habitacion, //Falta el total y el estado de pago
            }

        if (!token) {
            res.status(401).json({error: '', msg: 'Inicie sesión para continuar con su reserva', datosTemp: nuevaReserva ,redirect: '/signin?error'})
        }
        
        return res.json({msg: 'Funciona', usuario: decoded, datos: datos})

        
        /*
            // Traer la habitación de la torre, disponible y mostrando la información del tipo de habitación
            const torre = '^T2'
            const room = await Room.find({
                numero: {$regex: torre},
                estado: 'Disponible',
                roomid: type[roomNumber]._id
            }).populate({
                path: 'roomid',
                model: 'Roomtype'
            })

        const nuevaReserva = new Reserva({
            usuario: decoded.id,
            fecha, hora, habitacion, precio, estado });
        

        const guardarReserva = await nuevaReserva.save();
        
        

        return res.status(201).json(guardarReserva);*/
    } catch (error) {
        res.status(401).json('Ha ocurrido un error inesperado');
        console.log(error);
    }
}

export const getReserva = async (req, res) => {
    const reservas = await Reserva.find();

    res.status(200).json(reservas)
}

export const getReservaId = async (req, res) => {

    const reserva = await Reserva.findById(req.params.reservaId)
    
    res.status(200).json(reserva);
}

export const updateReserva = async (req, res) => {
    
    const actualizarReserva = await Reserva.findByIdAndUpdate(req.params.reservaId, req.body, { new: true });
    
    res.status(204).json(actualizarReserva)
}

export const deleteReserva = async (req, res) => {
    
    const {reservaId} = req.params;
    const eliminarReserva = await Reserva.findByIdAndDelete(reservaId);
    res.status(204).json(eliminarReserva) 
}

/* Modificar las variables que relacionan al usuario ingresado, con la reserva hecha y los campos de input 
elegidos para hacer la reserva */

