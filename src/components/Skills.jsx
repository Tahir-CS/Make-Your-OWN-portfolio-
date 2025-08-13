import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const categoryVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Skills() {
  const { skills } = portfolioConfig;
  
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={categoryVariants}
            className="text-center"
          >
            Skills & Technologies
          </motion.h2>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                variants={categoryVariants}
                className="skill-category"
              >
                <h3 className="text-center">{category}</h3>
                <motion.div
                  variants={containerVariants}
                  className="skill-tags"
                >
                  {skillList.map((skill, index) => (
                    <motion.span
                      key={index}
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                      className="skill-tag"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
