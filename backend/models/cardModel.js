const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cardSchema = new Schema({
    balance: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    valid: {
        type: Date,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("card", cardSchema)