import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Footer() {
  const { personal } = portfolioConfig;

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <a href="#" className="brand" aria-label="Muhammad Tahir">
            <span className="brand-mark"><span /></span>
            <span>{personal.name.split(' ')[0]}<span className="brand-muted"> / CS</span></span>
          </a>
          <p style={{ marginTop: '16px', maxWidth: '380px', fontSize: '0.88rem', lineHeight: '1.6', color: 'var(--muted)' }}>
            Engineering sub-50ms distributed pipelines, asynchronous worker pools, and pgvector semantic search systems.
          </p>
        </div>

        <div className="footer-columns">
          <div>
            <strong>Architecture</strong>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Systems</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Certifications</a>
          </div>

          <div>
            <strong>Connect</strong>
            {personal.social.github && (
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {personal.social.linkedin && (
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            )}
            <a href={`mailto:${personal.email}`}>Email</a>
          </div>
        </div>
      </div>

      <div className="shell footer-sub">
        <span>© {new Date().getFullYear()} {personal.fullName}. Built with precision. All rights reserved.</span>
        <span>UET Lahore · Systems &amp; Backend Engineering</span>
      </div>
    </footer>
  );
}
