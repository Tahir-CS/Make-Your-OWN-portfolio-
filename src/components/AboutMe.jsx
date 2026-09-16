import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

export default function AboutMe() {
  const { about, personal } = portfolioConfig;

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="shell">
        <span className="eyebrow" style={{ marginBottom: '24px' }}>Engineering Profile</span>
        <div className="split-heading">
          <h2>Systems Architect &amp; Computer Science Scholar.</h2>
          <p>{about.overview}</p>
        </div>

        {/* Milestones Grid */}
        <div className="capability-grid" style={{ marginBottom: '64px' }}>
          {about.milestones.map((m, idx) => (
            <article className="capability-card" key={idx}>
              <span className="card-index">{m.index} // BENCHMARK</span>
              <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--acid)', marginTop: '24px', letterSpacing: '-0.03em' }}>
                {m.metric}
              </div>
              <h3 style={{ marginTop: '8px', fontSize: '1.15rem' }}>{m.label}</h3>
              <p>{m.detail}</p>
            </article>
          ))}
        </div>

        {/* Academic Foundation & Profile Portrait */}
        <div className="about-split-grid">
          <div className="about-academic-panel" style={{ background: 'var(--panel)', border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '32px' }}>
            <span className="eyebrow" style={{ marginBottom: '16px' }}>Academic Foundation</span>
            <h3 style={{ fontSize: '1.6rem', marginTop: '12px', color: 'var(--text)' }}>{about.education.degree}</h3>
            <p style={{ color: 'var(--muted)', margin: '6px 0 18px', fontFamily: 'monospace', fontSize: '0.88rem' }}>
              {about.education.institution} · <strong style={{ color: 'var(--acid)' }}>{about.education.cgpa}</strong> · <span>{about.education.graduationDate}</span>
            </p>
            <div style={{ marginTop: '20px' }}>
              <span style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dim)', display: 'block', marginBottom: '10px' }}>
                Key Rigorous Coursework
              </span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {about.education.coursework.map((c, i) => (
                  <span key={i} className="skill-chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid var(--line)', borderRadius: 'var(--radius)', padding: '28px', background: 'var(--panel)', display: 'flex', gap: '24px', alignItems: 'center' }}>
            <img
              src={profileImage}
              alt="Muhammad Tahir"
              style={{ width: '120px', height: '120px', borderRadius: '16px', objectFit: 'cover', objectPosition: 'center 20%', border: '1px solid rgba(255,255,255,0.1)' }}
            />
            <div>
              <span className="eyebrow" style={{ marginBottom: '6px' }}>{personal.status}</span>
              <h3 style={{ fontSize: '1.4rem', margin: '4px 0', color: 'var(--text)' }}>{personal.fullName}</h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--muted)', lineHeight: '1.5' }}>
                {personal.roleSubtitle}
              </p>
              <div style={{ marginTop: '12px', fontSize: '0.8rem', color: 'var(--dim)', fontFamily: 'monospace' }}>
                📍 {personal.location}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
