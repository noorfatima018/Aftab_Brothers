export function SiteFooter() {
  return (
    <footer
      style={{
        background: '#111',
        padding: '3rem 4rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        gap: '1rem',
        flexWrap: 'wrap',
      }}
    >
      <div style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '1.3rem', fontWeight: 700, color: '#fff' }}>
        Aftab <span style={{ color: 'var(--gold)' }}>Brothers</span>
      </div>
      <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', margin: 0 }}>© 2025 Aftab Brothers Curtains. All rights reserved.</p>
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
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
    </footer>
  );
}
