import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Certifications() {
  const { certifications } = portfolioConfig;

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
              </div>

              {cert.verifyUrl && cert.verifyUrl !== '#' && cert.verifyUrl !== '' && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link-awwwards"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem' }}
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
    </section>
  );
}


