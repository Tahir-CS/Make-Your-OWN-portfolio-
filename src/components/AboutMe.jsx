import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

export default function AboutMe() {
  const { about, personal } = portfolioConfig;

  return (
    <section id="about" className="about-minimal-section">
      <div className="container">
        {/* Section Header with Clean Plain Language */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="apple-label">About Me</span>
          <h2 className="apple-monument-h2">A Little About Me.</h2>
          <p className="apple-lead-p">
            Computer Science student at UET Lahore who builds reliable backend systems, database schemas, and clean web applications.
          </p>
        </motion.div>

        {/* Minimalist Unique Split */}
        <div className="about-minimal-layout">
          {/* Left Column: Clean Portrait with Direct Bio Facts */}
          <motion.div
            className="about-portrait-card-minimal"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-photo-wrap">
              <img
                src={profileImage}
                alt={personal.fullName}
                loading="lazy"
                className="about-photo-img"
              />
              <div className="about-photo-caption">
                <span className="status-dot-pulse"></span>
                <span>Open for Software Roles</span>
              </div>
            </div>

            <div className="about-quick-specs">
              <div className="spec-line">
                <span className="spec-name">University</span>
                <span className="spec-value">UET Lahore (2024–2028)</span>
              </div>
              <div className="spec-line">
                <span className="spec-name">Degree</span>
                <span className="spec-value">BS Computer Science</span>
              </div>
              <div className="spec-line">
                <span className="spec-name">CGPA</span>
                <span className="spec-value spec-highlight">{about.education.cgpa}</span>
              </div>
              <div className="spec-line">
                <span className="spec-name">Location</span>
                <span className="spec-value">{personal.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Narrative & Plain Highlights */}
          <motion.div
            className="about-text-column-minimal"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="about-main-text">
              <p className="lead-sentence">
                I enjoy building software that solves practical problems and runs reliably without breaking down.
              </p>
              <p className="body-sentence">
                My primary focus is backend engineering, relational databases with PostgreSQL, and building responsive single-page applications with React. I value clean code, fast response times, and clear data architecture.
              </p>
            </div>

            {/* 3 Clean Focus Areas */}
            <div className="about-focus-list">
              <div className="focus-item">
                <span className="focus-index">01</span>
                <div>
                  <h4 className="focus-title">Backend &amp; APIs</h4>
                  <p className="focus-desc">
                    Node.js, Express, RESTful APIs, and background job worker queues with Redis and BullMQ.
                  </p>
                </div>
              </div>

              <div className="focus-item">
                <span className="focus-index">02</span>
                <div>
                  <h4 className="focus-title">Databases &amp; Data</h4>
                  <p className="focus-desc">
                    PostgreSQL schema design, indexed relational queries, TimescaleDB time-series tables, and Supabase.
                  </p>
                </div>
              </div>

              <div className="focus-item">
                <span className="focus-index">03</span>
                <div>
                  <h4 className="focus-title">Modern Web Apps</h4>
                  <p className="focus-desc">
                    React.js, clean component design, accessible interfaces, and smooth client-side interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-action-cta">
              <a href="#contact" className="btn-primary-glow">
                <span>Get In Touch →</span>
              </a>
              <a href="#experience" className="btn-secondary-glass">
                <span>View Experience ↓</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
