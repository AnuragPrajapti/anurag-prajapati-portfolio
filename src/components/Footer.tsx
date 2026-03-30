import React from "react";
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "./Footer.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 onClick={scrollToTop} style={{ cursor: "pointer" }}>
              Anurag<span className="dot">.</span>
            </h3>
            <p>Building exceptional digital experiences</p>
            <div className="footer-social">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a href={`mailto:${personalInfo.email}`} aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <a href={`mailto:${personalInfo.email}`} className="contact-item">
              <FaEnvelope />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="contact-item"
            >
              <FaPhone />
              <span>{personalInfo.phone}</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="made-with">
            Made with <FaHeart className="heart-icon" /> using React.js &
            TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
