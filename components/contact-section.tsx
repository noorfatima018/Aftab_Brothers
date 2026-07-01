"use client";

import { useState, type FormEvent } from 'react';

const initialForm = {
  name: '',
  phone: '',
  service: '',
  message: '',
};

export function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [submitLabel, setSubmitLabel] = useState('Send Enquiry →');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.name.trim()) {
      window.alert('Please enter your name.');
      return;
    }

    if (!form.phone.trim()) {
      window.alert('Please enter your phone number.');
      return;
    }

    setIsLoading(true);
    setSubmitLabel('Sending...');

    try {
      const response = await fetch('https://formsubmit.co/ajax/iamabdullahtanveer@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...form,
          _subject: `New Enquiry from ${form.name} - Aftab Brothers`,
          _template: 'table'
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setSubmitLabel('✓ Enquiry Sent!');
        setForm(initialForm);

        window.setTimeout(() => {
          setIsSuccess(false);
          setSubmitLabel('Send Enquiry →');
          setIsLoading(false);
        }, 3000);
      } else {
        window.alert('Failed to send enquiry. Please try again.');
        setSubmitLabel('Send Enquiry →');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      window.alert('Error sending enquiry. Please try again.');
      setSubmitLabel('Send Enquiry →');
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" style={{ background: 'var(--charcoal)' }}>
      <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
        <div className="section-eyebrow reveal">Get in Touch</div>
        <h2 className="section-title reveal reveal-delay-1" style={{ color: '#fff' }}>Request a Free Consultation</h2>
        <p className="section-body reveal reveal-delay-2" style={{ color: 'rgba(255,255,255,0.45)', margin: '0 auto' }}>
          Visit our shop, call us, or fill the form below. We&apos;ll get back to you within 24 hours.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact info */}
        <div className="reveal contact-info">
          {[
            ['Address', 'Abdullah Plaza, Near Allied Bank\nShadiwal Road, Gujrat', '📍'],
            ['Phone', '+92 300 6236661', '📞'],
            ['Business Hours', 'Monday – Saturday: 9:00 AM – 8:00 PM\nFriday: CLOSED', '🕐'],
            ['Email', 'hassanaftab666@gmail.com', '✉️'],
          ].map(([label, value, icon]) => (
            <div key={label as string} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '2rem' }}>
              <div style={{ width: 40, height: 40, background: 'rgba(201,168,76,0.12)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flex: '0 0 40px' }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.2rem' }}>{label}</div>
                <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, whiteSpace: 'pre-line' }}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="reveal reveal-delay-1 contact-form" onSubmit={handleSubmit}>
          {[
            ['Your Name', 'name', 'e.g. Fatima Ahmed', 'text'],
            ['Phone Number', 'phone', '+92 300 0000000', 'tel'],
          ].map(([label, field, placeholder, type]) => (
            <div key={field as string} style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem' }}>
                {label}
              </label>
              <input
                type={type as string}
                placeholder={placeholder}
                value={form[field as keyof typeof form]}
                onChange={(event) => setForm((current) => ({ ...current, [field as string]: event.target.value }))}
                style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 2, padding: '0.8rem 1rem', color: '#fff', outline: 'none' }}
              />
            </div>
          ))}

          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem' }}>
              Service Needed
            </label>
            <select
              value={form.service}
              onChange={(event) => setForm((current) => ({ ...current, service: event.target.value }))}
              style={{
                width: '100%',
                background: '#1a1a1a',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: 2,
                padding: '0.8rem 1rem',
                color: '#fff',
                outline: 'none',
                fontSize: '0.95rem',
              }}
            >
              <option value="" style={{ background: '#1a1a1a', color: '#fff' }}>Select a service…</option>
              <option style={{ background: '#1a1a1a', color: '#fff' }}>Custom Curtains</option>
              <option style={{ background: '#1a1a1a', color: '#fff' }}>Paling &amp; Blinds</option>
              <option style={{ background: '#1a1a1a', color: '#fff' }}>Sofa Cloths</option>
              <option style={{ background: '#1a1a1a', color: '#fff' }}>Wallpaper Installation</option>
              <option style={{ background: '#1a1a1a', color: '#fff' }}>Custom Design &amp; Consultation</option>
              <option style={{ background: '#1a1a1a', color: '#fff' }}>Professional Installation</option>
              <option style={{ background: '#1a1a1a', color: '#fff' }}>Other</option>
            </select>
          </div>

          <div style={{ marginBottom: '1.2rem' }}>
            <label style={{ display: 'block', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '0.4rem' }}>
              Your Message
            </label>
            <textarea
              placeholder="Tell us about your project…"
              value={form.message}
              onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
              style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 2, padding: '0.8rem 1rem', color: '#fff', outline: 'none', height: 110, resize: 'vertical' }}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={{
              width: '100%',
              padding: '1rem',
              background: isSuccess ? '#4caf72' : isLoading ? 'rgba(201,168,76,0.6)' : 'var(--gold)',
              color: isSuccess ? '#fff' : isLoading ? 'rgba(26,26,26,0.6)' : 'var(--charcoal)',
              border: 'none',
              borderRadius: 2,
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              marginTop: '0.5rem',
              opacity: isLoading ? 0.7 : 1,
              minHeight: 48,
            }}
          >
            {submitLabel}
          </button>
        </form>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          max-width: 1000px;
          margin: 3rem auto 0;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 480px) {
          .contact-grid {
            gap: 2rem;
            margin-top: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
