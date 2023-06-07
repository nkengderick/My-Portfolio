const express = require('express');
const router = express.Router();

const { getaboutme, aboutmedata, updateAboutmedata } = require('../controllers/aboutcontroller')


router.route('/api/about')
    .post(aboutmedata)
    .get(getaboutme)
    .patch(updateAboutmedata)

    
module.exports = router