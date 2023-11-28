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
            <h3>Doc Generator</h3>
            <p>
              Developed an Electron app using Node.js to interact with the Pipedrive API. The application retrieves data from the platform and utilizes docxtemplater to automatically generate a new document with pre-filled basic information. Later on, I modified it to run continuously in the background and generate documents and folders automatically when a new deal is created in Pipedrive. 
            </p>
          </div>
          <div className="other-container">
            <h3>Python and PowerShell Scripts</h3>
            <p>
              Implemented various scripts for efficient data analyses, file management and archiving of documents. These scripts create folders, perform renaming, and create pdfs from outlook items. I have also done data analyses using Python and Pandas to generate reports and graphs.
            </p>
          </div>
          <div className="other-container">
            <h3>VBA Macros</h3>
            <p>
              Automated the generation of weekly and monthly reports using a combination of VBA, PowerShell and Python.
            </p>
          </div>
        </div>
      </section>

    </>
  )
}

export default OtherWork
