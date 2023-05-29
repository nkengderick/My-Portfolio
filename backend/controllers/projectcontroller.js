const Project = require('../models/project')
const asyncHandler = require('express-async-handler')
const path = require('path')

const mern = path.join(__dirname, 'views/images', 'MER.jpg')

const createnewproject = asyncHandler(async (req, res) => {
    const {name, description, image} = req.body
    
    if (!name || !description || !image){
        return res.status(400).json({message: 'imcomplete project'})
    }
    
        //create and store request
        const newProjectObject = { name, description, image }
        const newProject = await Project.create(newProjectObject)
    
        //create
        if(newProject){
            res.status(201).json({
                message: 'Project saved'
            })
        }else{
            res.status(400).json({
                message: 'Invalid'
            })
        }
    /*
    const newproject = new Project({
        name: "MERN Project",
        description: "This is my first mern project.",
        image: '../views/images/MER.jpg',
      })

      await newproject.save()
        */
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
    project.name = "";
    project.description = "";
    project.image = '';

    await project.save();
  })

  const deleteproject = asyncHandler(async (req, res) => {
    const project = await Project.findById(1);
    await project.remove();
  })

  module.exports = { createnewproject, getaproject, getAllprojects, updateproject, deleteproject}