import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import { TechIcon } from './TechIcons';

export default function Experience() {
  const { experience } = portfolioConfig;

  return (
    <section id="experience" className="section-padding">
      <div className="container">
        {/* Apple Minimalist Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="apple-label">Professional Tenures &amp; Commercial Impact</span>
          <h2 className="apple-monument-h2">Industry Record.</h2>
          <p className="apple-lead-p">
            Production engineering tenures developing enterprise academic platforms, conversational AI products, and resilient backend systems.
          </p>
        </motion.div>

        <div className="apple-experience-timeline">
          {experience.map((exp, index) => {
            const isKics = exp.company.includes('KICS');

            return (
              <motion.div
                key={index}
                className="apple-experience-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Header Row */}
                <div className="apple-exp-header">
                  <div>
                    <div className="apple-exp-badge-row">
                      <span className="apple-mono-badge">{exp.type || "Engineering Internship"}</span>
                      {isKics && <span className="apple-highlight-badge">Flagship 2-Month Tenure</span>}
                    </div>
                    <h3 className="apple-exp-role">{exp.title}</h3>
                    <div className="apple-exp-company">
                      {exp.company} <span className="company-divider">•</span> <span className="apple-text-muted">{exp.location}</span>
                    </div>
                  </div>
                  <div className="apple-exp-time-badge">
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="apple-exp-desc">
                  {exp.description}
                </p>

                {/* KICS 4 Systems Breakdown if KICS */}
                {isKics ? (
                  <div className="apple-kics-grid">
                    <div className="kics-subproject-card">
                      <div className="kics-subproject-head">
                        <span className="kics-num">SYSTEM 01</span>
                        <h4 className="kics-title">UET OCW (OpenCourseWare)</h4>
                      </div>
                      <p className="kics-body">
                        Engineered the full-stack portal featuring granular multi-tier role-based access control (Super Admin, Instructor, Student) for centralized courseware and lecture asset delivery.
                      </p>
                    </div>

                    <div className="kics-subproject-card">
                      <div className="kics-subproject-head">
                        <span className="kics-num">SYSTEM 02</span>
                        <h4 className="kics-title">Enterprise AI Chatbot Product</h4>
                      </div>
                      <p className="kics-body">
                        Developed a ChatGPT-style conversational assistant featuring multi-tier permissioning (Super Admin, Admin, User), real-time AI token usage metering, and dynamic custom LLM API key configuration.
                      </p>
                    </div>

                    <div className="kics-subproject-card">
                      <div className="kics-subproject-head">
                        <span className="kics-num">SYSTEM 03</span>
                        <h4 className="kics-title">End-to-End Admission Management</h4>
                      </div>
                      <p className="kics-body">
                        Built the automated admissions pipeline covering applicant intake, automated document validation workflows, status tracking, and registrar processing dashboards.
                      </p>
                    </div>

                    <div className="kics-subproject-card">
                      <div className="kics-subproject-head">
                        <span className="kics-num">SYSTEM 04</span>
                        <h4 className="kics-title">UET Health Sciences Integration</h4>
                      </div>
                      <p className="kics-body">
                        Seamlessly integrated the high-performance Next.js client frontend with enterprise Laravel REST API backend services for rapid data synchronization.
                      </p>
                    </div>
                  </div>
                ) : (
                  exp.highlights && (
                    <ul className="apple-exp-bullets">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>
                          <span className="bullet-dash">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )
                )}

                {/* Tech Chips with Real Logos */}
                <div className="apple-exp-tech-row">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="apple-tech-chip">
                      <TechIcon name={skill} size={14} className="tech-icon-svg" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
