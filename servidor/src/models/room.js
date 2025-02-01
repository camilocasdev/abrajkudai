import { Schema, model } from 'mongoose';

const roomSchema = new Schema({
    codigo : {type: String},
    tipo: {type: String},
    capacidad: {type: Number},
    precio: {type: Number},
    estado: {type: String}
},{
    timestamp: true,
    versionkey: false
})

export default model('Room', roomSchema)