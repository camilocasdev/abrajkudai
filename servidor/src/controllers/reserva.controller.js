import Reserva from '../models/reserva';
import cfig from '../config.js';
import jwt from 'jsonwebtoken';
import User from '../models/user';

export const createReserva = async (req, res) => {

    try {
        const { fechaInicio, fechaHasta, cantidad, habitacion, precio, estado } = req.body;
        
        const token = req.cookies['Tookie']

        if (!token) {

        }
        
        const decoded = jwt.verify(token, cfig.SECRET_KEY)

        console.log(decoded._id)

        return res.json({msg: 'Funciona', decoded: decoded})
        /*



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

