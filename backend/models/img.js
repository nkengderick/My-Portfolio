const mongoose = require("mongoose")

const imgSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        data:Buffer,
        contentType: String,
    },
})

const img = mongoose.model('img', imgSchema)

module.exports = img