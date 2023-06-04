const mongoose = require("mongoose")

const testimonialSchema = new mongoose.Schema({
    testimonial: {
        type: String,
    },
    client: {
        type: String,
    },
})

const testimonial = mongoose.model('testimonials', testimonialSchema)

module.exports = testimonial