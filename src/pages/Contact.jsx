import React, { useState } from 'react';
import './../styles/Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then((result) => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); 
      }, (error) => {
        setStatus('An error occurred. Please try again.');
      });
  };

  return (
    <div className="contact-container">
      <h1 className="contact-heading">Connect with Me</h1>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/amruta-jayanti" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-linkedin-in contact-icon"></i>
          LinkedIn
        </a>
        <a href="https://github.com/AmrutaJayanti" target="_blank" rel="noopener noreferrer" className="contact-link">
          <i className="fab fa-github contact-icon"></i>
          GitHub
        </a>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Get in Touch</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>
        <button type="submit">Send Message</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
