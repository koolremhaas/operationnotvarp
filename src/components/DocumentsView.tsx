const documents = [
  {
    id: 'ubk-1983',
    title: 'Ubåtsskyddskommissionen (SOU 1983:13)',
    type: 'KOMMISSION',
    year: '1983',
    classification: 'OFFENTLIG',
    description: 'Sven Anderssons kommission. Fastslog att främmande undervattensverksamhet ägt rum. Pekade mot Sovjetunionen.',
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
    type: 'KOMMISSION',
    year: '2001',
    classification: 'OFFENTLIG',
    description: 'Ambassadör Rolf Ekéus granskning. Ifrågasatte delar av den tidigare Sovjettillskrivningen. Perspektiv på ubåtsfrågan i fyra delar.',
  },
  {
    id: 'tunander-2009',
    title: 'Tunander — Ubåtsfrågan: sanningen finns i betraktarens öga',
    type: 'ARTIKEL',
    year: '2009',
    classification: 'OFFENTLIG',
    description: 'Ola Tunanders analys av de politiska dimensionerna. Pekar på att samma amiraler som begränsade vapeninsatsen senare hävdade sovjetiskt ursprung.',
  },
  {
    id: 'tis-1986',
    title: 'Tidskrift i Sjöväsendet nr 3/1986',
    type: 'TIDSKRIFT',
    year: '1986',
    classification: 'OFFENTLIG',
    description: 'Marinens egen tidskrift med samtida redogörelser och analyser av ubåtskränkningarna.',
  },
  {
    id: 'kkrva-2009',
    title: 'Kungl Krigsvetenskapsakademiens Handlingar 4/2009',
    type: 'AKADEMISK',
    year: '2009',
    classification: 'OFFENTLIG',
    description: 'Akademisk granskning av ubåtsfrågan ur krigsvetenskapligt perspektiv.',
  },
];

export default function DocumentsView() {
  return (
    <div className="grid-paper min-h-screen relative">
      <div className="absolute inset-0 microfiche-glow pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 py-10 relative">
        <div className="mb-10">
          <div className="text-[8px] text-muted-foreground/50 font-mono tracking-[0.3em] mb-3">
            ARKIV — PRIMÄRKÄLLOR
          </div>
          <h2 className="text-base font-mono font-bold text-foreground/90 tracking-[0.15em]">
            DOKUMENT & RAPPORTER
          </h2>
          <div className="w-20 h-px bg-primary/30 mt-3" />
        </div>

        <div className="space-y-px">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className={`border border-border/30 bg-card/50 p-4 hover:bg-card/70 transition-all photocopy-border
                ${doc.classification === 'HEMLIG' ? 'border-l-2 border-l-classified/40' : ''}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[8px] font-mono tracking-[0.2em] text-muted-foreground/40 border border-border/20 px-1.5 py-0.5">
                      {doc.type}
                    </span>
                    <span className="text-[9px] font-mono text-muted-foreground/30">{doc.year}</span>
                    {doc.classification === 'HEMLIG' && (
                      <span className="text-[8px] font-mono tracking-[0.2em] text-classified/50">
                        ■ HEMLIG
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs font-mono font-medium text-foreground/80 tracking-wide mt-1">
                    {doc.title}
                  </h3>
                  <p className="text-[10px] text-foreground/40 font-body leading-relaxed mt-2">
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
