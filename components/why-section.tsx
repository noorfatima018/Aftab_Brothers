import { whyItems } from '@/lib/site-content';

export function WhySection() {
  return (
    <section id="why" style={{ background: 'var(--ivory)' }}>
      <div className="why-inner">
        {/* Left: heading */}
        <div className="why-heading reveal">
          <div className="section-eyebrow">Our Difference</div>
          <h2 className="section-title">Why Gujrat Trusts <br />Aftab Brothers</h2>
          <div className="divider" />
          <p className="section-body">
            We do not just sell curtains - we deliver an end-to-end experience rooted in quality, honesty, and lasting relationships with every client.
          </p>
        </div>

        {/* Right: items list */}
        <div className="why-list">
          {whyItems.map((item, index) => (
            <div
              key={item.number}
              className={`reveal reveal-delay-${(index % 4) + 1}`}
              style={{
                display: 'flex',
                gap: '1.2rem',
                padding: '1.5rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', opacity: 0.45, flex: '0 0 3rem', lineHeight: 1.2 }}>
                {item.number}
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1rem', fontWeight: 600, margin: '0 0 0.35rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-inner {
          display: flex;
          gap: 5rem;
          align-items: flex-start;
          max-width: 1200px;
          margin: 0 auto;
        }

        .why-heading {
          flex: 1;
          min-width: 0;
        }

        .why-list {
          flex: 1;
          min-width: 0;
        }

        @media (max-width: 900px) {
          .why-inner {
            flex-direction: column;
            gap: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .why-inner {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
