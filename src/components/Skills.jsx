import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Skills() {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Technical Capabilities</span>
        </div>
        <h2 className="section-heading">Stack & Architecture Competencies</h2>
        <p className="section-lead">
          Pragmatic technologies chosen for low latency, type safety, and resilient data processing.
        </p>

        <div className="skills-category-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category-card">
              <div className="skill-cat-title">
                <span style={{ color: 'var(--accent)' }}>//</span>
                <span>{category}</span>
              </div>
              <div className="skill-badges">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-badge-item">
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

