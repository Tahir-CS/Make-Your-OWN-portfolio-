import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioConfig;

  return (
    <footer className="container">
      <div className="footer-apple-card">
        <div className="footer-top-grid-apple">
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div className="navbar-logo-icon" style={{ width: '32px', height: '32px', fontSize: '0.9rem' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="footer-brand-title-apple">{personal.fullName}</span>
            </div>
            <p className="footer-brand-desc-apple">
              Systems &amp; Backend Architect. Engineering resilient distributed queues, high-throughput ingestion pipelines, and pgvector semantic intelligence.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
              <div className="apple-badge apple-badge-green">
                <span className="status-dot-pulse"></span>
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title-apple">Navigation</div>
            <ul className="footer-col-links-apple">
              <li><a href="#projects" className="footer-link-item-apple">Selected Works</a></li>
              <li><a href="#about" className="footer-link-item-apple">System Philosophy</a></li>
              <li><a href="#experience" className="footer-link-item-apple">Commercial Record</a></li>
              <li><a href="#skills" className="footer-link-item-apple">Capabilities Directory</a></li>
              <li><a href="#certifications" className="footer-link-item-apple">Industry Accreditations</a></li>
            </ul>
          </div>

          {/* Connect & Repos */}
          <div>
            <div className="footer-col-title-apple">Connect &amp; Trust</div>
            <ul className="footer-col-links-apple">
              {personal.social.github && (
                <li>
                  <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="footer-link-item-apple">
                    GitHub Profile ↗
                  </a>
                </li>
              )}
              {personal.social.linkedin && (
                <li>
                  <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link-item-apple">
                    LinkedIn Network ↗
                  </a>
                </li>
              )}
              {personal.email && (
                <li>
                  <a href={`mailto:${personal.email}`} className="footer-link-item-apple">
                    Direct Email ↗
                  </a>
                </li>
              )}
              <li>
                <span style={{ fontSize: '0.82rem', color: 'var(--muted-foreground)' }}>
                  UET Lahore • BS CS
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar-apple">
          <div>
            © {currentYear} {personal.fullName} — All Rights Reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
            LAHORE, PAKISTAN • PKT (UTC+5) • DETERMINISTIC SERVICES
          </div>
        </div>
      </div>
    </footer>
  );
}
