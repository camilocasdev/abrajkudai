import Roomtype from '../models/roomtype.js'

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

            res.status(201).json({msg: '¡Tipo de habitación creado exitosamente!', created: newRoomtype})
        }
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const roomtypeList = async ( req, res ) => {
    try {
        const roomtypeList = await Roomtype.find()

        res.status(200).json({msg: '¡Consulta realizada exitosamente!', data: roomtypeList})
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const roomtypeById = async ( req, res ) => {
    try {
        const roomtype = await Roomtype.findById(req.params['roomtypeId'])

        if (!roomtype) {
            res.status(400).json({msg: 'No existe una habitación asignada a ese ID', data: roomtype})
        }

        res.status(200).json({msg: '¡Tipo de habitación consultado exitosamente!', data: roomtype})
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const roomtypeUpdate = async ( req, res ) => {
    try {
        const roomtype = await Roomtype.findByIdAndUpdate(req.params['roomtypeId'], req.body, {new: true})

        if (!roomtype) {
            res.status(400).json({msg: 'No existe una habitación asignada a ese ID', updated: null})
        } 

        res.status(200).json({msg: '¡Tipo de habitación modificado exitosamente!', updated: roomtype})
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

export const roomtypeInfo = async (req, res) => {
    try {
        const roomNumber = req.query['t']

        var type = await Roomtype.find().sort({precio: 1})
        

        if (!roomNumber || roomNumber > (type.length - 1) || roomNumber < 0){ 
            return(
                res.status(200).json({msg: 'Clear', data: type})
            )
        }

        const roomSelected = type[roomNumber]
        
        res.status(200).json({params: roomNumber, roomServer: roomSelected})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: 'error', msg: 'Error inesperado...'})
    }
}