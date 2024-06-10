import React from 'react';
import Skill from '../components/Skill';
import EmptyContentSkill from '../components/EmptyContentSkill';
import '../styles/Internships.css'
import { BiLogoFigma, BiGitRepoForked,BiCog, BiLogoReact, BiLogoJavascript, BiSolidFileCss, BiLogoPython, BiLogoHtml5, BiLogoNodejs } from 'react-icons/bi';
import { SiVite, SiPowershell, SiAmazonaws, SiElectron} from 'react-icons/si';
import {BsFileWordFill} from 'react-icons/bs';

function Internships ()
{
  const accordionData = [
    

  ];
  function toggleAccordion(button) {
    const item = button.closest('.Accordion-item');
    item.classList.toggle('expanded');
}
function toggleAccordionImage(button) {
  const item = button.closest('.Accordion-image-container');
  item.classList.toggle('expanded');
}
  return (
    <>
    
        <section className="Internships-section" id='Internships'>
          <div className="Internships-title">
          <h2>Internships</h2>
          <h3>A list of some internships I've been part of.</h3>
          </div>
          <div className="container">
              <div className="Accordion">
                
                <div className="Accordion-item">
                <div className="Accordion-title" onClick={(e) => toggleAccordion(e.target)}>Kiuloper - Web developer Intern</div>
                <div className="Accordion-text">
                  <p className='tech-text'><em>PHP, MySQL, Javascript, HTML, CSS, JQuery</em></p>
                  <p>Implemented business critical features to an existing PHP application. Solved complex problems in an Agile development environment. Solved invoicing database issues when handling orders with multiple vendors, Created Sign Up and Login popups and pages for the application. Followed Figma design closely and exceeded expectations by completing work promptly. Generated html content dynamically.</p>
                </div>
                <div className='Accordion-image-container' >
                <img className='Accordion-image' src="../public/inwitFeedback.png" alt="Kiuloper Feedback" />
                </div>
                </div>
                
                <div className="Accordion-item">
                <div className="Accordion-title" onClick={(e) => toggleAccordion(e.target)}>Cascadia Carbon - Frontend developer Intern</div>
                <div className="Accordion-text">
                  <p className='tech-text'><em>ChakraUI, Javascript, React, Firebase</em></p>
                  <p>Worked as part of a team to implement re-design of React, Next-Js website. Optimized web pages to reduce load time by 40%. Refactored site to facilitate future content updates. Added content and components as needed.</p>
                </div>
                <div className='Accordion-image-container' >
                
                <iframe 
                className='Accordion-weblink'
                  src="https://carboncodex.app/"
                  
                  style={{ border: "0" }}
                  allowFullScreen
                />
                </div>
                </div>
                <div className="Accordion-item">
                <div className="Accordion-title" onClick={(e) => toggleAccordion(e.target)}>Ubineer - NLP/Regex developer Intern</div>
                <div className="Accordion-text">
                  <p className='tech-text'><em>Python, Regex</em></p>
                  <p>Created regex patterns to efficiently capture past and future natural language data. Utilized clean code principles which resulted in robust patterns which were utilized in production and LLM training. Took on a leadership role in which I held weekly team meetings to help train new interns.</p>
                </div>
                <div className='Accordion-image-container' >
                <img className='Accordion-image' src="../public/ubineerFeedback.png" alt="Kiuloper Feedback" />
                </div>
                </div>

                <div className="Accordion-item">
                <div className="Accordion-title" onClick={(e) => toggleAccordion(e.target)}>MusicalMoon - React Native Intern</div>
                <div className="Accordion-text">
                  <p className='tech-text'><em>Javascript, CSS, React-Native, HTML</em></p>
                  <p>Designed and implemented a comprehensive navigation system for a dynamic mobile application, featuring intuitive top, bottom, and side navbars to enhance user experience and accessibility. Developed the application's 'skeleton', establishing a robust framework and a user-friendly music player, thereby laying the groundwork for scalable features and seamless user interaction. </p>
                </div>
                <div className='Accordion-image-container' >
                
                </div>
                </div>

              </div>
          </div>
          
      
          
          
    
        
          
        </section>
    </>
  )
}

export default Internships