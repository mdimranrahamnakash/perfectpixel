import React from 'react';
import { beforeAfterItems } from '../data/portfolioData';

export default function BeforeAfter() {
  return (
    <section style={{ padding: '6rem 3.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2
          style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 900,
            marginBottom: '2.5rem',
            textAlign: 'center',
          }}
        >
          Before &amp; After
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
          {beforeAfterItems.map((item, index) => (
            <div
              key={index}
              style={{
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(255,255,255,0.05)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ position: 'relative' }}>
                  <img
                    src={item.before}
                    alt={`${item.title} before`}
                    style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      background: 'rgba(0,0,0,0.6)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '999px',
                    }}
                  >
                    Before
                  </span>
                </div>
                <div style={{ position: 'relative' }}>
                  <img
                    src={item.after}
                    alt={`${item.title} after`}
                    style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '0.75rem',
                      left: '0.75rem',
                      background: 'rgba(34,211,238,0.7)',
                      color: '#000',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '0.25rem 0.6rem',
                      borderRadius: '999px',
                    }}
                  >
                    After
                  </span>
                </div>
              </div>
              <div style={{ padding: '1rem 1.25rem' }}>
                <p style={{ fontWeight: 600, color: '#e5e7eb' }}>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
