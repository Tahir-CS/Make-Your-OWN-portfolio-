import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

const NAV_ITEMS = [
  { id: 'projects', name: 'Works', href: '#projects' },
  { id: 'about', name: 'Philosophy', href: '#about' },
  { id: 'experience', name: 'Experience', href: '#experience' },
  { id: 'skills', name: 'Directory', href: '#skills' },
  { id: 'certifications', name: 'Credentials', href: '#certifications' },
  { id: 'contact', name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('projects');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal } = portfolioConfig;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-apple">
        {/* Brand Group */}
        <a href="#" className="navbar-brand-link">
          <div className="navbar-logo-icon">
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="navbar-brand-subtitle">SYSTEMS &amp; BACKEND ARCHITECT</div>
            <div className="navbar-brand-name">Muhammad Tahir</div>
          </div>
        </a>

        {/* Center Segmented Nav Pills */}
        <div className="navbar-pills-group">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`navbar-pill-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right CTA Actions */}
        <div className="navbar-actions">
          <div className="apple-badge apple-badge-green" style={{ display: 'none', md: 'inline-flex' }}>
            <span className="status-dot-pulse"></span>
            <span style={{ fontSize: '0.72rem', letterSpacing: '0.02em' }}>Available</span>
          </div>

          <a href="#contact" className="apple-button" style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="navbar-mobile-toggle"
            aria-label="Toggle Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="navbar-mobile-menu">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="navbar-mobile-item"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="apple-button"
            style={{ width: '100%', textAlign: 'center', marginTop: '8px' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Email Directly ↗
          </a>
        </div>
      )}
    </header>
  );
}
