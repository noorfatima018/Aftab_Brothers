export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
        Aftab <span style={{ color: 'var(--gold)' }}>Brothers</span>
      </div>
      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', margin: 0, textAlign: 'center' }}>
        © 2025 Aftab Brothers Curtains. All rights reserved.
      </p>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          ['About', '#about'],
          ['Services', '#services'],
          ['Contact', '#contact'],
        ].map(([label, href]) => (
          <li key={label as string}>
            <a href={href} style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <style>{`
        .site-footer {
          background: #111;
          padding: 3rem 4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid rgba(201,168,76,0.15);
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .site-footer {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 2.5rem 2rem;
            gap: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .site-footer {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </footer>
  );
}
