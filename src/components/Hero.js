import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '5rem 3.5rem',
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '9999px',
              border: '1px solid rgba(34,211,238,0.3)',
              backgroundColor: 'rgba(34,211,238,0.1)',
              color: '#67e8f9',
              marginBottom: '1.5rem',
              fontSize: '0.875rem',
            }}
          >
            <Sparkles size={16} />
            AI Cinematic Product Studio
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
            }}
          >
            Transforming Products Into
            <span
              style={{
                display: 'block',
                backgroundImage: 'linear-gradient(to right, #22d3ee, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Cinematic Visuals
            </span>
          </h1>

          <p
            style={{
              color: '#9ca3af',
              fontSize: '1.125rem',
              lineHeight: 1.75,
              maxWidth: '36rem',
              marginBottom: '2.5rem',
            }}
          >
            Perfect Pixel creates high-end AI-generated product images, luxury mockups,
            cinematic ecommerce visuals, and professional Photoshop editing.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#portfolio"
              style={{
                padding: '1rem 2rem',
                borderRadius: '1rem',
                backgroundImage: 'linear-gradient(to right, #06b6d4, #9333ea)',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'transform 0.2s',
                color: '#fff',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              View Portfolio <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/8801775231270"
              style={{
                padding: '1rem 2rem',
                borderRadius: '1rem',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(255,255,255,0.05)',
                transition: 'background-color 0.2s',
                color: '#fff',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)')}
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ position: 'relative' }}
        >
          <div
            style={{
              borderRadius: '2.5rem',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              backgroundColor: 'rgba(255,255,255,0.05)',
              padding: '1rem',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop"
              alt="Hero visual"
              style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                borderRadius: '2rem',
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
