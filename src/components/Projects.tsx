import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/portfolioData";
import { FaExternalLinkAlt, FaUsers } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Projects.scss";

const Projects: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    adaptiveHeight: false,
  };

  const renderProjectCard = (project: any, index: number) => (
    <motion.div
      key={project.id}
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: isMobile ? 0 : index * 0.1 }}
      whileHover={{ y: isMobile ? 0 : -10 }}
    >
      <div className="project-header">
        <div className="project-title-row">
          <h3 className="project-name">{project.name}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaExternalLinkAlt />
          </a>
        </div>
        <div className="project-meta">
          <span className="role">{project.role}</span>
          <span className="period">{project.period}</span>
          <span className="team-size">
            <FaUsers />
            Team of {project.teamSize}
          </span>
        </div>
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-highlights">
        <h4>Key Contributions:</h4>
        <ul>
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="project-tech">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of the major projects I've worked on
          </p>
        </motion.div>

        {isMobile ? (
          <div className="projects-slider">
            <Slider {...sliderSettings}>
              {projects.map((project, index) => (
                <div key={project.id} className="slider-item">
                  {renderProjectCard(project, index)}
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) =>
              renderProjectCard(project, index),
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
