import React, { useState, useEffect } from 'react';
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
        <div className="section-index-header">
          <span className="section-index-num">// 05. ACCREDITATIONS</span>
          <span className="section-index-tag">[ FORMAL CREDENTIALS ]</span>
        </div>

        <h2 className="section-heading-editorial">Industry Credentials</h2>
        <p className="section-lead-editorial">
          Specialized curricula verified across backend architecture, cloud engineering, and operational DevOps pipelines.
        </p>

        <div className="certs-apple-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-apple-card">
              <div>
                <div className="cert-top-bar-apple">
                  <span className="apple-badge apple-badge-blue">{cert.issuer}</span>
                  {cert.date && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--muted-foreground)' }}>
                      {cert.date}
                    </span>
                  )}
                </div>
                <h3 className="cert-title-apple">{cert.title}</h3>

                {cert.image && (
                  <div
                    className="cert-preview-frame-apple"
                    onClick={() => setSelectedCert(cert)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setSelectedCert(cert)}
                    title={`Click to preview ${cert.title}`}
                  >
                    <img src={cert.image} alt={cert.title} loading="lazy" />
                    <div className="cert-preview-overlay-apple">
                      <span className="cert-preview-badge-apple">Inspect Credential</span>
                    </div>
                  </div>
                )}
              </div>

              {cert.verifyUrl && cert.verifyUrl !== '#' && cert.verifyUrl !== '' && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-secondary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.8rem', padding: '8px 16px', marginTop: 'auto' }}
                >
                  <span>Verify Credential</span>
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      {selectedCert && (
        <div
          className="cert-modal-backdrop-apple"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="cert-modal-content-apple" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header-apple">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="apple-badge apple-badge-blue">{selectedCert.issuer}</span>
                <span style={{ fontWeight: 700, color: '#1d1d1f', fontSize: '0.98rem' }}>
                  {selectedCert.title}
                </span>
              </div>
              <button
                type="button"
                className="cert-modal-close-apple"
                onClick={() => setSelectedCert(null)}
                aria-label="Close certificate preview"
              >
                ✕
              </button>
            </div>
            <div className="cert-modal-body-apple">
              <img src={selectedCert.image} alt={selectedCert.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
