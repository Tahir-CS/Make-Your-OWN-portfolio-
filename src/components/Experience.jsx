import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

const timelineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={timelineVariants}
        >
          <div className="text-center mb-8">
            <h2 className="text-reveal">Work Experience</h2>
            <p className="text-reveal">My Professional Journey</p>
          </div>

          <div className="timeline">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="timeline-item"
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p className="date">{exp.duration}</p>
                  <p>{exp.description}</p>
                  <div className="timeline-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="timeline-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
