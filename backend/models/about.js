const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    specialty: {
        type: String,
    },
    description: {
        type: String,
    },
    experience: {
        type: String,
    },
    project: {
        type: String,
    },
    skill: {
        type: String,
    },
    image: {
        type: Buffer,
    },
})

const about = mongoose.model('about', aboutSchema)
module.exports = about