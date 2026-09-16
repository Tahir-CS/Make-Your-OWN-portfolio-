import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioConfig;

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <div className="footer-name">
            © {currentYear} {personal.fullName} • Systems & Backend Engineer
          </div>
          <div className="footer-time">
            Lahore, Pakistan (PKT / UTC+5) • Built with React & Vite
          </div>
        </div>

        <div className="footer-social-links">
          {personal.social.github && (
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              GitHub
            </a>
          )}
          {personal.social.linkedin && (
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          )}
          {personal.email && (
            <a
              href={`mailto:${personal.email}`}
              className="footer-social-link"
              aria-label="Email"
            >
              Email
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

