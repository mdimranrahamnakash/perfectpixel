import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import BeforeAfter from './BeforeAfter';
import Portfolio from './Portfolio';
import Contact from './Contact';

export default function PerfectPixelPortfolio() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      {/* Background Effects */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -10,
          pointerEvents: 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '25%',
            width: '24rem',
            height: '24rem',
            backgroundColor: 'rgba(168,85,247,0.2)',
            filter: 'blur(80px)',
            borderRadius: '9999px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            right: '25%',
            width: '24rem',
            height: '24rem',
            backgroundColor: 'rgba(6,182,212,0.2)',
            filter: 'blur(80px)',
            borderRadius: '9999px',
          }}
        />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <BeforeAfter />
      <Portfolio />
      <Contact />

      <footer
        style={{
          padding: '2.5rem',
          textAlign: 'center',
          color: '#6b7280',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
        © 2026 Perfect Pixel
      </footer>
    </div>
  );
}
