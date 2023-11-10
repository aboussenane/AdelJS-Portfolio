import React from 'react';
import '../App.css'
import '../styles/Contact.css'
import ContactForm from '../components/ContactForm.jsx';
//import Resume from '../components/Resume.jsx';

function Contact() {
  

  return (
    <>

        <section class="contact-section" id='contact'>
          <div className="contact-title"><h1 className="contact-title">Contact</h1></div>
            <h4>Feel free to contact me for any questions or opportunities.</h4>
          <div className="contact-container"> 
            <ContactForm />
            
          </div>
        </section>
    </>
  )
}

export default Contact
