import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

export default function Certifications() {
  const { certifications } = portfolioConfig;
  const [selectedCert, setSelectedCert] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  if (!certifications || certifications.length === 0) return null;

  // Quadruple items to ensure a perfectly seamless, infinite marquee loop
  const marqueeItems = [...certifications, ...certifications, ...certifications, ...certifications];

  return (
    <section id="certifications" className="section-padding certs-section-wrapper">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="apple-label">Verified Credentials</span>
          <h2 className="apple-monument-h2">Certifications &amp; Accreditations.</h2>
          <p className="apple-lead-p">
            Continuous moving credentials carousel. Hover to pause, click to inspect in high resolution.
          </p>
        </motion.div>
      </div>

      {/* Full-Bleed Continuous Marquee Carousel (Left to Right) */}
      <div
        className="certs-marquee-viewport"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={`certs-marquee-track ${isPaused ? 'marquee-paused' : ''}`}>
          {marqueeItems.map((cert, index) => (
            <div
              key={index}
              className="cert-card-big"
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCert(cert)}
              title={`Click to inspect ${cert.title}`}
            >
              <div className="cert-big-top-bar">
                <span className="glow-badge glow-badge-cyan">{cert.issuer}</span>
                {cert.date && <span className="cert-year-tag">{cert.date}</span>}
              </div>

              <h3 className="cert-big-title">{cert.title}</h3>

              {cert.image && (
                <div className="cert-big-image-frame">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="cert-big-img"
                  />
                  <div className="cert-big-overlay">
                    <span className="cert-inspect-chip">Click to View Certificate ↗</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-backdrop"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="cert-modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="cert-modal-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="glow-badge glow-badge-cyan">{selectedCert.issuer}</span>
                  <span style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>
                    {selectedCert.title}
                  </span>
                </div>
                <button
                  type="button"
                  className="cert-modal-close-btn"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate preview"
                >
                  ✕
                </button>
              </div>
              <div className="cert-modal-body">
                <img src={selectedCert.image} alt={selectedCert.title} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
