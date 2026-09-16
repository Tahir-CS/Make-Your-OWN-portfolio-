import React from 'react';

export default function Projects() {

  return (
    <section id="work" className="editorial-section work-section">
      <div className="section-art section-art-work" aria-hidden="true">
        <img src="/assets/workflow-impact-board.svg" alt="" />
      </div>

      <div className="shell">
        <div className="section-intro-grid dark-intro">
          <span className="section-number">03</span>
          <div>
            <p className="section-kicker">Selected systems</p>
            <h2>
              Show the thinking.<br />
              Skip the theatre.
            </h2>
          </div>
          <p className="section-copy">
            Our demo work is labelled honestly. The point is to show architecture, interaction and operational thinking—not pretend there is a client logo wall.
          </p>
        </div>

        <div className="work-asset-banner">
          <div className="work-asset-copy">
            <span>Reference system / 001</span>
            <h3>
              From insight<br />
              to impact.
            </h3>
            <p>
              Inputs become decisions, decisions become actions, and the workflow stays visible enough for an engineering team to trust it.
            </p>
          </div>

          <div className="work-asset-image-wrap">
            <img
              src="/assets/workflow-impact-board.svg"
              alt="Layered workflow board showing data sources, AI workflow and results"
              className="work-dashboard-image"
            />
            <div className="work-interface-card work-interface-card-status" aria-hidden="true">
              <span>System state</span>
              <strong>Operational</strong>
              <small>Last decision · 14s ago</small>
            </div>
            <div className="work-interface-card work-interface-card-signal" aria-hidden="true">
              <span>Signals</span>
              <strong>42</strong>
              <small>PostgreSQL · BullMQ · Redis · Docker</small>
            </div>
          </div>
        </div>

        <div className="work-editorial-grid">
          {/* Featured Primary Build: Career OS */}
          <article className="work-feature work-feature-primary">
            <div className="work-label-row">
              <span>Demo 001</span>
              <span>Distributed Microservice</span>
            </div>

            <div className="work-visual" aria-hidden="true">
              <div className="work-sheet sheet-a">
                <span>Inbound Queue</span>
                <strong>BullMQ Worker</strong>
                <small>latency / &lt;50ms</small>
              </div>
              <div className="work-sheet sheet-b">
                <span>Vector Matching</span>
                <strong>pgvector Cosine</strong>
                <small>Gemini embeddings</small>
              </div>
              <div className="work-sheet sheet-c">
                <span>Container Boundary</span>
                <strong>Docker Compose</strong>
                <small>isolated gateway + db</small>
              </div>
              <div className="work-marker">AI</div>
            </div>

            <div className="work-copy">
              <h3>Career OS — Distributed Intelligence Engine</h3>
              <p>
                Distributed job intelligence engine returning responses in &lt;50ms. Combines BullMQ worker threads with pgvector semantic cosine similarity search.
              </p>
              <div style={{ marginTop: '16px' }}>
                <a
                  href="https://github.com/Tahir-CS/CAREER-OS-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-button"
                  style={{ padding: '10px 18px', fontSize: '0.72rem' }}
                >
                  Inspect Codebase ↗
                </a>
              </div>
            </div>
          </article>

          {/* Demo 002: YT Analysis Engine */}
          <article className="work-feature work-feature-small">
            <div className="work-label-row">
              <span>Demo 002</span>
              <span>Time-Series Streaming</span>
            </div>
            <div className="inbox-stack" aria-hidden="true">
              <div>
                <b>TimescaleDB</b>
                <span>partitioned hypertables</span>
              </div>
              <div>
                <b>Redis Token Bucket</b>
                <span>quota rate limiter</span>
              </div>
              <div>
                <b>Vector Clustering</b>
                <span>Gemini API sentiment</span>
              </div>
            </div>
            <div className="work-copy">
              <h3>YT Analysis &amp; Data Ingestion Pipeline</h3>
              <p>
                High-throughput data ingestion pipeline capturing streaming metrics with distributed Redis rate limiting.
              </p>
              <div style={{ marginTop: '14px' }}>
                <a
                  href="https://github.com/Tahir-CS/Yt-Analysis-Engine"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  GitHub Repository ↗
                </a>
              </div>
            </div>
          </article>

          {/* Demo 003: Subscription Guardian */}
          <article className="work-feature work-feature-small work-feature-paper">
            <div className="work-label-row">
              <span>Demo 003</span>
              <span>Chrome MV3 Extension</span>
            </div>
            <div className="answer-card" aria-hidden="true">
              <span>DOM Mutation Scanner</span>
              <strong>Deceptive checkout pattern detected</strong>
              <p>Zero telemetry · 100% client-side privacy</p>
            </div>
            <div className="work-copy">
              <h3>Subscription Guardian Browser Extension</h3>
              <p>
                Client extension inspecting checkout DOMs in real-time to detect deceptive recurring billing and dark patterns.
              </p>
              <div style={{ marginTop: '14px' }}>
                <a
                  href="https://github.com/Tahir-CS/Subscription-manager"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  Inspect Extension ↗
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
