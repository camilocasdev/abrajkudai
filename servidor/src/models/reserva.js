import { Schema, model} from "mongoose";

const reserva = new Schema ({
    usuario: { type: String, require: true},
    fecha: { type: Date },
    hora: { type: String },
    habitacion: [{
        rel: 'Room',
        type: Schema.Types.ObjectId
    }],
    total: { type: Number, require: true },
    estadoPago: { type: String, require: true }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Reserva', reserva);


