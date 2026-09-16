import React from 'react';

const processLedger = [
  ['01', 'Diagnose', 'Map the workflow, data inputs, queue concurrency boundaries, exceptions and failure points.'],
  ['02', 'Design', 'Decide where vector reasoning wins, where deterministic rules execute, and where humans stay in control.'],
  ['03', 'Build', 'Ship the useful core, containerize microservices with Docker, and make system metrics observable.'],
  ['04', 'Improve', 'Refine prompts, logic, database indices and BullMQ throughput based on real usage—not assumptions.']
];

const stack = ['Node.js', 'TypeScript', 'BullMQ', 'Redis', 'PostgreSQL', 'pgvector', 'TimescaleDB', 'Docker', 'Express.js', 'React.js', 'Chrome MV3', 'Gemini API'];

export default function Experience() {
  return (
    <>
      <section id="process" className="editorial-section process-section">
        <div className="section-art section-art-process" aria-hidden="true">
          <img src="/assets/abstract-strategy-sculpture.svg" alt="" />
        </div>
        <div className="shell">
          <div className="section-intro-grid">
            <span className="section-number">04</span>
            <div>
              <p className="section-kicker">How we work</p>
              <h2>
                Map first.<br />
                Build second.
              </h2>
            </div>
            <p className="section-copy">
              We are not trying to automate everything. We are trying to remove the right friction without building a fragile black box.
            </p>
          </div>

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

      <section className="stack-section">
        <div className="section-art section-art-stack" aria-hidden="true">
          <img src="/assets/abstract-strategy-sculpture.svg" alt="" />
        </div>
        <div className="shell stack-editorial stack-editorial-assets">
          <span>Common stack</span>
          <div className="stack-asset-copy">
            <div className="stack-tags">
              {stack.map((item) => (
                <b key={item}>{item}</b>
              ))}
            </div>
            <p>Models are ingredients. The system around them is the product.</p>
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
