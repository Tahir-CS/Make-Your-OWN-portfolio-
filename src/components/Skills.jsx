import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Skills() {
  const { skills } = portfolioConfig;
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const next = Math.min(1, Math.max(0, (viewport - rect.top) / (rect.height + viewport)));
      setProgress(next);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const skillCategories = Object.entries(skills);

  return (
    <section id="skills" className="editorial-section services-section">
      <div className="section-art section-art-services" aria-hidden="true">
        <img src="/assets/service-mechanical-dial.svg" alt="" />
      </div>

      <div className="shell">
        <div className="section-intro-grid">
          <span className="section-number">02</span>
          <div>
            <p className="section-kicker">Technical Expertise</p>
            <h2>Architectural Stacks &amp; Systems.</h2>
          </div>
          <p className="section-copy">
            Engineering resilient backends capable of absorbing burst traffic. Specialized in asynchronous workers, cosine distance vector search, and containerized microservice boundaries.
          </p>
        </div>

        {/* Dynamic Telemetry Showcase */}
        <div
          ref={ref}
          className="service-showcase"
          style={{ '--service-progress': progress, marginBottom: '40px' }}
        >
          <div className="service-visual-panel">
            <img
              src="/assets/service-mechanical-dial.svg"
              alt="Mechanical strategy dial"
              className="service-dial-image"
            />
            <div className="service-glass-readout" aria-live="polite">
              <span>Engine Status / Node Cluster</span>
              <strong>pgvector · BullMQ · TimescaleDB</strong>
              <small>Sub-50ms job execution · 0% packet drop · Token-bucket limited</small>
            </div>
          </div>
        </div>

        {/* 5-Category Matrix */}
        <div className="skills-category-grid">
          {skillCategories.map(([categoryName, skillList], idx) => (
            <div className="skill-category-card" key={categoryName}>
              <span className="card-index">0{idx + 1} // STACK</span>
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
