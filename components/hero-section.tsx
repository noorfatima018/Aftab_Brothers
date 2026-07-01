"use client";

import { useEffect, useState } from 'react';

export function HeroSection() {
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  useEffect(() => {
    // Trigger curtain animation after a short delay
    const timer = setTimeout(() => setCurtainsOpen(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 640,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--charcoal)',
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(201,168,76,0.04) 0px, rgba(201,168,76,0.04) 1px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(201,168,76,0.04) 0px, rgba(201,168,76,0.04) 1px, transparent 1px, transparent 60px)',
          zIndex: 0,
        }}
      />

      {/* Gold top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 18,
          background: 'linear-gradient(180deg, #c9a84c, #a07828, #c9a84c)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
          zIndex: 10,
        }}
      />

      {/* LEFT CURTAIN */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(135deg, #6b1f35 0%, #3d1020 60%, #5a1a2c 100%)',
          zIndex: 5,
          transformOrigin: 'left center',
          transform: curtainsOpen ? 'translateX(-100%)' : 'translateX(0)',
          transition: 'transform 1.4s cubic-bezier(0.77, 0, 0.18, 1)',
          boxShadow: curtainsOpen ? 'none' : '8px 0 40px rgba(0,0,0,0.5)',
        }}
      >
        {/* Curtain fabric folds */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0px, transparent 38px, rgba(0,0,0,0.15) 38px, rgba(0,0,0,0.15) 40px, transparent 40px, transparent 78px, rgba(255,255,255,0.04) 78px, rgba(255,255,255,0.04) 80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: 60,
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.35))',
          }}
        />
        {/* Gold curtain rod/ring accent */}
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 0,
            width: '100%',
            height: 6,
            background: 'linear-gradient(90deg, rgba(201,168,76,0.6), rgba(201,168,76,0.3))',
          }}
        />
      </div>

      {/* RIGHT CURTAIN */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          background: 'linear-gradient(225deg, #6b1f35 0%, #3d1020 60%, #5a1a2c 100%)',
          zIndex: 5,
          transformOrigin: 'right center',
          transform: curtainsOpen ? 'translateX(100%)' : 'translateX(0)',
          transition: 'transform 1.4s cubic-bezier(0.77, 0, 0.18, 1)',
          boxShadow: curtainsOpen ? 'none' : '-8px 0 40px rgba(0,0,0,0.5)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'repeating-linear-gradient(90deg, transparent 0px, transparent 38px, rgba(0,0,0,0.15) 38px, rgba(0,0,0,0.15) 40px, transparent 40px, transparent 78px, rgba(255,255,255,0.04) 78px, rgba(255,255,255,0.04) 80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 60,
            height: '100%',
            background: 'linear-gradient(270deg, transparent, rgba(0,0,0,0.35))',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 16,
            left: 0,
            width: '100%',
            height: 6,
            background: 'linear-gradient(270deg, rgba(201,168,76,0.6), rgba(201,168,76,0.3))',
          }}
        />
      </div>

      {/* Hero content — fades in after curtains open */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '0 2rem',
          opacity: curtainsOpen ? 1 : 0,
          transform: curtainsOpen ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.9s ease 1.0s, transform 0.9s ease 1.0s',
        }}
      >
        <div className="section-eyebrow">Gujrat&apos;s Finest Since 2005</div>
        <h1
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.1,
            margin: '0.6rem 0 0.4rem',
          }}
        >
          Where Every Window
          <br />
          Tells a <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Story</em>
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.62)',
            margin: '1.4rem auto 2.4rem',
            maxWidth: 480,
            fontSize: '1rem',
            lineHeight: 1.7,
          }}
        >
          Premium curtains, custom drapes &amp; elegant blinds - handcrafted to transform your spaces into masterpieces.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
          className="hero-cta"
        >
          <a
            href="#gallery"
            className="hero-btn hero-btn--primary"
            style={{
              padding: '0.9rem 2.2rem',
              background: 'var(--gold)',
              color: 'var(--charcoal)',
              fontWeight: 600,
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 2,
              transition: 'background 0.25s',
              minHeight: 48,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            View Collection
          </a>
          <a
            href="#contact"
            className="hero-btn hero-btn--outline"
            style={{
              padding: '0.9rem 2.2rem',
              border: '1px solid rgba(255,255,255,0.35)',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '0.85rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              borderRadius: 2,
              transition: 'border-color 0.25s, color 0.25s',
              minHeight: 48,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Book Consultation
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 2,
          opacity: curtainsOpen ? 1 : 0,
          transition: 'opacity 0.9s ease 1.6s',
        }}
      >
        <div
          style={{
            width: 22,
            height: 36,
            border: '1.5px solid rgba(255,255,255,0.3)',
            borderRadius: 12,
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: 6,
              left: '50%',
              width: 3,
              height: 8,
              background: 'rgba(255,255,255,0.5)',
              borderRadius: 2,
              transform: 'translateX(-50%)',
              animation: 'scrollPulse 1.6s ease infinite',
            }}
          />
        </div>
        <span
          style={{
            fontSize: '0.68rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
          }}
        >
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: translateX(-50%) translateY(0); }
          50% { opacity: 0.3; transform: translateX(-50%) translateY(6px); }
        }

        @media (max-width: 480px) {
          .hero-cta {
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 0 1rem;
          }

          .hero-btn {
            width: 100%;
            max-width: 300px;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
