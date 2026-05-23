import React from 'react';
import { portfolioItems } from '../data/portfolioData';

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ padding: '6rem 3.5rem', backgroundColor: 'rgba(255,255,255,0.02)' }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            marginBottom: '2.5rem',
          }}
        >
          Featured Work
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ height: '400px', width: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '1.5rem' }}>
                <p style={{ color: '#22d3ee', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                  {item.category}
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
