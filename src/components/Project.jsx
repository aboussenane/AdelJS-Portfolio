import React from 'react';
import '../styles/Project.css'
import { BiGitRepoForked, BiLogoReact, BiLogoJavascript, BiSolidFileCss, BiLogoHtml5 } from 'react-icons/bi';
import { SiVite, SiAmazonaws} from 'react-icons/si';


function Project() {
  

  return (
    <>
        
        <div className="project-container">
            <div className="project-title">
                <a id="title-link" href="https://master.d1rdr4srhzrrq8.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Time Logger</a>
                <p id='description'>A tool I created to help me keep conduct noise monitoring at my previous position. I needed to note the exact time that construction activities occured so I created this web app using React and Javascript. When the "Log" button is pressed, the time is saved as text along with a comment. The text can then be conveniently copied via a button at the bottom of the page. In the future i'm planning to implement an email feature. </p> 
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
                <p id='description'>This was a project where I created a slot machine that generates musical chords. The user selects a key then generates chords based on that. This was a bit complex to figure out at first due to the nature of chords and musical keys, simply generating four chords woldn't do as the each chord may have a different "character" depending on the key it is being played in e.g. D major vs. D min. My future intentions for this project is to add sound so as to play each progression once it's generated.</p>
            </div>
            
            
        </div>
        <div className="project-container">
            <div className="project-title">
            <a id="title-link" href="https://master.d2z9qwr84qki6r.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Vocal Sampler</a>
                <p id='description'>This was a quick project I put together. I wanted to mock up the front end of a potential virtual instrument project. Admittedly not much work was put into the back end audio portion so this instrument functions as a simple vocal sampler for the time being. </p>
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
        <div className="project-container-left" >
        <div className="project-info-container">
            <a id="title-link" href="https://main.d1vi2cr9xyhyhw.amplifyapp.com/" target="_blank" rel="noopener noreferrer">  

                <div className="project-info" id='web-synth' alt="Web Synth Site Image">
                   
                </div>
                </a>

                <div className='project-icons'><BiLogoJavascript id='project-icon'/><BiSolidFileCss id='project-icon'/><BiLogoHtml5 id='project-icon'/><SiAmazonaws id='project-icon'/></div>

            </div>
            <div className="project-title">
            <a id="title-link" href="https://main.d1vi2cr9xyhyhw.amplifyapp.com/" target="_blank" rel="noopener noreferrer">Synthesizer</a>     
                <p id='description'>One of my first projects, I followed a tutorial to create a synthesizer. This project taught me alot about Javascript.</p>
            </div>
            
        </div>   
    </>
  )
}

export default Project