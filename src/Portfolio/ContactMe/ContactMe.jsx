import React, { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsPersonWorkspace } from "react-icons/bs";
import './ContactMe.css';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/mpwjgjed', { // <-- IMPORTANT: Use your Formspree URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        // Clear the form data after successful submission
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-section" id="contact">
      <div className="title">
        <h1>CONTACT ME</h1>
        <p>Let's Talk About Ideas</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-line">
            <div className="info-icon-wrapper">
              <FaMapMarkerAlt className="info-icon" />
            </div>
            <div className="info-text">
              <h4>Address</h4>
              <p>Chemnitz, Saxony, Germany</p>
            </div>
          </div>
          <div className="info-line">
            <div className="info-icon-wrapper">
              <BsPersonWorkspace className="info-icon" />
            </div>
            <div className="info-text">
              <h4>Freelance</h4>
              <p>Available Right Now</p>
            </div>
          </div>
          <div className="info-line">
            <div className="info-icon-wrapper">
              <FaEnvelope className="info-icon" />
            </div>
            <div className="info-text">
              <h4>Email</h4>
              <p>kenilkalathiya1999@gmail.com</p>
            </div>
          </div>
          <div className="info-line">
            <div className="info-icon-wrapper">
              <FaPhoneAlt className="info-icon" />
            </div>
            <div className="info-text">
              <h4>Phone</h4>
              <p>+49 15202856757</p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="button submit-btn">
              Submit
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}