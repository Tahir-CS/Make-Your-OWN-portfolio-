import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

const processLedger = [
  ['01', 'Diagnose', 'Map bottlenecks, concurrency constraints, database queries, and potential failure points.'],
  ['02', 'Design', 'Decide where async queues win, where pgvector similarity executes, and where rate limits protect upstream APIs.'],
  ['03', 'Build', 'Containerize with Docker, implement type-safe API boundaries, and establish structured logging.'],
  ['04', 'Optimize', 'Benchmark P99 latencies, optimize database indexes, and tune worker thread concurrency.']
];

const commonStack = [
  'Node.js', 'TypeScript', 'BullMQ', 'Redis', 'PostgreSQL',
  'pgvector', 'TimescaleDB', 'Docker', 'Express.js', 'React.js', 'C++', 'Gemini API'
];

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <>
      <section id="experience" className="editorial-section process-section">
        <div className="section-art section-art-process" aria-hidden="true">
          <img src="/assets/abstract-strategy-sculpture.svg" alt="" />
        </div>
        <div className="shell">
          <div className="section-intro-grid">
            <span className="section-number">04</span>
            <div>
              <p className="section-kicker">Experience &amp; Process</p>
              <h2>
                Industry Work &amp;<br />
                Engineering Lifecycle.
              </h2>
            </div>
            <p className="section-copy">
              Delivering deterministic backend systems. From architectural discovery to production containerization and query optimization.
            </p>
          </div>

          {/* Experience Cards */}
          <div style={{ marginBottom: '60px' }}>
            {experience.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--panel)',
                  border: '1px solid var(--line)',
                  borderRadius: 'var(--radius)',
                  padding: '36px',
                  marginBottom: '24px',
                  boxShadow: 'var(--shadow)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
                  <div>
                    <span className="eyebrow" style={{ marginBottom: '8px' }}>
                      {exp.type}
                    </span>
                    <h3 style={{ fontSize: '1.6rem', color: 'var(--text)', margin: '6px 0 2px' }}>
                      {exp.title} <span style={{ color: 'var(--acid)', fontWeight: 400 }}>@ {exp.company}</span>
                    </h3>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '0.82rem', color: 'var(--muted)', background: 'rgba(255,255,255,0.06)', padding: '6px 12px', borderRadius: '8px' }}>
                      {exp.duration}
                    </span>
                    <div style={{ fontSize: '0.78rem', color: 'var(--dim)', marginTop: '6px' }}>{exp.location}</div>
                  </div>
                </div>

                <p style={{ color: 'var(--muted)', fontSize: '0.98rem', marginBottom: '20px', lineHeight: '1.7' }}>
                  {exp.description}
                </p>

                <ul className="project-architecture-list" style={{ marginBottom: '24px' }}>
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>

                <div className="skill-chips">
                  {exp.skills.map((s) => (
                    <span className="skill-chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Methodology Ledger */}
          <div className="process-ledger">
            {processLedger.map(([n, title, body]) => (
              <div className="process-row" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Stack Banner */}
      <section className="stack-section">
        <div className="section-art section-art-stack" aria-hidden="true">
          <img src="/assets/abstract-strategy-sculpture.svg" alt="" />
        </div>
        <div className="shell stack-editorial stack-editorial-assets">
          <span>Common stack</span>
          <div className="stack-asset-copy">
            <div className="stack-tags">
              {commonStack.map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
            <p>Frameworks and databases are tools. Rigorous systems engineering is the product.</p>
          </div>
          <div className="stack-sculpture-wrap" aria-hidden="true">
            <img
              src="/assets/abstract-strategy-sculpture.svg"
              alt=""
              className="stack-sculpture-image"
            />
          </div>
        </div>
      </section>
    </>
  );
}
