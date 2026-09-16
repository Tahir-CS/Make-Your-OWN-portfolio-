import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' }
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { personal } = portfolioConfig;

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a href="#" className="brand" onClick={() => setOpen(false)} aria-label="Muhammad Tahir Portfolio">
          <span className="brand-mark"><span /></span>
          <span>{personal.name.split(' ')[0]}<span className="brand-muted"> / CS</span></span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="button button-small" onClick={() => setOpen(false)}>
            Get in touch <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
