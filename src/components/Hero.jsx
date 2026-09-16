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
            <span>Independent Systems &amp; AI Studio</span>
            <span>Strategy → Build → Architecture</span>
            <span>Working Worldwide (UTC+5)</span>
          </div>

          <div className="hero-main-grid">
            <div className="hero-copy-stage">
              <div className="hero-title-wrap">
                <h1>
                  We make AI
                  <span>useful enough</span>
                  to disappear.
                </h1>
                <div className="hero-stamp" aria-hidden="true">
                  <span>TAHIR / AI</span>
                  <strong>01</strong>
                </div>
              </div>

              <div className="hero-bottom-grid">
                <p className="hero-intro">
                  {personal.bio || "We design automation, event-driven queues and intelligent backend systems around real operational bottlenecks—less admin, sub-50ms latency, clearer decisions."}
                </p>
                <div className="hero-actions">
                  <a href="#contact" className="editorial-button">
                    Start a project <span>↗</span>
                  </a>
                  <a href="#projects" className="editorial-link">
                    View selected work
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-asset-stage" aria-label="Tahir AI systems visual">
              <div className="hero-asset-frame">
                <img
                  src="/assets/ai-operations-studio-hero.png"
                  alt="AI compute infrastructure with servers and fiber-optic network cabling"
                  className="hero-collage-image"
                />
                <div className="hero-interface-layer" aria-hidden="true">
                  <div className="glass-readout glass-readout-run">
                    <span>Live system / 00482</span>
                    <div>
                      <strong>Operational</strong>
                      <i />
                    </div>
                    <small>BullMQ · Redis · pgvector · Docker</small>
                  </div>
                  <div className="glass-readout glass-readout-metrics">
                    <div>
                      <span>Decision latency</span>
                      <strong>42ms</strong>
                    </div>
                    <div>
                      <span>Confidence</span>
                      <strong>98%</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-asset-note">
                <span>Systems / intelligence / infrastructure</span>
                <strong>Complexity, made legible.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto-strip">
        <div className="shell manifesto-grid">
          <div className="manifesto-index">01 / Principle</div>
          <p>
            "{about.statement || 'Good AI should feel less like a robot and more like the missing piece of a well-designed operation.'}"
          </p>
          <span>Useful intelligence, quietly embedded.</span>
        </div>
      </section>
    </>
  );
}
