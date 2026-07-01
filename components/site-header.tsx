"use client";

import { useEffect, useState } from 'react';

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.2rem 4rem',
        background: 'var(--surface)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: isScrolled ? '0 4px 30px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-playfair), serif',
          fontSize: '1.5rem',
          fontWeight: 700,
          letterSpacing: '0.02em',
        }}
      >
        Aftab <span style={{ color: 'var(--gold)' }}>Brothers</span>
      </div>
      <nav aria-label="Primary">
        <ul
          style={{
            display: 'flex',
            gap: '2.5rem',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center',
          }}
        >
          {[
            ['About', '#about'],
            ['Services', '#services'],
            ['Gallery', '#gallery'],
            ['Why Us', '#why'],
            ['Get a Quote', '#contact'],
          ].map(([label, href], index) => (
            <li key={label as string}>
              <a
                href={href}
                style={{
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: index === 4 ? '#fff' : 'var(--muted)',
                  background: index === 4 ? 'var(--burgundy)' : 'transparent',
                  padding: index === 4 ? '0.6rem 1.4rem' : 0,
                  borderRadius: 2,
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <style jsx>{`
        a:hover {
          color: var(--burgundy) !important;
        }

        a[href='#contact']:hover {
          color: #fff !important;
          background: #5e2132 !important;
        }

        @media (max-width: 900px) {
          header {
            padding: 1rem 1.5rem !important;
          }

          nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
}
