import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-index-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-index-num">// 03. INDUSTRY RECORD</span>
          <span className="section-index-tag">[ PROFESSIONAL TENURE ]</span>
        </motion.div>

        <motion.h2
          className="section-heading-editorial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Commercial Experience
        </motion.h2>

        <motion.p
          className="section-lead-editorial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Hands-on backend systems contributions spanning API type-safety contracts, containerization, and data normalization.
        </motion.p>

        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="experience-glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">{exp.title}</h3>
                  <div className="exp-company">
                    {exp.company} — <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span>
                  </div>
                </div>
                <span className="exp-duration">{exp.duration}</span>
              </div>

              <p style={{ color: 'var(--text-secondary)', marginBottom: '18px', fontSize: '1rem', lineHeight: '1.7' }}>
                {exp.description}
              </p>

              {exp.highlights && (
                <ul className="exp-points-list">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '18px', borderTop: '1px solid var(--border)' }}>
                {exp.skills.map((skill, i) => (
                  <span key={i} className="tech-chip-dark">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
