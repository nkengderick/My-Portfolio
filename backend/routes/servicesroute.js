const express = require('express');
const router = express.Router();

const { getservice, getservices, myservices } = require('../controllers/servicescontroller');


router.route('/apiservices')
  //  .post(myservices)
    .get(getservices)

router.route('/apservice')
        .get(getservice)
    
module.exports = router