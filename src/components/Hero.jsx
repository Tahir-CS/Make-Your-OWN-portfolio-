import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Hero() {
  const { personal, about } = portfolioConfig;

  return (
    <>
      <section className="editorial-hero">
        <div className="section-art section-art-hero" aria-hidden="true">
          <img src="/assets/ai-operations-studio-hero.png" alt="" />
        </div>
        <div className="shell hero-frame">
          <div className="hero-meta-row">
            <span>UET Lahore · Computer Science</span>
            <span>Distributed Backends &amp; Vector Search</span>
            <span>{personal.location}</span>
          </div>

          <div className="hero-main-grid">
            <div className="hero-copy-stage">
              <div className="hero-title-wrap">
                <h1>
                  Muhammad Tahir
                  <span>Systems &amp; Backend</span>
                  Architect.
                </h1>
                <div className="hero-stamp" aria-hidden="true">
                  <span>TAHIR / CS</span>
                  <strong>01</strong>
                </div>
              </div>

              <div className="hero-bottom-grid">
                <p className="hero-intro">
                  {personal.tagline} {personal.bio}
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="editorial-button">
                    Explore Systems <span>↗</span>
                  </a>
                  <a href="#contact" className="editorial-link">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-asset-stage" aria-label="Distributed backend infrastructure preview">
              <div className="hero-asset-frame">
                <img
                  src="/assets/ai-operations-studio-hero.png"
                  alt="Compute infrastructure with servers and fiber-optic networking"
                  className="hero-collage-image"
                />
                <div className="hero-interface-layer" aria-hidden="true">
                  <div className="glass-readout glass-readout-run">
                    <span>Active Telemetry / Node-01</span>
                    <div>
                      <strong>Operational</strong>
                      <i />
                    </div>
                    <small>BullMQ · Redis · pgvector · Docker</small>
                  </div>
                  <div className="glass-readout glass-readout-metrics">
                    <div>
                      <span>Queue Latency</span>
                      <strong>&lt;50ms</strong>
                    </div>
                    <div>
                      <span>Availability</span>
                      <strong>99.99%</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-asset-note">
                <span>Distributed Systems / Infrastructure</span>
                <strong>Sub-millisecond determinism under load.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto-strip">
        <div className="shell manifesto-grid">
          <div className="manifesto-index">01 / Engineering Tenet</div>
          <p>
            "{about.statement}"
          </p>
          <span>Deterministic throughput. Zero data loss.</span>
        </div>
      </section>
    </>
  );
}
