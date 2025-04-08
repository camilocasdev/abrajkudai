import Room from '../models/room';
import Roomtype from '../models/roomtype';

export const roomList = async (req, res) => {
    
    const lista = await Room.find().populate({
        path: 'roomid',
        model: 'Roomtype'
    });

    const miniFilter = req.headers['filter']

    if (!miniFilter) return res.status(200).json(lista);

        try {
            const listFiltered = lista.filter(RoomType => RoomType.estado === miniFilter) // Para limitar los resultados .slice(0, 10);

            if (listFiltered.length < 0) {
                return res.status(200).json({ message: 'No hay habitaciones disponibles' });
            } else {
                return res.status(200).json({ 
                    message: 'Habitaciones ' + miniFilter,
                    Array: listFiltered
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
        res.status(200).json({msg: 'Habitación Actualizada Existosamente', actualizacion: room});
        
    } catch (error) {
        console.error(error);
    }

}


export const search = async (req, res) => {
    try {
        
        const roomNumber = req.query.t
        
        
        const type = await Roomtype.find().sort({precio: 1})
            
            //console.log(type)
        const roomshow = type[roomNumber]
        
        res.status(201).json({params: roomNumber, roomServer: roomshow})

    } catch (error) {
        console.log(error)
        res.status(400).json({error: 'error', msg: 'Error inesperado...'})
    }
}

