
import '../styles/Navbar.css'; 
import React, { useState, useEffect } from 'react';
import '../App.css'

function Navbar() {
  /*document.getElementById('nav-toggle').addEventListener('click', function() {
    var navLinks = document.querySelector('nav ul');
    var nav = document.querySelector('nav');
    if (navLinks.style.display === 'none') {
      nav.style.height = '200px';
      navLinks.style.display = 'flex';
    } else {
      navLinks.style.display = 'none';
      nav.style.height = '50px';
    }
  });*/
  const [navOpen, setNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  // Create state to track the active section
  const [activeSection, setActiveSection] = useState('home');

  // Define a function to handle scroll behavior and update the active section
  function handleScroll() {
    const scrollY = window.scrollY;
    if (scrollY < 500) {
      setActiveSection('home');
    } else if (scrollY < 1200) {
      setActiveSection('skills');
    } else if (scrollY < 2000) {
      setActiveSection('projects');
    } else {
      setActiveSection('contact');
    } 
  }

  // Attach a scroll event listener to update the active section
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      
      let offset = 0;
      
      if (sectionId === 'projects') {
        offset = 80;
      } else if (sectionId === 'skills') {
        offset = 50;
      }
      else if (sectionId === 'contact') {
        offset = 50;
      }
  
      
      setTimeout(() => {
        
        const targetPosition = element.offsetTop - offset;
  
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }, 250); 
    }
  }

  return (
    <nav style={{ height: navOpen ? '100px' : '50px' }}>
    <h4 className='name-tag' style={{ top: navOpen ? '-1%' : '-15%' }}>adelJS.dev</h4>
    <button id="nav-toggle" type="button" onClick={() => setNavOpen(!navOpen)} style={{ top: navOpen ? '0%' : '-15%' }}>...</button>
    {navOpen || windowWidth > 768 ? (  
        <ul>
        
          <li className={activeSection === 'home' ? 'active' : ''}>
            <a href="#home" onClick={() => scrollToSection('home')}>
              Home
            </a>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <a href="#skills" onClick={() => scrollToSection('skills')}>
              Skills
            </a>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <a href="#projects" onClick={() => scrollToSection('projects')}>
              Projects
            </a>
          </li>
          <li className={activeSection === 'contact' ? 'active' : ''}>
            <a href="#contact" onClick={() => scrollToSection('contact')}>
              Contact
            </a>
          </li>
          <li className={activeSection === 'resume' ? 'active' : ''}>
            <a href="/AdelBoussenaneResume.pdf">
              Resume
            </a>
          </li>
        </ul>
        ): null}
        <a href="https://github.com/AdelBoussa" className="github-btn" style={{ top: navOpen ? '5%' : '10%' }}>
        <p className="git-text">Github </p>
        <div className='divider'></div>
        <p className="btn-text">Visit</p> 
        </a>
    </nav>
  );
}

export default Navbar;