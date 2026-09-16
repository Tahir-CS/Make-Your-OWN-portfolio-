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
            <div key={index} className="experience-editorial-row">
              <div className="exp-header-row">
                <div>
                  <h3 className="exp-role-editorial">{exp.title}</h3>
                  <div className="exp-company-editorial">
                    {exp.company} — <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span>
                  </div>
                </div>
                <span className="exp-duration-badge">{exp.duration}</span>
              </div>

              <p style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.02rem', lineHeight: '1.7' }}>
                {exp.description}
              </p>

              {exp.highlights && (
                <ul className="exp-points-editorial">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                {exp.skills.map((skill, i) => (
                  <span key={i} className="tech-pill">
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


