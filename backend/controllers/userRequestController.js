const userRequest = require('../models/userRequest')

const asyncHandler = require('express-async-handler')

//get request
const getAllUserRequest = asyncHandler(async (req, res) => {
    const requests = await userRequest.find().lean()
    if(!requests){
        return res.status(400).json({message: "No request or messages yet"})
    }
    res.json(requests)
})

//create a userrequest
const createNewUserRequest = asyncHandler(async (req, res) => {
    const { 
        name, 
        email, 
        message
    } = req.body
    //check form
    if (!name || !email || !message){
        return res.status(400).json({message: 'Fill in the form'})
    }

    //create and store request
    const userRequestObject = { name, email, message }
    const newrequest = await userRequest.create(userRequestObject)

    //create
    if(newrequest){
        res.status(201).json({
            message: 'Message recieved'
        })
    }else{
        res.status(400).json({
            message: 'Invalid'
        })
    }

})

module.exports = { createNewUserRequest, getAllUserRequest }