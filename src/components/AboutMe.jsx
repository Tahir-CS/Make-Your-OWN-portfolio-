import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

export default function AboutMe() {
  const { about, personal } = portfolioConfig;

  return (
    <section id="about" className="section">
      <div className="shell">
        <span className="eyebrow" style={{ marginBottom: '18px' }}>
          Engineering Profile &amp; Foundation
        </span>
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <h2>Systems Architect &amp; Computer Science Scholar.</h2>
          <p style={{ marginTop: '14px', fontSize: '1.02rem' }}>
            {about.overview}
          </p>
        </div>

        <div className="about-grid">
          <div className="academic-card">
            <span className="eyebrow" style={{ marginBottom: '16px' }}>
              Academic Foundation
            </span>
            <h3 style={{ fontSize: '1.8rem', marginTop: '12px' }}>
              {about.education.degree}
            </h3>
            <p style={{ color: 'var(--muted)', margin: '8px 0 20px', fontFamily: 'var(--font-mono)', fontSize: '0.88rem' }}>
              {about.education.institution} · <strong style={{ color: 'var(--acid)' }}>{about.education.cgpa}</strong> · {about.education.graduationDate}
            </p>

            <div style={{ marginTop: '24px' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dim)', display: 'block', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                Core Technical Coursework
              </span>
              <div className="skill-chips">
                {about.education.coursework.map((c, i) => (
                  <span key={i} className="skill-chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--acid)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                Core Philosophy
              </span>
              <p style={{ fontSize: '0.94rem', fontStyle: 'italic', color: 'var(--text)' }}>
                "{about.statement}"
              </p>
            </div>
          </div>

          <div className="profile-card">
            <div className="profile-header">
              <img
                src={profileImage}
                alt="Muhammad Tahir"
                className="profile-photo"
              />
              <div>
                <span className="eyebrow" style={{ marginBottom: '6px' }}>
                  {personal.status}
                </span>
                <h3 style={{ fontSize: '1.45rem', marginTop: '4px' }}>
                  {personal.fullName}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                  📍 {personal.location}
                </p>
              </div>
            </div>

            <div style={{ marginTop: '28px', paddingTop: '24px', borderTop: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dim)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                Specialized In
              </span>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--muted)' }}>
                {personal.roleSubtitle}. Treating backend architecture with an emphasis on determinism, sub-millisecond efficiency, and zero data loss under load.
              </p>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              {personal.social.github && (
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-small button-ghost"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  GitHub Profile <span>↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
