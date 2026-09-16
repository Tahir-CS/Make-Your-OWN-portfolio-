import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Skills() {
  const { skills } = portfolioConfig;
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section section-muted">
      <div className="shell">
        <span className="eyebrow" style={{ marginBottom: '18px' }}>
          Core Technical Competencies
        </span>
        <div style={{ maxWidth: '780px', marginBottom: '40px' }}>
          <h2>Architectural Stacks &amp; Systems.</h2>
          <p style={{ marginTop: '14px', fontSize: '1.02rem' }}>
            Engineering resilient backends capable of absorbing burst traffic. Specialized in asynchronous workers, cosine distance vector search, and containerized microservice boundaries.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map(([categoryName, skillList], idx) => (
            <div className="skill-card" key={categoryName}>
              <div className="skill-card-head">
                <span>0{idx + 1} // DOMAIN</span>
                <span style={{ fontSize: '0.68rem', color: 'var(--dim)' }}>
                  {skillList.length} Technologies
                </span>
              </div>
              <h3>{categoryName}</h3>
              <div className="skill-chips">
                {skillList.map((skill) => (
                  <span className="skill-chip" key={skill}>
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
