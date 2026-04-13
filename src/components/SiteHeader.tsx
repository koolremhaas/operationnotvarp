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
    <header className="border-b border-border bg-card">
      <div className="flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-primary flex items-center justify-center">
            <span className="text-primary text-xs font-mono font-bold">⊕</span>
          </div>
          <div>
            <h1 className="text-sm font-mono font-bold tracking-widest text-foreground leading-none">
              HÅRSFJÄRDEN 1982
            </h1>
            <p className="text-[10px] text-muted-foreground tracking-[0.2em] mt-0.5">
              UBÅTSKRÄNKNINGARNA — EN DOKUMENTATION
            </p>
          </div>
        </Link>

        <div className="stamp-classified text-[10px] hidden md:block">
          HEMLIG / KVALIFICERAT HEMLIG
        </div>

        <nav className="flex gap-0">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`px-4 py-2 text-xs font-mono tracking-wider border border-transparent transition-colors
                ${location.pathname === item.path
                  ? 'text-primary border-primary bg-primary/5'
                  : 'text-muted-foreground hover:text-foreground hover:border-border'
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
