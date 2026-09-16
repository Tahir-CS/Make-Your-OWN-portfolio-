import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

export default function Certifications() {
  const { certifications } = portfolioConfig;
  const [selectedCert, setSelectedCert] = useState(null);

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

  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="apple-label">Accreditations &amp; Credentials</span>
          <h2 className="apple-monument-h2">Verified Credentials.</h2>
          <p className="apple-lead-p">
            Specialized curricula verified across backend architecture, cloud engineering, and operational DevOps pipelines.
          </p>
        </motion.div>

        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card-dark"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <div>
                <div className="cert-top-bar">
                  <span className="glow-badge glow-badge-cyan">{cert.issuer}</span>
                  {cert.date && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {cert.date}
                    </span>
                  )}
                </div>
                <h3 className="cert-title-dark">{cert.title}</h3>

                {cert.image && (
                  <div
                    className="cert-preview-frame"
                    onClick={() => setSelectedCert(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCert(cert)}
                    title={`Click to preview ${cert.title}`}
                  >
                    <img src={cert.image} alt={cert.title} loading="lazy" />
                    <div className="cert-preview-overlay">
                      <span className="cert-preview-badge">Inspect Credential</span>
                    </div>
                  </div>
                )}
              </div>

              {cert.verifyUrl && cert.verifyUrl !== '#' && cert.verifyUrl !== '' && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary-glass"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '8px 16px', marginTop: 'auto' }}
                >
                  <span>Verify Credential</span>
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </motion.div>
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
