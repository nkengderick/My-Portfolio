const Testimonials = require('../models/testimonials')

const asyncHandler = require('express-async-handler')




const saveTestimonials = asyncHandler(async (req, res) => {
    const testimonials = [
      {
        testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corrupti",
        client: "Client1",
      },
      {
        testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corrupti",
        client: "Client2",
      },
      {
        testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corrupti",
        client: "Client3",
      },
      {
        testimonial: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, corrupti",
        client: "Client4",
      },
    ];

    for (const testimonial of testimonials) {
      await Testimonials.create(testimonial)
    }

    res.json({message: "Testimonials saved successfully"})
})

const getTestimonials = asyncHandler(async (req, res) => {
    const testimonials = await Testimonials.find().lean()
    if(!testimonials){
        return res.status(400).json({message: "NULL"})
    }
    res.json(testimonials)
})

const addTestimonial = asyncHandler(async (req, res) => {
    const testimonial = new Testimonials({
      testimonial: req.body.testimonial,
      client: req.body.client,
    });

    await Testimonials.create(testimonial)

    res.json({message: "Testimonial added successfully"})
})


const updateTestimonial = asyncHandler(async (req, res) => {
    const id = req.body.id
      const testimonial = await Testimonials.findById(id);
  
      if (!testimonial) {
        return res.status(404).json({message: "Testimonial not found"})
      }
  
      testimonial.testimonial = req.body.testimonial
      testimonial.client = req.body.client
  
      await Testimonials.updateOne(testimonial)
  
      res.json({message: "Testimonial updated successfully"})
  })
  
  const deleteTestimonial = asyncHandler(async (req, res) => {
    const id = req.body.id  
    const testimonial = await Testimonials.findById(id);
  
      if (!testimonial) {
        return res.status(404).json({message: "Testimonial not found"})
      }else{
        await Testimonials.deleteOne()
        res.json({message: "Testimonial deleted successfully"})
      }
  })


  module.exports = {
    saveTestimonials,
    getTestimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial
  }