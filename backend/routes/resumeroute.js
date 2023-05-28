
const express = require('express');
const router = express.Router();
const {getResume} = require('../controllers/resumecontroller')


//controller

//middleware

router.get('/downloadcv', getResume)

module.exports = router
