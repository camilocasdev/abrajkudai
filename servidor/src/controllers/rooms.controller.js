import Room from '../models/room';
import Roomtype from '../models/roomtype';

export const roomList = async (req, res) => {
    
    const lista = await Room.find().populate({
        path: 'roomid',
        model: 'Roomtype'
    });
    
    const listafiltrada = lista.filter(roomType => roomType.estado = 'Disponible');

    console.log(listafiltrada[0])

    res.status(200)
}