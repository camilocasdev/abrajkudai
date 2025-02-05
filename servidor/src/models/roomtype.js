import { Schema, model } from 'mongoose';

const roomType = new Schema({
    nombre:{
        type:String,
        unique: true,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String
    }
},{
    timestamps: false,
    versionkey: false
})

export default model('Roomtype', roomType)