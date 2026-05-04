
# Plan: Mer Grandinrapport + läsbarhetsförbättringar

## Del 1 — Innehåll från del 21–29 (sid 121–171)

De nya delarna är **Bilaga 3.3 VAPEN** + två **CM-skrivelser från 1981** + **Bilaga 5.5 materielförslag**. Detta är guldgruva: det är försvarets egen, sifferhårda obduktion av varför 47 sjunkbomber och 5 minsprängningar inte fick effekt.

### Nya tidslinjehändelser i `src/data/events.ts`

Faktagranskar och kompletterar mineringarna utifrån Bilaga 3.3 (sid 128–131) — Grandins egen sammanställning skiljer sig från det vi har på flera punkter:

1. **`evt-g08` 1982-10-07 14:50** — MS 2 Måsknuv: två flytminor automatsprängdes. Misstanke om vådatändning kunde inte avskrivas. *Vid passage 5 m över botten mitt emellan minorna: avstånd ~17 m till skrov.* (sid 128)
2. **`evt-g09` 1982-10-07 18:36/18:38** — MS 3: K10-mina + senare 3 nya indikeringar, manuell sprängning. *60 sek från indikering till smäll → en 4-knops-ubåt hinner 120 m, alltså redan ute ur farozonen.* (sid 129) — visar exakt varför insatserna misslyckades.
3. **`evt-g10` 1982-10-13 23:00** — MS 1 Danziger Gatt: **6 intilliggande bottenminor indikerar samtidigt** (eldförbud rådde). Första gången på 20 driftsdygn. Prov 81-10-20 med svensk ubåt visar exakt detta mönster vid 45° passage → "**mycket sannolik passage av undervattensfarkost**". (sid 131) — en av rapportens starkaste slutsatser.
4. **`evt-g11` 1982-10-26 12:22 + 1982-11-01 02:17/08:13** — MS 1: upprepade 5-mineindikeringar i två grupper, tyder på passage i västlig (in) eller SV (ut) riktning. (sid 131–132)
5. **`evt-g12` Statistisk slutsats (vapenbilagan)** — *"Aldrig någonsin har en ubåt tvingats upp till ytan i främmande territorium"* (sid 147). Beräknad träffsannolikhet vid 1 hkp + 6 sjb 51 = **6 %**; bästa scenariot 1 hkp + 2 ptrb + 32 sjb 33 = **20 %**. Markeras som `category: 'investigation'`, klassificerad.
6. **`evt-g13` 1981-04-30 — CM-skrivelse om signalbibliotek** — Marinen hade vid incidentens utbrott ingen färdig analyscentral och otillräckligt bibliotek över främmande ubåtars akustiska "fingeravtryck". Listar måltyper de saknade inspelningar av: WP-ubåtar (Whiskey, Tango, Foxtrot, Romeo, Quebec, Zulu IV), NATO-ubåtar (Type 205/206, Näkken). (sid 162–168) — förklarar varför man inte kunde nationalitetsbestämma.

### Nya dokumentkort i `DocumentsView.tsx` — sektion **"BILAGA 3.3 — VAPEN: TEKNISK OBDUKTION"**

Kopierar 6 sidskanningar från `parsed-documents://` till `src/assets/`:

| Filnamn | Innehåll |
|---|---|
| `grandin-ubatsnat-konstruktion.jpg` (sid 121, page_2) | Konstruktionsritning av "torpednätet" — 30×30 cm masknät, 3 mm nylon, lik med stålkärna. Bekräftar att det aldrig handlade om torpednät. |
| `grandin-vapen-disposition.jpg` (sid 123, page_3) | Bilagans innehållsförteckning — visar omfånget av analyserade vapensystem. |
| `grandin-trafftabell.jpg` (sid 136, page_4 tabell) | **Träffsannolikhetstabellen 6–20 %** — central bevis för insatsernas kapacitet. |
| `grandin-sjb-insatser-1.jpg` (sid 150, page_5 tabell) | Sjunkbombsinsatser sida 1 — insats 1–5, 1–4 oktober. |
| `grandin-sjb-insatser-2.jpg` (sid 151, page_1 tabell) | Sjunkbombsinsatser sida 2 — insats 6–9, inklusive Mode-incidenten 4/10 och de 4 bomberna ost Furuskaten. |
| `grandin-cm-mallista.jpg` (sid 165, page_3) | CM-listan över ubåtsmål man saknade signalbibliotek för. Länkar till varför nationalitet inte kunde fastställas. |

Sektionen placeras efter "GRANDINRAPPORTEN — ANALYSGRUPPENS BILAGOR" och före "MAGASINET FILTER".

### Faktajustering i befintliga händelser
- `evt-002b` (Mode/Farfars grund 4/10): Grandins sammanställning (sid 151, insats 8) anger **20:00**, inte 18:45–19:00, och endast **2 sjb 33** med "Hf och andra säkra ind" som indikation. Justera tid och text.

---

## Del 2 — Läsbarhet utan att bryta stilen

Stilen är medvetet "klassificerat dokument / mikrofiche". Utmaningen: göra texten läsbarare utan att tappa den känslan. Här är konkreta, **stegvisa** förbättringar — du väljer vilka du vill ha:

### A. Tidsnummer (TNR) — föreslås
Lägg till ett **löpnummer** "TNR 001" framför varje händelse. Detta är *autentiskt* arkivspråk (tidslogg-nummer), gör händelser refererbara ("se TNR 037") och adderar tyngd till stilen istället för att bryta den.

```text
TNR 001  │  82-10-01  │  12:50
         │  ◉ OBSERVATION
         │  Periskopobservation Furuholmen–Berganäs
         │  ◎ Furuholmen–Berganäs [58.880, 18.040]
```

### B. Storleksjustering (försiktig)
Nuvarande typografi är väldigt liten (8–11 px). Förslag:
| Element | Nu | Föreslås |
|---|---|---|
| Datum | 11 px | **12 px** |
| Tid | 9 px | 10 px |
| Kategori-label | 8 px | **10 px** |
| Titel | 12 px (xs) | **13 px** |
| Beskrivning | 11 px | **12 px**, line-height 1.65 |
| Koordinater/källor | 8–9 px | 9 px (oförändrat — detalj-typografi) |

Detta är ~15 % större men **fortfarande tätt och dokumentärt**. Inga teckensnitt byts.

### C. Kategori-chip istället för bara prick
Nu: liten 1.5×1.5 px färgad fyrkant + svag etikett. Förslag: en **bokstavskod i ram**:

```text
[OBS]  observation
[MIL]  militär åtgärd  
[POL]  politisk
[UTR]  utredning
```
Kompakt monospace-chip med 1px ram i kategorifärg. Ökar läsbarhet *kraftigt* — du ser kategorin på 50 m håll — utan att lägga till färgytor som bryter den dämpade paletten.

### D. Visuell hierarki i expanderad vy
När en händelse expanderas: lägg en **liten tunn vertikal linje** (2 px, primary/30) i vänsterkanten på beskrivningen. Knyter ihop expanderad text med kortet utan ny färg.

### E. Beskrivningar — bryt upp långa stycken
Vissa beskrivningar är 4–5 rader monospace. Förslag: **bullet-style med "—" prefix** för flerstegshändelser (Mode-incidenten t.ex.):

```
— 18:05 vågsvall vid Stora Hästskär
— 18:10 FM-eko vid Länsman  
— 18:15 optiskt "ubåtstorn" vid Sandön
— 20:00 Mode fäller 2 sjb 33 vid Farfars grund
```
Ren docs-stil, mycket läsbarare än löpande prosa.

### F. Sektionsavdelare per månad
Lägg en faint horisontell rubrik mellan månader: `─── NOVEMBER 1982 ───`. Hjälper ögat hitta sig i de 60+ händelserna.

### Vad jag *inte* föreslår
- Större titel/h2 — skulle bryta mikrofiche-känslan
- Färgade bakgrunder per kategori — för "modernt"
- Större line-height generellt — gör att kort tappar densitet
- Sans-serif fallback — bryter hela stilen

---

## Frågor innan jag bygger

Jag bygger gärna **allt** — innehåll + alla 6 läsbarhetspunkterna (A–F). Men säg till om du vill skippa någon. Default om du bara säger "kör": A, B, C, E aktiveras (de mest värdefulla); D och F skippas (mer dekorativa).

## Filer som ändras
- `src/data/events.ts` — 6 nya events, justering av evt-002b, TNR-fält tillagt på SubEvent-interfacet
- `src/components/Timeline.tsx` — TNR-prefix, typografi-skalning, kategori-chip, månads-divider, listformat för flerstegshändelser
- `src/components/DocumentsView.tsx` — ny sektion "BILAGA 3.3 — VAPEN"
- `src/assets/` — 6 nya skanningar från Grandinrapporten
