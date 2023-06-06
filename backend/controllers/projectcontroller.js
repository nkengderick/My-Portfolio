

const multer = require('multer')
const Project = require('../models/project')
const asyncHandler = require('express-async-handler')
const { get } = require('mongoose')

const Storage = multer.diskStorage({
  destination: './public/images/projects',
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

const upload = multer({
  storage: Storage
}).single('projectimage')

const createnewproject = asyncHandler(async (req, res) => {

  upload(req, res, (err) => {
    if(err){
        console.log(err)
    } else {
        const newproject = new Project({
            title: req.body.title,
            description: req.body.description,
            link: req.body.link,
            image: {
              data:req.file.filename,
              contentType: 'image/png',
            }
        })
      
         newproject
            .save()
            .then(()=>res.send('Successfully uploaded'))
            .catch((err) => console.log(err))
            
            if(newproject){
              res.status(201).json({
                message: 'Project saved'
              })
            }else{
              res.status(400).json({
                message: 'Invalid'
              })
            }
          }
        })
})


  const getAllprojects = asyncHandler(async (req, res) => {
    const allprojects = await Project.find().lean()
    res.json(allprojects)
  })

  const getaproject = asyncHandler(async (req, res) => {
    const project = await Project.findById(req.params.id).lean()
    res.json(project)
  })

  const updateproject = asyncHandler(async (req, res) => {
    const project = await Project.findById(id).lean();
    project.title = req.body.title;
    project.description = req.body.description;

    await project.save();
  })

  const deleteproject = asyncHandler(async (req, res) => {
    const id = req.body
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({message: "Project not found"})
    }else{
      await Project.deleteOne()
      res.json({message: "Project deleted successfully"})
    }  })

  module.exports = { createnewproject, getaproject, getAllprojects, updateproject, deleteproject}