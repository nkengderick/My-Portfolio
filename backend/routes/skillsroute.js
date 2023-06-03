const express = require('express');
const router = express.Router();

const { getSkills, saveSkills, createSkill, updateSkill, deleteSkill } = require('../controllers/skillscontroller')

router.route('/apiskills')
        .get(getSkills)
    /*    .post(saveSkills)     */
        .post(createSkill)
        .patch(updateSkill)
        .delete(deleteSkill)



module.exports = router