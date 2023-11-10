import React, {useState} from 'react';
import '../styles/Skills.css'

const EmptyContentSkill = ({ title, content, logo }) => {
    const [isActive, setIsActive] = useState(false);
  
    return (
      <div className="empty-skills-box">
        <div className="accordion-title" >
          <span className="icon">{logo}</span>
          <h5 className="h5">{title}</h5>
          
        </div>
        
      </div>
    );
  };

export default EmptyContentSkill
