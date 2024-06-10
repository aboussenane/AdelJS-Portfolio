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
            <button id='elipse' onClick={toggleContainers}>...</button>
            <p>
              I am currently employed as an acoustic technician at an engineering consultancy 
              in Burnaby B.C. During my time here, I have learned to automate various aspects 
              of my job using Python, Powershell and nodeJS. 
              I have also taken on the role of managing the companies internal IT systems 
              in coordination with our outsourced IT consultants. I've taken charge in various 
              data migration and data archival projects using my knowledge of programming to 
              save and transfer data from application to application. 
              I have gained valuable knowledge in networking protocols and used it to communicate with remote equipment via SSH and HTTP requests.
              I have also dealt with various data formats such as JSON, XML, CSV and SQL databases.
            </p>
          </div>
          
          <div className="other-container">
            <h3>Outside of Work</h3>
            <button id='elipse' onClick={toggleContainers}>...</button>
            <p>
              I enjoy spending my free time working on personal projects such as building an inventory management site.
              I also enjoy producing music and have been doing so for over 10 years. I have a special expertise in audio and audio production which is what landed me my job at BKL Consultants. 
              I like to play around with modular synthesizers and Max MSP, a visual audio coding language. One day I hope to make my own musical software instruments!
              I stay healthy by practicing Jiu Jitsu twice a week and getting plenty of fresh air. I also enjoy reading and learning about new technologies and programming languages whenever I commute. One of my favourite books is "Clean Code" by Robert C. Martin.
              His philosphies on writing code have helped me improve as a programmer and stand out during my internships.
            </p>
          </div>
          
          <div className="other-container">
            <h3>Education</h3>
            <button id='elipse' onClick={toggleContainers}>...</button>
            
            <p>
              I started out my education at the University of Victoria where I studied a joint Computing Science and Music degree. 
              During my time there I took the first year of the computing science program and the first year of the music program. As well as any joint music technology classes available. 
              I then transferred to LaSalle College's Recording Arts program since I wanted to dive deeper into audio technology and production. After graduating from LaSalle College, I began working part time while continuing my computer science education at Douglas College.
              During this time I began playing around with web development and found that I enjoyed building user interfaces the most. I discovered that there were alot of analogues between editing sound and editing graphics and I felt the same amount of satisfaction creating web applications as I did creating music.
               I took a course on UI and UX design and began building my own projects in Figma and HTML/CSS.  
              I eventually picked up React and a few other libraries and began building more complex applications. After surviving Covid-19, several job changes and internships, I finally completed my diploma in Computing Science and feel prepared to begin my career as a software engineer. 
              After surviving Covid-19, several job changes and internships, I finally completed my diploma in Computing Science and feel prepared to begin my career as a software engineer.
            </p>
            
          </div>
          
        </div>
        
      </section>

    </>
  )
}

export default OtherWork
