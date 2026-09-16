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
    const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(`Project Inquiry from ${formData.name}`)}&body=${encodeURIComponent(
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
          <span className="section-number">05</span>
          <div>
            <p className="section-kicker">Have a messy workflow?</p>
            <h2>
              Bring the process.<br />
              We’ll find the leverage.
            </h2>
          </div>
          <a
            href={`mailto:${personal.email}`}
            className="cta-circle"
            aria-label="Start a project"
          >
            ↗
          </a>
        </div>
      </section>

      <section id="contact" className="section" style={{ background: 'var(--bg-soft)' }}>
        <div className="shell contact-grid">
          <div className="contact-aside">
            <span className="eyebrow">Direct Inquiry</span>
            <h2>Tell us about your systems.</h2>
            <p>
              Available for worldwide engineering roles, contract backend infrastructure, and high-throughput vector systems.
            </p>

            <div className="contact-details">
              <div>
                <span>Direct Email</span>
                <a href={`mailto:${personal.email}`}>{personal.email}</a>
              </div>
              <div>
                <span>Cellular &amp; WhatsApp</span>
                <a href={`tel:${personal.phone}`}>{personal.phone}</a>
              </div>
              <div>
                <span>Operating Location</span>
                <strong style={{ color: 'var(--text)' }}>{personal.location}</strong>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="field-grid">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Alex Vance"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Work email</label>
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
            </div>

            <div className="field">
              <label htmlFor="message">Workflow or problem description</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                placeholder="Outline the operational bottleneck, systems involved, and desired leverage..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="button" style={{ width: '100%' }}>
              Send inquiry <span>↗</span>
            </button>
            <div className="form-note">
              Opens your email client directly with the message pre-filled. No CRM data retention.
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
