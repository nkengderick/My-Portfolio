const mongoose = require('mongoose')

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    level: {
        type: String,
    },
})


const Skills = mongoose.model('Skills', skillSchema)
 
module.exports = Skills