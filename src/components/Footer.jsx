import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = portfolioConfig;

  return (
    <footer className="container">
      <div className="footer-glass-card">
        <div className="footer-top-row">
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div className="navbar-logo-icon" style={{ width: '32px', height: '32px', fontSize: '0.85rem' }}>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="footer-brand-heading">{personal.fullName}</span>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', maxWidth: '380px', lineHeight: '1.65' }}>
              Systems &amp; Backend Architect. Engineering resilient distributed queues, high-throughput ingestion pipelines, and pgvector semantic intelligence.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '18px' }}>
              <div className="glow-badge glow-badge-emerald">
                <span className="status-dot-pulse"></span>
                <span>All Systems Operational</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links-list">
              <li><a href="#projects" className="footer-link-anchor">Selected Works</a></li>
              <li><a href="#about" className="footer-link-anchor">System Philosophy</a></li>
              <li><a href="#experience" className="footer-link-anchor">Commercial Record</a></li>
              <li><a href="#skills" className="footer-link-anchor">Capabilities Directory</a></li>
              <li><a href="#certifications" className="footer-link-anchor">Industry Accreditations</a></li>
            </ul>
          </div>

          {/* Connect & Repos */}
          <div>
            <div className="footer-col-title">Connect &amp; Trust</div>
            <ul className="footer-links-list">
              {personal.social.github && (
                <li>
                  <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="footer-link-anchor">
                    GitHub Profile ↗
                  </a>
                </li>
              )}
              {personal.social.linkedin && (
                <li>
                  <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link-anchor">
                    LinkedIn Network ↗
                  </a>
                </li>
              )}
              {personal.email && (
                <li>
                  <a href={`mailto:${personal.email}`} className="footer-link-anchor">
                    Direct Email ↗
                  </a>
                </li>
              )}
              <li>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  UET Lahore • BS CS
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-flex">
          <div>
            © {currentYear} {personal.fullName} — All Rights Reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            LAHORE, PAKISTAN • PKT (UTC+5) • DETERMINISTIC SERVICES
          </div>
        </div>
      </div>
    </footer>
  );
}
