"use client";

import { galleryItems } from '@/lib/site-content';

export function GallerySection() {
  return (
    <section id="gallery" style={{ background: 'var(--charcoal)' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3rem',
          gap: '1.5rem',
          flexWrap: 'wrap',
        }}
        className="reveal"
      >
        <div>
          <div className="section-eyebrow">Our Work</div>
          <h2 className="section-title" style={{ color: '#fff' }}>A Glimpse of the Collection</h2>
        </div>
        <p className="section-body" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: 300 }}>
          Each piece crafted with intention, every room transformed with purpose.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1rem',
          maxWidth: 1200,
          margin: '0 auto',
        }}
        className="gallery-grid"
      >
        {galleryItems.map((item, index) => (
          <div
            key={item.label}
            data-label={item.label}
            className={`gallery-item ${item.className} reveal reveal-delay-${(index % 4) + 1}`}
            style={{
              borderRadius: 3,
              overflow: 'hidden',
              position: 'relative',
              minHeight: 240,
              background: '#2a2a2a',
              ...(index === 0 ? { gridColumn: 'span 2', gridRow: 'span 2' } : {}),
            }}
          >
            <img
              src={item.src}
              alt={item.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.28) 100%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                bottom: 0,
                padding: '1rem 1rem 0.9rem',
                color: '#fff',
                background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.7))',
                fontSize: '0.72rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery-item {
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.14);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.25);
        }

        .gallery-item img {
          transition: transform 0.4s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gallery-item {
          animation: slideInUp 0.6s ease-out forwards;
        }

        .gallery-item.reveal-delay-1 {
          animation-delay: 0.1s;
        }

        .gallery-item.reveal-delay-2 {
          animation-delay: 0.2s;
        }

        .gallery-item.reveal-delay-3 {
          animation-delay: 0.3s;
        }

        .gallery-item.reveal-delay-4 {
          animation-delay: 0.4s;
        }

        @media (max-width: 900px) {
          .gallery-grid {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: repeat(3, 180px) !important;
          }

          .gallery-item:first-child {
            grid-column: span 2 !important;
            grid-row: span 2 !important;
          }
        }

        @media (max-width: 600px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }

          .gallery-item,
          .gallery-item:first-child {
            grid-column: auto !important;
            grid-row: auto !important;
            min-height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
}
