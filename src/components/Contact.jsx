import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio.config';

export default function Contact() {
  const { personal } = portfolioConfig;
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="section-index-header">
          <span className="section-index-num">// 06. INITIATE TRANSMISSION</span>
          <span className="section-index-tag">[ DIRECT DISPATCH ]</span>
        </div>

        <div className="contact-apple-grid">
          {/* Direct Statement & Contact Cards */}
          <div>
            <h2 className="section-heading-editorial" style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)' }}>
              Let's Build Something <span style={{ color: 'var(--primary)' }}>Resilient.</span>
            </h2>
            <p className="section-lead-editorial" style={{ marginBottom: '28px' }}>
              Currently entertaining distributed systems roles, backend engineering internships, and collaborative architectures.
            </p>

            {/* Primary Interactive Email Card */}
            <div className="contact-direct-card-apple" onClick={handleCopyEmail}>
              <div>
                <div className="contact-card-lbl-apple">DIRECT EMAIL [ CLICK TO COPY ]</div>
                <div className="contact-card-val-apple">{personal.email}</div>
              </div>
              <span className={`apple-badge ${copied ? 'apple-badge-green' : 'apple-badge-blue'}`}>
                {copied ? "COPIED ✓" : "COPY ↗"}
              </span>
            </div>

            {/* Launch App Card */}
            <a href={`mailto:${personal.email}`} className="contact-direct-card-apple">
              <div>
                <div className="contact-card-lbl-apple">DEFAULT MAIL APPLICATION</div>
                <div className="contact-card-val-apple">Launch Email Client →</div>
              </div>
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--primary)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-direct-card-apple">
              <div>
                <div className="contact-card-lbl-apple">PROFESSIONAL NETWORK</div>
                <div className="contact-card-val-apple">LinkedIn Profile</div>
              </div>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--primary)' }}>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="contact-direct-card-apple">
              <div>
                <div className="contact-card-lbl-apple">CODE ARCHIVES</div>
                <div className="contact-card-val-apple">github.com/Tahir-CS</div>
              </div>
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--primary)' }}>
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>

          {/* Clean Apple Contact Form */}
          <div className="contact-form-apple">
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1d1d1f', marginBottom: '8px' }}>
              Dispatch a Transmission
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--muted-foreground)', marginBottom: '24px' }}>
              Reach out regarding architecture design, full-time engineering roles, or consulting.
            </p>

            {submitted ? (
              <div style={{ padding: '32px', textAlign: 'center', background: 'rgba(52, 199, 89, 0.08)', borderRadius: '16px', border: '1px solid rgba(52, 199, 89, 0.2)' }}>
                <div style={{ fontSize: '1.8rem', color: '#34c759', marginBottom: '10px' }}>✓</div>
                <h4 style={{ color: '#1d1d1f', fontWeight: 700, marginBottom: '6px' }}>Message Received</h4>
                <p style={{ color: 'var(--muted-foreground)', fontSize: '0.88rem' }}>
                  Thank you for reaching out. Muhammad will review your transmission shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group-apple">
                  <label className="form-label-apple">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Alex Mercer"
                    className="form-input-apple"
                  />
                </div>

                <div className="form-group-apple">
                  <label className="form-label-apple">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="alex@company.io"
                    className="form-input-apple"
                  />
                </div>

                <div className="form-group-apple">
                  <label className="form-label-apple">Project / Architecture Brief</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    placeholder="Tell me about the problem, stack requirements, or role..."
                    className="form-input-apple"
                    style={{ resize: 'vertical' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="apple-button"
                  style={{ width: '100%', height: '48px', fontSize: '0.95rem' }}
                >
                  Send Transmission
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
