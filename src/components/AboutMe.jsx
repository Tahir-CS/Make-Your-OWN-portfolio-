import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

const principles = [
  { title: 'Useful beats impressive.', body: 'A quiet workflow that saves attention every day is more valuable than a flashy demo nobody trusts after week two.' },
  { title: 'Systems over prompts.', body: 'Prompt quality matters, but reliable systems also need queue backpressure, data validation, retries, and thoughtful observability.' },
  { title: 'Human control is a feature.', body: 'Consequential decisions must have explicit review checkpoints. Good automation knows exactly where its authority ends.' },
  { title: 'Earn more autonomy.', body: 'Start with a bounded task, verify latency and deterministic throughput, and expand boundaries only when warranted.' }
];

export default function AboutMe() {
  const { about } = portfolioConfig;

  return (
    <section id="about" className="section" style={{ borderTop: '1px solid var(--hair)' }}>
      <div className="shell">
        <span className="eyebrow" style={{ marginBottom: '24px' }}>Studio Positioning</span>
        <div className="split-heading">
          <h2>Engineering sub-50ms distributed pipelines &amp; intelligent backends.</h2>
          <p>
            Founded by Muhammad Tahir, Computer Science scholar at UET Lahore. We turn messy, high-latency workflows into clean, deterministic backend microservices.
          </p>
        </div>

        {/* Operating Principles Grid */}
        <div className="capability-grid" style={{ marginBottom: '64px' }}>
          {principles.map((p, idx) => (
            <article className="capability-card" key={idx}>
              <span className="card-index">0{idx + 1} // PRINCIPLE</span>
              <h3 style={{ marginTop: '54px' }}>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>

        {/* Academic & Founder Split */}
        <div className="about-split-grid">
          <div className="about-academic-panel">
            <span className="eyebrow" style={{ marginBottom: '16px' }}>Academic Foundation</span>
            <h3 style={{ fontSize: '1.6rem', marginTop: '12px' }}>{about.education.degree}</h3>
            <p style={{ color: 'var(--dim)', margin: '6px 0 18px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
              {about.education.institution} · <strong style={{ color: 'var(--acid)' }}>{about.education.cgpa}</strong>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '16px' }}>
              {about.education.coursework.map((c, i) => (
                <span key={i} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div style={{ border: '1px solid var(--line)', borderRadius: '20px', padding: '20px', background: 'var(--panel)', display: 'flex', gap: '20px', alignItems: 'center' }}>
            <img
              src={profileImage}
              alt="Muhammad Tahir"
              style={{ width: '110px', height: '110px', borderRadius: '14px', objectFit: 'cover', objectPosition: 'center 20%' }}
            />
            <div>
              <span className="eyebrow" style={{ fontSize: '0.62rem' }}>Founder-Led Studio</span>
              <h4 style={{ fontSize: '1.25rem', margin: '6px 0 4px', color: 'var(--text)' }}>Muhammad Tahir</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>
                Direct ownership. No sales handoff layers between workflow diagnosis and engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
