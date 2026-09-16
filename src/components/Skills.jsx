import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

export default function Skills() {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-index-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-index-num">// 04. CAPABILITIES DIRECTORY</span>
          <span className="section-index-tag">[ RUNTIME &amp; STORAGE ]</span>
        </motion.div>

        <motion.h2
          className="section-heading-editorial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Technical Competencies
        </motion.h2>

        <motion.p
          className="section-lead-editorial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Deliberate technology choices optimized for sub-millisecond query execution, asynchronous worker throughput, and type safety.
        </motion.p>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <motion.div
              key={category}
              className="skill-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="skill-title-bar">
                <span className="skill-idx">0{idx + 1} //</span>
                <h3 className="skill-heading">{category}</h3>
              </div>
              <div className="skill-chips-wrap">
                {skillList.map((skill, index) => (
                  <motion.span
                    key={index}
                    className="skill-badge-item"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.15 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
