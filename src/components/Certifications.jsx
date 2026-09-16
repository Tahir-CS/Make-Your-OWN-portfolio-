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

        <div className="certs-editorial-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-editorial-card">
              <div>
                <div className="cert-top-bar">
                  <span className="cert-issuer-badge">{cert.issuer}</span>
                  {cert.date && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {cert.date}
                    </span>
                  )}
                </div>
                <h3 className="cert-title-editorial">{cert.title}</h3>
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
                  className="footer-link-awwwards"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', marginTop: 'auto' }}
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
          className="cert-modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span className="cert-issuer-badge">{selectedCert.issuer}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', fontSize: '0.95rem' }}>
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
          </div>
        </div>
      )}
    </section>
  );
}


