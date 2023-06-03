const express = require('express');
const router = express.Router();

const { getaboutme, aboutmedata, updateAboutmedata } = require('../controllers/aboutcontroller')


router.route('/apiabout')
    .post(aboutmedata)
    .get(getaboutme)
    .patch(updateAboutmedata)

    
module.exports = router