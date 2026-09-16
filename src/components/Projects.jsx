import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

// Import project thumbnails
import ecommerceThumb from '../assets/ecommerse store thumbnail .png';
import aiResumeThumb from '../assets/ai resume analyzer.png';
import trendvisionThumb from '../assets/trendvision thumbnail.png';
import careerOsThumb from '../assets/careeros.png';

const getThumbnail = (title) => {
  if (title.includes("Career")) return careerOsThumb;
  if (title.includes("E-Commerce")) return ecommerceThumb;
  if (title.includes("Resume")) return aiResumeThumb;
  if (title.includes("YT") || title.includes("TrendVision")) return trendvisionThumb;
  return null;
};

const ProjectShowcaseCard = ({ project, index }) => {
  const thumbnail = getThumbnail(project.title);

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
    >
      <div>
        {/* Meta Header */}
        <div className="project-card-meta">
          <span className="chip-mono glow-badge glow-badge-cyan">[ {project.index} // SPEC ]</span>
          <span className="glow-badge glow-badge-purple">{project.category || project.badge}</span>
        </div>

        {/* Thumbnail preview */}
        {thumbnail && (
          <div className="project-thumb-frame">
            <img src={thumbnail} alt={`${project.title} Interface`} loading="lazy" />
          </div>
        )}

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {/* Architectural Specs */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="project-specs-box">
            <div className="project-specs-title">System Specs &amp; Execution</div>
            <ul className="project-specs-list">
              {project.architecture.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer / Tech stack & Links */}
      <div>
        <div className="project-tech-chips-wrap">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-chip-dark">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card-footer">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-glass"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Repository</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow"
              style={{ padding: '8px 16px', fontSize: '0.82rem' }}
            >
              <span>Live Deployment</span>
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <motion.div
          className="section-index-header"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-index-num">// 02. SELECTED WORKS</span>
          <span className="section-index-tag">[ PRODUCTION SYSTEMS ]</span>
        </motion.div>

        <motion.h2
          className="section-heading-editorial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Engineered Architectures
        </motion.h2>

        <motion.p
          className="section-lead-editorial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          High-performance production systems designed for determinism, sub-50ms queue throughput, and high-dimensional semantic search.
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectShowcaseCard key={project.title || index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
