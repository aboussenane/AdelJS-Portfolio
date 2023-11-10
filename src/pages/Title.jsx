import React, {useEffect} from 'react';
import { gsap } from "gsap";
import '../styles/Title.css';
//import { gsap } from "gsap";
import { SiGreensock, SiVite} from 'react-icons/si';
import { BiGitRepoForked,BiLogoReact, BiLogoHtml5, BiLogoJavascript, BiSolidFileCss } from 'react-icons/bi';
function Title() {
  const title = document.getElementById('intro-text');
  const subheader = document.getElementById('subheader');
  const letters = ['H', 'i',',', ' I','\'','m', ' A', 'd', 'e', 'l', '.'];
  const subheaderLetters =['F','u','l','l ','S','t','a','c','k ','W','e','b ','D','e','v','e','l','o','p','e','r'];
  let currentText = '';
  let currentSubheader = '';
  let status = 0;

 // Clear the content of the title element
  //title.textContent = '';
 // Create a GSAP timeline
  const tl = gsap.timeline();

  // Add animations for each letter
  letters.forEach((letter, index) => {
    const delay = 0.1; // Adjust the delay as needed
   
    tl.to({}, { duration: 0.05, ease: 'power1.in', delay, onStart: () => {
      currentText += letter;
      title.textContent = currentText;
      if (index === letters.length - 1) {
        tl.to({}, { duration: 0.5, ease: 'power1.in', delay: 0.5, repeat:Infinity, onStart: () => {
          
          
        } });
        
      }
    } });
    
  });

    currentSubheader = '';
    subheaderLetters.forEach((letter, index) => {
      const delay = 0.1; // Adjust the delay as needed
     
      tl.to({}, { duration: 0.05, ease: 'power1.in', delay, onStart: () => {
        currentSubheader += letter;
        subheader.textContent = currentSubheader;
        
      } });
      
    });
  
  return (
    <>
    
      <section className="title-section" id='home'> 
        
  
        <div className="title-container"> 
        

          <h1 id="intro-text">Hi, I'm Adel.</h1>
          <h3 id="subheader"></h3>
          <div className="icon-corner">
          <BiLogoReact className="title-icon"/>
          <BiLogoJavascript className="title-icon"/>
          <BiSolidFileCss className="title-icon"/>
          <BiLogoHtml5 className="title-icon"/>
          <SiGreensock className="title-icon"/>
          <BiGitRepoForked className="title-icon"/>
          <SiVite className="title-icon"/>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Title;
