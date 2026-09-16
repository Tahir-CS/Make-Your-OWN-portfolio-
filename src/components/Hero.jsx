import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

export default function Hero() {
  const { personal, about } = portfolioConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const statColors = ['#38bdf8', '#34d399', '#c084fc', '#fb923c'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="hero-wrapper">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} style={{ display: 'inline-block', marginBottom: '8px' }}>
            <div className="glow-badge glow-badge-emerald">
              <span className="status-dot-pulse"></span>
              <span>Available for Software &amp; Backend Roles</span>
            </div>
          </motion.div>

          {/* Monumental Headline */}
          <motion.h1 variants={itemVariants} className="hero-monument-title">
            {personal.fullName}
          </motion.h1>

          {/* Role Lead */}
          <motion.div variants={itemVariants} className="hero-role-lead">
            {personal.title} — {personal.roleSubtitle}
          </motion.div>

          {/* Manifesto Description */}
          <motion.p variants={itemVariants} className="hero-manifesto">
            {personal.bio}
          </motion.p>

          {/* Action Row */}
          <motion.div variants={itemVariants} className="hero-actions-row">
            <motion.a
              href="#projects"
              className="btn-primary-glow"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Explore Works</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.a>

            <motion.button
              onClick={handleCopyEmail}
              className="btn-secondary-glass"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              title="Click to copy email"
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span style={{ color: copied ? '#34d399' : 'inherit' }}>
                {copied ? "Copied to Clipboard ✓" : personal.email}
              </span>
            </motion.button>

            <motion.a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-glass"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              aria-label="GitHub Profile"
              style={{ padding: '12px 18px' }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          {/* Milestones Strip with Stagger */}
          <motion.div variants={itemVariants} className="hero-milestones-grid">
            {about.milestones.map((m, idx) => (
              <motion.div
                key={m.index}
                className="hero-milestone-card"
                whileHover={{ y: -4, borderColor: 'rgba(56, 189, 248, 0.4)' }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="hero-milestone-val"
                  style={{ color: statColors[idx % statColors.length] }}
                >
                  {m.metric}
                </div>
                <div className="hero-milestone-lbl">{m.label}</div>
                <div className="hero-milestone-detail">{m.detail}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
