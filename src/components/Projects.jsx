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
          {projects.map((project, idx) => (
            <article
              className={`work-feature ${idx === 0 ? 'work-feature-primary' : 'work-feature-small'}`}
              key={project.title}
            >
              <div className="work-label-row">
                <span>System {project.index}</span>
                <span>{project.badge}</span>
              </div>

              {idx === 0 && (
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
              )}

              <div className="work-copy">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.architecture && (
                  <ul className="project-architecture-list">
                    {project.architecture.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                <div className="project-tag-row">
                  {project.techStack.map((tech) => (
                    <span className="project-tag" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card-link-group">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="editorial-button"
                      style={{ padding: '8px 16px', fontSize: '0.72rem' }}
                    >
                      Repository <span>↗</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
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
          ))}
        </div>
      </div>
    </section>
  );
}
