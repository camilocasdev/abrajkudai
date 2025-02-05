import { Schema, model} from "mongoose";

const reserva = new Schema ({
    usuario: { type: String, require: true},
    fecha: { type: Date },
    hora: { type: String },
    habitacion: [{
        rel: 'Room',
        type: Schema.Types.ObjectId
    }],
    precio: { type: Number, require: true },
    estado: { type: String, require: true }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Reserva', reserva);


