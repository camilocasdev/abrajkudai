import Room from '../models/room.js';
import Roomtype from '../models/roomtype.js';

export const roomList = async (req, res) => {
    
    const lista = await Room.find().populate({
        path: 'roomid',
        model: 'Roomtype'
    });

    const miniFilter = req.headers['filter']

    if (!miniFilter) return res.status(200).json({msg: '¡Consulta realizada exitosamente!', data: lista});

    try {
        const listFiltered = lista.filter(RoomType => RoomType.estado === miniFilter) // Para limitar los resultados .slice(0, 10);

        if (listFiltered.length < 0) {
            return res.status(200).json({ message: 'No hay habitaciones disponibles' });
        } else {
            return res.status(200).json({ 
                msg: 'Habitaciones ' + miniFilter,
                data: listFiltered
            })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({msg: 'Error inesperado...'})
    }
}

export const roomUpdate = async (req, res) => {
    try{
        const prueba = await Room.findById(req.params.roomId)
        console.log('Antes ' + prueba)

        const room = await Room.findByIdAndUpdate(req.params.roomId, req.body, {new: true});

        if (!room){
            return res.status(404).json({message: 'Room not found'})
        }
        
        console.log('Despues ' + prueba)
        res.status(200).json({msg: 'Habitación modificado existosamente', updated: room});
    } catch (error) {
        console.error(error);
    }
}


export const createRoom = async ( req, res ) => {
    try {
        let { numero, estado, roomid } = req.body

        let newRoom;

        const check = await Room.find({numero: numero})

        if (check === numero) { 
            res.status(400).json({error: true, msg:'El número de habitación ya existe. Intente uno diferente'})
        } else {
            if ( estado === null || undefined){
                estado = 'Disponible'
            }

            newRoom = await new Room({
                numero: numero,
                estado: estado,
                roomid: roomid
            }).save()
        }

        res.status(201).json({msg: '¡Habitación creada exitosamente!', data: newRoom})
    } catch (error) {
        res.status(500).json({msg: 'Error del servidor'})
    }
}

export const getRoomById = async ( req, res ) => {
    try {
        const room = await Room.findById(req.params['roomId'])

        if (!room) {
            return(
                res.status(404).json({msg: 'No existe una habitación asociada a ese ID'})
            )
        }
        
        res.status(200).json({msg: '¡Habitación actualizada exitosamente!', data: room})
    } catch (error) {
        res.status(404).json({msg: 'Error inesperado'})
    }
}

export const deleteRoom = async ( req, res ) => {
try {
        const room = await Room.findByIdAndDelete(req.params['roomId'])
        
        res.status(204).json()
    } catch (error) {
        res.status(1200).json({msg: 'Error inesperado'})
    }
}

