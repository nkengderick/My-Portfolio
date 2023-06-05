const Services = require('../models/services')

const asyncHandler = require('express-async-handler')

const getservice = asyncHandler(async (req, res) => {
  const id = req.body.id  
  const service = await Services.findById(id)
    res.json(service)
})
const getservices = asyncHandler(async (req, res) => {
    const service = await Services.find().lean()
    res.json(service)
})

const myservices = asyncHandler(async (req, res) => {
    
    const services = [
        {
          offer: "Frontend Developement",
          details: "I specialize on creating modern user interfaces using css, bootstrap, react. With my experience i can create you responsive user friendly websites to enhance your brand",
        },
        {
          offer: "Backend Development",
          details: "As a full stack developer, i have extensive experience in backend using nodejs, Express, c++ and java. i can buid you a reliable and scalable system whether you need a third party to integrate i am experienced in working with APIs.",
        },
        {
          offer: "Full Stack (MERN)",
          details: "MERN stack is my favorite technoloy to work with. It is powerful and with my experties in MERN i can build you awesome full fledge applications from scratch or add features to your exiting one",
        },
        {
            offer: " Mobile App Development",
            details: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores esse recusandae illum accusamus voluptatum magnam repellendus ducimus, id consequuntur tenetur voluptas optio exercitationem suscipit fugit dolorem at. Distinctio, saepe nobis!"
        },
        {
            offer: "Desktop App Development",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed distinctio voluptates quisquam perferendis consectetur aspernatur, fugiat mollitia minus vitae sit quod deserunt ex sapiente blanditiis ipsa eveniet suscipit! Deleniti!"
        },
        {
            offer: "UI/UX Design",
            details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis sed distinctio voluptates quisquam perferendis consectetur aspernatur, fugiat mollitia minus vitae sit quod deserunt ex sapiente blanditiis ipsa eveniet suscipit! Deleniti!"
        },
      ];
  
      for (const service of services) {

          try {
              await Services.create(service)
              res.status(200).json({ message: 'service saved successfully!' });
            } catch (err) {
                res.status(500).json({ error: err });
            }
        }
})



module.exports = { getservice, getservices, myservices }