import Role from '../models/role.js'

export const roleCreate = async ( req, res ) => {
    console.log('Entro a la creación')
    try {
        const { nombre } = req.body

        const newRole = await new Role({
            nombre: nombre
        }).save()

        res.status(201).json({msg: 'Clear', role: newRole})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: 'Error del servidor'})
    }
}

export const roleList = async ( req, res ) => {
    try {

        const roleList = await Role.find()

        res.status(200).json({msg: 'Clear', role: roleList})
    } catch (error) {
        res.status(500).json({msg: 'Error del servidor'})
    }
}

export const roleById = async ( req, res ) => {
    try {
        
        const role = await Role.findById(req.params['roleId'])

        res.status(200).json({msg: 'Clear', role: role})
    } catch (error) {
        res.status(500).json({msg: 'Error del servidor'})
    }
}

export const roleUpdate = async ( req, res ) => {
    try {
        
        const role = await Role.findByIdAndUpdate(req.params['roleId'], req.body, {new: true})

        res.status(200).json({msg: 'Clear', role: role})
    } catch (error) {
        res.status(500).json({msg: 'Error del servidor'})
    }
}

export const roleDelete = async ( req, res ) => {
    try {
        
        const role = await Role.findByIdAndDelete(req.params['roleId'])

        res.status(204).json({msg: 'Clear', role: role})
    } catch (error) {
        res.status(500).json({msg: 'Error del servidor'})
    }
}

