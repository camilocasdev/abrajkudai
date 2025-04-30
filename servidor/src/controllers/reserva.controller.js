import Reserva from '../models/reserva.js';
import cfig from '../config.js';
import jwt, { verify } from 'jsonwebtoken';
import User from '../models/user';
import Room from '../models/room.js'
import Roomtype from '../models/roomtype.js'

export const bookingToPaying = async ( req, res) => {

    try {
        
        const { fechaInicio, fechaHasta, cantidad, habitacion, estado, servicios } = req.body;
        
        let token = req.cookies['Tookie'];
        
        if (!token) {
            token = req.cookies['accessToken']
        }
        const decoded = jwt.verify(token, cfig.SECRET_KEY)

        const room = await Room.findOne({roomid: habitacion}).sort({updatedAt: 1})

        //Transformamos en fecha el String que nos llega de la base de datos
        const [dayFrom, dayTo] = [new Date(fechaInicio), new Date(fechaHasta)]
        
        const diffms = Math.abs(dayTo.getTime() - dayFrom.getTime());
        
            /*--------------------------------------------------------------------------------#
            |  TRANSFORMACIÓN DE FECHAS                                                       |
            |  Con Math.abs forzamos a que el resultado sea positivo                          |                                    |
            |  getTime() hace el calculo de los milisegundos que trascurrieron desde          |
            |  la fecha que ingresamos hasta 1970, con los dos calculos nos da una            |
            |  diferencias de milisegundos, lo que procedemos es a restar esta diferencia     |
            |  y luego multiplicarla, por 1000 para un segundo, por 60 para un minuto, por    |
            |  60 para una hora y luego por 24 para un día, de esta forma nos dan los días.   |
            #________________________________________________________________________________*/

        const dias = diffms / (1000 * 60 * 60 * 24); //Sería igual a decir que dividimos por 86.4M 
        //        == diffms / 86400000

        const roomType = await Roomtype.findOne({_id: habitacion})

        const total = dias * roomType.precio

        const booking = new Reserva({
            usuario: decoded.id,
            habitacion: room, // (1) Habitación guardará el ID de una habitación
            tipo: habitacion, // (1)Tipo guardará el tipo de habitación que el usuario desea
            fechaInicio: fechaInicio,
            fechaHasta: fechaHasta,
            cantidad: cantidad, //la cantidad maxima se manejara desde el front
            dias: dias,
            total: total,
            estado: estado,
            servicios: servicios
        })
            /*--------------------------------------------------------------------------------#
            |  (1) Corregir la toma de datos desde el front para que quede más claro en la    |
            |   lectura del back, ya que de la manera como esta, pueden confundirse el tipo   |
            |   de ID que se esta tomando.                                                    |
            #________________________________________________________________________________*/
        
        const save = await booking.save()
        
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

        res.cookie('Booking-Temp', save._id, cookiecfg)

        return res.status(201).json({error: false, msg: 'Redirigiendo al pago...'})
    
    } catch (error) {
        console.log('Error inesperado: ' + error)
        res.status(500).json({error: true, msg: 'Error inesperado: ' + error})
    }

}

export const payData = async ( req, res) => {

    try {
        let token = req.cookies['Tookie'];
        
        if (!token) {
            token = req.cookies['accessToken']
        }
        const bookingId = req.cookies['Booking-Temp'] //Id de Reserva (SIN CODIFICACIÓN)
        const userId = jwt.verify(token, cfig.SECRET_KEY) // ID DE USUARIO

        if (bookingId == undefined || userId == undefined) {
            return res.status(401).json({error: true, msg: 'Error en la toma de datos...', redirect: '/404?error=booking-data-missing'})
        }

        const booking = await Reserva.findOne({_id: bookingId})
        const user = await User.findOne({_id: userId.id})
        const roomtype = await Roomtype.findOne({_id: booking.tipo})
    
        //Descodificar la id de reserva en caso de que no decodifique en el req.cookies
        //const reservaID = decodeURIComponent(cookie); 

        res.status(200).json({
            error: false,
            msg: 'Todo OK!',
            booking: booking,
            room: {
                nombre: roomtype.nombre,
                img: roomtype.imagen,
            },
            user: {
                mail: user.correo,
                tel: user.telefono
            }
        })
    
    } catch (error) {
        console.log(error)
        res.status(500).json({error: true, msg: "Error Interno Inesperado"})
    }
}

export const bookingConfirmPay = async ( req, res ) => {
    
    const cookie = req.cookies['Booking-Temp']

    const booking = await Reserva.findOne({_id: cookie})

    const {cardName, cardNumber, cardExpire, cardCode, email, userNumber} = req.body;



    res.status(201).json({msg: 'Todo OK!', contenido: 'w'})

}

export const getReserva = async (req, res) => {
    const reservas = await Reserva.find();
    if (reservas.length < 1) res.status(200).json('Historial de reservas vacio.')

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

