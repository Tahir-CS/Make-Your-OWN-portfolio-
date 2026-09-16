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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '60px' }}>
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={index}
              className="macro-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                <span className="glow-badge glow-badge-cyan" style={{ fontSize: '0.65rem' }}>{category.toUpperCase()}</span>
              </div>
              
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '16px', letterSpacing: '-0.02em' }}>{category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {items.slice(0, 3).map((item, i) => (
                    <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                      {item}{i < 2 ? ' • ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: '32px', borderTop: '1px solid var(--border)', paddingTop: '16px', display: 'flex', justifyContent: 'flex-end' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--primary)', cursor: 'pointer' }}>Enter world ↗</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
