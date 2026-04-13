const documents = [
  {
    id: 'ubk-1983',
    title: 'Ubåtsskyddskommissionen (SOU 1983:13)',
    type: 'KOMMISSIONSRAPPORT',
    year: '1983',
    classification: 'OFFENTLIG',
    description: 'Sven Anderssons kommission. Fastställde att främmande undervattensverksamhet ägt rum. Pekade mot Sovjetunionen.',
  },
  {
    id: 'grandin',
    title: 'Grandinrapporten',
    type: 'UTREDNING',
    year: '1990-tal',
    classification: 'HEMLIG',
    description: 'Detaljerad teknisk rapport med dykritningar, sondbeskrivningar och spektrogramanalys. Innehåller FOI:s analys av den sond som hittades vid Mälsten.',
  },
  {
    id: 'sou-2001',
    title: 'Granskningskommissionen (SOU 2001:85)',
    type: 'KOMMISSIONSRAPPORT',
    year: '2001',
    classification: 'OFFENTLIG',
    description: 'Ambassadör Rolf Ekéus granskning. Ifrågasatte delar av den tidigare Sovjettillskrivningen. Perspektiv på ubåtsfrågan i fyra delar.',
  },
  {
    id: 'tunander-2009',
    title: 'Tunander — Ubåtsfrågan: sanningen finns i betraktarens öga',
    type: 'AKADEMISK ARTIKEL',
    year: '2009',
    classification: 'OFFENTLIG',
    description: 'Ola Tunanders analys av de politiska dimensionerna. Pekar på att samma amiraler som begränsade vapeninsatsen senare hävdade sovjetiskt ursprung.',
  },
  {
    id: 'tis-1986',
    title: 'Tidskrift i Sjöväsendet nr 3/1986',
    type: 'FACKTIDSKRIFT',
    year: '1986',
    classification: 'OFFENTLIG',
    description: 'Marinens egen tidskrift med samtida redogörelser och analyser av ubåtskränkningarna.',
  },
  {
    id: 'kkrva-2009',
    title: 'Kungl Krigsvetenskapsakademiens Handlingar och Tidskrift 4/2009',
    type: 'AKADEMISK',
    year: '2009',
    classification: 'OFFENTLIG',
    description: 'Akademisk granskning av ubåtsfrågan ur krigsvetenskapligt perspektiv.',
  },
];

export default function DocumentsView() {
  return (
    <div className="grid-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="text-[10px] text-muted-foreground font-mono tracking-widest mb-2">
            ARKIV — PRIMÄRKÄLLOR
          </div>
          <h2 className="text-lg font-mono font-bold text-foreground tracking-widest">
            DOKUMENT & RAPPORTER
          </h2>
          <div className="w-32 h-px bg-primary mt-2" />
        </div>

        <div className="space-y-1">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className={`border border-border bg-card p-4 hover:border-primary/30 transition-colors
                ${doc.classification === 'HEMLIG' ? 'border-l-2 border-l-classified' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[9px] font-mono tracking-widest text-muted-foreground border border-border px-2 py-0.5">
                      {doc.type}
                    </span>
                    <span className="text-[9px] font-mono text-muted-foreground">{doc.year}</span>
                    {doc.classification === 'HEMLIG' && (
                      <span className="text-[9px] font-mono tracking-widest text-classified">
                        ■ HEMLIG
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-mono font-semibold text-foreground tracking-wide mt-1">
                    {doc.title}
                  </h3>
                  <p className="text-xs text-secondary-foreground font-body leading-relaxed mt-2">
                    {doc.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
