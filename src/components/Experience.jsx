import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import { TechIcon } from './TechIcons';

export default function Experience() {
  const { experience } = portfolioConfig;
  const containerRef = useRef(null);

  // Scroll progress for the central filling red line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 70%']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="section-padding" ref={containerRef}>
      <div className="container">
        {/* Apple Minimalist Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="apple-label">Internships &amp; Practical Work</span>
          <h2 className="apple-monument-h2">Work Experience.</h2>
          <p className="apple-lead-p">
            Production engineering tenures developing enterprise university portals, conversational assistant products, and modern web applications.
          </p>
        </motion.div>

        {/* Central Vertical Timeline with Scroll Fill */}
        <div className="central-timeline-container">
          {/* Static Track Line */}
          <div className="central-timeline-track" />

          {/* Active Red Fill Line */}
          <motion.div
            className="central-timeline-fill"
            style={{ scaleY }}
          />

          {/* Alternating Experience Nodes */}
          <div className="timeline-items-flow">
            {experience.map((exp, index) => {
              const isKics = exp.company.includes('KICS');
              // Alternating: Index 0 (KICS) on LEFT, Index 1 (Bano Qabil) on RIGHT
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-row-item ${isLeft ? 'timeline-row-left' : 'timeline-row-right'}`}
                >
                  {/* Central Timeline Milestone Node */}
                  <div className="timeline-center-node">
                    <div className="timeline-node-inner" />
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    className="timeline-exp-card"
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Header */}
                    <div className="exp-card-header">
                      <div className="exp-badge-line">
                        <span className="apple-mono-badge">{exp.type || "Engineering Internship"}</span>
                        {isKics && <span className="apple-highlight-badge">2-Month Full-Stack Tenure</span>}
                      </div>

                      <h3 className="exp-card-title">{exp.title}</h3>
                      <div className="exp-company-location">
                        <span className="exp-company-name">{exp.company}</span>
                        <span className="exp-dot-separator">•</span>
                        <span className="exp-location-name">{exp.location}</span>
                      </div>

                      <div className="exp-date-pill">{exp.duration}</div>
                    </div>

                    {/* Summary Description */}
                    <p className="exp-card-desc">{exp.description}</p>

                    {/* KICS 4 Systems Sub-Cards */}
                    {isKics ? (
                      <div className="kics-systems-stack">
                        <div className="kics-item-row">
                          <div className="kics-row-head">
                            <span className="kics-badge">SYSTEM 01</span>
                            <span className="kics-item-title">UET OCW (OpenCourseWare)</span>
                          </div>
                          <p className="kics-item-text">
                            Full-stack portal with role-based access for Super Admins, Instructors, and Students to distribute courseware, lecture materials, and academic archives.
                          </p>
                        </div>

                        <div className="kics-item-row">
                          <div className="kics-row-head">
                            <span className="kics-badge">SYSTEM 02</span>
                            <span className="kics-item-title">Enterprise AI Chatbot Product</span>
                          </div>
                          <p className="kics-item-text">
                            ChatGPT-style assistant featuring Super Admin, Admin, and User tiers, live AI token usage meter, and dynamic custom LLM API key configuration.
                          </p>
                        </div>

                        <div className="kics-item-row">
                          <div className="kics-row-head">
                            <span className="kics-badge">SYSTEM 03</span>
                            <span className="kics-item-title">Admission Management System</span>
                          </div>
                          <p className="kics-item-text">
                            End-to-end admissions pipeline automating candidate intake, multi-step document verification, and real-time applicant status tracking.
                          </p>
                        </div>

                        <div className="kics-item-row">
                          <div className="kics-row-head">
                            <span className="kics-badge">SYSTEM 04</span>
                            <span className="kics-item-title">UET Health Sciences Integration</span>
                          </div>
                          <p className="kics-item-text">
                            Connected the high-performance Next.js client frontend to Laravel REST backend services for synchronized portal records.
                          </p>
                        </div>
                      </div>
                    ) : (
                      exp.highlights && (
                        <ul className="exp-bullet-list">
                          {exp.highlights.map((highlight, hIdx) => (
                            <li key={hIdx}>
                              <span className="bullet-mark">—</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    )}

                    {/* Tech Chips with Real Icons */}
                    <div className="exp-tech-chips">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="exp-chip">
                          <TechIcon name={skill} size={14} className="tech-icon-svg" />
                          <span>{skill}</span>
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
