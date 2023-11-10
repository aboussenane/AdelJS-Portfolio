import React, {useState} from 'react';
import '../styles/Skills.css'

const Skill = ({ title, content, logo }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className="skills-box">
        <div className="accordion-title" >
          <span className="icon">{logo}</span>
          <h5 className="h5">{title}</h5>
          
        </div>
        {<p className="skills-content">{content}</p>}
      </div>
    );
  };

export default Skill
