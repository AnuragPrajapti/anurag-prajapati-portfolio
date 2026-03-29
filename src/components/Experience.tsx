import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/portfolioData";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import "./Experience.scss";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey and key contributions
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="timeline-marker">
                <div className="marker-icon">
                  <FaBriefcase />
                </div>
              </div>

              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <h3 className="position">{exp.position}</h3>
                    <div className="company-info">
                      <span className="company">{exp.company}</span>
                      <span className="location">
                        <FaMapMarkerAlt />
                        {exp.location}
                      </span>
                    </div>
                    <div className="period">
                      <FaCalendar />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="description">{exp.description}</p>

                  <div className="responsibilities">
                    <h4>Key Responsibilities & Achievements:</h4>
                    <ul>
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
