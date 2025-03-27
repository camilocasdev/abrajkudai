import Reserva from '../models/reserva.js';
import cfig from '../config.js';
import jwt, { verify } from 'jsonwebtoken';
import User from '../models/user';
import Room from '../models/room.js'
import Roomtype from '../models/roomtype.js'

export const bookingToPaying = async ( req, res) => {

    try {
        
        const { fechaInicio, fechaHasta, cantidad, habitacion, estado, servicios } = req.body;
        
        const token = req.cookies['Tookie']
        const decoded = jwt.verify(token, cfig.SECRET_KEY)

        const booking = new Reserva({
            usuario: decoded.id,
            habitacion: habitacion,
            fechaInicio: fechaInicio,
            fechaHasta: fechaHasta,
            cantidad: cantidad,
            estado: estado,
            servicios: servicios
        })
        
        const temp = await booking.save()
        
        const room = await Room.findOne({roomid: habitacion}).sort({updatedAt: 1})
        
        const updateRoom = await Room.findOneAndUpdate({_id: room._id}, {estado: estado}, {new: true})
        
        if (!updateRoom) {
            return res.status(404).json({ msg: 'Habitación no encontrada' });
        }
        
        const cookiecfg = {
            expires: new Date(Date.now() + cfig.COOKIE_EXPIRATION * 2 * 60 * 60 * 1000),
            path: "/",
            httpOnly: true,
            secure: true,
            samesite: "Strict"
        }

        res.cookie('Booking-Temp', temp._id, cookiecfg)

        return res.status(201).json({error: false, msg: 'Redirigiendo al pago...'})
    
    } catch (error) {
        console.log('Error inesperado: ' + error)
        res.status(500).json({error: true, msg: 'Error inesperado: ' + error})
    }

}

export const bookingConfirmPay = async ( req, res ) => {

    // const reservaID = decodeURIComponent(req.cookies.reservaID); Descodificar la id de reserva

}

                /*--------------------------------------------------------------------------------------- #
                |                                                                                         |
                |    Para que traiga el Id sin new ObjectID(-id) se debe traer el documento sin array     |
                |    en caso de que sean varios documentos, se debera especificar la posición del array   |
                |    para que retorne un documento sin array y así muestre correctamenete el _id.         |
                |                                                                                         |
                |   Sin embargo a veces no funciona eso :sob:, para ello usar toString() o toHexString()  |
                |                                                                                         |
                # ---------------------------------------------------------------------------------------*/


/* 
export const createReserva = async (req, res) => {

    try {
        const { fechaInicio, fechaHasta, cantidad, habitacion, estado, servicios } = req.body; //Falta el total y el estado de pago
        
        const token = req.cookies['Tookie']
        const step = req.params
        console.log(step) 
        return res.status(201).json(step);

        const decoded = jwt.verify(token, cfig.SECRET_KEY)
            
        const datos = {
            usuario: decoded.id,
            fechaInicio: fechaInicio,
            fechaHasta: fechaHasta,
            cantidad: cantidad,
            habitacion: habitacion,
            estado: estado, //Falta el total
            services: servicios
        }

        console.log(datos) 
        
        


            if (step === 0) {

                const type = await Roomtype.findOne({nombre: datos.habitacion})

                
                
                const room = await Room.find({
                    roomid: type._id.toString(), 
                    estado: 'Disponible'
                }).sort({
                    updateAt: 1
                }).limit(5); // Usar limit() para limitar la cantidad de resultados.
                
                if (room == undefined || room == null) return console.log('Consulta retorna vacia...');
                
                /* console.log(await room[0].populate('roomid'))
                console.log({Type: type._id.toString()}) */



                //const saveBooking = await newBooking.save()*/

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

