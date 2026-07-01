import { aboutPortraitImage } from '@/lib/site-content';

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--cream)',
        display: 'flex',
        alignItems: 'center',
        gap: '5rem',
        padding: '5rem 4rem',
      }}
    >
      <div style={{ flex: '0 0 420px', position: 'relative' }} className="reveal">
        <div
          style={{
            width: '100%',
            aspectRatio: '3 / 4',
            background: 'linear-gradient(135deg, #2b2b2b 0%, #111 100%)',
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={aboutPortraitImage}
            alt="Founder portrait"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.32) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              padding: '1rem 1.1rem',
              color: '#fff',
              background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.72))',
            }}
          >
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)' }}>
              Team Lead
            </div>
            <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.5rem', fontWeight: 700, marginTop: '0.25rem' }}>
              Aftab Brothers
            </div>
            <div style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.78)', marginTop: '0.2rem' }}>
              Custom curtains, measured and installed with care.
            </div>
          </div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '-1.5rem',
            right: '-1.5rem',
            width: 110,
            height: 110,
            background: 'var(--gold)',
            borderRadius: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
          }}
        >
          <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '2rem', fontWeight: 700, lineHeight: 1 }}>20+</span>
          <span style={{ fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textAlign: 'center' }}>
            Years of
            <br />
            Excellence
          </span>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div className="section-eyebrow reveal">Our Story</div>
        <h2 className="section-title reveal reveal-delay-1">
          Family Craftsmanship, <br />Timeless Elegance
        </h2>
        <div className="divider reveal reveal-delay-2" />
        <p className="section-body reveal reveal-delay-3">
          Aftab Brothers was founded with a single sewing machine and an eye for beauty. Today, we are Lahore&apos;s most trusted name in premium window treatments — combining traditional craftsmanship with modern design sensibilities.
        </p>
        <p className="section-body reveal reveal-delay-4" style={{ marginTop: '1rem' }}>
          Every curtain we create is a collaboration between artisan and client. From selection of imported fabrics to final installation, we ensure an experience as refined as the product itself.
        </p>
        <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem' }}>
          {[
            ['5,000+', 'Happy Homes'],
            ['150+', 'Fabric Choices'],
            ['48h', 'Quick Install'],
          ].map(([value, label], index) => (
            <div key={label as string} className={`reveal reveal-delay-${index + 1}`}>
              <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '2.2rem', fontWeight: 700, color: 'var(--burgundy)' }}>{value}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.2rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
