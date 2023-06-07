const express = require('express');
const router = express.Router();

const { createnewproject, getaproject, getAllprojects, updateproject, deleteproject} = require('../controllers/projectcontroller')

router.route('/api/project')
    .get(getAllprojects)
    .get(getaproject)
    .post(createnewproject)
    .delete(deleteproject)
    .patch(updateproject)

module.exports = router