import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Certifications() {
  const { certifications } = portfolioConfig;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="section-padding">
      <div className="container">
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Verified Credentials</span>
        </div>
        <h2 className="section-heading">Certifications & Accreditations</h2>
        <p className="section-lead">
          Continuous professional training across backend architectures, cloud fundamentals, and DevOps pipelines.
        </p>

        <div className="certs-grid-modern">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card-modern">
              <div>
                <div className="cert-top">
                  <span className="cert-issuer-tag">{cert.issuer}</span>
                  {cert.date && <span className="cert-date-tag">{cert.date}</span>}
                </div>
                <h3 className="cert-title-text">{cert.title}</h3>
              </div>

              {cert.verifyUrl && cert.verifyUrl !== '#' && cert.verifyUrl !== '' && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-verify-link"
                >
                  <span>Verify Credential</span>
                  <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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

