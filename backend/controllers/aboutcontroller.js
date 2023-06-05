const About = require('../models/about')
const fs = require('fs')
const path = require('path')

const asyncHandler = require('express-async-handler')

const imgpath = path.join(__dirname, '..', 'views/images', 'MER.jpg')

const getaboutme = asyncHandler(async (req, res) => {
    const about = await About.findOne()

    res.json(about)
})

const aboutmedata = asyncHandler(async (req, res) => {
    const about = new About({
        name: 'Nkengbeza Derick',
        specialty: 'Software and Full stack developer',
        description: 'I am a software Engineering second year student in FET. I have passion for developing bueatiful and intuitive user interfaces and good databases as a full stack MERN developer. I also develope desktop applications using OOP languages like JAVA and i have enough experience in software development. I have a good Mastery of database design and leverage these skill in development. I love learning new things to keep up to latest trends and technologies in the Tech industries',
        project: 'Completed 4',
        experience: '2 years +',
        skill: 'Advanced',
    })

    try {
        await about.save();
        res.status(200).json({ message: 'about saved successfully!' });
      } catch (err) {
        res.status(500).json({ error: err });
      }
})

const updateAboutmedata = asyncHandler(async (req, res) => {
    const aboutid = "6475ab938b5f11b381e94305"
    const about = await About.findById(aboutid)

    if (!about){
        res.status(404)
            .json({
                message: 'Not found'
            })
            return
    }
    
        about.name = 'Nkengbeza Derick'
        about.specialty = 'Software and Full stack developer'
        about.description = 'I am a software Engineering second year student in FET. I have passion for developing bueatiful and intuitive user interfaces and good databases as a full stack MERN developer. I also develope desktop applications using OOP languages like JAVA and i have enough experience in software development. I have a good Mastery of database design and leverage these skill in development. I love learning new things to keep up to latest trends and technologies in the Tech industries',
        about.project = 'Completed 4'
        about.experience = '2 years +'
        about.skill = 'Advanced'
        about.image = fs.readFileSync(imgpath)


    try {
        await about.save();
        res.status(200).json({ message: 'about saved successfully!' });
      } catch (err) {
        res.status(500).json({ error: err });
      }
})


module.exports = { getaboutme, aboutmedata, updateAboutmedata }