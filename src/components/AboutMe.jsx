import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import profileImage from '../assets/me.jpg';

export default function AboutMe() {
  const { about, personal } = portfolioConfig;

  return (
    <section id="about" className="section-padding">
      <div className="container">
        {/* Section Heading */}
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Background</span>
        </div>
        <h2 className="section-heading">Systems & Engineering Focus</h2>
        <p className="section-lead">
          Building resilient services, asynchronous worker queues, and observable backend infrastructure.
        </p>

        <div className="about-grid">
          {/* Narrative & Education */}
          <div className="about-left-col">
            <p className="about-bio-text">
              {about.overview}
            </p>
            <p className="about-bio-text">
              I treat software systems with an emphasis on determinism, data integrity, and strict boundaries. 
              Whether tuning Redis connection pools, evaluating pgvector indexing methods for vector similarity, 
              or enforcing TypeScript typing across microservices, I prioritize correctness and production-grade reliability.
            </p>

            {/* Education Box */}
            <div className="education-box">
              <div className="education-box-header">
                <span className="education-degree">{about.education.degree}</span>
                <span className="education-cgpa">{about.education.cgpa}</span>
              </div>
              <p className="education-institution">{about.education.institution}</p>
              
              <div className="coursework-title">Key Coursework</div>
              <div className="coursework-tags">
                {about.education.coursework.map((course, idx) => (
                  <span key={idx} className="course-tag">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Profile & Metadata Column */}
          <div className="about-right-col">
            <div className="profile-card-clean">
              <div className="profile-img-wrap">
                <img
                  src={profileImage}
                  alt={`${personal.fullName} - ${personal.title}`}
                  loading="lazy"
                />
              </div>

              <div className="profile-meta-list">
                <div className="profile-meta-row">
                  <span className="profile-meta-label">Location</span>
                  <span className="profile-meta-val">{personal.location}</span>
                </div>
                <div className="profile-meta-row">
                  <span className="profile-meta-label">Specialization</span>
                  <span className="profile-meta-val">Distributed Systems</span>
                </div>
                <div className="profile-meta-row">
                  <span className="profile-meta-label">University</span>
                  <span className="profile-meta-val">UET Lahore</span>
                </div>
                <div className="profile-meta-row">
                  <span className="profile-meta-label">Key Stack</span>
                  <span className="profile-meta-val">Node • Redis • Postgres</span>
                </div>
                <div className="profile-meta-row" style={{ borderBottom: 'none' }}>
                  <span className="profile-meta-label">Open For</span>
                  <span className="profile-meta-val" style={{ color: 'var(--accent)' }}>Internships & Roles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

