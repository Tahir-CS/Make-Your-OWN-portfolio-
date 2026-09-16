import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioConfig;

  return (
    <footer className="site-footer-awwwards">
      <div className="container footer-awwwards-inner">
        <div>
          <div className="footer-brand-title">
            © {currentYear} {personal.fullName} — ARCHITECT
          </div>
          <div className="footer-timezone-spec">
            LAHORE, PAKISTAN • PKT (UTC+5) • DETERMINISTIC BACKENDS
          </div>
        </div>

        <div className="footer-links-row">
          {personal.social.github && (
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-awwwards"
              aria-label="GitHub"
            >
              GitHub ↗
            </a>
          )}
          {personal.social.linkedin && (
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link-awwwards"
              aria-label="LinkedIn"
            >
              LinkedIn ↗
            </a>
          )}
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              className="footer-link-awwwards"
              aria-label="Email"
            >
              Email ↗
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}


