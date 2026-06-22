import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
import './Certifications.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Certifications() {
  const { certifications } = portfolioConfig;

  if (!certifications || certifications.length === 0) return null;

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-center section-title"
          >
            My <span className="text-gradient">Certifications</span>
          </motion.h2>

          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="cert-card"
              >
                {/* Certificate Thumbnail */}
                <div className="cert-thumbnail">
                  {cert.image ? (
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                    />
                  ) : (
                    <div style={{ color: '#6b7280', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  )}
                </div>
                
                {/* Certificate Details */}
                <div className="cert-details">
                  <h3 className="cert-title" title={cert.title}>
                    {cert.title}
                  </h3>
                  <p className="cert-issuer">
                    By: <span className="text-gradient">{cert.issuer}</span>
                  </p>
                  
                  <div>
                    {cert.verifyUrl && cert.verifyUrl !== '#' && cert.verifyUrl !== '' && (
                      <a 
                        href={cert.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="cert-verify"
                      >
                        Verify
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
