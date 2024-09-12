import React from 'react'

const SkillList = ({skills,deleteSkill}) => {
  return (
    <div>
    <ul id='skill-list'>
      {skills.map((skill, index) => (
        <li
          key={index}
          id={`skill-number-${index}`}
          onClick={() => {
            console.log(`Deleting skill: ${skill}`); // Debugging purpose
            deleteSkill(skill); // Correctly call the delete function with skill
          }}
        >
          {skill}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default SkillList