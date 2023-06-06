const userRequest = require('../models/userRequest')
const nodemailer = require("nodemailer")

const asyncHandler = require('express-async-handler')

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "nkengportfolio@gmail.com",
        pass: "lfxtryqkxpayjrjz",
    }
})
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

        const autoreplymail = {
            from: "nkengportfolio@gmail.com",
            to: email,
            subject: "Message from Nkengbeza",
            text: "Thanks for contacting Nkengbeza. Recieved your request and will attend to you shortly. Meanwhile, i offer...."
        }
        const newrequestnotification = {
            from: "nkengportfolio@gmail.com",
            to: "nkengbderick@gmail.com",
            subject: `Portfolio request message from [${name}]`,
            text: message,
        }
        transporter.sendMail(autoreplymail, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Email sent: ' + info.response)
            }
        })
        transporter.sendMail(newrequestnotification, function(error, info){
            if(error){
                console.log(error);
            }else{
                console.log('Email sent: ' + info.response)
            }
        })
})

module.exports = { createNewUserRequest, getAllUserRequest }
