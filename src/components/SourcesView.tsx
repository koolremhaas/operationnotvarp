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
    <div className="grid-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="text-[10px] text-muted-foreground font-mono tracking-widest mb-2">
            REFERENSFÖRTECKNING
          </div>
          <h2 className="text-lg font-mono font-bold text-foreground tracking-widest">
            KÄLLOR & MATERIAL
          </h2>
          <div className="w-32 h-px bg-primary mt-2" />
        </div>

        <div className="space-y-6">
          {sources.map((group) => (
            <div key={group.category}>
              <h3 className="text-[10px] font-mono tracking-widest text-accent mb-3 border-b border-border pb-1">
                {group.category}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => (
                  <div key={item.title} className="border border-border bg-card p-3 hover:border-primary/30 transition-colors">
                    <h4 className="text-xs font-mono font-semibold text-foreground tracking-wide">
                      {item.title}
                    </h4>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-[10px] text-primary font-mono">{item.author}</span>
                      <span className="text-[10px] text-muted-foreground font-body">— {item.note}</span>
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
