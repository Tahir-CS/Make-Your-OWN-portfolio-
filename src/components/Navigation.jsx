import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal } = portfolioConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { idx: '01', name: 'Works', href: '#projects' },
    { idx: '02', name: 'About', href: '#about' },
    { idx: '03', name: 'Experience', href: '#experience' },
    { idx: '04', name: 'Stack', href: '#skills' },
    { idx: '05', name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        {/* Brand & Availability */}
        <div className="nav-brand-group">
          <a href="#" className="nav-logo-awwwards">
            TAHIR <span>// ARCHITECT</span>
          </a>
          <div className="nav-status-pill">
            <span className="status-dot-pulse"></span>
            <span>AVAILABLE</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="nav-link-item">
                <span className="nav-link-idx">{item.idx}</span>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${personal.email}`} className="nav-cta-pill">
              <span>Initiate Contact</span>
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="mobile-menu-btn"
          aria-label="Toggle Navigation Menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span style={{ color: 'var(--accent)', marginRight: '8px', fontFamily: 'var(--font-mono)' }}>
                {item.idx}
              </span>
              {item.name}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="nav-cta-pill"
            style={{ textAlign: 'center', justifyContent: 'center', marginTop: '12px' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Email Muhammad ↗
          </a>
        </div>
      )}
    </header>
  );
}


