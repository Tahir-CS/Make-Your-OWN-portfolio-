import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Hero() {
  const { personal, about } = portfolioConfig;

  return (
    <>
      <section className="hero-section">
        <div className="shell">
          <div className="hero-meta-row">
            <span>UET Lahore · Computer Science</span>
            <span>Distributed Backends &amp; Vector Search</span>
            <span>{personal.location}</span>
          </div>

          <div className="hero-main-grid">
            <div className="hero-copy-stage">
              <span className="eyebrow" style={{ marginBottom: '20px' }}>
                {personal.status}
              </span>
              <h1>
                {personal.name}
                <span>Distributed Systems.</span>
              </h1>
              <div className="hero-subtitle">
                {personal.roleSubtitle}
              </div>
              <p className="hero-intro">
                {personal.tagline} {personal.bio}
              </p>
              <div className="hero-actions">
                <a href="#projects" className="button">
                  Explore Selected Systems <span>↗</span>
                </a>
                <a href="#contact" className="button button-ghost">
                  Get in touch
                </a>
              </div>
            </div>

            <div className="hero-asset-frame">
              <img
                src="/assets/ai-operations-studio-hero.png"
                alt="AI Compute Infrastructure and Server Architecture"
                className="hero-asset-image"
              />
              <div className="hero-overlay-telemetry">
                <div className="glass-chip glass-chip-top">
                  <span className="pulse-dot" />
                  <strong style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
                    Cluster Node-01 · Operational
                  </strong>
                </div>

                <div className="glass-chip glass-chip-bottom">
                  <div>
                    <span>P99 Queue Latency</span>
                    <strong>&lt;50ms</strong>
                  </div>
                  <div>
                    <span>System Availability</span>
                    <strong>99.99%</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Benchmarks / Stat Banner */}
      <section className="stats-banner">
        <div className="shell stats-grid">
          {about.milestones.map((m) => (
            <div className="stat-item" key={m.index}>
              <span>{m.label}</span>
              <strong>{m.metric}</strong>
              <p>{m.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
