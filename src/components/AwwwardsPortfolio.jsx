import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { portfolioConfig } from '../config/portfolio.config';
import './AwwwardsPortfolio.css';

const ease = [0.16, 1, 0.3, 1];

function MagneticLink({ href, children, className = '', external = false }) {
  return (
    <motion.a
      href={href}
      className={className}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25, ease }}
    >
      {children}
    </motion.a>
  );
}

function Project({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const projectNumber = String(index + 1).padStart(2, '0');

  return (
    <article className="aw-project" ref={ref}>
      <div className="aw-project-index">{projectNumber}</div>
      <div className="aw-project-main">
        <motion.div className="aw-project-copy" style={{ y }}>
          <p className="aw-kicker">Selected work / {projectNumber}</p>
          <h3>{project.title}</h3>
          <p className="aw-project-description">{project.description}</p>
          <div className="aw-tags">
            {project.techStack.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <div className="aw-project-links">
            <MagneticLink href={project.githubUrl} external className="aw-arrow-link">Source <ArrowUpRightIcon /></MagneticLink>
            {project.liveUrl && <MagneticLink href={project.liveUrl} external className="aw-arrow-link">Live site <ArrowUpRightIcon /></MagneticLink>}
          </div>
        </motion.div>
        <div className="aw-project-art" aria-hidden="true">
          <div className={`aw-art aw-art-${index % 4}`}>
            <motion.div className="aw-art-orbit" animate={{ rotate: 360 }} transition={{ duration: 24 + index * 4, repeat: Infinity, ease: 'linear' }} />
            <div className="aw-art-code">{project.title.split(' ').map((word) => word[0]).join('').slice(0, 3)}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function AwwwardsPortfolio() {
  const { personal, about, experience, skills, projects } = portfolioConfig;
  const [menuOpen, setMenuOpen] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const smoothX = useSpring(cursorX, { stiffness: 250, damping: 28 });
  const smoothY = useSpring(cursorY, { stiffness: 250, damping: 28 });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 25, mass: 0.3 });

  useEffect(() => {
    const move = (event) => {
      cursorX.set(event.clientX - 8);
      cursorY.set(event.clientY - 8);
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [cursorX, cursorY]);

  const skillList = Object.entries(skills);
  const marquee = [...skillList.flatMap(([, list]) => list), ...skillList.flatMap(([, list]) => list)];

  return (
    <div className="aw-site">
      <motion.div className="aw-progress" style={{ scaleX: progress }} />
      <motion.div className="aw-cursor" style={{ x: smoothX, y: smoothY }} />

      <header className="aw-nav">
        <a className="aw-brand" href="#top">MT<span>®</span></a>
        <div className="aw-status"><i /> Available for select projects</div>
        <nav className={menuOpen ? 'is-open' : ''}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="aw-menu" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle menu">{menuOpen ? 'Close' : 'Menu'}</button>
      </header>

      <main id="top">
        <section className="aw-hero">
          <div className="aw-hero-meta">
            <p>{personal.location}</p>
            <p>Full-stack engineering<br />& digital systems</p>
          </div>

          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease }} className="aw-hero-title-wrap">
            <p className="aw-eyebrow">Independent developer / 2026</p>
            <h1><span>Muhammad</span><span className="aw-outline">Tahir</span></h1>
          </motion.div>

          <div className="aw-hero-bottom">
            <p className="aw-hero-intro">I build fast, scalable digital products where engineering discipline meets expressive interaction.</p>
            <a href="#work" className="aw-scroll-link">Scroll to explore <ArrowDownRightIcon /></a>
          </div>
          <div className="aw-hero-disc" aria-hidden="true"><span>BUILD / SHIP / ITERATE / </span></div>
        </section>

        <section className="aw-marquee" aria-label="Technology stack">
          <motion.div animate={{ x: ['0%', '-50%'] }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}>
            {marquee.map((item, i) => <span key={`${item}-${i}`}>{item}<b>✦</b></span>)}
          </motion.div>
        </section>

        <section id="about" className="aw-about">
          <div className="aw-section-label">01 / Profile</div>
          <div className="aw-about-grid">
            <motion.p initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .8, ease }} className="aw-statement">
              Backend-minded.<br />Experience-obsessed.<br /><em>Built for the real world.</em>
            </motion.p>
            <div className="aw-about-copy">
              <p>{about.description}</p>
              <p className="aw-muted">Currently studying Computer Science at {about.education.institution}, with a focus on systems, product engineering and high-performance web experiences.</p>
            </div>
          </div>
          <div className="aw-stats">
            {about.stats.map((stat) => <div key={stat.label}><strong>{stat.number}</strong><span>{stat.label}</span></div>)}
          </div>
        </section>

        <section id="work" className="aw-work">
          <div className="aw-section-head">
            <div className="aw-section-label">02 / Selected work</div>
            <h2>Projects that<br /><em>do the work.</em></h2>
          </div>
          <div className="aw-project-list">
            {projects.map((project, index) => <Project project={project} index={index} key={project.title} />)}
          </div>
        </section>

        <section className="aw-experience">
          <div className="aw-section-label">03 / Experience</div>
          {experience.map((item) => (
            <div className="aw-exp-row" key={item.company}>
              <span>{item.duration}</span>
              <div><h3>{item.title}</h3><p>{item.company}</p></div>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section className="aw-capabilities">
          <div className="aw-section-label">04 / Capabilities</div>
          {skillList.map(([category, list], index) => (
            <motion.div className="aw-cap-row" key={category} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}>
              <span>{String(index + 1).padStart(2, '0')}</span><h3>{category}</h3><p>{list.join(' / ')}</p>
            </motion.div>
          ))}
        </section>

        <section id="contact" className="aw-contact">
          <p className="aw-kicker">Have a project in mind?</p>
          <h2>Let’s make<br /><em>something matter.</em></h2>
          <MagneticLink href={`mailto:${personal.email}`} className="aw-mail">{personal.email}<ArrowUpRightIcon /></MagneticLink>
          <div className="aw-contact-footer">
            <div><span>Based in</span><strong>{personal.location}</strong></div>
            <div className="aw-socials">
              <MagneticLink href={personal.social.github} external>GitHub ↗</MagneticLink>
              <MagneticLink href={personal.social.linkedin} external>LinkedIn ↗</MagneticLink>
            </div>
            <a href="#top">Back to top ↑</a>
          </div>
        </section>
      </main>
    </div>
  );
}
