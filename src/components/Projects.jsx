import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import { TechIcon } from './TechIcons';

// Import real project screenshots
import careerosThumb from '../assets/careeros.png';
import creatorIqThumb from '../assets/yt-analysis.png';
import subscriptionThumb from '../assets/subscription-guardian.png';
import ecommerceThumb from '../assets/ecommerse store thumbnail .png';

const getProjectThumbnail = (title) => {
  const t = (title || '').toLowerCase();
  if (t.includes('career')) return careerosThumb;
  if (t.includes('creator') || t.includes('yt') || t.includes('analysis')) return creatorIqThumb;
  if (t.includes('subscription')) return subscriptionThumb;
  if (t.includes('commerce') || t.includes('store')) return ecommerceThumb;
  return null;
};

export default function Projects() {
  const { projects } = portfolioConfig;
  const [activeInspect, setActiveInspect] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setActiveInspect(null);
    };
    if (activeInspect) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeInspect]);

  return (
    <section id="projects" className="projects-sheet-section">
      {/* Reference Stacking Sheets */}
      <div className="projects-stack-wrapper">
        {projects.map((project, idx) => {
          const thumbnail = getProjectThumbnail(project.title);
          // Alternating palettes: odd = warm ivory/cream, even = matte obsidian/dark
          const isDarkTheme = idx % 2 === 1;

          return (
            <article
              key={project.title}
              className={`ref-project-sheet ${isDarkTheme ? 'ref-sheet-dark' : 'ref-sheet-light'}`}
              style={{
                zIndex: idx + 1,
              }}
            >
              <div className="ref-sheet-inner">
                {/* Top Meta Bar */}
                <div className="ref-sheet-top-bar">
                  <div className="ref-meta-left">
                    <span className="ref-index-spec">{project.index} / REFERENCE BUILD • DEPLOYED</span>
                  </div>
                  <div className="ref-meta-right">
                    <span className="ref-category-spec">{project.category}</span>
                  </div>
                </div>

                {/* Main Center Body */}
                <div className="ref-sheet-body">
                  <div className="ref-title-col">
                    <h2 className="ref-monumental-title">
                      {project.title}
                    </h2>
                  </div>

                  <div className="ref-desc-col">
                    <div className="ref-desc-card">
                      <p className="ref-desc-text">
                        {project.description}
                      </p>
                      {project.techStack && (
                        <div className="ref-tech-inline">
                          {project.techStack.map((tech, tIdx) => (
                            <span key={tIdx} className="ref-tech-tag">
                              <TechIcon name={tech} size={13} className="ref-tech-icon" />
                              <span>{tech}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Faint Giant Background Watermark */}
                <div className="ref-watermark-number" aria-hidden="true">
                  {project.index}
                </div>

                {/* Bottom Meta Bar */}
                <div className="ref-sheet-bottom-bar">
                  <div className="ref-features-list">
                    <span>{project.features}</span>
                  </div>

                  <div className="ref-status-actions">
                    <div className="ref-deploy-indicator">
                      <span className="ref-pulse-dot"></span>
                      <span className="ref-deploy-text">Deployed reference build</span>
                    </div>

                    <div className="ref-links-cluster">
                      {thumbnail && (
                        <button
                          type="button"
                          className="ref-action-btn ref-btn-inspect"
                          onClick={() => setActiveInspect({ ...project, thumbnail })}
                          title="Preview system interface"
                        >
                          <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          <span>Preview UI</span>
                        </button>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ref-action-btn"
                          title="Inspect Source Repository"
                        >
                          <span>Code ↗</span>
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ref-action-btn ref-action-btn-accent"
                          title="Launch Live System"
                        >
                          <span>Live ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* High-Resolution System Screenshot Modal */}
      <AnimatePresence>
        {activeInspect && (
          <motion.div
            className="ref-modal-backdrop"
            onClick={() => setActiveInspect(null)}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="ref-modal-panel"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="ref-modal-header">
                <div className="ref-modal-title-group">
                  <span className="glow-badge glow-badge-cyan">{activeInspect.category}</span>
                  <h3 className="ref-modal-title">{activeInspect.title}</h3>
                </div>
                <button
                  type="button"
                  className="ref-modal-close"
                  onClick={() => setActiveInspect(null)}
                  aria-label="Close screenshot preview"
                >
                  ✕
                </button>
              </div>

              <div className="ref-modal-preview">
                <img
                  src={activeInspect.thumbnail}
                  alt={`${activeInspect.title} interface snapshot`}
                  loading="lazy"
                />
              </div>

              <div className="ref-modal-footer">
                <p className="ref-modal-desc">{activeInspect.description}</p>
                {activeInspect.githubUrl && (
                  <a
                    href={activeInspect.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-glow"
                    style={{ fontSize: '0.85rem', padding: '10px 20px' }}
                  >
                    <span>View GitHub Repository ↗</span>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
