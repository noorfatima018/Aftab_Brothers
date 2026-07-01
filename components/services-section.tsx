import { services } from '@/lib/site-content';

export function ServicesSection() {
  return (
    <section id="services" style={{ background: 'var(--ivory)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <div className="section-eyebrow reveal">What We Offer</div>
        <h2 className="section-title reveal reveal-delay-1">Our Services</h2>
        <div className="divider reveal reveal-delay-2" style={{ margin: '1rem auto' }} />
        <p className="section-body reveal reveal-delay-3" style={{ margin: '0 auto' }}>
          From measurement to installation, we handle everything so you can simply enjoy the result.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '2rem',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {services.map((service, index) => (
          <article
            key={service.title}
            className={`reveal reveal-delay-${(index % 4) + 1}`}
            style={{
              background: '#fff',
              border: '1px solid rgba(201,168,76,0.15)',
              borderRadius: 4,
              padding: '2.5rem 2rem',
            }}
          >
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.15rem', fontWeight: 600, color: 'var(--charcoal)', margin: '0 0 0.7rem' }}>
              {service.title}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
