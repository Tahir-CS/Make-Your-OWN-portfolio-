import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

// Import your profile image
import profileImage from '../assets/me.jpg';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const profileVariants = {
  hidden: { scale: 0.8, rotateY: -15, opacity: 0 },
  visible: {
    scale: 1,
    rotateY: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function AboutMe() {
  const { about, personal } = portfolioConfig;
  
  return (
    <motion.section 
      id="about" 
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container">
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <h2 className="section-title">
            ABOUT <span className="text-gradient">ME</span>
          </h2>
        </motion.div>
        
        <div className="about-content-grid">
          <motion.div 
            className="about-text"
            variants={itemVariants}
          >
            <motion.p 
              className="about-description"
              variants={itemVariants}
            >
              {about.description}
            </motion.p>
            
            <motion.div 
              className="education-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <h3>Education</h3>
              <div className="education-item">
                <h4>{about.education.degree}</h4>
                <p className="institution">{about.education.institution}</p>
                <p className="graduation">Expected Graduation: {about.education.graduationDate}</p>
              </div>
              
              <div className="coursework">
                <h4>Relevant Coursework:</h4>
                <p>{about.education.coursework}</p>
              </div>
            </motion.div>

            <motion.div 
              className="stats-grid"
              variants={itemVariants}
            >
              {about.stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            variants={profileVariants}
          >
            <div className="profile-3d-container">
              <motion.div 
                className="profile-card"
                whileHover={{ 
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center"
                }}
              >
                <div className="profile-image-wrapper">
                  <img 
                    src={profileImage} 
                    alt="M. Tahir - Full Stack Developer"
                    className="profile-image"
                  />
                </div>
                
                <div className="profile-glow"></div>
                <div className="profile-accent-1"></div>
                <div className="profile-accent-2"></div>
                <div className="profile-shadow"></div>
              </motion.div>
              
              <motion.div 
                className="floating-badge"
                animate={{ 
                  y: [-10, 10, -10],
                  rotateZ: [-2, 2, -2]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span>💻</span>
                <p>Full Stack Dev</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
