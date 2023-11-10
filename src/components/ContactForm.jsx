import React from 'react';
import '../styles/Contact.css';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      subject: '',
      message: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  openNewTab = (event) => {
    event.preventDefault();
    const { subject, message } = this.state;

    const subjectValue = subject || '';
    const messageValue = message || '';

    const mailtoLink = `mailto:aboussenane@gmail.com?subject=${encodeURIComponent(
      subjectValue
    )}&body=${encodeURIComponent(messageValue)}`;
    window.open(mailtoLink, '_blank');
  };

  render() {
    const { email, subject, message } = this.state;

    return (
      <div className="contact">
        <div className="contact-card">
          <span className="title">Leave a Message</span>
          <form className="form" encType="text/plain">
            
            <div className="group">
              <input
                placeholder="Let's get in touch"
                type="text"
                name="subject"
                value={subject}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="subject" style={{ position: 'absolute', top: '-20px' }}>
                Subject
              </label>
            </div>
            <div className="group">
              <textarea
                placeholder="Your Message Here"
                name="message"
                rows="5"
                value={message}
                required
                onChange={this.handleChange}
              />
              <label htmlFor="message" style={{ position: 'absolute', top: '-20px' }}>
                Message
              </label>
            </div>
            <button type="button" onClick={this.openNewTab}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
