import React from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function Hero() {
  const { personal } = portfolioConfig;
  
  return (
    <section className="hero-section">
      <div className="container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <h1 className="section-title text-center">
            <span className="text-gradient">{personal.name}</span>
          </h1>
          <h2 className="text-white text-center mb-4">{personal.title}</h2>
          <p className="text-white text-center mb-8">
            {personal.tagline}
          </p>
          <div className="hero-buttons">
            <motion.a
              href="#projects"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
