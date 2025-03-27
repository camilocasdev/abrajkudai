import { Schema, model} from "mongoose";

const reserva = new Schema ({
    usuario: {
        rel: 'Usuario',
        type: Schema.Types.ObjectId,
    },
    fechaInicio: { type: Date },
    fechaHasta: { type: String },
    habitacion: {
        rel: 'Room',
        type: Schema.Types.ObjectId
    },
    total: { type: Number, require: true },
    estado: { 
        type: String, 
        require: true,
        enum: ['Pendiente', 'Cancelado', 'Pagado']
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model('Reserva', reserva);


