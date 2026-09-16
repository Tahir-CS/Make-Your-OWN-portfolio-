import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="editorial-section work-section">
      <div className="section-art section-art-work" aria-hidden="true">
        <img src="/assets/workflow-impact-board.svg" alt="" />
      </div>

      <div className="shell">
        <div className="section-intro-grid dark-intro">
          <span className="section-number">03</span>
          <div>
            <p className="section-kicker">Selected Systems</p>
            <h2>
              Distributed Architectures &amp;<br />
              High-Throughput Pipelines.
            </h2>
          </div>
          <p className="section-copy">
            Demonstrating deep backend engineering, distributed queue orchestration, and vector indexing. Built for resilience under extreme load.
          </p>
        </div>

        {/* Featured Visual Architecture Banner */}
        <div className="work-asset-banner">
          <div className="work-asset-copy">
            <span>Reference Architecture / 001</span>
            <h3>
              From ingestion<br />
              to vector search.
            </h3>
            <p>
              Inputs enter distributed worker queues, Redis token-bucket algorithms prevent exhaustion, and high-dimensional embeddings are indexed in PostgreSQL hypertables.
            </p>
          </div>

          <div className="work-asset-image-wrap">
            <img
              src="/assets/workflow-impact-board.svg"
              alt="Layered architecture diagram"
              className="work-dashboard-image"
            />
            <div className="work-interface-card work-interface-card-status" aria-hidden="true">
              <span>Cluster State</span>
              <strong>Operational</strong>
              <small>Worker latency &lt;50ms</small>
            </div>
            <div className="work-interface-card work-interface-card-signal" aria-hidden="true">
              <span>Active Services</span>
              <strong>04 Nodes</strong>
              <small>BullMQ · TimescaleDB · pgvector · Docker</small>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="work-editorial-grid">
          {/* 01: Career OS - Primary Large Feature Card */}
          {projects[0] && (
            <article className="work-feature work-feature-primary">
              <div className="work-label-row">
                <span>System {projects[0].index}</span>
                <span>{projects[0].badge}</span>
              </div>

              <div className="work-visual" aria-hidden="true">
                <div className="work-sheet sheet-a">
                  <span>Job Queue</span>
                  <strong>BullMQ Worker</strong>
                  <small>latency / &lt;50ms</small>
                </div>
                <div className="work-sheet sheet-b">
                  <span>Vector Index</span>
                  <strong>pgvector Cosine</strong>
                  <small>Gemini embeddings</small>
                </div>
                <div className="work-sheet sheet-c">
                  <span>Container Boundary</span>
                  <strong>Docker Compose</strong>
                  <small>isolated worker cluster</small>
                </div>
                <div className="work-marker">AI</div>
              </div>

              <div className="work-copy">
                <h3>{projects[0].title}</h3>
                <p>{projects[0].description}</p>

                {projects[0].architecture && (
                  <ul className="project-architecture-list">
                    {projects[0].architecture.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="project-tag-row">
                  {projects[0].techStack.map((tech) => (
                    <span className="project-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-link-group">
                  {projects[0].githubUrl && (
                    <a
                      href={projects[0].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-button"
                      style={{ padding: '8px 16px', fontSize: '0.72rem' }}
                    >
                      Repository <span>↗</span>
                    </a>
                  )}
                  {projects[0].liveUrl && (
                    <a
                      href={projects[0].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link"
                      style={{ fontSize: '0.78rem' }}
                    >
                      Live Demo <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* 02: YT Analysis Engine */}
          {projects[1] && (
            <article className="work-feature work-feature-small">
              <div className="work-label-row">
                <span>System {projects[1].index}</span>
                <span>{projects[1].badge}</span>
              </div>

              <div className="inbox-stack" aria-hidden="true">
                <div>
                  <b>TimescaleDB Hypertables</b>
                  <span>Chunk Partitioned</span>
                </div>
                <div>
                  <b>Token-Bucket Limiter</b>
                  <span>Redis In-Memory</span>
                </div>
                <div>
                  <b>Gemini Embeddings</b>
                  <span>Semantic Vector Clustered</span>
                </div>
              </div>

              <div className="work-copy">
                <h3>{projects[1].title}</h3>
                <p>{projects[1].description}</p>

                <div className="project-tag-row">
                  {projects[1].techStack.map((tech) => (
                    <span className="project-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-link-group">
                  {projects[1].githubUrl && (
                    <a
                      href={projects[1].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-button"
                      style={{ padding: '8px 16px', fontSize: '0.72rem' }}
                    >
                      Repository <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* 03: Subscription Guardian - Editorial Paper Style */}
          {projects[2] && (
            <article className="work-feature work-feature-small work-feature-paper">
              <div className="work-label-row">
                <span>System {projects[2].index}</span>
                <span>{projects[2].badge}</span>
              </div>

              <div className="answer-card" aria-hidden="true">
                <span>Dark Pattern Inspector</span>
                <strong>Deceptive Checkout Detected</strong>
                <p>0 Telemetry · 100% Client-Side Privacy</p>
              </div>

              <div className="work-copy">
                <h3>{projects[2].title}</h3>
                <p>{projects[2].description}</p>

                <div className="project-tag-row">
                  {projects[2].techStack.map((tech) => (
                    <span className="project-tag" key={tech} style={{ borderColor: 'rgba(21,21,18,0.2)', color: 'var(--ink)' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-link-group">
                  {projects[2].githubUrl && (
                    <a
                      href={projects[2].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-button"
                      style={{ padding: '8px 16px', fontSize: '0.72rem', background: 'var(--ink)', color: 'var(--paper)' }}
                    >
                      Repository <span>↗</span>
                    </a>
                  )}
                  {projects[2].liveUrl && (
                    <a
                      href={projects[2].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link"
                      style={{ fontSize: '0.78rem', color: 'var(--ink)', borderColor: 'var(--ink)' }}
                    >
                      Live Extension <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}

          {/* 04: Full-Stack E-Commerce Platform */}
          {projects[3] && (
            <article className="work-feature work-feature-small" style={{ gridColumn: '1 / -1' }}>
              <div className="work-label-row">
                <span>System {projects[3].index}</span>
                <span>{projects[3].badge}</span>
              </div>

              <div className="work-copy" style={{ position: 'static', marginTop: '24px' }}>
                <h3>{projects[3].title}</h3>
                <p>{projects[3].description}</p>

                <div className="project-tag-row">
                  {projects[3].techStack.map((tech) => (
                    <span className="project-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-link-group">
                  {projects[3].githubUrl && (
                    <a
                      href={projects[3].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-button"
                      style={{ padding: '8px 16px', fontSize: '0.72rem' }}
                    >
                      Repository <span>↗</span>
                    </a>
                  )}
                  {projects[3].liveUrl && (
                    <a
                      href={projects[3].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-link"
                      style={{ fontSize: '0.78rem' }}
                    >
                      Live Store <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
