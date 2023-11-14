import React, {useEffect, useRef} from 'react';
import { gsap } from "gsap";
import '../styles/Title.css';
//import { gsap } from "gsap";
import { SiGreensock, SiVite} from 'react-icons/si';
import { BiGitRepoForked,BiLogoReact, BiLogoHtml5, BiLogoJavascript, BiSolidFileCss } from 'react-icons/bi';
function Title() {
  const transitionRef = useRef(null)
  useEffect(() => {
    gsap.set(transitionRef.current, { opacity: 0 });
    const title = document.getElementById('intro-text');
    const subheader = document.getElementById('subheader');
    const letters = ['H', 'i', ',', ' I', '\'', 'm', ' A', 'd', 'e', 'l', '.'];
    const subheaderLetters = ['F', 'u', 'l', 'l ', 'S', 't', 'a', 'c', 'k ', 'W', 'e', 'b ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r'];
    let currentText = '';
    let currentSubheader = '';

    // Clear the content of the title element
    // title.textContent = '';
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // Add animations for each letter
    letters.forEach((letter, index) => {
      const delay = 0.1; // Adjust the delay as needed

      tl.to({}, { duration: 0.05, ease: 'power1.in', delay, onStart: () => {
        currentText += letter;
        title.textContent = currentText;
        if (index === letters.length - 1) {
          tl.to({}, { duration: 0.5, ease: 'power1.in', delay: 0.5, repeat: Infinity, onStart: () => {
            // Additional logic if needed
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

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array means this effect runs once when the component mounts

  useEffect(() => {
    const transition = transitionRef.current;

    // Animation to show the element after a delay
    gsap.from(transition, { opacity: 1, y:-60, duration: 1, delay: 15, ease: 'power1.in'});

    // Scroll event listener to hide the element on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset; 
      if (scrollY >= 500) {
        gsap.to(transition, { opacity: 0, y: -60, duration: 1 });
      } else {
        gsap.to(transition, { opacity: 1, y: -60, duration: 1 }); // Show the element if not scrolled enough
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
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

          <div className="dots">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          </div>
          <div className="transition" ref={transitionRef}>
            <p className="tran-text">See More</p>
          <div className='t-divider'></div>
          <p className="scroll-text">scroll</p> 
        </div>
        </div>
        
      </section>
    </>
  );
}

export default Title;
