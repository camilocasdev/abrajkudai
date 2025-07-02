import { Schema, model } from 'mongoose';
var roomType = new Schema({
  nombre: {
    type: String,
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
  scriptLong: {
    type: String
  },
  scriptShort: {
    type: String
  },
  imagen: [{
    type: String
  }]
}, {
  timestamps: false,
  versionkey: false
});
export default model('Roomtype', roomType);