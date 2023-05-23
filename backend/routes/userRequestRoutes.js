const express = require('express');
const router = express.Router();
const { createNewUserRequest, getAllUserRequest } = require('../controllers/userRequestController')


router.route('/user')
    .get(getAllUserRequest)
    .post(createNewUserRequest)

module.exports = router
