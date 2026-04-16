const sources = [
  {
    category: 'STATLIGA UTREDNINGAR',
    items: [
      { title: 'SOU 1983:13 — Ubåtsskyddskommissionen', author: 'Sven Andersson (ordf.)', note: 'Primär statlig utredning. Fastslog sovjetisk tillskrivning.' },
      { title: 'SOU 1995:135 — Ubåtsfrågan 1981–1994', author: 'Hans G. Forsberg (ordf.), Ubåtskommissionen', note: 'Utvärdering av undervattenskränkningar 1981–94. Bekräftar Mälsten-hydrofonindikation men ifrågasätter signalspaning och nationalitetsbedömning. Anna Christensens reservation: observationsmaterialet håller inte.' },
      { title: 'SOU 2001:85 — Perspektiv på ubåtsfrågan', author: 'Rolf Ekéus (ordf.)', note: 'Granskningskommissionen. Del 1–4. Ifrågasatte tidigare slutsatser.' },
      { title: 'Grandinrapporten', author: 'Grandin m.fl.', note: 'Teknisk rapport. Dykritningar, spektrogram, sondanalys.' },
    ],
  },
  {
    category: 'AKADEMISKA KÄLLOR',
    items: [
      { title: 'Ubåtsfrågan — sanningen finns i betraktarens öga', author: 'Bengt Gustafsson (2005)', note: 'Rapport av generalen Bengt Gustafsson. Kritisk genomgång av ubåtsfrågan.' },
      { title: 'Kanske en ubåtskritik (KKrVA Handlingar 4/2009)', author: 'Olof Santesson', note: 'Recension av Mossbergs "I mörka vatten". Kritiserar brist på hårda bevis i NATO-tesen. Påpekar att officerare öppnat sig för kritik genom bestämda påståenden utan entydiga bevis.' },
      { title: 'I mörka vatten — Hur svenska folket fördes bakom ljuset', author: 'Mathias Mossberg (2009)', note: 'Fd huvudsekreterare i Ekéus-utredningen. Hävdar att det var NATO, inte WP, som kränkte. Bygger på Weinberger-intervjun och Blind Mans Bluff.' },
      { title: 'Ubåtsincidenterna på 1980-talet — En jämförande studie', author: 'Nils Bihari-Andersson (2025)', note: 'Historia 61-90. Akademisk uppsats, Skärhamn.' },
    ],
  },
  {
    category: 'MILITÄRA RAPPORTER',
    items: [
      { title: 'Pejdell-Jansson H 346 — Sökföretag Hårsfjärden', author: 'Kn K Pejdell, N-O Jansson', note: 'Hemlig sammanfattande bottenundersökningsrapport. 16 bilagor. Visar vrak som förklarar sonarobservationer.' },
      { title: 'Walléns bandutredning', author: 'Amiral Göran Wallén', note: 'Utredning av ljudbanden från Mälsten. Rekord i hemligstämplar.' },
      { title: 'FOI Analysrapport — Amalia m.m.', author: 'FOI', note: '3.47-bandet visade sig vara motorseglaren Amalia.' },
      { title: 'Belos loggbok 14 oktober 1982', author: 'Marinen', note: 'Ankring med 70m kätting vid 38m djup → 32m släpspår.' },
    ],
  },
  {
    category: 'SAMTIDA FACKLITTERATUR',
    items: [
      { title: 'Tidskrift i Sjöväsendet nr 3/1986', author: 'Marinen', note: 'Marinens egen redogörelse.' },
      { title: 'Under den fridfulla ytan', author: 'Emil Svensson (2005)', note: 'Självbiografi. Manas chef under operationen.' },
    ],
  },
  {
    category: 'TEKNISKA DOKUMENT',
    items: [
      { title: 'Ritning — Marinmuseum / DigitaltMuseum', author: 'Marinmuseum', note: 'Fartygsritningar.' },
      { title: 'Spektrogramanalys (FOI)', author: 'FOI', note: 'Signal kunde vara HKP 4-sonar. 19,9 kHz försvann med skyddstransformator.' },
      { title: 'Ubåtsnät — taktisk ritning', author: 'Marinen', note: '30×30cm nylonmaskor, stålkärna, sänken.' },
      { title: 'Väderdata v39–v43 1982', author: 'Karl Lantzén', note: 'Molnmängd, sikt, vind — Hårsfjärden och Mysingen.' },
    ],
  },
  {
    category: 'GRANSKANDE JOURNALISTIK',
    items: [
      { title: 'Magasinet Filter — Undervattensläge', author: 'Sune Thomsson m.fl.', note: 'Detaljerad granskning. Bottenspår, Manas bevisfilm, fantasiubåtar, Belos ankring.' },
      { title: 'Uppdrag granskning — Borgnäs (2007)', author: 'SVT', note: 'Ola Tunanders NATO-teori presenteras.' },
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
