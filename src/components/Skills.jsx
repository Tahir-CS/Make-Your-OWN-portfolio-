import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcon } from './TechIcons';

const SKILL_ITEMS = [
  { name: 'TypeScript', category: 'Backend & Core', tag: 'Language' },
  { name: 'Node.js', category: 'Backend & Core', tag: 'Runtime' },
  { name: 'PostgreSQL', category: 'Databases & Vectors', tag: 'RDBMS / pgvector' },
  { name: 'Redis', category: 'Queues & Caching', tag: 'In-Memory / PubSub' },
  { name: 'BullMQ', category: 'Queues & Caching', tag: 'Distributed Jobs' },
  { name: 'Docker', category: 'Infrastructure', tag: 'Containers' },
  { name: 'TimescaleDB', category: 'Databases & Vectors', tag: 'Time-Series' },
  { name: 'Next.js', category: 'Client & Frameworks', tag: 'React Framework' },
  { name: 'React', category: 'Client & Frameworks', tag: 'UI Library' },
  { name: 'Laravel', category: 'Backend & Core', tag: 'Full-Stack API' },
  { name: 'AWS', category: 'Infrastructure', tag: 'Cloud / EC2' },
  { name: 'Git', category: 'Infrastructure', tag: 'Version Control' },
  { name: 'Linux', category: 'Infrastructure', tag: 'OS / Bash' },
  { name: 'Tailwind CSS', category: 'Client & Frameworks', tag: 'Styling' },
  { name: 'C++', category: 'Backend & Core', tag: 'Systems' },
  { name: 'MongoDB', category: 'Databases & Vectors', tag: 'Document Store' },
  { name: 'Supabase', category: 'Databases & Vectors', tag: 'BaaS / RLS' },
  { name: 'Express.js', category: 'Backend & Core', tag: 'Microservices' },
  { name: 'Vite', category: 'Client & Frameworks', tag: 'Bundler' },
  { name: 'Chrome MV3', category: 'Client & Frameworks', tag: 'Browser APIs' },
  { name: 'Gemini API', category: 'Databases & Vectors', tag: 'Vector AI' },
];

const CATEGORIES = ['All', 'Backend & Core', 'Queues & Caching', 'Databases & Vectors', 'Infrastructure', 'Client & Frameworks'];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = activeCategory === 'All' 
    ? SKILL_ITEMS 
    : SKILL_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="skills" className="skills-section-apple">
      <div className="container">
        {/* Apple Minimalist Section Header */}
        <motion.div
          className="deck-section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="apple-label">Skills &amp; Technologies</span>
          <h2 className="apple-monument-h2">Technical Skills.</h2>
          <p className="apple-lead-p">
            Interactive skill playground. Hover, drag, and explore the technologies, databases, and frameworks I work with.
          </p>
        </motion.div>

        {/* Minimalist Filter Tabs */}
        <div className="skills-filter-row">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`skills-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Big Interactive Floating Logos Stage */}
        <motion.div 
          layout
          className="floating-logos-canvas"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => {
              // Staggered floating oscillation parameters
              const floatY = (idx % 2 === 0 ? -12 : 12);
              const floatX = (idx % 3 === 0 ? 8 : -8);
              const duration = 4.2 + (idx % 4) * 0.7;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  className="floating-logo-pod"
                  drag
                  dragConstraints={{ left: -25, right: 25, top: -25, bottom: 25 }}
                  dragElastic={0.2}
                  whileDrag={{ scale: 1.2, zIndex: 50 }}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, floatY, 0],
                    x: [0, floatX, 0],
                    transition: {
                      y: { duration, repeat: Infinity, ease: 'easeInOut' },
                      x: { duration: duration * 1.2, repeat: Infinity, ease: 'easeInOut' },
                      opacity: { duration: 0.4 },
                      scale: { duration: 0.4 }
                    }
                  }}
                  exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.25 } }}
                  whileHover={{
                    scale: 1.22,
                    y: -10,
                    zIndex: 40,
                    transition: { type: 'spring', stiffness: 450, damping: 18 }
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  title={`${skill.name} — ${skill.tag}`}
                >
                  <div className="pod-icon-holder">
                    <TechIcon name={skill.name} size={44} className="big-tech-logo-svg" />
                  </div>
                  <span className="pod-name-label">{skill.name}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Active Skill Detail Indicator */}
        <div className="active-skill-readout">
          {hoveredSkill ? (
            <motion.div
              key={hoveredSkill.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="skill-readout-content"
            >
              <span className="readout-title">{hoveredSkill.name}</span>
              <span className="readout-dot">•</span>
              <span className="readout-tag">{hoveredSkill.tag}</span>
              <span className="readout-dot">•</span>
              <span className="readout-cat">{hoveredSkill.category}</span>
            </motion.div>
          ) : (
            <span className="readout-idle">Hover or drag any technology logo above to inspect specialization</span>
          )}
        </div>
      </div>
    </section>
  );
}
