import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData";
import profileImage from "../assets/anurag_prajapati_Image.png";
import "./Hero.scss";

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Anurag_Prajapati_Resume.pdf";
    link.download = "Anurag_Prajapati_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="gradient-text">{personalInfo.title}</span>
            </motion.h2>

            <motion.p
              className="hero-tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="stat-item">
                <span className="stat-number">
                  {personalInfo.yearsOfExperience}
                </span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Components Built</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Major Projects</span>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <button
                onClick={handleDownloadResume}
                className="btn btn-secondary"
              >
                <FaDownload />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaGithub />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-link">
                <FaEnvelope />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="profile-card">
              <div className="profile-image-wrapper">
                <div className="profile-image">
                  <img
                    src={profileImage}
                    alt={personalInfo.name}
                    className="profile-photo"
                  />
                </div>
                <div className="profile-status">
                  <span className="status-dot"></span>
                  Available for work
                </div>
              </div>

              <div className="profile-info">
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="info-item">
                  <FaEnvelope />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="info-item">
                  <FaPhone />
                  <span>{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="scroll-indicator">
        <div className="mouse"></div>
        <span>Scroll Down</span>
      </div> */}
    </section>
  );
};

export default Hero;
