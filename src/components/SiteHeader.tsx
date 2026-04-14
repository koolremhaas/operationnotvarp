import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'TIDSLINJE' },
  { path: '/karta', label: 'SJÖKORT' },
  { path: '/dokument', label: 'DOKUMENT' },
  { path: '/analys', label: 'ANALYS' },
  { path: '/kallor', label: 'KÄLLOR' },
];

export default function SiteHeader() {
  const location = useLocation();

  return (
    <header className="border-b border-border bg-card relative">
      {/* Subtle scanline */}
      <div className="absolute inset-0 scanline-overlay opacity-30" />
      
      <div className="relative flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 border border-primary/60 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
            <span className="text-primary text-[10px] font-mono">⊕</span>
          </div>
          <div>
            <h1 className="text-xs font-mono font-bold tracking-[0.2em] text-foreground leading-none">
              HÅRSFJÄRDEN 1982
            </h1>
            <p className="text-[9px] text-muted-foreground tracking-[0.15em] mt-0.5 opacity-60">
              UBÅTSKRÄNKNINGARNA — DOKUMENTATION
            </p>
          </div>
        </Link>

        <div className="stamp-classified text-[9px] hidden md:block select-none">
          HEMLIG
        </div>

        <nav className="flex gap-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-[0.15em] border border-transparent transition-all
                ${location.pathname === item.path
                  ? 'text-foreground border-b-primary/40 bg-muted/30'
                  : 'text-muted-foreground hover:text-foreground/70'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
