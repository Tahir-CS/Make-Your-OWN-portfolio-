import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

const processSteps = [
  {
    num: '01',
    title: 'Diagnose',
    desc: 'Map concurrency constraints, database queries, and potential system bottlenecks.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Decide where async queues win, where pgvector similarity executes, and rate limits protect APIs.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Containerize with Docker, enforce type-safe API contracts, and establish telemetry logging.'
  },
  {
    num: '04',
    title: 'Optimize',
    desc: 'Benchmark P99 latencies under load, optimize database indexes, and tune concurrency.'
  }
];

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="section section-muted">
      <div className="shell">
        <span className="eyebrow" style={{ marginBottom: '18px' }}>
          Industry Engineering Experience
        </span>
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <h2>Professional Work &amp; Engineering Lifecycle.</h2>
          <p style={{ marginTop: '14px', fontSize: '1.02rem' }}>
            Delivering deterministic backend systems. From architectural discovery to production containerization and query optimization.
          </p>
        </div>

        {/* Timeline Architecture */}
        <div className="timeline">
          {experience.map((exp, idx) => (
            <div className="timeline-row" key={idx}>
              <div className="timeline-meta">
                <span>{exp.duration}</span>
                <strong>{exp.company}</strong>
                <span style={{ marginTop: '4px' }}>{exp.location} · {exp.type}</span>
              </div>

              <div className="timeline-body">
                <h2>
                  {exp.title} <span>@ {exp.company}</span>
                </h2>
                <p>{exp.description}</p>

                <ul className="timeline-bullets">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="proof-meta">
                  {exp.skills.map((s) => (
                    <span className="tag" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Step Engineering Lifecycle */}
        <div style={{ marginTop: '54px' }}>
          <span className="eyebrow" style={{ marginBottom: '20px' }}>
            Methodology &amp; Standards
          </span>
          <div className="process-mini">
            {processSteps.map((step) => (
              <div className="process-step" key={step.num}>
                <span>{step.num} // LIFECYCLE</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
