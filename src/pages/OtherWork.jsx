import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/OtherWork.css'


gsap.registerPlugin(ScrollTrigger);
function OtherWork() {
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

  return (
    <>

      <section className="otherwork-section">
      <h1>Some Other Things I've Done</h1>
       <div className="otherwork-container">
          
          <div className="other-container">
            <h3>Electron Doc Generator</h3>
            <p>
              Developed an Electron app using Node.js to interact with the Pipedrive API. The application retrieves data from the platform and utilizes docxtemplater to automatically generate a new document with pre-filled basic information.
            </p>
          </div>
          <div className="other-container">
            <h3>PowerShell Scripts</h3>
            <p>
              Implemented various scripts for efficient file management and archiving of Outlook email folders into PDF documents. These PowerShell scripts create folders, perform renaming, and archive both Outlook and network folders.
            </p>
          </div>
          <div className="other-container">
            <h3>VBA Macros</h3>
            <p>
              Automated the generation of weekly and monthly reports using a combination of VBA and PowerShell.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default OtherWork
