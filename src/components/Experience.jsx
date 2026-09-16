import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-index-header">
          <span className="section-index-num">// 03. INDUSTRY RECORD</span>
          <span className="section-index-tag">[ PROFESSIONAL TENURE ]</span>
        </div>

        <h2 className="section-heading-editorial">Commercial Experience</h2>
        <p className="section-lead-editorial">
          Hands-on backend systems contributions spanning API type-safety contracts, containerization, and data normalization.
        </p>

        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {experience.map((exp, index) => (
            <div key={index} className="experience-apple-card">
              <div className="exp-apple-header">
                <div>
                  <h3 className="exp-apple-role">{exp.title}</h3>
                  <div className="exp-apple-company">
                    {exp.company} — <span style={{ color: 'var(--muted-foreground)' }}>{exp.location}</span>
                  </div>
                </div>
                <span className="exp-apple-duration">{exp.duration}</span>
              </div>

              <p style={{ color: 'var(--body-text)', marginBottom: '16px', fontSize: '0.98rem', lineHeight: '1.65' }}>
                {exp.description}
              </p>

              {exp.highlights && (
                <ul className="exp-points-apple">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                {exp.skills.map((skill, i) => (
                  <span key={i} className="tech-pill-apple">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
