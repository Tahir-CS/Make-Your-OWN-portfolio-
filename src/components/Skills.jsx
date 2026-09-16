import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Skills() {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-index-header">
          <span className="section-index-num">// 04. CAPABILITIES DIRECTORY</span>
          <span className="section-index-tag">[ RUNTIME &amp; STORAGE ]</span>
        </div>

        <h2 className="section-heading-editorial">Technical Competencies</h2>
        <p className="section-lead-editorial">
          Deliberate technology choices optimized for sub-millisecond query execution, asynchronous worker throughput, and type safety.
        </p>

        <div className="skills-apple-grid">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <div key={category} className="skill-apple-card">
              <div className="skill-apple-title-bar">
                <span className="skill-apple-idx">0{idx + 1} //</span>
                <h3 className="skill-apple-heading">{category}</h3>
              </div>
              <div className="skill-apple-chips">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-apple-chip">
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
