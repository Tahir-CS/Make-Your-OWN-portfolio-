import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

export default function Hero() {
  const { personal } = portfolioConfig;

  return (
    <section className="hero-minimalist-section">
      <div className="container">
        <motion.div
          className="hero-minimalist-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Pill */}
          <div className="hero-status-pill">
            <span className="status-dot-pulse"></span>
            <span>Available for Software &amp; Backend Roles • Lahore, Pakistan</span>
          </div>

          {/* Clean Monumental Name */}
          <h1 className="hero-minimalist-name">
            {personal.fullName}
          </h1>

          {/* Role & Headline */}
          <div className="hero-minimalist-role">
            {personal.title}
          </div>

          {/* Direct Plain English Statement */}
          <p className="hero-minimalist-bio">
            Computer Science student at UET Lahore. I build reliable backend services, database schemas, and clean web applications with React, Node.js, and PostgreSQL.
          </p>

          {/* Minimalist Actions */}
          <div className="hero-minimalist-actions">
            <a href="#projects" className="btn-primary-glow">
              <span>View Projects</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a href="#about" className="btn-secondary-glass">
              <span>About Me</span>
            </a>

            <a href="#contact" className="btn-secondary-glass">
              <span>Contact</span>
            </a>
          </div>

          {/* Clean Social Line */}
          <div className="hero-social-minimal">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              GitHub ↗
            </a>
            <span className="social-divider">•</span>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
            >
              LinkedIn ↗
            </a>
            <span className="social-divider">•</span>
            <a
              href={`mailto:${personal.email}`}
              className="hero-social-link"
            >
              {personal.email}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
