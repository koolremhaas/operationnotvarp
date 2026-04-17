import dykarskissImg from '@/assets/dykarskiss.png';
import sparklusterImg from '@/assets/sparkluster-danziger-gatt.png';
import hkp4Img from '@/assets/hkp4-ritning.jpeg';
import spektrogramImg from '@/assets/spektrogram-signal.jpg';
import transponderImg from '@/assets/transponder-rapport.png';
import rapporteringsImg from '@/assets/rapporteringsuttryck.png';
import minkImg from '@/assets/mink-observation.png';
import ubatsnatImg from '@/assets/ubatsnat-ritning.jpg';
import bilaga2Img from '@/assets/bilaga2-marsgarnssund.jpg';
import bilaga5Img from '@/assets/bilaga5-referensspar.jpg';
import bilaga6Img from '@/assets/bilaga6-huvudholmen.jpg';
import bilaga9SokImg from '@/assets/bilaga9-malsten-sok.jpg';
import bilaga9SparImg from '@/assets/bilaga9-malsten-spar.jpg';
import bilaga10Img from '@/assets/bilaga10-liso.jpg';
import bottenspårKölImg from '@/assets/bottenspår-köl.png';
import analysAnkringImg from '@/assets/analys-ankring.png';
import illustrativSkillnadImg from '@/assets/illustrativ-skillnad.png';
import dykarskiss2Img from '@/assets/dykarskiss-2.png';
import sparkluster2Img from '@/assets/sparkluster-danziger-gatt-2.png';
import vitsgarnsundImg from '@/assets/vitsgarnsund-foto.png';
import vitsgarnsund2Img from '@/assets/vitsgarnsund-2.png';
import grandinSystemImg from '@/assets/grandin-systemoversikt.jpg';
import grandinHandelseImg from '@/assets/grandin-handelseforlopp.jpg';
import grandinUbatsnatImg from '@/assets/grandin-ubatsnat.jpg';
import grandinMalstenImg from '@/assets/grandin-malsten-12okt.jpg';
import grandinMinlinjerImg from '@/assets/grandin-minlinjer-storning.jpg';
import grandinPqSisImg from '@/assets/grandin-pq-sis.jpg';
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const exhibits = [
  // --- DYKRAPPORTEN: BILAGOR ---
  {
    id: 'bilaga2',
    title: 'Bilaga 2 — Sökföretag vid jagaren Småland / Märsgarnssund',
    image: bilaga2Img,
    description: 'Sjökortsavdrag M 7109, skala 1:5000. Visar genomsökt område mellan Märsgarnsholmen och Furuholmen. "Flyttad kabel" markerad — kabeln hade flyttats 1,5m på en sträcka av 6–10m, och gick ej att lyfta för hand. Spåren gick parallellt utefter land akter om jagaren mot Märsgarnssund.',
    classification: 'HEMLIG',
    source: 'Pejdell-Jansson H 346, Bilaga 2',
  },
  {
    id: 'bilaga5',
    title: 'Bilaga 5 — Referensspår från svensk ubåt',
    image: bilaga5Img,
    description: 'Bild av referensspår från svensk ubåts bottenlägeplats på position N 59°02,08 och O 18°09,09. Spåret 25–30m långt. Kölstråk 80cm brett, 40cm djupt. Jordhögar på sidorna. Detta referensspår visar hur det ser ut när en ubåt med markerat kölstråk vilar mot bottnen — notera att man tydligt ser formen från ubåtens skrov. "Whiskeyspåret" såg inte alls ut så — det var en rak fåra bara.',
    classification: 'HEMLIG',
    source: 'Pejdell-Jansson H 346, Bilaga 5 sid 3',
  },
  {
    id: 'bottenspår-köl',
    title: 'Referensspår — kölstråk med jordhögar (detalj)',
    image: bottenspårKölImg,
    description: 'Förstoring av referensspåret. Spårets tvärsnitt: kölstråk 80cm brett, 40cm djupt, med uppressade jordhögar (15cm) på sidorna. Avsaknaden av skrovform i "Whiskeyspåret" var avgörande — detta referensspår redovisades aldrig för politikerna.',
    classification: 'HEMLIG',
    source: 'Pejdell-Jansson H 346, Bilaga 5',
  },
  {
    id: 'illustrativ-skillnad',
    title: 'Illustrativ skillnad: kölstråk vs. "Sjöormen"',
    image: illustrativSkillnadImg,
    description: 'Vänster: tvärsnitt av normalt ubåtskölspår med 60cm bredd — rätvinkligt och symmetriskt. Höger: "Sjöormen" — det anomala spåret utan markerat kölstråk, med oregelbunden profil. Dessa två mönster är fundamentalt olika och pekar mot olika ursprung.',
    classification: 'HEMLIG',
    source: 'Analysunderlag',
  },
  {
    id: 'analys-ankring',
    title: 'Analys — spår pekar mot ankring (Djupviken)',
    image: analysAnkringImg,
    description: 'V.O.C.R. — Spår Djupviken. Uppslag 3, sid 378. Bilaga 2 till HKV skr. 10816/74095 sida 98 (29). Måtten: 96cm total bredd, 46cm centralt, 36cm nedpressning, 2–4cm djupa kanter, 3–5cm djupa parallella märken. "Riktig analys spår över botten kan ej fås, och avgörarna uppfattar spåren som efter ett farkost som backat kil framåt etc." — Men spårens slutsats börjar idag ses av nyare tittare som att det frammanande klar ankring.',
    classification: 'HEMLIG',
    source: 'HKV analysunderlag',
  },
  {
    id: 'bilaga6',
    title: 'Bilaga 6 — Sökföretag Stora Huvudholmen',
    image: bilaga6Img,
    description: 'Sjökortsavdrag M 7109. Spår vid spärren Huvudholmen–Alvsta-Långholm: 1) Grop ø12,5cm, djup 30cm. 2) Enkelspår (skiss 2: 40cm brett, 20cm djupt, 10cm centralt). 3) Enkelspår (skiss 3: 60cm brett, 40cm djupt) — avsmalnande, "verkar som om något kört fast, därefter slutar spåret." 4) Grop ø50cm, djup 20cm. En sten 100×60cm hade flyttats i sida. En kabel skavdes vid överkörning.',
    classification: 'HEMLIG',
    source: 'Pejdell-Jansson H 346, Bilaga 6',
  },
  {
    id: 'bilaga9-sok',
    title: 'Bilaga 9 — Sökföretag Mälsten (översikt)',
    image: bilaga9SokImg,
    description: 'Sökföretag Mälsten, perioder: 1982-12-01—12-09 och 1982-12-10—1983-03-06. Sökningar genomförda när vädret tillåtit, vid mikrofon 4 och 5. Kartan visar Mälsten med omgivande sökområden samt Vittinge.',
    classification: 'HEMLIG',
    source: 'Pejdell-Jansson H 346, Bilaga 9 sid 1',
  },
  {
    id: 'bilaga9-spar',
    title: 'Bilaga 9 — Spårskisser Mälsten (tre typer)',
    image: bilaga9SparImg,
    description: 'Tre spårtyper vid Mälsten: 1) Dubbelspår — ovanifrån: två rektangulära avtryck med cirkel emellan, sidovy: 20+20+20cm. 2) Dubbelspår — ~60cm + ~50cm + ~60cm breda parallella band. 3) Enkelspår — 40cm brett, 60cm totalt. Av spåren att döma "kan det tänkas att en eventuell dockning på något sätt skett i detta område." Dubbelspårens kurs: 240° med säkerhet.',
    classification: 'HEMLIG',
    source: 'Pejdell-Jansson H 346, Bilaga 9 sid 2',
  },
  {
    id: 'bilaga10',
    title: 'Bilaga 10 — Sökföretag Lisö (Södertälje)',
    image: bilaga10Img,
    description: 'Sökföretag vid Lisö, 1983-01-26—27 och 1983-02-01—02. Utdrag ur sjökort 721, skala 1:12500. Enkelspår 30cm brett, 10cm djupt, ca 40m långt. Parallellt plogformat spår "som efter ett roder." Ett stort antal ovala och cirkelrunda hål, ibland sammanbundna, varje hål ca 40cm ner i leran.',
    classification: 'HEMLIG',
    source: 'Pejdell-Jansson H 346, Bilaga 10',
  },
  {
    id: 'vitsgarnsund-foto',
    title: 'Vitsgarnssund — historisk bild',
    image: vitsgarnsundImg,
    description: 'Historisk bild av Vitsgarnssund, det smala sundet nära Berga. Bilden visar hur litet och fullproppat detta sund är. Här skall man alltså få plats med en miniubåt och en moderubåt inom en kabellängd. Pejdell-Janssons rapport: "I detta område finns inget att redovisa."',
    classification: 'OFFENTLIG',
    source: 'Historisk bild',
  },
  {
    id: 'vitsgarnsund-sjokort',
    title: 'Vitsgarnssund — sjökortsavdrag M 7109 (skala 1:12500)',
    image: vitsgarnsund2Img,
    description: 'Sjökortsavdrag över Vitsgarnssund mellan Stångudden och Västerudden. Det smala sundet med tydliga kabelledningar (Tk Krledn) markerade. Sökföretagen genomfördes i de skuggade områdena. Trots sundets begränsade dimensioner — och kabelnätets täthet — är det här som en moderubåt och miniubåt påstods ha opererat tillsammans inom en kabellängd.',
    classification: 'HEMLIG',
    source: 'Sjökortsavdrag M 7109',
  },

  // --- DANZIGER GATT SPÅRKLUSTER ---
  {
    id: 'sparkluster',
    title: 'Spårklustret i Danziger Gatt',
    image: sparklusterImg,
    description: 'Manas illustration av spårklustret. Mikrofonlinjen syns i bakgrunden (mikrofon 3, 4 och 5). Enkla spår har blivit dubbla och parallella på illustrationen — stämmer inte med film eller dykarskisser. "Snövesslespåret" skapades troligen vid mikrofoninstallationen i september.',
    classification: 'HEMLIG',
    source: 'Mana illustration',
  },
  {
    id: 'sparkluster2',
    title: 'Spårkluster Danziger Gatt — alternativ vy',
    image: sparkluster2Img,
    description: 'Ytterligare vy av spårklustret vid Danziger Gatt. Bilaga 2 till HKV skr. 10816/74095. Datering 2008-10-01. Tre bojar/prickar syns i bakgrunden, den böjda linjen representerar mikrofonkabeln. De parallella spåren i förgrunden har tolkats som bandspår från larvbandsgående farkost.',
    classification: 'HEMLIG',
    source: 'HKV bilaga',
  },
  {
    id: 'dykarskiss',
    title: 'Dykarskiss 1982-12-04 — Mälsten',
    image: dykarskissImg,
    description: 'Sammanfattande dykarskiss. Det långa släpspåret som syns till vänster på Manas illustration saknas. "Föremål 2" var tomt den 4 december. Perspektivet är vridet och skalan annorlunda jämfört med Manas bild.',
    classification: 'HEMLIG',
    source: 'Dykarskiss 1982-12-04',
  },
  {
    id: 'dykarskiss2',
    title: 'Dykarskiss — Mälsten (sammanhangstillhörning)',
    image: dykarskiss2Img,
    description: 'Bilaga 2 till HKV skr. 10816/74095, sida 102 (147). Mälsten, 2008-10-01. Dykarskiss med sammanhangstillhörning — visar dyklinor, Furuholmen-märke, samt Stenbotten med föremål. De streckade linjerna representerar ubåtsnäten, de lodräta vertikala strecken visar hydrofonernas position. Notera att perspektivet avviker markant från Manas illustration.',
    classification: 'HEMLIG',
    source: 'HKV bilaga',
  },

  // --- ÖVRIGA DOKUMENT ---
  {
    id: 'transponder',
    title: '"Transpondern" och bandspåren på botten',
    image: transponderImg,
    description: 'ÖB gen Lennart Ljungs dagbok 6 december 1982: försökshydrofonerna har indikerat en sändning. CM rapporterar att man funnit ett föremål som kan tänkas vara en sändare-mottagare. "Den ligger fortfarande kvar på botten, är relativt liten till sin omfattning, men kan tänkas vara en transponder." Dykarna fann ett ca 30cm långt föremål, liknande en vals eller brödkavel.',
    classification: 'HEMLIG',
    source: 'ÖB dagbok / Grandinrapporten',
  },
  {
    id: 'spektrogram',
    title: 'Spektrogramanalys — den misstänkta signalen',
    image: spektrogramImg,
    description: 'Spektrogram av den registrerade signalen. FOI:s analys visade att signalen kunde matcha en svensk helikopterburen sonar (HKP 4) som fått fel. FMV:Span bekräftade att inkoppling av skyddstransformator gjorde att signalen på 19,9 kHz försvann.',
    classification: 'HEMLIG',
    source: 'FOI / FMV:Span',
  },
  {
    id: 'hkp4',
    title: 'HKP 4 (Boeing Vertol 107)',
    image: hkp4Img,
    description: 'Ritning av den helikopter som deltog i ubåtsjaktoperationen med dipsonar. Samma typ vars sonar FOI menade kunde ha skapat den signal man fann vid Mälsten.',
    classification: 'OFFENTLIG',
    source: 'Teknisk ritning',
  },
  {
    id: 'ubatsnat',
    title: 'Ubåtsnät — taktisk ritning',
    image: ubatsnatImg,
    description: 'Ritning av ubåtsnät: 30×30cm nylonmaskor (3mm), liken med 15mm diameter och 5mm stålkärna. Sänken håller ner nätet. Förankringar håller nätet på plats. Vid viss dragkraft släpper linorna och bojarna släpar på ytan under ubåtens framfart. Mot små ubåtar skall näten gå ända till botten.',
    classification: 'HEMLIG',
    source: 'Taktisk ritning',
  },
  {
    id: 'rapportering',
    title: 'Rapporteringsuttryck — epistemologisk matris',
    image: rapporteringsImg,
    description: 'Sammanställning över rapporteringsuttryck för bedömning av främmande undervattensverksamhet. Visar hur terminologin ändrades mellan 1984–1994: från "Säker kränkning" till "Konstaterad fr uv-vht kan ej uteslutas". En gradvis försvagning av påståendenas styrka.',
    classification: 'OFFENTLIG',
    source: 'Rapporteringsmatris',
  },
  {
    id: 'mink',
    title: 'Minken — 1994',
    image: minkImg,
    description: 'Från kommissionens rapport: kronologi över händelser 1987–1994. Vid ubåtsjakt i Stockholms skärgård juli 1994: "Mink observeras". En påminnelse om komplexiteten i att tolka observationer under press.',
    classification: 'OFFENTLIG',
    source: 'SOU 2001:85',
  },
  // --- GRANDINRAPPORTEN ---
  {
    id: 'grandin-handelse',
    title: 'Grandinrapporten — Analysgruppens händelseförlopp (3-ubåtshypotesen)',
    image: grandinHandelseImg,
    description: 'Bilaga 2, sid 73. Analysgruppens skissade händelsekedja: tre ubåtar in samtidigt — Ubåt 1 (avledning Sandhamn), Ubåt 2 (huvudmål Hårsfjärden via Landsort), Ubåt 3 (Bråviken/Oxelösund). Texten exemplifierar hur en hel narrativ struktur byggdes på antaganden om koordinerat sovjetiskt företag — utan att hydrofonbevisen senare höll. Två "oklara punkter" medges: varför kvarstannar ubåt utanför Hårsfjärden 7/10, och varför finns en ubåt utanför Mälsten 12/10?',
    classification: 'HEMLIG',
    source: 'Grandinrapporten Bilaga 2, sid 73',
  },
  {
    id: 'grandin-malsten',
    title: 'Grandinrapporten — analysen av Mälsten 12 oktober',
    image: grandinMalstenImg,
    description: 'Sid 91. "1752 Möjlig ub rapporterad från akustiken vid MÄLSTEN. 1800 Bedöms ubåt, fart 1-2 knop." Banden skickades till FOA för analys. Senare visade FOI (2007) att inspelningen var av motorseglaren Amalia. Bedömningen "ubåt kvarstår" för 12/10 stod kvar trots att övriga MÄLSTEN-kontakter inte kunde verifieras vid efteranalys.',
    classification: 'HEMLIG',
    source: 'Grandinrapporten Bilaga 2, sid 91',
  },
  {
    id: 'grandin-minlinjer',
    title: 'Grandinrapporten — minlinjer som spaningsorgan + avsiktliga störningar',
    image: grandinMinlinjerImg,
    description: 'Sid 105. "Avsiktlig störning kan utlösa eldgivning mot icke existerande mål." Rapporten medger osäkerhet om indikationer var sanna eller falska, och att det inte fastslagits om avsiktliga störningar förekommit. Detta öppnar två tolkningsmöjligheter som rapporten inte väger mot varandra: utländsk störning, eller egna systembrister i nyligen utlagda mineringar.',
    classification: 'HEMLIG',
    source: 'Grandinrapporten Bilaga 3, sid 104–105',
  },
  {
    id: 'grandin-ubatsnat',
    title: 'Grandinrapporten — ubåtsnät & täckmantel "torpednät"',
    image: grandinUbatsnatImg,
    description: 'Sid 110–111. Förslag att utveckla nät för "instängning och infångning" av ubåtar. Sekretess: "För att lyckas 100% med denna typ av verksamhet torde stor sekretess vara nödvändig. Näten bör därför döpas till torpednät. Användning vid torpedprov kan motiveras och även vara av ett visst värde." En sällsynt explicit dokumentation av medveten täckmantel-användning i officiell rapport.',
    classification: 'HEMLIG',
    source: 'Grandinrapporten Bilaga 3, sid 110–111',
  },
  {
    id: 'grandin-pqsis',
    title: 'Grandinrapporten — PQ/SIS: fasta system var inte påslagna',
    image: grandinPqSisImg,
    description: 'Sid 116. "I samband med Hårsfjärdenincidenten deltog endast fartygsburna system." De fasta signalspaningssystemen — som annars kunde ha gett oberoende verifiering av främmande ubåtsradar — var avstängda. Förstärker FRA:s senare påpekande (Pär Kettis brev) att marinens egen primitiva utrustning användes som "bevis". Rapporten medger också att rr-katalogen saknade ingångsvärden för identifiering.',
    classification: 'HEMLIG',
    source: 'Grandinrapporten Bilaga 3, sid 116–117',
  },
  {
    id: 'grandin-system',
    title: 'Grandinrapporten — systemöversikt FB 82-87',
    image: grandinSystemImg,
    description: 'Sid 70. Sammanställning av materielsystem som skulle finnas operativa vid försvarsbeslutsperiodens slut: lätta ubåtsjaktflygplan (CESSNA 402 leasing), patrullbåtar med ELMA-incidentsjunkbomb, robotbåt typ Stockholm med släphydrofon, Hkp 4 med torped 422, ny medeltung helikopter med LASER+IR+hydrofonbojar. Hårsfjärdenincidenten användes som politisk hävstång för en förstärkning på ca 200 Mkr utöver programplanen.',
    classification: 'HEMLIG',
    source: 'Grandinrapporten Bilaga 1.3.2, sid 70',
  },
];

export default function DocumentsView() {
  const [zoomed, setZoomed] = useState<{ src: string; title: string } | null>(null);

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
          <p className="text-[10px] text-foreground/40 font-body mt-3 leading-relaxed max-w-xl">
            Nedan presenteras bilagor ur Pejdell-Janssons sammanfattande bottenundersökningsrapport (H 346, 1983-03-06), 
            kompletterat med analysunderlag och historiska fotografier. Rapporten var hemligstämplad och nådde aldrig 
            Ubåtsskyddskommissionens politiker.
          </p>
        </div>

        {/* Section: Dykrapporten */}
        <div className="mb-8">
          <div className="text-[9px] font-mono tracking-[0.2em] text-accent/60 mb-4 border-b border-border/20 pb-2">
            PEJDELL-JANSSON RAPPORT H 346 — BILAGOR
          </div>
        </div>

        <div className="space-y-4">
          {exhibits.map((exhibit, index) => {
            const isSectionBreak = exhibit.id === 'sparkluster';
            const isOtherSection = exhibit.id === 'transponder';
            const isGrandinSection = exhibit.id === 'grandin-handelse';
            return (
              <div key={exhibit.id}>
                {isSectionBreak && (
                  <div className="mb-8 mt-10">
                    <div className="text-[9px] font-mono tracking-[0.2em] text-accent/60 mb-4 border-b border-border/20 pb-2">
                      DANZIGER GATT — SPÅRKLUSTER & DYKARSKISSER
                    </div>
                  </div>
                )}
                {isOtherSection && (
                  <div className="mb-8 mt-10">
                    <div className="text-[9px] font-mono tracking-[0.2em] text-accent/60 mb-4 border-b border-border/20 pb-2">
                      SIGNALER, UTRUSTNING & TERMINOLOGI
                    </div>
                  </div>
                )}
                {isGrandinSection && (
                  <div className="mb-8 mt-10">
                    <div className="text-[9px] font-mono tracking-[0.2em] text-accent/60 mb-4 border-b border-border/20 pb-2">
                      GRANDINRAPPORTEN — ANALYSGRUPPENS BILAGOR
                    </div>
                    <p className="text-[10px] text-foreground/40 font-body leading-relaxed mb-4 max-w-xl">
                      Utdrag ur den s.k. Grandinrapporten (Analysgrupp Ubåtsincident, hösten 1982). 
                      Rapporten skissar händelseförlopp och materielförslag inför försvarsbeslutet 1982/87. 
                      Här syns hur 3-ubåtshypotesen byggdes på antaganden och hur fasta signalspaningssystem 
                      inte var i drift under själva incidenten.
                    </p>
                  </div>
                )}
                <div
                  className={`border border-border/30 bg-card/50 photocopy-border aged-edge
                    ${exhibit.classification === 'HEMLIG' ? 'border-l-2 border-l-classified/40' : ''}`}
                >
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1">
                      {exhibit.classification === 'HEMLIG' && (
                        <span className="text-[8px] font-mono tracking-[0.2em] text-classified/50">■ HEMLIG</span>
                      )}
                      <h3 className="text-xs font-mono font-medium text-foreground/80 tracking-wide">
                        {exhibit.title}
                      </h3>
                    </div>
                    <div className="text-[8px] font-mono text-muted-foreground/40 tracking-wider mb-2">
                      {exhibit.source}
                    </div>

                    <button
                      type="button"
                      onClick={() => setZoomed({ src: exhibit.image, title: exhibit.title })}
                      className="block w-full border border-border/20 bg-background/60 p-2 mb-3 cursor-zoom-in hover:border-primary/40 transition-colors group relative"
                      aria-label={`Förstora ${exhibit.title}`}
                    >
                      <img
                        src={exhibit.image}
                        alt={exhibit.title}
                        className="w-full max-h-80 object-contain microfiche-img"
                        loading="lazy"
                      />
                      <span className="absolute top-1 right-1 text-[8px] font-mono tracking-wider text-muted-foreground/40 group-hover:text-primary/70 transition-colors bg-background/70 px-1.5 py-0.5">
                        ⊕ FÖRSTORA
                      </span>
                    </button>

                    <p className="text-[10px] text-foreground/50 font-body leading-relaxed">
                      {exhibit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* External links */}
        <div className="mt-12 border-t border-border/20 pt-6">
          <div className="text-[9px] font-mono tracking-[0.2em] text-accent/60 mb-3">
            EXTERNA KÄLLOR
          </div>
          <div className="space-y-1">
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
            <a
              href="https://magasinetfilter.se/granskning/undervattenslage/"
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-border/20 bg-card/30 p-3 hover:bg-card/50 transition-all"
            >
              <span className="text-[10px] font-mono text-primary/70">→ Magasinet Filter — Undervattensläge</span>
              <span className="block text-[9px] text-muted-foreground/40 font-body mt-0.5">Detaljerad granskning med alla bottenspår, dykrapporter och Manas bevisfilm</span>
            </a>
          </div>
        </div>
      </div>

      {/* Zoom Dialog */}
      <Dialog open={!!zoomed} onOpenChange={(open) => !open && setZoomed(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto p-2 bg-background border-border">
          {zoomed && (
            <div className="flex flex-col gap-2">
              <div className="text-[10px] font-mono tracking-[0.15em] text-foreground/70 px-2 pt-1">
                {zoomed.title}
              </div>
              <img
                src={zoomed.src}
                alt={zoomed.title}
                className="max-w-full max-h-[85vh] object-contain mx-auto"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
