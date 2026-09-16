import React, { useState } from 'react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' }
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a href="#" className="brand" onClick={() => setOpen(false)} aria-label="Tahir AI home">
          <span className="brand-mark"><span /></span>
          <span>Tahir<span className="brand-muted">/AI</span></span>
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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="button button-small" onClick={() => setOpen(false)}>
            Start a project <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
