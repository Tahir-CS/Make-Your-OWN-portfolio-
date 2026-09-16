import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import './Projects.css';

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

const ProjectShowcaseCard = ({ project }) => {
  const thumbnail = getThumbnail(project.title);

  return (
    <article className="project-showcase-card">
      <div>
        {/* Meta Header */}
        <div className="project-meta-header">
          <span className="project-index-tag">[ {project.index} // SPEC ]</span>
          <span className="project-category-pill">{project.category || project.badge}</span>
        </div>

        {/* Thumbnail preview with Awwwards frame */}
        {thumbnail && (
          <div className="project-preview-frame">
            <img src={thumbnail} alt={`${project.title} Interface`} loading="lazy" />
          </div>
        )}

        <h3 className="project-editorial-title">{project.title}</h3>
        <p className="project-editorial-desc">{project.description}</p>

        {/* Architectural Specs */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="project-arch-specs">
            <div className="arch-specs-heading">System Specs & Execution</div>
            <ul className="arch-specs-list">
              {project.architecture.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer / Tech stack & Links */}
      <div>
        <div className="project-tech-pills">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-action-links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-awwwards-link code"
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
              className="btn-awwwards-link demo"
            >
              <span>Live Deployment</span>
              <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          )}
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
        <div className="section-index-header">
          <span className="section-index-num">// 02. SELECTED WORKS</span>
          <span className="section-index-tag">[ PRODUCTION SYSTEMS ]</span>
        </div>

        <h2 className="section-heading-editorial">Engineered Architectures</h2>
        <p className="section-lead-editorial">
          Asynchronous queue pipelines, high-throughput data ingestion, and semantic vector similarity search engines.
        </p>

        <div className="projects-editorial-grid">
          {projects.map((project, index) => (
            <ProjectShowcaseCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}


