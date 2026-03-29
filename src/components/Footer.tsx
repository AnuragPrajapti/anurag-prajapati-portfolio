import React from "react";
import { FaHeart } from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import "./Footer.scss";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>
              Anurag<span className="dot">.</span>
            </h3>
            <p>Building exceptional digital experiences</p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-contact">
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.location}</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
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
