import React, { useState, useEffect, useRef } from 'react';

const services = [
  {
    index: '01',
    title: 'Automation systems',
    note: 'Operations / orchestration',
    body: 'We remove repetitive work by connecting BullMQ worker pools, Redis rate limiters and backend queues your engineering team already uses.',
    href: '#projects'
  },
  {
    index: '02',
    title: 'AI agents & Vector Search',
    note: 'Reasoning / bounded action',
    body: 'Purpose-built semantic retrieval with PostgreSQL + pgvector and autonomous agents that research, qualify, route and act inside clear operational boundaries.',
    href: '#projects'
  },
  {
    index: '03',
    title: 'Custom backend products',
    note: 'Software / product systems',
    body: 'Internal tools and intelligent interfaces shaped around your data, edge cases, Docker containerization, and actual production workflows.',
    href: '#projects'
  }
];

export default function Skills() {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const next = Math.min(1, Math.max(0, (viewport - rect.top) / (rect.height + viewport)));
      setProgress(next);
      setActive(Math.min(2, Math.floor(next * 3)));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section id="services" className="editorial-section services-section">
      <div className="section-art section-art-services" aria-hidden="true">
        <img src="/assets/service-mechanical-dial.svg" alt="" />
      </div>

      <div className="shell">
        <div className="section-intro-grid">
          <span className="section-number">02</span>
          <div>
            <p className="section-kicker">What we build</p>
            <h2>Systems with a job to do.</h2>
          </div>
          <p className="section-copy">
            No generic chatbot package. We start with the operational bottleneck, then build only what creates leverage.
          </p>
        </div>

        <div
          ref={ref}
          className="service-showcase"
          style={{ '--service-progress': progress }}
        >
          <div className="service-visual-panel">
            <img
              src="/assets/service-mechanical-dial.svg"
              alt="Mechanical strategy dial representing the service system from insight to output"
              className="service-dial-image"
            />
            <div className="service-glass-readout" aria-live="polite">
              <span>Active module / {services[active].index}</span>
              <strong>{services[active].title}</strong>
              <small>{services[active].note}</small>
              <div className="service-readout-flow" aria-hidden="true">
                <i>Input</i>
                <b>→</b>
                <i>Reason</i>
                <b>→</b>
                <i>Act</i>
              </div>
            </div>

            <div className="service-wheel" aria-hidden="true">
              <div className="service-wheel-ring" />
              <div className="service-wheel-ring service-wheel-ring-inner" />
              <div className="service-wheel-core">
                <small>system</small>
                <strong>0{active + 1}</strong>
              </div>
              {services.map((service, index) => (
                <span
                  key={service.index}
                  className={`wheel-label wheel-label-${index + 1} ${active === index ? 'is-active' : ''}`}
                >
                  {service.index}
                </span>
              ))}
            </div>

            <div className="service-visual-caption">
              <span>Scroll / inspect the system</span>
              <strong>{services[active].note}</strong>
            </div>
          </div>

          <div className="service-card-stack">
            {services.map((service, index) => (
              <a
                href={service.href}
                className={`service-box ${active === index ? 'is-active' : ''}`}
                key={service.title}
                onClick={() => setActive(index)}
              >
                <div className="service-box-top">
                  <span>{service.index}</span>
                  <span>{service.note}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
                <div className="service-box-bottom">
                  <span>Explore system</span>
                  <b>↗</b>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
