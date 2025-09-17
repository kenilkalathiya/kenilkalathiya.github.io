import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { BsPersonWorkspace } from "react-icons/bs";
import './ContactMe.css';

export default function ContactMe() {
  return (
    <div className="contact-section" id="contact">
      <div className="title-contact title">
        <h1>Contact Me</h1>
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
          {/* Replace YOUR_UNIQUE_ID with the one from Formspree */}
          <form
            className="contact-form"
            action="https://formspree.io/f/mpwjgjed"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
            ></textarea>
            <button type="submit" className="button submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}