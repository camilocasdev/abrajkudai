import { Schema, model } from 'mongoose';

const roomType = new Schema({
    nombre: String,
    precio: Number,
    capacidad: Number,
    descripcion: String
},{
    timestamps: false,
    versionkey: false
})

export default model('Roomtype', roomType)