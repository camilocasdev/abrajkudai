import { model, Schema } from 'mongoose';
var facturaSchema = new Schema({
  user_name: {
    type: String
  },
  booking_id: {
    rel: 'Usuarios',
    type: Schema.Types.ObjectId
  },
  room_number: {
    type: String
  },
  roomtype_name: {
    type: String
  },
  servicios: [{
    rel: 'Services',
    type: Schema.Types.ObjectId
  }],
  from_date: {
    type: Date
  },
  to_date: {
    type: Date
  },
  total: {
    type: Number
  }
}, {
  timestamp: true
});
export default model('Factura', facturaSchema);