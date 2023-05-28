

const Resume = require('../models/Resume')
const asyncHandler = require('express-async-handler')


  const getResume = asyncHandler(async (req, res) => {
    const newresume = new Resume({
      name: 'Nkengbeza Derick',
      email: 'nkengbderick@gmail.com',
      phone: '+237 681-390-155',
      skills: ['Java', 'MERN', 'Design'],
      experience: [{
        company: 'companyltd',
        position: 'Software Engineer',
        start_date: '2018-01-01',
        end_date: '2022-01-01'
      }],
      education: [{
        school: 'University of Buea',
        degree: 'Bachelor in Computer Engineering',
        start_date: '2021-09-01',
        end_date: '2025-06-01'
      }]
    });
    
  await resume.save();

    const resume = await Resume.findOne();

    if (!resume) {
      res.status(404).send('Resume not found.');
      return;
    }

    res.download(resume, 'cv.json');
  }
)
module.exports = {getResume};