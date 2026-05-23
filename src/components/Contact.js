import React from 'react';

const contactLinks = [
  { label: 'Email', href: 'mailto:imranrahamn@yahoo.com' },
  { label: 'WhatsApp', href: 'https://wa.me/8801775231270' },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~01be32305cf90d0cd3?mp_source=share',
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '6rem 3.5rem', textAlign: 'center' }}>
      <h2
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 900,
          marginBottom: '2.5rem',
        }}
      >
        Contact
      </h2>
      <p style={{ color: '#9ca3af', marginBottom: '2.5rem' }}>Let's work together</p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '0.75rem',
              transition: 'background-color 0.2s',
              color: '#fff',
            }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
