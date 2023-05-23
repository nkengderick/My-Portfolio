const mongoose = require("mongoose");

const userRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

const userRequest = mongoose.model('userRequest', userRequestSchema)
module.exports = userRequest