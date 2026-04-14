import dykarskissImg from '@/assets/dykarskiss.png';
import sparklusterImg from '@/assets/sparkluster-danziger-gatt.png';
import hkp4Img from '@/assets/hkp4-ritning.jpeg';
import spektrogramImg from '@/assets/spektrogram-signal.jpg';
import transponderImg from '@/assets/transponder-rapport.png';
import rapporteringsImg from '@/assets/rapporteringsuttryck.png';
import minkImg from '@/assets/mink-observation.png';
import ubatsnatImg from '@/assets/ubatsnat-ritning.jpg';

const exhibits = [
  {
    id: 'sparkluster',
    title: 'Spårklustret i Danziger Gatt',
    image: sparklusterImg,
    description: 'Manas illustration av spårklustret. Mikrofonlinjen syns i bakgrunden (mikrofon 3, 4 och 5). Enkla spår har blivit dubbla och parallella på illustrationen — stämmer inte med film eller dykarskisser. "Snövesslespåret" skapades troligen vid mikrofoninstallationen i september.',
    classification: 'HEMLIG',
  },
  {
    id: 'dykarskiss',
    title: 'Dykarskiss 1982-12-04 — Mälsten',
    image: dykarskissImg,
    description: 'Sammanfattande dykarskiss. Det långa släpspåret som syns till vänster på Manas illustration saknas. "Föremål 2" var tomt den 4 december. Perspektivet är vridet och skalan annorlunda jämfört med Manas bild.',
    classification: 'HEMLIG',
  },
  {
    id: 'transponder',
    title: '"Transpondern" och bandspåren på botten',
    image: transponderImg,
    description: 'ÖB gen Lennart Ljungs dagbok 6 december 1982: försökshydrofonerna har indikerat en sändning. CM rapporterar att man funnit ett föremål som kan tänkas vara en sändare-mottagare. "Den ligger fortfarande kvar på botten, är relativt liten till sin omfattning, men kan tänkas vara en transponder." Dykarna fann ett ca 30cm långt föremål, liknande en vals eller brödkavel.',
    classification: 'HEMLIG',
  },
  {
    id: 'spektrogram',
    title: 'Spektrogramanalys — den misstänkta signalen',
    image: spektrogramImg,
    description: 'Spektrogram av den registrerade signalen. FOI:s analys visade att signalen kunde matcha en svensk helikopterburen sonar (HKP 4) som fått fel. FMV:Span bekräftade att inkoppling av skyddstransformator gjorde att signalen på 19,9 kHz försvann.',
    classification: 'HEMLIG',
  },
  {
    id: 'hkp4',
    title: 'HKP 4 (Boeing Vertol 107)',
    image: hkp4Img,
    description: 'Ritning av den helikopter som deltog i ubåtsjaktoperationen med dipsonar. Samma typ vars sonar FOI menade kunde ha skapat den signal man fann vid Mälsten.',
    classification: 'OFFENTLIG',
  },
  {
    id: 'ubatsnat',
    title: 'Ubåtsnät — taktisk ritning',
    image: ubatsnatImg,
    description: 'Ritning av ubåtsnät: 30×30cm nylonmaskor (3mm), liken med 15mm diameter och 5mm stålkärna. Sänken håller ner nätet. Förankringar håller nätet på plats. Vid viss dragkraft släpper linorna och bojarna släpar på ytan under ubåtens framfart. Mot små ubåtar skall näten gå ända till botten.',
    classification: 'HEMLIG',
  },
  {
    id: 'rapportering',
    title: 'Rapporteringsuttryck — epistemologisk matris',
    image: rapporteringsImg,
    description: 'Sammanställning över rapporteringsuttryck för bedömning av främmande undervattensverksamhet. Visar hur terminologin ändrades mellan 1984–1994: från "Säker kränkning" till "Konstaterad fr uv-vht kan ej uteslutas". En gradvis försvagning av påståendenas styrka.',
    classification: 'OFFENTLIG',
  },
  {
    id: 'mink',
    title: 'Minken — 1994',
    image: minkImg,
    description: 'Från kommissionens rapport: kronologi över händelser 1987–1994. Vid ubåtsjakt i Stockholms skärgård juli 1994: "Mink observeras". En påminnelse om komplexiteten i att tolka observationer under press.',
    classification: 'OFFENTLIG',
  },
];

export default function DocumentsView() {
  return (
    <div className="grid-paper min-h-screen relative">
      <div className="absolute inset-0 microfiche-glow pointer-events-none" />

      <div className="max-w-3xl mx-auto px-6 py-10 relative">
        <div className="mb-10">
          <div className="text-[8px] text-muted-foreground/50 font-mono tracking-[0.3em] mb-3">
            ARKIV — VISUELLT MATERIAL
          </div>
          <h2 className="text-base font-mono font-bold text-foreground/90 tracking-[0.15em]">
            DOKUMENT & BEVISNING
          </h2>
          <div className="w-20 h-px bg-primary/30 mt-3" />
        </div>

        <div className="space-y-4">
          {exhibits.map((exhibit) => (
            <div
              key={exhibit.id}
              className={`border border-border/30 bg-card/50 photocopy-border aged-edge
                ${exhibit.classification === 'HEMLIG' ? 'border-l-2 border-l-classified/40' : ''}`}
            >
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {exhibit.classification === 'HEMLIG' && (
                    <span className="text-[8px] font-mono tracking-[0.2em] text-classified/50">■ HEMLIG</span>
                  )}
                  <h3 className="text-xs font-mono font-medium text-foreground/80 tracking-wide">
                    {exhibit.title}
                  </h3>
                </div>

                <div className="border border-border/20 bg-background/60 p-2 mb-3">
                  <img
                    src={exhibit.image}
                    alt={exhibit.title}
                    className="w-full max-h-80 object-contain microfiche-img"
                    loading="lazy"
                  />
                </div>

                <p className="text-[10px] text-foreground/50 font-body leading-relaxed">
                  {exhibit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* External links */}
        <div className="mt-12 border-t border-border/20 pt-6">
          <div className="text-[9px] font-mono tracking-[0.2em] text-accent/60 mb-3">
            EXTERNA KÄLLOR
          </div>
          <div className="space-y-1">
            <a
              href="https://magasinetfilter.se/granskning/undervattenslage/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border/20 bg-card/30 p-3 hover:bg-card/50 transition-all"
            >
              <span className="text-[10px] font-mono text-primary/70">→ Magasinet Filter — Undervattensläge</span>
              <span className="block text-[9px] text-muted-foreground/40 font-body mt-0.5">Detaljerad granskning med alla bottenspår, dykrapporter och Manas bevisfilm</span>
            </a>
            <a
              href="https://magasinetfilter.se/wp-content/uploads/2018/03/C.-Sökföretag-Hårsfjärden-PejdellJansson-kopia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border/20 bg-card/30 p-3 hover:bg-card/50 transition-all"
            >
              <span className="text-[10px] font-mono text-primary/70">→ Pejdell-Jansson dykrapport (PDF)</span>
              <span className="block text-[9px] text-muted-foreground/40 font-body mt-0.5">Sökföretag Hårsfjärden — sammanfattande bottenundersökningsrapport H 346</span>
            </a>
            <a
              href="https://magasinetfilter.se/wp-content/uploads/2018/03/I.-FOI-Analysrapport-Amalia-mm-kopia.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border/20 bg-card/30 p-3 hover:bg-card/50 transition-all"
            >
              <span className="text-[10px] font-mono text-primary/70">→ FOI Analysrapport — Amalia m.m.</span>
              <span className="block text-[9px] text-muted-foreground/40 font-body mt-0.5">3.47-bandet visade sig vara motorseglaren Amalia</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
