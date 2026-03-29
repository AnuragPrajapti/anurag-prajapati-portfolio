import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPaperPlane,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "./Contact.scss";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Placeholder for form submission
    setTimeout(() => {
      alert(
        "Thank you for your message! This is a demo - form submission to be implemented.",
      );
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Let's discuss your next project or opportunity
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Contact Information</h3>
            <p className="contact-description">
              Feel free to reach out for collaborations, opportunities, or just
              to say hello!
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <span className="label">Email</span>
                  <a href={`mailto:${personalInfo.email}`}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <span className="label">Phone</span>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>

              <div className="info-item">
                <div className="icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <span className="label">Location</span>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
