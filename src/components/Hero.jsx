import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Hero() {
  const { personal, about } = portfolioConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const statColors = ['#0071e3', '#34c759', '#af52de', '#ff9500'];

  return (
    <section className="section-padding" style={{ paddingTop: '24px' }}>
      <div className="container">
        <div className="hero-apple-card">
          {/* Top Pill Badge */}
          <div className="hero-top-badge">
            <span className="status-dot-pulse"></span>
            <span>Enterprise Systems Architecture &amp; Distributed Queues</span>
          </div>

          {/* Monumental Name & Title */}
          <h1 className="hero-apple-title">
            {personal.fullName}
          </h1>

          <div className="hero-apple-role">
            Systems &amp; Backend Architect — {personal.roleSubtitle}
          </div>

          <p className="hero-apple-desc">
            {personal.bio}
          </p>

          {/* Action Row */}
          <div className="hero-actions-bar">
            <a href="#projects" className="apple-button">
              <span>Explore Works</span>
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <button
              onClick={handleCopyEmail}
              className="apple-button-secondary"
              title="Click to copy email address"
            >
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span>{copied ? "Copied to Clipboard ✓" : personal.email}</span>
            </button>

            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-secondary"
              aria-label="GitHub Profile"
              style={{ padding: '12px 18px' }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>

          {/* Floating Milestones Matrix */}
          <div className="hero-stats-matrix">
            {about.milestones.map((m, idx) => (
              <div key={m.index}>
                <div
                  className="hero-stat-value"
                  style={{ color: statColors[idx % statColors.length] }}
                >
                  {m.metric}
                </div>
                <div className="hero-stat-label">{m.label}</div>
                <div style={{ fontSize: '0.7rem', color: '#86868b', marginTop: '2px' }}>
                  {m.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
