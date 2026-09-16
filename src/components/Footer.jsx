import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioConfig;

  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <a href="#" className="brand" aria-label="Tahir AI home">
              <span className="brand-mark"><span /></span>
              <span>Tahir<span className="brand-muted">/AI</span></span>
            </a>
            <p className="footer-note">
              Tahir AI is an independent AI systems studio. We design and build automation, bounded agents, and custom backend systems around real operational leverage.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span className="footer-label">Navigation</span>
              <a href="#services">Services</a>
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>

            <div>
              <span className="footer-label">Connect</span>
              {personal.social.github && (
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              )}
              {personal.social.linkedin && (
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              )}
              <a href={`mailto:${personal.email}`}>{personal.email}</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {currentYear} Tahir AI. All rights reserved.</span>
          <span>Useful intelligence, quietly embedded.</span>
        </div>
      </div>
    </footer>
  );
}
