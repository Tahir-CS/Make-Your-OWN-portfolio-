import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

export default function AboutMe() {
  const { about, personal } = portfolioConfig;

  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-index-header">
          <span className="section-index-num">// 01. PHILOSOPHY &amp; PERSPECTIVE</span>
          <span className="section-index-tag">[ SYSTEM DESIGN ]</span>
        </div>

        <h2 className="section-heading-editorial">Architecture Blueprint &amp; Philosophy</h2>
        <p className="section-lead-editorial">
          Engineering scalable web backends, resilient queue architectures, and mathematical vector retrieval.
        </p>

        {/* Statement Quote Banner */}
        <div className="about-statement-card">
          <div className="about-statement-quote">
            "{about.statement}"
          </div>
        </div>

        {/* Two-Column Apple Grid */}
        <div className="about-apple-grid">
          {/* Left: Narrative & Academic Foundations */}
          <div className="about-content-card">
            <div>
              <p className="about-text-p">
                {about.overview}
              </p>
              <p className="about-text-p">
                From configuring BullMQ backpressure mechanisms and managing Redis cluster memory footprints 
                to fine-tuning pgvector cosine distance metrics in PostgreSQL, I believe reliability is not an afterthought—it 
                must be designed into the foundational architecture.
              </p>
            </div>

            {/* Academic Panel */}
            <div className="academic-panel-apple">
              <div className="academic-badge-row">
                <span className="academic-degree">{about.education.degree}</span>
                <span className="academic-cgpa">CGPA {about.education.cgpa}</span>
              </div>
              <p className="academic-inst">{about.education.institution}</p>
              
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: '8px', fontWeight: 700 }}>
                Core Foundational Coursework
              </div>
              <div className="coursework-chips-wrap">
                {about.education.coursework.map((course, idx) => (
                  <span key={idx} className="coursework-chip-item">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Portrait & Quick System Specs */}
          <div className="portrait-apple-card">
            <div className="portrait-image-frame-apple">
              <img
                src={profileImage}
                alt={`${personal.fullName} - ${personal.title}`}
                loading="lazy"
              />
            </div>

            <div className="specs-table-apple">
              <div className="specs-row-apple">
                <span className="specs-lbl-apple">LOCATION</span>
                <span className="specs-val-apple">{personal.location}</span>
              </div>
              <div className="specs-row-apple">
                <span className="specs-lbl-apple">SPECIALTY</span>
                <span className="specs-val-apple">Distributed Queues &amp; RAG</span>
              </div>
              <div className="specs-row-apple">
                <span className="specs-lbl-apple">ACADEMIA</span>
                <span className="specs-val-apple">UET Lahore (BS CS)</span>
              </div>
              <div className="specs-row-apple">
                <span className="specs-lbl-apple">CORE RUNTIME</span>
                <span className="specs-val-apple">Node • Redis • PostgreSQL</span>
              </div>
              <div className="specs-row-apple">
                <span className="specs-lbl-apple">STATUS</span>
                <span className="apple-badge apple-badge-green" style={{ fontSize: '0.7rem' }}>
                  Available for Global Roles
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
