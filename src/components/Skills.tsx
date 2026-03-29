import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import "./Skills.scss";

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");

  const categories = [
    { id: "frontend", label: "Frontend", skills: skills.frontend },
    { id: "backend", label: "Backend & APIs", skills: skills.backend },
    {
      id: "performance",
      label: "Performance & Web Standards",
      skills: skills.performance,
    },
    { id: "tools", label: "Tools & Methodologies", skills: skills.tools },
  ];

  const activeSkills =
    categories.find((cat) => cat.id === activeCategory)?.skills || [];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className="skills-categories"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? "active" : ""}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="skills-grid"
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeSkills.map((skill, index) => (
            <motion.div
              key={skill}
              className="skill-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="skill-name">{skill}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
