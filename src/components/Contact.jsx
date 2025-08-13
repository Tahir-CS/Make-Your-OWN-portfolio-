import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

export default function Contact() {
  const { personal } = portfolioConfig;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            LET'S WORK
            <span className="text-gradient"> TOGETHER</span>
          </motion.h2>
          
          <motion.p className="section-subtitle" variants={itemVariants}>
            Ready to bring your vision to life? Let's create something extraordinary.
          </motion.p>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Get in Touch</h3>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <h4>Email</h4>
                  <p>{personal.email}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div>
                  <h4>Phone</h4>
                  <p>{personal.phone}</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Location</h4>
                  <p>{personal.location}</p>
                </div>
              </div>
              <div className="social-links">
                <motion.a 
                  href={personal.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button linkedin"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">💼</span>
                  LinkedIn
                </motion.a>
                <motion.a 
                  href={personal.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-button github"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="social-icon">💻</span>
                  GitHub
                </motion.a>
              </div>
            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="cta-button"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
