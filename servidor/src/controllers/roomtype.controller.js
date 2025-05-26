import Roomtype from '../models/roomtype'

export const roomtypeCreate = async ( req, res ) => {

    try {
        const { nombre, precio, capacidad, scriptLong, scriptShort, imagen} = req.body 

        const roomtypes = await Roomtype.findOne({nombre: nombre})

        console.log(roomtypes)

        if ( roomtypes != null){
            res.status(400).json({msg: 'El tipo de habitación ya existe'})
        } else {
            const newRoomtype = await new Roomtype({
                nombre: nombre,
                precio: precio,
                capacidad: capacidad,
                scriptLong: scriptLong,
                scriptShort: scriptShort,
                imagen: imagen
            }).save()

            res.status(200).json({msg: 'Clear', Roomtype: newRoomtype})
        }
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const roomtypeList = async ( req, res ) => {
    try {
        const roomtypeList = await Roomtype.find()

        res.status(201).json({msg: 'Clear', lista: roomtypeList})
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const roomtypeById = async ( req, res ) => {
    try {
        const roomtype = await Roomtype.findById(req.params['roomtypeId'])

        if (!roomtype) {
            res.status(400).json({msg: 'No existe una habitación asignada a ese ID', lista: roomtype})
        }

        res.status(201).json({msg: 'Clear', lista: roomtype})
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const roomtypeUpdate = async ( req, res ) => {
    try {
        const roomtype = await Roomtype.findByIdAndUpdate(req.params['roomtypeId'], req.body, {new: true})

        if (!roomtype) {
            res.status(400).json({msg: 'No existe una habitación asignada a ese ID', lista: roomtype})
        } 

        res.status(201).json({msg: 'Clear', lista: roomtype})
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const roomtypeDelete = async ( req, res ) => {
    try {
        const roomtype = await Roomtype.findByIdAndDelete(req.params['roomtypeId'])

        res.status(204).json()
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}
