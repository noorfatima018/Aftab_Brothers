"use client";

import { useEffect, useState } from 'react';

const NAV_LINKS = [
  ['About', '#about'],
  ['Services', '#services'],
  ['Gallery', '#gallery'],
  ['Why Us', '#why'],
  ['Get a Quote', '#contact'],
] as const;

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock/unlock body scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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
        className="site-header"
      >
        {/* Logo */}
        <div
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '0.02em',
            zIndex: 101,
          }}
        >
          Aftab <span style={{ color: 'var(--gold)' }}>Brothers</span>
        </div>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="desktop-nav">
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
            {NAV_LINKS.map(([label, href], index) => (
              <li key={label}>
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
                    padding: index === 4 ? '0.6rem 1.4rem' : '0',
                    borderRadius: 2,
                    transition: 'background 0.2s, color 0.2s',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger button — mobile only */}
        <button
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '5px',
            width: 44,
            height: 44,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 101,
            flexShrink: 0,
          }}
        >
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              background: 'var(--charcoal)',
              borderRadius: 2,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              background: 'var(--charcoal)',
              borderRadius: 2,
              transition: 'opacity 0.3s ease',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: 24,
              height: 2,
              background: 'var(--charcoal)',
              borderRadius: 2,
              transition: 'transform 0.3s ease, opacity 0.3s ease',
              transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </header>

      {/* Mobile nav overlay */}
      <nav
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: 'var(--surface)',
          backdropFilter: 'blur(16px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
        className="mobile-nav"
      >
        {NAV_LINKS.map(([label, href], index) => (
          <a
            key={label}
            href={href}
            onClick={closeMenu}
            style={{
              textDecoration: 'none',
              fontSize: index === 4 ? '1rem' : '1.4rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: index === 4 ? '#fff' : 'var(--charcoal)',
              background: index === 4 ? 'var(--burgundy)' : 'transparent',
              padding: index === 4 ? '0.85rem 2.5rem' : '0',
              borderRadius: 2,
              fontFamily: index === 4 ? 'inherit' : 'var(--font-playfair), serif',
              transition: 'color 0.2s',
            }}
          >
            {label}
          </a>
        ))}
      </nav>

      <style>{`
        .site-header a:hover {
          color: var(--burgundy) !important;
        }

        .site-header a[href='#contact']:hover {
          color: #fff !important;
          background: #5e2132 !important;
        }

        @media (max-width: 900px) {
          .site-header {
            padding: 1rem 1.5rem !important;
          }

          .desktop-nav {
            display: none !important;
          }

          .hamburger {
            display: flex !important;
          }
        }

        @media (max-width: 480px) {
          .site-header {
            padding: 0.9rem 1rem !important;
          }
        }
      `}</style>
    </>
  );
}
