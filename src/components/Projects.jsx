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
  const themeClass = index % 2 !== 0 ? 'theme-light' : 'theme-dark';

  return (
    <article
      className={`project-card-sticky ${themeClass}`}
      style={{ zIndex: index + 10 }} // Ensure subsequent cards stack on top
    >
      {/* Meta Header */}
      <div className="project-card-meta">
        <span className="chip-mono glow-badge glow-badge-cyan">[ {project.index} // SPEC ]</span>
        <span className="glow-badge glow-badge-purple" style={{ border: 'none' }}>{project.category || project.badge}</span>
      </div>

      {/* Left Column: Huge Title & Thumb */}
      <div className="project-card-left">
        <h3 className="project-title">{project.title}</h3>
        {thumbnail ? (
          <div className="project-thumb-frame">
            <img src={thumbnail} alt={`${project.title} Interface`} loading="lazy" />
          </div>
        ) : (
          <div className="project-thumb-frame" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed rgba(255, 255, 255, 0.12)' }}>
            <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.06em' }}>
                ARCHITECTURE DIAGRAM PENDING
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Context, Specs, Actions */}
      <div className="project-card-right">
        <p className="project-desc">{project.description}</p>

        {/* Architectural Specs */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="project-specs-box" style={{ marginBottom: '32px' }}>
            <div className="project-specs-title" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 'bold' }}>Architecture</div>
            <ul className="project-specs-list" style={{ paddingLeft: '20px', fontSize: '0.9rem' }}>
              {project.architecture.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '8px' }}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack & Links */}
        <div style={{ marginTop: 'auto' }}>
          <div className="project-tech-chips-wrap" style={{ marginBottom: '24px' }}>
            {project.techStack.map((tech, i) => (
              <span key={i} className="tech-chip-dark" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', padding: '6px 12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {tech}
              </span>
            ))}
          </div>

          <div className="project-card-footer" style={{ display: 'flex', gap: '12px' }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary-glass" style={{ padding: '10px 20px', fontSize: '0.82rem', borderRadius: '0' }}>
                Repository
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-brutalist" style={{ padding: '10px 20px', fontSize: '0.82rem', borderRadius: '0' }}>
                Live Deployment ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
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

        <div className="projects-stack-container">
          {projects.map((project, index) => (
            <ProjectShowcaseCard key={project.title || index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
