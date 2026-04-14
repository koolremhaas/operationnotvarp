const sources = [
  {
    category: 'STATLIGA UTREDNINGAR',
    items: [
      { title: 'SOU 1983:13 — Ubåtsskyddskommissionen', author: 'Sven Andersson (ordf.)', note: 'Primär statlig utredning. Fastslog sovjetisk tillskrivning.' },
      { title: 'SOU 2001:85 — Perspektiv på ubåtsfrågan', author: 'Rolf Ekéus (ordf.)', note: 'Granskningskommissionen. Del 1–4. Ifrågasatte tidigare slutsatser.' },
      { title: 'Grandinrapporten', author: 'Grandin m.fl.', note: 'Teknisk rapport. Dykritningar, spektrogram, sondanalys.' },
    ],
  },
  {
    category: 'AKADEMISKA KÄLLOR',
    items: [
      { title: 'Ubåtsfrågan: sanningen finns i betraktarens öga', author: 'Ola Tunander (2009)', note: 'Kritisk analys. Pekar på NATO-koppling.' },
      { title: 'Kungl Krigsvetenskapsakademiens Handlingar 4/2009', author: 'Diverse', note: 'Krigsvetenskaplig analys.' },
      { title: 'FULLTEXT02 (akademisk uppsats)', author: 'Okänd', note: 'Akademisk granskning av ubåtsfrågan.' },
    ],
  },
  {
    category: 'SAMTIDA FACKLITTERATUR',
    items: [
      { title: 'Tidskrift i Sjöväsendet nr 3/1986', author: 'Marinen', note: 'Marinens egen redogörelse.' },
    ],
  },
  {
    category: 'TEKNISKA DOKUMENT',
    items: [
      { title: 'Ritning — Marinmuseum / DigitaltMuseum', author: 'Marinmuseum', note: 'Fartygsritningar.' },
      { title: 'Spektrogramanalys (FOI)', author: 'FOI', note: 'Signal kunde vara HKP 4-sonar.' },
    ],
  },
];

export default function SourcesView() {
  return (
    <div className="grid-paper min-h-screen relative">
      <div className="absolute inset-0 microfiche-glow pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-6 py-10 relative">
        <div className="mb-10">
          <div className="text-[8px] text-muted-foreground/50 font-mono tracking-[0.3em] mb-3">
            REFERENSFÖRTECKNING
          </div>
          <h2 className="text-base font-mono font-bold text-foreground/90 tracking-[0.15em]">
            KÄLLOR & MATERIAL
          </h2>
          <div className="w-20 h-px bg-primary/30 mt-3" />
        </div>

        <div className="space-y-8">
          {sources.map((group) => (
            <div key={group.category}>
              <h3 className="text-[9px] font-mono tracking-[0.25em] text-accent/60 mb-3 pb-1 border-b border-border/20">
                {group.category}
              </h3>
              <div className="space-y-px">
                {group.items.map((item) => (
                  <div key={item.title} className="border border-border/25 bg-card/40 p-3 hover:bg-card/60 transition-all photocopy-border">
                    <h4 className="text-[11px] font-mono font-medium text-foreground/75 tracking-wide">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[9px] text-primary/60 font-mono">{item.author}</span>
                      <span className="text-[9px] text-muted-foreground/35 font-body">— {item.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
