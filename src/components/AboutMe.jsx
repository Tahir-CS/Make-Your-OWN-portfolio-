import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

export default function AboutMe() {
  const { about, personal } = portfolioConfig;

  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Numbered Section Index */}
        <div className="section-index-header">
          <span className="section-index-num">// 01. PHILOSOPHY & PERSPECTIVE</span>
          <span className="section-index-tag">[ SYSTEM DESIGN ]</span>
        </div>

        {/* Statement Banner */}
        <div className="about-statement-banner">
          "{about.statement}"
        </div>

        <div className="about-editorial-grid">
          {/* Narrative & Academic Credentials */}
          <div>
            <p className="about-editorial-p">
              {about.overview}
            </p>
            <p className="about-editorial-p">
              From configuring BullMQ backpressure mechanisms and managing Redis cluster memory footprints 
              to fine-tuning pgvector cosine distance metrics in PostgreSQL, I believe reliability is not an afterthought—it 
              must be designed into the foundational architecture.
            </p>

            {/* Academic Panel */}
            <div className="academic-panel">
              <div className="academic-badge-row">
                <span className="academic-degree">{about.education.degree}</span>
                <span className="academic-cgpa">{about.education.cgpa}</span>
              </div>
              <p className="academic-inst">{about.education.institution}</p>
              
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '10px' }}>
                Foundational Coursework
              </div>
              <div className="coursework-chips">
                {about.education.coursework.map((course, idx) => (
                  <span key={idx} className="coursework-chip">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Portrait & Meta Table */}
          <div>
            <div className="portrait-panel-clean">
              <div className="portrait-image-frame">
                <img
                  src={profileImage}
                  alt={`${personal.fullName} - ${personal.title}`}
                  loading="lazy"
                />
              </div>

              <div className="portrait-meta-table">
                <div className="portrait-meta-entry">
                  <span className="portrait-meta-lbl">LOCATION</span>
                  <span className="portrait-meta-val">{personal.location}</span>
                </div>
                <div className="portrait-meta-entry">
                  <span className="portrait-meta-lbl">SPECIALTY</span>
                  <span className="portrait-meta-val">Distributed Queues</span>
                </div>
                <div className="portrait-meta-entry">
                  <span className="portrait-meta-lbl">ACADEMIA</span>
                  <span className="portrait-meta-val">UET Lahore (BS CS)</span>
                </div>
                <div className="portrait-meta-entry">
                  <span className="portrait-meta-lbl">CORE RUNTIME</span>
                  <span className="portrait-meta-val">Node • Redis • Postgres</span>
                </div>
                <div className="portrait-meta-entry" style={{ borderBottom: 'none' }}>
                  <span className="portrait-meta-lbl">STATUS</span>
                  <span className="portrait-meta-val" style={{ color: 'var(--accent)' }}>Open for Global Roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


