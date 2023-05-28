

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  linkedin: {
    type: String,
    required: true,
  },
  education: [
    {
      school: {
        type: String,
      },
      degree: {
        type: String,
      },
      start_date: {
        type: Date,
      },
      end_date: {
        type: Date,
      },
    },
  ],
  experience: [
    {
      company: {
        type: String,
      },
      position: {
        type: String,
      },
      start_date: {
        type: Date,
      },
      end_date: {
        type: Date,
      },
    },
  ],
  skills: [
    {
      skill: {
        type: Array,
      },
    },
  ],
});



const Resume = mongoose.model("Resume", ResumeSchema);

module.exports = Resume;
