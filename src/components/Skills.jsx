import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import { TechIcon } from './TechIcons';

export default function Skills() {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="skills-section-apple">
      <div className="container">
        {/* Apple Minimalist Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="apple-label">Toolchain &amp; Directory</span>
          <h2 className="apple-monument-h2">Technical Competencies.</h2>
          <p className="apple-lead-p">
            Deliberate technology choices optimized for sub-millisecond query execution, asynchronous worker throughput, and architectural determinism.
          </p>
        </motion.div>

        {/* 5-Category Apple Clean Grid */}
        <div className="apple-skills-grid">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <motion.div
              key={category}
              className="apple-skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div className="skill-card-top">
                <span className="skill-index-mono">0{idx + 1} // DOMAIN</span>
                <span className="skill-count-badge">{skillList.length} Technologies</span>
              </div>

              <h3 className="skill-category-title">{category}</h3>

              <div className="skill-logo-chips">
                {skillList.map((skill) => (
                  <div className="apple-tech-pill" key={skill}>
                    <TechIcon name={skill} size={16} className="tech-logo-svg" />
                    <span className="tech-pill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
