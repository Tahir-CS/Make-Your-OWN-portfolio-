import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
    <section id="certifications" className="section section-muted">
      <div className="shell">
        <span className="eyebrow" style={{ marginBottom: '18px' }}>
          Industry Accreditations
        </span>
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <h2>Verified Industry Credentials.</h2>
          <p style={{ marginTop: '14px', fontSize: '1.02rem' }}>
            Rigorous certifications across backend architecture, cloud engineering, and operational DevOps pipelines.
          </p>
        </div>

        <div className="certs-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card"
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCert(cert)}
            >
              <div>
                <div className="cert-top">
                  <span className="cert-badge">{cert.issuer}</span>
                  {cert.date && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: 'var(--dim)' }}>
                      {cert.date}
                    </span>
                  )}
                </div>
                <h3>{cert.title}</h3>
              </div>

              {cert.image && (
                <div style={{ marginTop: '16px', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--line)', background: 'rgba(0,0,0,0.4)' }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    style={{ width: '100%', height: '140px', objectFit: 'cover' }}
                  />
                </div>
              )}

              <div className="cert-preview-trigger">
                <span>Inspect Credential</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div
            className="modal-backdrop"
            onClick={() => setSelectedCert(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '16px', borderBottom: '1px solid var(--line)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="cert-badge">{selectedCert.issuer}</span>
                  <span style={{ fontWeight: 600, color: 'var(--text)', fontSize: '1.1rem' }}>
                    {selectedCert.title}
                  </span>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setSelectedCert(null)}
                  aria-label="Close certificate preview"
                >
                  ✕
                </button>
              </div>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="modal-image"
              />
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
