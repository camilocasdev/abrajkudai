import { Schema, model } from 'mongoose'

const serviceSchema = new Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    precio: {
        type: Number
    }
})

export default model ('Services', serviceSchema)