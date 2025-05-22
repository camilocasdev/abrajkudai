import {model, Schema} from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema = new Schema ({
    nombre:{
        type:String
    },
    apellido:{
        type:String
    },
    pais:{
        type:String
    },
    identificacion:{
        type:String,
        unique:true
    },
    contrasena:{
        type:String,
    },
    correo:{
        type:String,
        unique:true
    },
    telefono: {
        type:Number
    },
    role: [{
        ref: "Role",
        type: Schema.Types.ObjectId
    }],
    codigo: {
        type: Number,
        default: null
    }
},{
    timestamps: true,
    versionKey: false
}
)

usuarioSchema.statics.encryptPassword = async (contrasena) => {
    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_DEVELOPMENT));
    return await bcrypt.hash(contrasena, salt);
}

usuarioSchema.statics.comparePassword = async (contrasenaIng, contrasenaGuard) => {
    return await bcrypt.compare(contrasenaIng, contrasenaGuard);
}


export default model('Usuario', usuarioSchema);