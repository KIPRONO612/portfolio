import React from "react";
import { FaLinkedin, FaWhatsapp, FaPhone, FaSms } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
<div id="contact" className="contact-container fade-up">
      <h2 className="contact-title">Get in Touch</h2>

      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/meshack-kiprono-98b67438a"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin"
        >
          <FaLinkedin /> LinkedIn
        </a>

        <a
          href="https://wa.me/254707448104"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        <a href="tel:+254707448104" className="contact-btn call">
          <FaPhone /> Call
        </a>

        <a href="sms:+254707448104" className="contact-btn message">
          <FaSms /> Message
        </a>
      </div>
    </div>
  );
};

export default Contact;
