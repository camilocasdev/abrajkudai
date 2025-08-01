import { Schema, model } from 'mongoose'

const serviceSchema = new Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    pricing_type:{
        type: String,
        Enum: ['per_person', 'per_days', 'per_reservation']
    }, 
    status: {
        type: String,
        enum: ["avaible", "overtaken", "unavaible"]
    },
    roomtype_fe: [{ // fe = foranean entity
        ref: "Roomtype",
        type: Schema.Types.ObjectId
    }],
    schedule: {
        type: Date,
    }
})

export default model ('Services', serviceSchema)