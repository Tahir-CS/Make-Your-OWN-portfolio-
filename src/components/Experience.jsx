import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Professional History</span>
        </div>
        <h2 className="section-heading">Engineering Experience</h2>
        <p className="section-lead">
          Production contributions spanning backend architecture, microservices containerization, and type-safe APIs.
        </p>

        <div className="timeline-container">
          {experience.map((exp, index) => (
            <div key={index} className="exp-card-single">
              <div className="exp-header">
                <div>
                  <h3 className="exp-role-title">{exp.title}</h3>
                  <div className="exp-company-name">
                    {exp.company} • <span style={{ color: 'var(--text-muted)' }}>{exp.location}</span>
                  </div>
                </div>
                <span className="exp-period">{exp.duration}</span>
              </div>

              <p style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '0.96rem' }}>
                {exp.description}
              </p>

              {exp.highlights && (
                <ul className="exp-bullets">
                  {exp.highlights.map((highlight, hIdx) => (
                    <li key={hIdx}>{highlight}</li>
                  ))}
                </ul>
              )}

              <div className="exp-tags-row">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="tech-tag">
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

