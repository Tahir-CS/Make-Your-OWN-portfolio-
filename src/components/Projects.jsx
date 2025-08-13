import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

// Import project thumbnails
import ecommerceThumb from '../assets/ecommerse store thumbnail .png';
import aiResumeThumb from '../assets/ai resume analyzer.png';
import trendvisionThumb from '../assets/trendvision thumbnail.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  const { projects } = portfolioConfig;
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={projectVariants}
            className="text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="projects-grid">
            {projects.map((project, index) => {
              // Map thumbnails to projects
              let thumbnail = null;
              if (project.title === "E-Commerce Store") thumbnail = ecommerceThumb;
              if (project.title === "AI Resume Analyzer") thumbnail = aiResumeThumb;
              if (project.title === "TrendVision Dashboard") thumbnail = trendvisionThumb;
              
              return (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover={{ y: -5 }}
                  className="project-card"
                >
                  <div className="project-image">
                    {thumbnail ? (
                      <img 
                        src={thumbnail} 
                        alt={project.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="project-placeholder">
                        {project.title}
                      </div>
                    )}
                    <div className="project-overlay">
                      <div className="project-buttons overlay-buttons">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                          GitHub
                        </a>
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {project.description}
                    </p>
                    
                    <div className="project-tech">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="project-buttons">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                        GitHub
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
