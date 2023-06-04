const express = require('express');
const router = express.Router();

const { saveTestimonials, getTestimonials, addTestimonial, updateTestimonial, deleteTestimonial } = require('../controllers/testimonialscontroller')

router.route('/apitestimonials')
            //.post(saveTestimonials)
            .get(getTestimonials)
            .post(addTestimonial)
            .patch(updateTestimonial)
            .delete(deleteTestimonial)
            
module.exports = router