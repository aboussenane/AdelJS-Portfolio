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
              in Burnaby B.C. During my time here, I have learned to <strong>automate</strong> various aspects 
              of my job using <strong>Python, Powershell and nodeJS</strong>. 
              I have also taken on the role of <strong>managing the companies internal IT systems </strong> 
               in coordination with our outsourced IT consultants. I've taken charge in various 
               <strong> data migration and data archival projects</strong> using my knowledge of programming to 
              save and transfer data from application to application. 
              I have gained valuable knowledge in <strong>networking protocols</strong> and used it to communicate with remote equipment via SSH and HTTP requests.
              I have also dealt with various data formats such as <strong>JSON, XML and CSV</strong>.
            </p>
          </div>
          
          <div className="other-container">
            <h3>Outside of Work</h3>
            <button id='elipse' onClick={toggleContainers}>...</button>
            <p>
              I enjoy spending my free time working on personal projects such as building an <strong>inventory management site</strong>.
              I also enjoy <strong>producing music</strong> and have been doing so for over 10 years. I have a <strong>special expertise in audio</strong> and audio production which is what landed me my job at BKL Consultants. 
              I like to play around with modular synthesizers and <strong>Max MSP</strong>, a visual audio coding language. One day I hope to make my own musical software instruments!
              I stay healthy by practicing <strong>Jiu Jitsu</strong> twice a week and getting plenty of <strong>fresh air</strong>. I also enjoy reading and learning about new technologies and programming languages whenever I commute. One of my favourite books is <strong>"Clean Code" by Robert C. Martin</strong>.
              His philosphies on writing code have helped me improve as a programmer and stand out during my internships.
            </p>
          </div>
          
          <div className="other-container">
            <h3>Education</h3>
            <button id='elipse' onClick={toggleContainers}>...</button>
            
            <p>
              I started out my education at the <strong>University of Victoria</strong> where I studied a joint <strong>Computing Science and Music degree</strong>. 
              During my time there I took the first year of the computing science program and the first year of the music program. As well as any joint music technology classes available. 
              I then transferred to LaSalle College's Recording Arts program since I wanted to dive deeper into audio technology and production. After graduating from LaSalle College, I began working part time while continuing my computer science education at <strong>Douglas College</strong>.
              During this time I began playing around with <strong>web development</strong> and found that I enjoyed building <strong>user interfaces</strong> the most. I discovered that there were alot of <strong>analogues between editing sound and editing graphics</strong> and I felt the same amount of satisfaction creating web applications as I did creating music.
               I took a course on <strong>UI and UX design</strong> and began building my own projects in <strong>Figma and HTML/CSS. </strong>  
              I eventually picked up <strong>React and a few other libraries</strong> and began building more complex applications. After surviving Covid-19, several job changes and internships, I finally completed my diploma in Computing Science and feel prepared to begin my career as a <strong>software engineer.</strong> 
              After surviving Covid-19, several job changes and internships, I finally completed my diploma in Computing Science and feel prepared to begin my career as a software engineer.
            </p>
            
          </div>
          
        </div>
        
      </section>

    </>
  )
}

export default OtherWork
