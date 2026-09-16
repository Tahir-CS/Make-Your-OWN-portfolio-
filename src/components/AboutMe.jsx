import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

export default function AboutMe() {
  const { about, personal } = portfolioConfig;

  return (
    <section id="about" className="about-editorial-section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="apple-label">Profile &amp; Perspective</span>
          <h2 className="apple-monument-h2">Engineering With Clarity.</h2>
          <p className="apple-lead-p">
            Computer science student at UET Lahore building dependable backend systems, responsive web applications, and practical digital tools.
          </p>
        </motion.div>

        {/* Editorial Split Grid */}
        <div className="about-custom-grid">
          {/* Left Column: Framed Portrait Card */}
          <motion.div
            className="about-portrait-frame"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="portrait-image-wrapper">
              <img
                src={profileImage}
                alt={`${personal.fullName} - Software Engineer`}
                loading="lazy"
                className="portrait-main-photo"
              />
              <div className="portrait-status-badge">
                <span className="status-dot-pulse"></span>
                <span>Open for Full-Stack &amp; Backend Roles</span>
              </div>
            </div>

            <div className="portrait-details-box">
              <div className="portrait-meta-row">
                <span className="meta-label">NAME</span>
                <span className="meta-val">{personal.fullName}</span>
              </div>
              <div className="portrait-meta-row">
                <span className="meta-label">DEGREE</span>
                <span className="meta-val">{about.education.degree}</span>
              </div>
              <div className="portrait-meta-row">
                <span className="meta-label">UNIVERSITY</span>
                <span className="meta-val">UET Lahore (2024–2028)</span>
              </div>
              <div className="portrait-meta-row">
                <span className="meta-label">ACADEMIC RECORD</span>
                <span className="meta-val highlight-val">{about.education.cgpa}</span>
              </div>
              <div className="portrait-meta-row">
                <span className="meta-label">LOCATION</span>
                <span className="meta-val">{personal.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Natural Narrative & 3 Core Principles */}
          <motion.div
            className="about-narrative-column"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Story Paragraphs */}
            <div className="about-text-narrative">
              <p className="narrative-lead">
                I enjoy building software that solves genuine, practical problems. My core focus is on backend architecture, relational database design, and high-performance web applications using modern JavaScript, TypeScript, React, and Node.js.
              </p>
              <p className="narrative-body">
                Rather than chasing buzzwords or unnecessary complexity, I focus on building reliable systems: database schemas that stay clean as data grows, background queues that execute tasks reliably, and APIs that make frontend integration fast and seamless.
              </p>
            </div>

            {/* 3 Distinct Engineering Principles */}
            <div className="about-pillars-stack">
              <div className="about-pillar-card">
                <div className="pillar-num">01</div>
                <div className="pillar-content">
                  <h4 className="pillar-title">Reliable by Default</h4>
                  <p className="pillar-desc">
                    Strict data validation, predictable database migrations, and clean error handling so production services remain dependable.
                  </p>
                </div>
              </div>

              <div className="about-pillar-card">
                <div className="pillar-num">02</div>
                <div className="pillar-content">
                  <h4 className="pillar-title">Built for Performance</h4>
                  <p className="pillar-desc">
                    Optimized SQL queries, fast asynchronous background worker queues with Redis, and lean client-side component trees.
                  </p>
                </div>
              </div>

              <div className="about-pillar-card">
                <div className="pillar-num">03</div>
                <div className="pillar-content">
                  <h4 className="pillar-title">Human-Centered Craft</h4>
                  <p className="pillar-desc">
                    Readable code, well-structured git commits, intuitive user experiences, and systems built to last beyond the initial deployment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
