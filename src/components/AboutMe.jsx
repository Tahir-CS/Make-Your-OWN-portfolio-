import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

export default function AboutMe() {
  const { about, personal } = portfolioConfig;

  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="apple-label">Philosophy &amp; Perspective</span>
          <h2 className="apple-monument-h2">System Architecture &amp; Foundations.</h2>
          <p className="apple-lead-p">
            Engineering scalable web backends, resilient queue architectures, and mathematical vector retrieval.
          </p>
        </motion.div>

        {/* Statement Quote Banner */}
        <motion.div
          className="about-quote-box"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="about-quote-text">
            "{about.statement}"
          </div>
        </motion.div>

        {/* Two-Column Editorial Split */}
        <div className="about-editorial-split">
          {/* Left: Narrative & Academic Foundations */}
          <motion.div
            className="about-narrative-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <p className="about-p">
                {about.overview}
              </p>
              <p className="about-p">
                From configuring BullMQ backpressure mechanisms and managing Redis cluster memory footprints 
                to fine-tuning pgvector cosine distance metrics in PostgreSQL, I believe reliability is not an afterthought—it 
                must be designed into the foundational architecture.
              </p>
            </div>

            {/* Academic Panel */}
            <div className="academic-panel-dark">
              <div className="academic-header-flex">
                <span className="academic-degree-title">{about.education.degree}</span>
                <span className="academic-cgpa-badge">{about.education.cgpa}</span>
              </div>
              <p className="academic-institution">{about.education.institution}</p>
              
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '10px', fontWeight: 700 }}>
                Core Foundational Coursework
              </div>
              <div className="coursework-wrap">
                {about.education.coursework.map((course, idx) => (
                  <span key={idx} className="coursework-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Portrait & Quick System Specs */}
          <motion.div
            className="portrait-glass-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="portrait-photo-container">
              <img
                src={profileImage}
                alt={`${personal.fullName} - ${personal.title}`}
                loading="lazy"
              />
            </div>

            <div className="portrait-specs-table">
              <div className="specs-row">
                <span className="specs-label">LOCATION</span>
                <span className="specs-value">{personal.location}</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">SPECIALTY</span>
                <span className="specs-value">Distributed Queues &amp; RAG</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">ACADEMIA</span>
                <span className="specs-value">UET Lahore (BS CS)</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">CORE RUNTIME</span>
                <span className="specs-value">Node • Redis • PostgreSQL</span>
              </div>
              <div className="specs-row">
                <span className="specs-label">STATUS</span>
                <span className="glow-badge glow-badge-emerald" style={{ fontSize: '0.72rem', padding: '3px 10px' }}>
                  Available for Global Roles
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
