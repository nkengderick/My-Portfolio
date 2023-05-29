const mongoose = require("mongoose")

const projectSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
})

const project = mongoose.model('project', projectSchema)
module.exports = project