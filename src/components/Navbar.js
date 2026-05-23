import React from 'react';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1.5rem 3.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(0,0,0,0.3)',
      }}
    >
      <div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.2em' }}>
          PERFECT <span style={{ color: '#22d3ee' }}>PIXEL</span>
        </h1>
      </div>

      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.875rem', color: '#d1d5db' }}>
        <a href="#services" style={{ transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target.style.color = '#fff')}
          onMouseLeave={e => (e.target.style.color = '#d1d5db')}>
          Services
        </a>
        <a href="#portfolio" style={{ transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target.style.color = '#fff')}
          onMouseLeave={e => (e.target.style.color = '#d1d5db')}>
          Portfolio
        </a>
        <a href="#contact" style={{ transition: 'color 0.2s' }}
          onMouseEnter={e => (e.target.style.color = '#fff')}
          onMouseLeave={e => (e.target.style.color = '#d1d5db')}>
          Contact
        </a>
      </div>
    </nav>
  );
}
