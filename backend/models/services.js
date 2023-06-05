const mongoose = require("mongoose");

const servicesSchema = new mongoose.Schema({
    offer: {
        type: String,
    },
    details: {
        type: String,
    },
})

const services = mongoose.model('services', servicesSchema)
module.exports = services