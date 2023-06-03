const Skills = require('../models/skill')

const asyncHandler = require('express-async-handler')

const getSkills = asyncHandler(async (req, res) => {
    const skills = await Skills.find().lean()
    if(!skills){
        return res.status(400).json({message: "No skills available"})
    }
    res.json(skills)
})

const saveSkills = asyncHandler(async (req, res) => {
    const skills = [
      {
        name: "React",
        level: "Intermediate",
      },
      {
        name: "Express",
        level: "Advanced",
      },
      {
        name: "Java/OOP",
        level: "Advanced",
      },
      {
        name: "c/c++",
        level: "Intermediate",
      },
      {
        name: "MySQL",
        level: "Advanced",
      },
      {
        name: "MongoDb",
        level: "Beginner",
      },
    ];

    for (const skill of skills) {
      await Skills.create(skill)
    }

    res.json({message: "Skills saved successfully"})
})



const createSkill = asyncHandler(async (req, res) => {
    const skill = new Skills({
      name: req.body.name,
      level: req.body.level,
    });

    await Skills.create(skill)

    res.json({message: "Skill created successfully"})
})

const updateSkill = asyncHandler(async (req, res) => {
  const id = req.body.id
    const skill = await Skills.findById(id);

    if (!skill) {
      return res.status(404).json({message: "Skill not found"})
    }

    skill.name = req.body.name
    skill.level = req.body.level

    await Skills.updateOne(skill)

    res.json({message: "Skill updated successfully"})
})

const deleteSkill = asyncHandler(async (req, res) => {
    const skill = await Skills.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({message: "Skill not found"})
    }else{
      await Skills.deleteOne()
      res.json({message: "Skill deleted successfully"})
    }
})


module.exports = { getSkills, saveSkills, createSkill, updateSkill, deleteSkill }