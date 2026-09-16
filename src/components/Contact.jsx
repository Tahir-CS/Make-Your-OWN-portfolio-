import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

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
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(`Engineering Inquiry from ${formData.name}`)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  return (
    <>
      <section className="editorial-cta">
        <div className="section-art section-art-cta" aria-hidden="true">
          <img src="/assets/abstract-strategy-sculpture.svg" alt="" />
        </div>
        <div className="shell cta-editorial-grid">
          <span className="section-number">06</span>
          <div>
            <p className="section-kicker">Have a high-throughput backend challenge?</p>
            <h2>
              Bring the architecture.<br />
              Let’s engineer the leverage.
            </h2>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="cta-circle"
            aria-label="Send direct email"
          >
            ↗
          </a>
        </div>
      </section>

      <section id="contact" className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="shell contact-grid">
          <div className="contact-aside">
            <span className="eyebrow">Direct Communications</span>
            <h2 style={{ margin: '14px 0 18px', fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              Let’s build resilient backends.
            </h2>
            <p style={{ lineHeight: '1.7', color: 'var(--muted)', marginBottom: '28px' }}>
              Available for distributed systems engineering, backend microservices, vector search pipelines, and worldwide roles.
            </p>

            <div className="contact-channels">
              <a href={`mailto:${personal.email}`} className="contact-channel">
                <span className="channel-kicker">Email</span>
                <strong>{personal.email}</strong>
                <span className="channel-arrow">↗</span>
              </a>

              <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="contact-channel">
                <span className="channel-kicker">Phone / WhatsApp</span>
                <strong>{personal.phone}</strong>
                <span className="channel-arrow">↗</span>
              </a>

              <div className="contact-channel" style={{ cursor: 'default' }}>
                <span className="channel-kicker">Timezone</span>
                <strong>{personal.location}</strong>
              </div>
            </div>

            <div style={{ marginTop: '24px', display: 'flex', gap: '14px' }}>
              {personal.social.github && (
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-button"
                  style={{ padding: '8px 16px', fontSize: '0.74rem' }}
                >
                  GitHub <span>↗</span>
                </a>
              )}
              {personal.social.linkedin && (
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                  style={{ fontSize: '0.8rem' }}
                >
                  LinkedIn <span>↗</span>
                </a>
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="e.g. Alex Smith"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label htmlFor="message">Project or Systems Scope</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Describe your architecture requirements, throughput, or engineering inquiry..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="button" style={{ width: '100%', marginTop: '12px' }}>
              Dispatch Inquiry <span>↗</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
