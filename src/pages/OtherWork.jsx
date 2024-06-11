import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/OtherWork.css'


gsap.registerPlugin(ScrollTrigger);
function OtherWork() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    gsap.utils.toArray('.other-container').forEach((container) => {
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
  const toggleContainers = () => {
    setExpanded((prevExpanded) => {
      const newHeight = prevExpanded ? '700px' : 'auto'; // Change '150px' to the compressed height
      gsap.to('.other-container', { height: newHeight, duration: 1 });
      return !prevExpanded;
    });
  };
  return (
    <>

      <section className="otherwork-section">
      <h1>More About Me</h1>
      
       <div className="otherwork-container">
          
          <div className="other-container">
            <h3>Work Experience</h3>
            <p>
            Currently employed as an acoustic technician at an engineering consultancy in Burnaby, B.C.
            <br/><br/>Learned to automate various aspects of the job using Python, PowerShell, and Node.js.
            <br/><br/>Taken on the role of managing the company's internal IT systems in coordination with outsourced IT consultants.
            <br/><br/>Led various data migration and data archival projects, using programming knowledge to save and transfer data between applications.
            <br/><br/>Gained valuable knowledge in networking protocols, using it to communicate with remote equipment via SSH and HTTP requests.
            <br/><br/>Dealt with various data formats such as JSON, XML, and CSV.
            </p>

          </div>
          
          <div className="other-container">
            <h3>Outside of Work</h3>
            <button id='elipse' onClick={toggleContainers}>...</button>
            <p>
            I enjoy working on personal projects, such as building an inventory management site.
            <br/><br/>I also enjoy producing music and have been doing so for over 10 years.
            <br/><br/>I have a special expertise in audio and audio production, which helped me land my job at BKL Consultants.
            <br/><br/>I like to play around with modular synthesizers and Max MSP, a visual audio coding language.
            <br/><br/>One day, I hope to make my own musical software instruments!
            <br/><br/>I stay healthy by practicing Jiu Jitsu twice a week and getting plenty of fresh air.
            <br/><br/>I enjoy reading and learning about new technologies and programming languages whenever I commute.
            <br/><br/>One of my favorite books is "Clean Code" by Robert C. Martin. His philosophies on writing code have helped me improve as a programmer and stand out during my internships.
            
            </p>
          </div>
          
          <div className="other-container">
            <h3>Education</h3>
            <button id='elipse' onClick={toggleContainers}>...</button>
            
            <p>
            I started my education at the University of Victoria, where I pursued a joint Computing Science and Music degree.
            <br/><br/>During my time at the University of Victoria, I completed the first 3 semesters of both the computing science and music programs, taking all available music technology classes.
            <br/><br/>I transferred to LaSalle College's Recording Arts program to delve deeper into audio technology and production.
            <br/><br/>After graduating from LaSalle College, I worked part-time while continuing my computer science education at Douglas College.
            <br/><br/>During this period, I began exploring web development and discovered a passion for building user interfaces.
            <br/><br/>I found many analogues between editing sound and editing graphics, and I derived as much satisfaction from creating web applications as I did from creating music.
            <br/><br/>I enrolled in a course on UI and UX design and started building my own projects using Figma and HTML/CSS.
            <br/><br/>I eventually learned React and several other libraries and began developing more complex applications.
            <br/><br/>After surviving Covid-19, undergoing several job changes and internships, I completed my diploma in Computing Science.
            
            </p>
            
          </div>
          
        </div>
        
      </section>

    </>
  )
}

export default OtherWork
