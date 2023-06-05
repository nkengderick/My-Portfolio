const multer = require('multer')
const img = require('../models/img')
const asyncHandler = require('express-async-handler')

const Storage = multer.diskStorage({
    destination: './views/images/projects',
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({
    storage: Storage
  }).single('projectimage')
  
  const postimg = asyncHandler(async (req, res) => {
    
    
    upload(req, res, (err) => {
        if(err){
            console.log(err)
        } else {
            const newimg = new img({
                name: req.body.name,
                image: {
                    data:req.file.filename,
                    contentType: 'image/png',
                }
            })
            newimg
            .save()
            .then(()=>res.send('Successfully uploaded'))
            .catch((err) => console.log(err))
        }
    })
  })
  const getimage = asyncHandler(async (req, res) => {
    const imgs = await img.find().lean()
    res.json(imgs)
  })


  module.exports = {postimg, getimage}