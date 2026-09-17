import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

const NAV_ITEMS = [
  { id: 'projects', name: 'Projects', href: '#projects' },
  { id: 'about', name: 'About Me', href: '#about' },
  { id: 'experience', name: 'Experience', href: '#experience' },
  { id: 'skills', name: 'Skills', href: '#skills' },
  { id: 'certifications', name: 'Certificates', href: '#certifications' },
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
    <motion.header
      className="navbar-wrapper"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="navbar-frosted">
        {/* Brand Group */}
        <a href="#" className="navbar-brand-link">
          <div className="navbar-logo-icon">
            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <div className="navbar-brand-subtitle">SOFTWARE &amp; BACKEND ENGINEER</div>
            <div className="navbar-brand-name">{personal.fullName}</div>
          </div>
        </a>

        {/* Center Segmented Nav Pills */}
        <div className="navbar-links-center">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-pill-item ${isActive ? 'nav-pill-active' : ''}`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="nav-active-bubble"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="nav-item-text">{item.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="navbar-cta-right">
          <a href="#contact" className="btn-primary-glow" style={{ padding: '8px 16px', fontSize: '0.82rem' }}>
            <span>Contact</span>
            <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="navbar-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
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

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="navbar-mobile-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.name}</span>
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
