import { whyItems } from '@/lib/site-content';

export function WhySection() {
  return (
    <section id="why" style={{ background: 'var(--ivory)' }}>
      <div style={{ display: 'flex', gap: '5rem', alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ flex: 1 }} className="reveal">
          <div className="section-eyebrow">Our Difference</div>
          <h2 className="section-title">Why Lahore Trusts <br />Aftab Brothers</h2>
          <div className="divider" />
          <p className="section-body">
            We do not just sell curtains - we deliver an end-to-end experience rooted in quality, honesty, and lasting relationships with every client.
          </p>
        </div>

        <div style={{ flex: 1 }}>
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
    </section>
  );
}
