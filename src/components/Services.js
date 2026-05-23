import React from 'react';
import { motion } from 'framer-motion';
import { Image, Sparkles, Layers } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = {
  photoshop: <Image size={34} />,
  ai: <Sparkles size={34} />,
  fashion: <Layers size={34} />,
};

export default function Services() {
  return (
    <section id="services" style={{ padding: '6rem 3.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              marginBottom: '1.5rem',
            }}
          >
            My Services
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '1.125rem', maxWidth: '36rem', margin: '0 auto' }}>
            Premium AI and Photoshop solutions.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {services.map((service) => (
            <motion.div
              key={service.key}
              whileHover={{ y: -10 }}
              style={{
                borderRadius: '2rem',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(255,255,255,0.05)',
                padding: '2rem',
              }}
            >
              <div style={{ marginBottom: '1.5rem', color: '#22d3ee' }}>{iconMap[service.key]}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                {service.title}
              </h3>
              <p style={{ color: '#9ca3af' }}>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
