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

        <div style={{ maxWidth: '1040px', margin: '0 auto', marginTop: '60px' }}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="stage-gate-module"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="stage-header">
                <div className="stage-index">{index + 1 < 10 ? `0${index + 1}` : index + 1} // {exp.company}</div>
                <div className="stage-duration">{exp.duration}</div>
              </div>

              <div className="stage-content">
                <h3 className="stage-objective">{exp.title}</h3>
                <p className="stage-description">{exp.description}</p>
                
                <div className="stage-split">
                  <div className="stage-column">
                    <h4>You Get</h4>
                    <div className="stage-column-content">
                      <ul style={{ paddingLeft: '20px', listStyleType: 'square' }}>
                        {exp.highlights ? exp.highlights.slice(0, 2).map((h, i) => <li key={i} style={{ marginBottom: '8px' }}>{h}</li>) : <li>Scalable systems architecture and optimized API throughput.</li>}
                      </ul>
                    </div>
                  </div>
                  <div className="stage-column">
                    <h4>Your Part</h4>
                    <div className="stage-column-content">
                      <p>Provide domain context, system access, and iterative feedback during the deployment phase.</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="tech-chip-dark" style={{ background: 'transparent', border: '1px solid var(--border)', padding: '4px 10px', fontSize: '0.7rem' }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
