

const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
    },
    image: {
        data:Buffer,
        contentType: String,
    },
})

const project = mongoose.model('project', projectSchema)
module.exports = project