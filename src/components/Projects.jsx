import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

const telemetryMocks = {
  "Career OS": [
    { label: "Job Queue Pipeline", value: "BullMQ Worker Pool (Sub-50ms)", accent: true },
    { label: "Vector Search Index", value: "pgvector Cosine Similarity", accent: false },
    { label: "Container Boundary", value: "Docker Compose (Gateway + Workers)", accent: false },
    { label: "Cluster State", value: "0 Dropped Jobs · Active", accent: true }
  ],
  "YT Analysis Engine": [
    { label: "Burst Protection", value: "Redis Token-Bucket Limiter", accent: true },
    { label: "Time-Series Ingestion", value: "TimescaleDB Hypertables", accent: false },
    { label: "Semantic Clustering", value: "Gemini Vector Embeddings", accent: false },
    { label: "Throughput Status", value: "Quota Enforced · Operational", accent: true }
  ],
  "Subscription Guardian": [
    { label: "DOM Mutation Engine", value: "Real-time Checkout Pattern Scanner", accent: true },
    { label: "Privacy Architecture", value: "Zero-Telemetry Client Execution", accent: false },
    { label: "Background Lifecycle", value: "Manifest V3 Alarms Scheduler", accent: false },
    { label: "Detection Engine", value: "Dark Pattern Heuristics Active", accent: true }
  ],
  "Full-Stack E-Commerce Platform": [
    { label: "Access Control Layer", value: "Supabase Row-Level Security (RLS)", accent: true },
    { label: "Payment Verification", value: "Stripe Cryptographic Webhooks", accent: false },
    { label: "UI State Management", value: "Optimistic Cart Synchronizer", accent: false },
    { label: "Checkout Pipeline", value: "Idempotent Transaction Core", accent: true }
  ]
};

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="section">
      <div className="shell">
        <span className="eyebrow" style={{ marginBottom: '18px' }}>
          Production Systems &amp; Engineering Builds
        </span>
        <div style={{ maxWidth: '800px', marginBottom: '40px' }}>
          <h2>Featured Systems Architecture.</h2>
          <p style={{ marginTop: '14px', fontSize: '1.02rem' }}>
            Production-grade backends built with verifiable benchmarks. Engineered for high concurrency, low latency, and zero data corruption.
          </p>
        </div>

        <div className="portfolio-list">
          {projects.map((project) => {
            const telemetry = telemetryMocks[project.title] || [];

            return (
              <article className="portfolio-card" key={project.title}>
                <div className="portfolio-copy">
                  <div>
                    <span className="eyebrow">
                      System {project.index} · {project.badge}
                    </span>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>

                    {project.architecture && (
                      <ul className="portfolio-architecture-bullets">
                        {project.architecture.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div>
                    <div className="proof-meta">
                      {project.techStack.map((tech) => (
                        <span className="tag" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="project-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button button-small"
                        >
                          Repository <span>↗</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-link"
                        >
                          Live System <span>↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="portfolio-visual" aria-label={`${project.title} Architectural Telemetry`}>
                  <div className="mini-window">
                    <div className="mini-window-bar">
                      <div className="window-dots">
                        <i />
                        <i />
                        <i />
                      </div>
                      <span className="window-title">{project.title.toLowerCase().replace(/\s+/g, '-')}.sys</span>
                    </div>
                    <div className="mini-window-body">
                      {telemetry.map((row, idx) => (
                        <div
                          className={`terminal-row ${row.accent ? 'accent' : ''}`}
                          key={idx}
                        >
                          <span>{row.label}</span>
                          <strong>{row.value}</strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
