import React, { useState, useEffect, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

const architecturalModules = [
  {
    index: '01',
    title: 'Distributed Queues',
    note: 'Asynchronous Orchestration',
    body: 'Sub-50ms background task execution using BullMQ worker pools, Redis token-bucket rate limiters, and fault-tolerant event streams.',
    flow: 'Event → BullMQ → Redis'
  },
  {
    index: '02',
    title: 'Vector Search & DBs',
    note: 'Semantic & Time-Series',
    body: 'High-dimensional cosine similarity search via PostgreSQL + pgvector paired with TimescaleDB hypertable temporal data ingestion.',
    flow: 'Query → pgvector → Index'
  },
  {
    index: '03',
    title: 'Microservices & Infra',
    note: 'Containerized Runtimes',
    body: 'Deterministic Docker Compose isolation, type-safe Node.js/TypeScript service boundaries, and AWS deployment automation.',
    flow: 'Client → Gateway → Worker'
  }
];

export default function Skills() {
  const { skills } = portfolioConfig;
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const next = Math.min(1, Math.max(0, (viewport - rect.top) / (rect.height + viewport)));
      setProgress(next);
      setActive(Math.min(2, Math.floor(next * 3)));
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
            <p className="section-kicker">Technical Capabilities</p>
            <h2>
              Architectural Stacks &amp;<br />
              Systems Engineering.
            </h2>
          </div>
          <p className="section-copy">
            Engineering resilient backends capable of absorbing burst traffic. Specialized in asynchronous workers, cosine distance vector search, and containerized microservice boundaries.
          </p>
        </div>

        {/* 1:1 Interactive Mechanical Dial from AI Agency */}
        <div
          ref={ref}
          className="service-showcase"
          style={{ '--service-progress': progress }}
        >
          <div className="service-visual-panel">
            <img
              src="/assets/service-mechanical-dial.svg"
              alt="Mechanical strategy dial"
              className="service-dial-image"
            />
            <div className="service-glass-readout" aria-live="polite">
              <span>Active Architecture / {architecturalModules[active].index}</span>
              <strong>{architecturalModules[active].title}</strong>
              <small>{architecturalModules[active].note}</small>
              <div className="service-readout-flow" aria-hidden="true">
                <i>{architecturalModules[active].flow.split(' → ')[0]}</i>
                <b>→</b>
                <i>{architecturalModules[active].flow.split(' → ')[1]}</i>
                <b>→</b>
                <i>{architecturalModules[active].flow.split(' → ')[2]}</i>
              </div>
            </div>

            <div className="service-wheel" aria-hidden="true">
              <div className="service-wheel-ring" />
              <div className="service-wheel-ring service-wheel-ring-inner" />
              <div className="service-wheel-core">
                <small>system</small>
                <strong>0{active + 1}</strong>
              </div>
              {architecturalModules.map((item, index) => (
                <span
                  key={item.index}
                  className={`wheel-label wheel-label-${index + 1} ${active === index ? 'is-active' : ''}`}
                >
                  {item.index}
                </span>
              ))}
            </div>

            <div className="service-visual-caption">
              <span>Scroll / inspect architectural subsystem</span>
              <strong>{architecturalModules[active].note}</strong>
            </div>
          </div>

          <div className="service-card-stack">
            {architecturalModules.map((item, index) => (
              <div
                key={item.title}
                className={`service-box ${active === index ? 'is-active' : ''}`}
                onClick={() => setActive(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActive(index)}
                style={{ cursor: 'pointer' }}
              >
                <div className="service-box-top">
                  <span>{item.index}</span>
                  <span>{item.note}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="service-box-bottom">
                  <span>Subsystem focus</span>
                  <b>↗</b>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Category Full Technical Stack Matrix */}
        <div style={{ marginTop: '54px' }}>
          <span className="eyebrow" style={{ marginBottom: '14px' }}>Comprehensive Skills Matrix</span>
          <div className="skills-category-grid">
            {skillCategories.map(([categoryName, skillList], idx) => (
              <div className="skill-category-card" key={categoryName}>
                <span className="card-index">0{idx + 1} // DOMAIN</span>
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
      </div>
    </section>
  );
}
