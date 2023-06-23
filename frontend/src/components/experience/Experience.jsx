import React, { useEffect, useState} from "react";
import './experience.css'
import axios from 'axios'

const Experience = () => {

  const [skills, setSkills] = useState([])

  useEffect(() => {
    axios.get('https://nkeng-portfolio.onrender.com/api/skills')
    .then((response) => {
      setSkills(response.data)
    })
  }, [])

  return (
    <div className="Experience" id="experience">
      <h1>Professional Experience</h1>
      <h3>My Skills</h3>
      <p>I have a mastery of the following programming languages and frameworks</p>
      <div className="skills">
          {skills.map((skill) => (
          <ul key={skill.id} className="skill">
            <li className="list">
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </li>
          </ul>
      ))}
      </div> 
    </div>
  );
}

export default Experience
