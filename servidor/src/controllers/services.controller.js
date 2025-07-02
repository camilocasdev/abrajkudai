import Services from '../models/services.js'

export const serviceCreate = async ( req, res ) => {
    try {
        const { name, description, price, pricing_type, status, roomtype_fe } = req.body 

        const checkService = await Services.findOne({name: name})

        if ( checkService != null){
            res.status(400).json({msg: 'El servicio ya existe'})
        } else {
            const newService = await new Services({
                name: name,
                description: description,
                price: price,
                pricing_type: pricing_type,
                status: status,
                roomtype_fe: roomtype_fe
            }).save()

            res.status(201).json({msg: '¡Servicio de habitación creado exitosamente!', created: newService})
        }
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const servicesList = async ( req, res ) => {
    try {
        const servicesList = await Services.find()

        res.status(200).json({msg: '¡Consulta realizada exitosamente!', data: servicesList})
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const serviceById = async ( req, res ) => {
    try {
        const service = await Services.findById(req.params['serviceId'])

        if (!service) {
            res.status(400).json({msg: 'No existe una habitación asignada a ese ID', servicio: service})
        }

        res.status(200).json({msg: '¡Servicio de habitación consultado exitosamente!', data: service})
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const serviceUpdate = async ( req, res ) => {
    try {
        const service = await Services.findByIdAndUpdate(req.params['serviceId'], req.body, {new: true})

        if (!service) {
            res.status(400).json({msg: 'No existe una habitación asignada a ese ID', servicio: service})
        } 

        res.status(200).json({msg: '¡Servicio de habitación modificado exitosamente!', updated: service})
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const serviceDelete = async ( req, res ) => {
    try {
        const service = await Services.findByIdAndDelete(req.params['serviceId'])

        res.status(204).json()
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}
