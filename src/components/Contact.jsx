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
    <section id="contact" className="section">
      <div className="shell">
        <span className="eyebrow" style={{ marginBottom: '18px' }}>
          Direct Engineering Inquiry
        </span>

        <div className="contact-grid">
          <div className="contact-aside">
            <h2>Let’s build resilient backends.</h2>
            <p style={{ fontSize: '1.02rem', lineHeight: '1.7', marginTop: '14px' }}>
              Available for distributed systems engineering, contract backend infrastructure, vector search pipelines, and worldwide roles.
            </p>

            <div className="contact-channels">
              <a href={`mailto:${personal.email}`} className="contact-channel">
                <span>Direct Email</span>
                <strong>{personal.email}</strong>
              </a>

              <a href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`} className="contact-channel">
                <span>Phone / WhatsApp</span>
                <strong>{personal.phone}</strong>
              </a>

              <div className="contact-channel">
                <span>Timezone &amp; Location</span>
                <strong>{personal.location}</strong>
              </div>
            </div>

            <div style={{ marginTop: '28px', display: 'flex', gap: '14px' }}>
              {personal.social.github && (
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-small button-ghost"
                >
                  GitHub <span>↗</span>
                </a>
              )}
              {personal.social.linkedin && (
                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-small button-ghost"
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
                placeholder="Describe your architectural requirements, throughput, or engineering inquiry..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="button" style={{ width: '100%', marginTop: '8px' }}>
              Dispatch Inquiry <span>↗</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
