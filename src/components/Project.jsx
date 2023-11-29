
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/Project.css'
import { BiGitRepoForked, BiLogoReact, BiLogoJavascript, BiSolidFileCss, BiLogoHtml5 } from 'react-icons/bi';
import { SiVite, SiAmazonaws} from 'react-icons/si';

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
        
        <div className="project-container">
            <div className="project-title">
                <a id="title-link" href="https://master.d1rdr4srhzrrq8.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Time Logger</a>
                <p id='description'>I developed a tool during my previous job to assist in monitoring noise levels. This tool was specifically designed to record the precise timing of construction activities. Using React and JavaScript, I created a web application for this purpose. When the "Log" button is clicked, the time, along with a comment, is saved as text. This text can be easily copied using a button located at the bottom of the page. Additionally, I intend to enhance this tool by incorporating an email feature in the future. </p> 
            </div>
            <div className="project-info-container">

            <a id="title-link" href="https://master.d1rdr4srhzrrq8.amplifyapp.com/" target="_blank" rel="noopener noreferrer" >

                <div className="project-info" id='time-logger' alt="Time Logger Site Image">
                
                       
                </div>
            </a>
                <div className='project-icons'><BiGitRepoForked id='project-icon'/><BiLogoReact id='project-icon'/><SiVite id='project-icon'/><BiLogoJavascript id='project-icon'/><BiSolidFileCss id='project-icon'/><BiLogoHtml5 id='project-icon'/><SiAmazonaws id='project-icon'/></div>
            </div>
            
        </div>
        <div className="project-container-left">
        <div className="project-info-container">
            <a href="https://master.d3hlpirztw4tl7.amplifyapp.com/" target="_blank" rel="noopener noreferrer">
 
                <div className="project-info" id='chord-generator' alt="Chord Generator Site Image">
                
                </div>
                </a>
                <div className='project-icons'><BiGitRepoForked id='project-icon'/><BiLogoJavascript id='project-icon'/><BiSolidFileCss id='project-icon'/><BiLogoHtml5 id='project-icon'/><SiAmazonaws id='project-icon'/></div>
            </div>
            <div className="project-title">
            <a id="title-link" href="https://master.d3hlpirztw4tl7.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Chord Generator</a>
                <p id='description'>This project involved designing a slot machine that produces musical chords based on user-selected keys. Initially, it posed a challenge due to the complexity of chords and musical keys. Merely generating four chords was not sufficient, as each chord may exhibit a distinct "character" contingent on the key it is played in, such as D major versus D minor. Looking ahead, my plan for this project includes integrating sound functionality to play each progression once it's generated.</p>
            </div>
            
            
        </div>
        <div className="project-container">
            <div className="project-title" id="short-project-description">
            <a id="title-link" href="https://master.d2z9qwr84qki6r.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Vocal Sampler</a>
                <p id='description'>This project was a rapid creation aimed at crafting the frontend interface for a potential virtual instrument.</p>
            </div>
            <div className="project-info-container">
            <a id="title-link" href="https://master.d2z9qwr84qki6r.amplifyapp.com/" target="_blank" rel="noopener noreferrer">

                <div className="project-info" id='vocal-sampler' alt="Vocal Sampler Site Image">
                
                </div>
                </a>
                <div className='project-icons'>

                <BiLogoJavascript id='project-icon'/><BiSolidFileCss id='project-icon'/><BiLogoHtml5 id='project-icon'/><SiAmazonaws id='project-icon'/></div>

            </div>
        </div>
       
    </>
  )
}

export default Project