import Room from '../models/room';
import Roomtype from '../models/roomtype';

export const roomList = async (req, res) => {
    
    const lista = await Room.find().populate({
        path: 'roomid',
        model: 'Roomtype'
    });
    console.log(lista[0])

    res.status(200).json(lista)
} 