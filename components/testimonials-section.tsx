import { testimonials } from '@/lib/site-content';

export function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ background: 'var(--burgundy)', textAlign: 'center' }}>
      <div className="section-eyebrow reveal" style={{ color: 'var(--gold)' }}>Client Reviews</div>
      <h2 className="section-title reveal reveal-delay-1" style={{ color: '#fff' }}>What Our Clients Say</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          maxWidth: 1100,
          margin: '3rem auto 0',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.author}
            className={`reveal reveal-delay-${(index % 3) + 1}`}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: 4,
              padding: '2rem',
              textAlign: 'left',
            }}
          >
            <div style={{ color: 'var(--gold)', fontSize: '0.9rem', marginBottom: '1rem' }}>★★★★★</div>
            <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontStyle: 'italic', margin: '0 0 1.2rem' }}>
              “{testimonial.text}”
            </p>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--gold)', letterSpacing: '0.05em' }}>
              — {testimonial.author}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
