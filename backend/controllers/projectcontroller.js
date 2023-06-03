const Project = require('../models/project')
const asyncHandler = require('express-async-handler')


const createnewproject = asyncHandler(async (req, res) => {
    const {title, description, link} = req.body
    
    if (!title || !description || !link){
        return res.status(400).json({message: 'imcomplete project'})
    }
    
        //create and store request
        const newProjectObject = { title, description, link }
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
    project.title = "";
    project.description = "";

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