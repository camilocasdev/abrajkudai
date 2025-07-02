import { Schema, model } from "mongoose";
var roleSchema = new Schema({
  nombre: String
}, {
  versionKey: false
});
export default model('Role', roleSchema);