import { Schema, model } from 'mongoose';

const roomSchema = new Schema({
    numero : {
        type: String,
        unique: true,
        required: true
    },
    estado: {
        type: String,
        enum: [ 'Disponible', 'Ocupado', 'Mantenimiento', 'Limpieza', 'Reservado', 'Pendiente' ],
        default: 'Disponible'
    },
    roomid: {
        rel: 'Roomtype',
        type: Schema.Types.ObjectId,
        required: true
    },
},{
    timestamps: true,
    versionkey: false
})

//NO OLVIDAR EL POPULATE PARA TRAER LOS DATOS RELACIONADOS DE OTROS MODELOS

export default model('Room', roomSchema)