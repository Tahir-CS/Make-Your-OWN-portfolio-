import React from 'react';
import { portfolioConfig } from '../config/portfolio.config';
import './Projects.css';

// Import project thumbnails
import ecommerceThumb from '../assets/ecommerse store thumbnail .png';
import aiResumeThumb from '../assets/ai resume analyzer.png';
import trendvisionThumb from '../assets/trendvision thumbnail.png';

const getThumbnail = (title) => {
  if (title.includes("E-Commerce")) return ecommerceThumb;
  if (title.includes("Career") || title.includes("Resume")) return aiResumeThumb;
  if (title.includes("YT") || title.includes("TrendVision")) return trendvisionThumb;
  return null;
};

const ProjectCard = ({ project }) => {
  const thumbnail = getThumbnail(project.title);

  return (
    <article className="project-card-engineering">
      <div>
        {/* Top meta row */}
        <div className="project-top-row">
          <span className="project-badge">{project.badge || "Engineering Project"}</span>
          <div className="project-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                title="View Source on GitHub"
                aria-label={`View ${project.title} source code`}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                title="Live Deployment"
                aria-label={`View ${project.title} live demo`}
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Thumbnail preview if available */}
        {thumbnail && (
          <div className="project-card-image-wrap">
            <img src={thumbnail} alt={`${project.title} Preview`} loading="lazy" />
          </div>
        )}

        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        {/* Architectural Highlights */}
        {project.architecture && project.architecture.length > 0 && (
          <div className="project-architecture">
            <div className="architecture-title">Architecture Highlights</div>
            <ul className="architecture-list">
              {project.architecture.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Footer / Tech Stack & Action Links */}
      <div>
        <div className="project-tech-stack">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links-row">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-action-btn btn-code"
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
              className="project-action-btn btn-demo"
            >
              <span>Live Site</span>
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="section-tag">
          <span className="section-tag-dot"></span>
          <span>Engineering Projects</span>
        </div>
        <h2 className="section-heading">Systems & Production Work</h2>
        <p className="section-lead">
          Architected with an emphasis on asynchronous queues, vector similarity search, and high-throughput data ingestion.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

