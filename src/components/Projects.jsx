import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import './Projects.css';

// Import project thumbnails
import ecommerceThumb from '../assets/ecommerse store thumbnail .png';
import aiResumeThumb from '../assets/ai resume analyzer.png';
import trendvisionThumb from '../assets/trendvision thumbnail.png';

// Fallback images if specific ones aren't found
const getThumbnail = (title) => {
  if (title.includes("E-Commerce")) return ecommerceThumb;
  if (title.includes("Resume")) return aiResumeThumb;
  if (title.includes("TrendVision")) return trendvisionThumb;
  // Can use dynamic placeholders or standard images if needed
  return null;
};

const ProjectCard = ({ project, index }) => {
  const containerRef = useRef(null);
  
  // Use scroll progress to create a slight scale-down effect 
  // on the card as the NEXT card slides over it.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scale down the card slightly as it gets pushed away
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.5, 0]);

  const thumbnail = getThumbnail(project.title);

  return (
    <div ref={containerRef} className="sticky-project-container">
      <motion.div 
        style={{ scale, opacity }}
        className="sticky-project-card"
      >
        {/* Text Content (Left) */}
        <div className="sticky-project-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="sticky-title">{project.title}</h3>
            <p className="sticky-desc">{project.description}</p>
            
            <div className="sticky-tech">
              {project.techStack.map((tech, i) => (
                <span key={i} className="sticky-tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="sticky-buttons">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                View Source
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Image Content (Right) */}
        <div className="sticky-project-image">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', height: '100%' }}
          >
            {thumbnail ? (
              <img src={thumbnail} alt={project.title} loading="lazy" />
            ) : (
              <div className="project-placeholder">
                {project.title.substring(0, 2).toUpperCase()}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  const { projects } = portfolioConfig;

  return (
    <section id="projects" className="projects-section">
      <div className="projects-intro">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>
      </div>

      <div className="sticky-projects-wrapper">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
