
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Project.css'
import { BiGitRepoForked, BiLogoReact, BiLogoJavascript, BiSolidFileCss, BiLogoHtml5, BiLogoPostgresql, BiLogoTypescript, BiLogoNodejs } from 'react-icons/bi';
import { SiVite, SiAmazonaws, SiAirbnb, SiElectron} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);
function Project() {
    useEffect(() => {
        gsap.utils.toArray('.project-container').forEach((container) => {
          gsap.set(container, { opacity: 0, y: 100 }); // Initial opacity and y position
          gsap.to(container, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }, []);
      useEffect(() => {
        gsap.utils.toArray('.project-container-left').forEach((container) => {
          gsap.set(container, { opacity: 0, y: 100 }); // Initial opacity and y position
          gsap.to(container, {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          });
        });
      }, []);
  return (
    <>
        <div className="project-container-left">
        <div className="project-info-container">
            <a href="https://booking-calendar-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
 
            <iframe 
                className='project-info'
                  src="https://booking-calendar-ten.vercel.app/"
                  
                  style={{ border: "0" }}
                  allowFullScreen
                />
                </a>
                <div className='project-icons'><BiGitRepoForked id='project-icon'/><BiLogoJavascript id='project-icon'/><BiSolidFileCss id='project-icon'/><BiLogoHtml5 id='project-icon'/><BiLogoReact id='project-icon'/><BiLogoPostgresql id='project-icon'/></div>
            </div>
            <div className="project-title">
            <a id="title-link" href="https://booking-calendar-ten.vercel.app/" target="_blank" rel="noopener noreferrer">Calendar App</a>
                <p id='description'>The Calendar component is a feature-rich calendar application built using React and several supporting libraries. It provides a user-friendly interface for managing events and bookings, with capabilities tailored for both desktop and mobile users.</p>
               

    
            </div>
            
            
        </div>
        <div className="project-container">
            <div className="project-title" id="short-project-description">
            <a id="title-link" href="https://www.caeterra.ca/" target="_blank" rel="noopener noreferrer">Caeterra</a>
                <p id='description'>A landing page for an Ottawa based property managment company. Designed and implemented a simple site which showcases the buisness's services and accomplishements from start to finish.</p>
               
    
            </div>
            <div className="project-info-container" >
            <a id="title-link" href="https://www.caeterra.ca/" target="_blank" rel="noopener noreferrer">

                
                <iframe 
                className='project-info'
                  src="https://www.caeterra.ca/"
                  
                  style={{ border: "0" }}
                  allowFullScreen
                />
                
                </a>
                <div className='project-icons'>

                <BiGitRepoForked id='project-icon'/><BiLogoTypescript id='project-icon'/><BiSolidFileCss id='project-icon'/><BiLogoHtml5 id='project-icon'/><BiLogoReact id='project-icon'/></div>

            </div>
        </div>
        <div className="project-container-left">
        <div className="project-info-container">
            <a href="https://github.com/aboussenane/PipedriveDocGenerator" target="_blank" rel="noopener noreferrer">
 
                <div className="project-info" id='doc-generator' alt="Doc Generator Site Image">
                
                </div>
                </a>
                <div className='project-icons'><BiLogoJavascript id='project-icon'/><BiSolidFileCss id='project-icon'/><BiLogoHtml5 id='project-icon'/><BiLogoNodejs id='project-icon'/></div>
            </div>
            <div className="project-title">
            <a id="title-link" href="https://github.com/aboussenane/PipedriveDocGenerator" target="_blank" rel="noopener noreferrer">Document Generator</a>
                <div className="text-container">
                <p id='description'>Created a nodeJS electron app which accesses data from a CRM app and use it to create folders and autofill documents. Saved hours in collective time by automating simple repetitive tasks.</p>
                
    
    </div> 
            </div>
            
            
        </div>
        <div className="project-container">
            <div className="project-title">
                <a id="title-link" href="https://master.d1rdr4srhzrrq8.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Time Logger</a>
                <p id='description'>I developed a tool during my previous job to assist in monitoring noise levels. This tool was specifically designed to record the precise timing of construction activities. Using React and JavaScript, I created a web application for this purpose. When the "Log" button is clicked, the time, along with a comment, is saved as text. This text can be easily copied using a button located at the bottom of the page. </p> 
            </div>
            <div className="project-info-container">

            <a id="title-link" href="https://master.d1rdr4srhzrrq8.amplifyapp.com/" target="_blank" rel="noopener noreferrer" >

                <div className="project-info" id='time-logger' alt="Time Logger Site Image">
                
                       
                </div>
            </a>
                <div className='project-icons'><BiGitRepoForked id='project-icon'/><BiLogoReact id='project-icon'/><SiVite id='project-icon'/><BiLogoJavascript id='project-icon'/><BiSolidFileCss id='project-icon'/><BiLogoHtml5 id='project-icon'/><SiAmazonaws id='project-icon'/></div>
            </div>
            
        </div>
        
        
       
    </>
  )
}

export default Project