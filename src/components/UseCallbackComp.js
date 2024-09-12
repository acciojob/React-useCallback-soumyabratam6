import React, { useCallback, useState } from 'react'
import SkillList from './SkillList';
const UseCallbackComp = () => {
    const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
    const [skill, setSkill] = useState('');
  
    const addSkill = useCallback(() => {
      if (skill.trim() && !skills.includes(skill)) {
        setSkills((prevSkills) => [...prevSkills, skill]);
        setSkill(''); // Clear input field after adding
      }
    }, [skill, skills]);
  
    const deleteSkill = useCallback(
      (skillToDelete) => {
        setSkills((prevSkills) => prevSkills.filter((s) => s !== skillToDelete));
      },
      [skills]
    );
  
    return (
      <div>
        <h1 id="heading">Skills Management</h1>
        <input
          type="text"
          id="skill-input"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
          placeholder="Enter a skill"
        />
        <button id="skill-add-btn" onClick={addSkill}>
          Add Skill
        </button>
        <SkillList skills={skills} deleteSkill={deleteSkill} />
      </div>
    );
  };
export default UseCallbackComp