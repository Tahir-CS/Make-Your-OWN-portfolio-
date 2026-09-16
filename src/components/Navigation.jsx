import React, { useState, useEffect } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { personal } = portfolioConfig;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        {/* Brand & Status */}
        <div className="nav-brand-group">
          <a href="#" className="nav-logo">
            tahir<span>.cs</span>
          </a>
          <div className="nav-status-badge">
            <span className="status-dot-pulse"></span>
            <span>Available</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${personal.email}`} className="nav-cta">
              Resume / Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          aria-label="Toggle Navigation Menu"
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

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href={`mailto:${personal.email}`}
            className="nav-cta"
            style={{ textAlign: 'center', marginTop: '8px' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Email Muhammad
          </a>
        </div>
      )}
    </header>
  );
}

