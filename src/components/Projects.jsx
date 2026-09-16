import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import { TechIcon } from './TechIcons';

// Import project screenshots
import careerOsThumb from '../assets/careeros.png';
import uetOcwThumb from '../assets/uet-ocw.png';
import trendvisionThumb from '../assets/trendvision thumbnail.png';
import aiResumeThumb from '../assets/ai resume analyzer.png';
import ecommerceThumb from '../assets/ecommerse store thumbnail .png';

const getProjectThumbnail = (title) => {
  if (title.includes("Career")) return careerOsThumb;
  if (title.includes("OCW") || title.includes("UET") || title.includes("Enterprise AI")) return uetOcwThumb;
  if (title.includes("YT") || title.includes("TrendVision") || title.includes("Analysis")) return trendvisionThumb;
  if (title.includes("Subscription") || title.includes("Resume")) return aiResumeThumb;
  if (title.includes("E-Commerce")) return ecommerceThumb;
  return null;
};

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="projects-section-deck">
      <div className="container">
        {/* Apple Minimalist Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="apple-label">Flagship Systems</span>
          <h2 className="apple-monument-h2">Architectural Portfolio.</h2>
          <p className="apple-lead-p">
            Production microservices, high-throughput pipelines, and university platforms engineered with verifiable benchmarks.
          </p>
        </motion.div>

        {/* Stacking Card Deck */}
        <div className="deck-cards-container">
          {projects.map((project, idx) => {
            const thumbnail = getProjectThumbnail(project.title);
            const stickyTop = 100 + idx * 24;

            return (
              <motion.article
                key={project.title}
                className="stacked-project-card"
                style={{
                  top: `${stickyTop}px`,
                  zIndex: idx + 1
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="stacked-card-split">
                  {/* Left Half: Pristine Image Container (50%) */}
                  <div className="card-image-half">
                    <div className="card-image-wrapper">
                      {thumbnail ? (
                        <img
                          src={thumbnail}
                          alt={`${project.title} Interface Preview`}
                          loading="lazy"
                          className="project-display-image"
                        />
                      ) : (
                        <div className="fallback-blueprint">
                          <div className="blueprint-grid" />
                          <span>{project.title}</span>
                        </div>
                      )}
                      <div className="image-spec-badge">
                        <span>SYS-0{idx + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Half: Minimalist Content & Specs (50%) */}
                  <div className="card-content-half">
                    <div className="card-badge-row">
                      <span className="apple-mono-badge">{project.badge}</span>
                      <span className="apple-index-tag">0{idx + 1} // 0{projects.length}</span>
                    </div>

                    <h3 className="card-apple-title">{project.title}</h3>
                    <p className="card-apple-desc">{project.description}</p>

                    {/* Architecture Highlights */}
                    {project.architecture && (
                      <div className="card-architecture-box">
                        <div className="arch-box-title">System Architecture &amp; Execution</div>
                        <ul className="arch-bullets">
                          {project.architecture.map((spec, sIdx) => (
                            <li key={sIdx}>
                              <span className="bullet-dash">—</span>
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Tech Stack Pills with Real Logos */}
                    <div className="card-tech-row">
                      {project.techStack.map((tech) => (
                        <span className="apple-tech-chip" key={tech}>
                          <TechIcon name={tech} size={14} className="tech-icon-svg" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="card-actions-row">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-apple-primary"
                        >
                          <span>Inspect Code</span>
                          <span className="arrow-glyph">↗</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-apple-secondary"
                        >
                          <span>Live System</span>
                          <span className="arrow-glyph">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
