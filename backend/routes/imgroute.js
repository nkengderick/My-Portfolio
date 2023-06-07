const express = require('express');
const router = express.Router();

const {postimg, getimage} = require('../controllers/imgcontroller')

router.route('/api/img')
    .post(postimg)
    .get(getimage)


module.exports = router