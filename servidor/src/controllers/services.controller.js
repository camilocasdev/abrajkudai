import Services from '../models/services'

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

            res.status(200).json({msg: 'Clear', created: newService})
        }
    } catch (error) {
        res.status(500).json({msg: 'Error inesperado'})
    }
}

export const servicesList = async ( req, res ) => {
    try {
        const servicesList = await Services.find()

        res.status(201).json({msg: 'Clear', lista: servicesList})
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

        res.status(201).json({msg: 'Clear', servicio: service})
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

        res.status(201).json({msg: 'Clear', actualizado: service})
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
