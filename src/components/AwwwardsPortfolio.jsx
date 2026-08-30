import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRightIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';
import { portfolioConfig } from '../config/portfolio.config';
import './AwwwardsPortfolio.css';

const ease = [0.16, 1, 0.3, 1];

const serviceModules = [
  {
    index: '01',
    title: 'Product Engineering',
    note: 'Frontend / backend / systems',
    body: 'From interface to infrastructure: responsive React experiences, production APIs, databases, queues and deployment-ready architecture.',
    output: 'Working product · maintainable system · measurable performance',
  },
  {
    index: '02',
    title: 'Backend Systems',
    note: 'APIs / data / event-driven',
    body: 'Scalable Node.js services built around clean contracts, reliable queues, caching, structured data and real operational constraints.',
    output: 'Fast APIs · durable jobs · observable data flow',
  },
  {
    index: '03',
    title: 'AI Integrations',
    note: 'LLMs / embeddings / workflows',
    body: 'Practical AI features connected to product logic: semantic search, embeddings, classification, grounded automation and intelligent tooling.',
    output: 'Useful intelligence · bounded automation · real UX value',
  },
];

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

function WorkDeck({ projects }) {
  return (
    <div className="aw-work-deck" aria-label="Featured project demos">
      <div className="aw-work-deck-cards">
        {projects.slice(0, 3).map((project, index) => (
          <a
            href="#work"
            className={`aw-deck-card aw-deck-${index + 1}`}
            key={project.title}
            style={{ '--deck-i': index }}
          >
            <div className="aw-deck-top">
              <span>0{index + 1}</span>
              <span>{project.techStack.slice(0, 2).join(' / ')}</span>
            </div>
            <div className="aw-deck-title">{project.title}</div>
            <div className="aw-deck-ui" aria-hidden="true">
              <i /><i /><i />
              <div className="aw-deck-chart"><b /><b /><b /><b /><b /></div>
            </div>
          </a>
        ))}
      </div>
      <div className="aw-deck-caption"><span>Selected systems</span><span>Scroll to inspect ↓</span></div>
    </div>
  );
}

function Project({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const projectNumber = String(index + 1).padStart(2, '0');
  const systemOutput = index === 0
    ? 'Semantic matching · sub-50ms job responses · containerized services'
    : index === 1
      ? 'Time-series analytics · distributed rate limiting · AI clustering'
      : index === 2
        ? 'Subscription detection · dark-pattern analysis · local reminders'
        : 'Authenticated commerce · checkout flow · realtime inventory';

  return (
    <article className="aw-project" ref={ref}>
      <div className="aw-project-index">{projectNumber}</div>
      <div className="aw-project-main">
        <motion.div className="aw-project-copy" style={{ y }}>
          <div className="aw-project-meta"><span>Selected work / {projectNumber}</span><span>Production-minded build</span></div>
          <h3>{project.title}</h3>
          <p className="aw-project-description">{project.description}</p>
          <div className="aw-project-output"><small>System output</small><strong>{systemOutput}</strong></div>
          <div className="aw-tags">
            {project.techStack.slice(0, 6).map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <div className="aw-project-links">
            <MagneticLink href={project.githubUrl} external className="aw-arrow-link">View source <ArrowUpRightIcon /></MagneticLink>
            {project.liveUrl && <MagneticLink href={project.liveUrl} external className="aw-arrow-link aw-live-link">Open live demo <ArrowUpRightIcon /></MagneticLink>}
          </div>
        </motion.div>
        <div className="aw-project-art" aria-hidden="true">
          <div className={`aw-art aw-art-${index % 4}`}>
            <div className="aw-browser-bar"><i /><i /><i /><span>{project.title.toLowerCase().replaceAll(' ', '-')}.app</span></div>
            <div className="aw-browser-body">
              <div className="aw-browser-sidebar"><b /><b /><b /><b /></div>
              <div className="aw-browser-canvas">
                <div className="aw-browser-heading"><span /> <span /></div>
                <div className="aw-browser-grid"><i /><i /><i /></div>
                <div className="aw-browser-lines"><b /><b /><b /><b /></div>
              </div>
            </div>
            <motion.div className="aw-art-orbit" animate={{ rotate: 360 }} transition={{ duration: 28 + index * 3, repeat: Infinity, ease: 'linear' }} />
            <div className="aw-art-code">{project.title.split(' ').map((word) => word[0]).join('').slice(0, 3)}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="aw-services">
      <div className="aw-section-label">03 / What I build</div>
      <div className="aw-services-head">
        <h2>Engineering with<br /><em>an outcome.</em></h2>
        <p>I like work where product thinking and systems thinking meet. Not isolated code — complete flows that someone can actually use.</p>
      </div>
      <div className="aw-service-system">
        <div className="aw-service-visual">
          <div className="aw-service-orbit" style={{ '--active': active }}>
            <div className="aw-service-ring aw-ring-a" />
            <div className="aw-service-ring aw-ring-b" />
            <div className="aw-service-core"><small>module</small><strong>{serviceModules[active].index}</strong></div>
            {serviceModules.map((service, index) => <span key={service.index} className={`aw-service-dot aw-dot-${index + 1} ${active === index ? 'is-active' : ''}`}>{service.index}</span>)}
          </div>
          <div className="aw-service-readout">
            <span>Active capability</span>
            <strong>{serviceModules[active].title}</strong>
            <small>{serviceModules[active].note}</small>
          </div>
        </div>
        <div className="aw-service-list">
          {serviceModules.map((service, index) => (
            <button className={`aw-service-card ${active === index ? 'is-active' : ''}`} key={service.title} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}>
              <div className="aw-service-card-top"><span>{service.index}</span><span>{service.note}</span></div>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <div className="aw-service-output"><small>Typical output</small><strong>{service.output}</strong></div>
              <div className="aw-service-card-bottom"><span>Inspect capability</span><b>↗</b></div>
            </button>
          ))}
        </div>
      </div>
    </section>
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
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
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

          <div className="aw-hero-feature">
            <p className="aw-hero-intro">I build fast, scalable digital products where engineering discipline meets expressive interaction.</p>
            <WorkDeck projects={projects} />
          </div>
          <div className="aw-hero-bottom">
            <span>Backend systems / Product engineering / AI integrations</span>
            <a href="#work" className="aw-scroll-link">Explore selected work <ArrowDownRightIcon /></a>
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
            <h2>Systems with<br /><em>proof inside.</em></h2>
            <p className="aw-section-lede">Each build is presented like a product case study: what it does, what comes out of the system, what it runs on, and where you can inspect the code or live experience.</p>
          </div>
          <div className="aw-project-list">
            {projects.map((project, index) => <Project project={project} index={index} key={project.title} />)}
          </div>
        </section>

        <Services />

        <section className="aw-experience">
          <div className="aw-section-label">04 / Experience</div>
          {experience.map((item) => (
            <div className="aw-exp-row" key={`${item.company}-${item.duration}`}>
              <span>{item.duration}</span>
              <div><h3>{item.title}</h3><p>{item.company}</p></div>
              <p>{item.description}</p>
            </div>
          ))}
        </section>

        <section className="aw-capabilities">
          <div className="aw-section-label">05 / Stack depth</div>
          {skillList.map(([category, list], index) => (
            <motion.div className="aw-cap-row" key={category} initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }}>
              <span>{String(index + 1).padStart(2, '0')}</span><h3>{category}</h3><p>{list.join(' / ')}</p>
            </motion.div>
          ))}
        </section>

        <section id="contact" className="aw-contact">
          <p className="aw-kicker">Have a product, system or idea?</p>
          <h2>Let’s build<br /><em>something useful.</em></h2>
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
