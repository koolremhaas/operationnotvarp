import { events, CATEGORY_COLORS, CATEGORY_LABELS, type SubEvent } from '@/data/events';
import { useState, useMemo } from 'react';
import dykarskissImg from '@/assets/dykarskiss.png';
import sparklusterImg from '@/assets/sparkluster-danziger-gatt.png';
import hkp4Img from '@/assets/hkp4-ritning.jpeg';
import transponderImg from '@/assets/transponder-rapport.png';

const EVENT_IMAGES: Record<string, { src: string; caption: string }> = {
  hkp4: { src: hkp4Img, caption: 'HKP 4 (Boeing Vertol 107) — ubåtsjakt med sonar' },
  sparkluster: { src: sparklusterImg, caption: 'Spårkluster, Danziger Gatt — bottenspår' },
  dykarskiss: { src: dykarskissImg, caption: 'Dykarskiss 1982-12-04 — Mälsten' },
  transponder: { src: transponderImg, caption: '"Transpondern" — rapport om föremål på botten' },
};

// 3-letter codes for category chips
const CATEGORY_CODE: Record<SubEvent['category'], string> = {
  'observation': 'OBS',
  'military-action': 'MIL',
  'political': 'POL',
  'investigation': 'UTR',
};

const MONTH_LABEL: Record<string, string> = {
  '1980': '1980', '1981': '1981',
  '1982-09': 'SEPTEMBER 1982', '1982-10': 'OKTOBER 1982',
  '1982-11': 'NOVEMBER 1982', '1982-12': 'DECEMBER 1982',
  '1983': '1983', '1995': '1995', '2001': '2001', '2007': '2007',
};

function monthKey(date: string): string {
  // YYYY-MM-DD → YYYY-MM if oct/nov/dec 1982, else just YYYY
  if (date.startsWith('1982-')) return date.slice(0, 7);
  return date.slice(0, 4);
}

function EventCard({
  event,
  tnr,
  isExpanded,
  onToggle,
}: {
  event: SubEvent;
  tnr: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const image = event.imageKey ? EVENT_IMAGES[event.imageKey] : null;
  const catColor = CATEGORY_COLORS[event.category];

  return (
    <div
      className={`border border-border/40 bg-card/60 p-4 cursor-pointer transition-all hover:bg-card/80 relative photocopy-border
        ${event.classified ? 'border-l-2 border-l-classified/50' : ''}`}
      onClick={onToggle}
    >
      {event.classified && (
        <div className="absolute top-2 right-3 stamp-classified text-[7px] py-0.5 px-2 border-[1px]">
          HEMLIG
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Left rail: TNR + date + time */}
        <div className="flex-shrink-0 w-24 text-right border-r border-border/30 pr-3">
          <div className="text-[9px] text-muted-foreground/50 font-mono tracking-[0.15em] mb-1">
            TNR {tnr}
          </div>
          <div className="text-[12px] text-primary/80 font-mono">{event.date}</div>
          {event.time && (
            <div className="text-[10px] text-muted-foreground/60 font-mono mt-0.5">{event.time}</div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          {/* Category chip */}
          <div className="mb-2">
            <span
              className="inline-block text-[10px] font-mono tracking-[0.18em] px-1.5 py-px border"
              style={{
                color: catColor,
                borderColor: `${catColor}55`,
                backgroundColor: `${catColor}0d`,
              }}
            >
              [{CATEGORY_CODE[event.category]}] {CATEGORY_LABELS[event.category]}
            </span>
          </div>

          <h3 className="text-[13px] font-mono font-medium text-foreground/90 tracking-wide leading-snug">
            {event.title}
          </h3>

          <div className="text-[9px] text-muted-foreground/50 font-mono mt-1.5">
            ◎ {event.location} [{event.coordinates[0].toFixed(3)}, {event.coordinates[1].toFixed(3)}]
          </div>

          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-border/30 pl-3 border-l-2 border-l-primary/25">
              {event.descriptionLines && event.descriptionLines.length > 0 ? (
                <ul className="space-y-1 mb-2">
                  {event.descriptionLines.map((line, i) => (
                    <li
                      key={i}
                      className="text-[12px] text-foreground/65 font-body leading-[1.65] before:content-['—'] before:mr-2 before:text-muted-foreground/50"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              ) : null}

              <p className="text-[12px] text-foreground/65 leading-[1.65] font-body">
                {event.description}
              </p>

              {image && (
                <div className="mt-3 border border-border/20 p-2 bg-background/50">
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full max-h-64 object-contain microfiche-img"
                    loading="lazy"
                  />
                  <div className="text-[9px] text-muted-foreground/45 font-mono mt-1 tracking-wider">
                    {image.caption}
                  </div>
                </div>
              )}

              {event.sources && event.sources.length > 0 && (
                <div className="mt-2.5 flex gap-1.5 flex-wrap">
                  {event.sources.map((s) => (
                    <span
                      key={s}
                      className="text-[9px] font-mono px-1.5 py-0.5 border border-border/30 text-muted-foreground/55"
                    >
                      → {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filter, setFilter] = useState<SubEvent['category'] | 'all'>('all');

  const filtered = useMemo(
    () => (filter === 'all' ? events : events.filter((e) => e.category === filter)),
    [filter]
  );

  // Build TNR map across the FULL events list so numbering is stable regardless of filter
  const tnrMap = useMemo(() => {
    const m = new Map<string, string>();
    events.forEach((e, i) => m.set(e.id, String(i + 1).padStart(3, '0')));
    return m;
  }, []);

  return (
    <div className="grid-paper min-h-screen relative">
      <div className="absolute inset-0 microfiche-glow pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-10 relative">
        <div className="mb-10">
          <div className="text-[8px] text-muted-foreground/50 font-mono tracking-[0.3em] mb-3">
            KRONOLOGISK REDOGÖRELSE — HEMLIG HANDLING
          </div>
          <h2 className="text-base font-mono font-bold text-foreground/90 tracking-[0.15em]">
            HÄNDELSEFÖRLOPP
          </h2>
          <div className="text-[10px] text-muted-foreground/40 font-mono tracking-wider mt-1">
            OKTOBER 1982 — 2007
          </div>
          <div className="w-20 h-px bg-primary/30 mt-3" />
        </div>

        <div className="flex gap-6">
          <div className="flex-1 min-w-0">
            <div className="space-y-1.5">
              {filtered.map((event, idx) => {
                const prev = idx > 0 ? filtered[idx - 1] : null;
                const mk = monthKey(event.date);
                const showDivider = !prev || monthKey(prev.date) !== mk;
                return (
                  <div key={event.id}>
                    {showDivider && (
                      <div className="flex items-center gap-3 mt-6 mb-3 first:mt-0">
                        <div className="h-px flex-1 bg-border/30" />
                        <div className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/55">
                          ─── {MONTH_LABEL[mk] ?? mk} ───
                        </div>
                        <div className="h-px flex-1 bg-border/30" />
                      </div>
                    )}
                    <EventCard
                      event={event}
                      tnr={tnrMap.get(event.id) ?? '???'}
                      isExpanded={expandedId === event.id}
                      onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-16 pt-4 border-t border-border/20">
              <p className="text-[8px] text-muted-foreground/30 font-mono tracking-[0.15em] leading-relaxed">
                SAMMANSTÄLLNING: SOU 1983:13 · SOU 2001:85 · TUNANDER · GRANDINRAPPORTEN · PEJDELL-JANSSON · FOI · MAGASINET FILTER
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 w-28 sticky top-24 self-start">
            <div className="text-[8px] text-muted-foreground/45 font-mono tracking-[0.3em] mb-2">FILTER</div>
            <div className="flex flex-col border border-border/30">
              {(['all', 'observation', 'military-action', 'political', 'investigation'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-2 py-1.5 text-[10px] font-mono tracking-[0.12em] transition-colors border-b border-border/30 last:border-b-0 text-left
                    ${filter === cat
                      ? 'bg-primary/10 text-primary/85'
                      : 'text-muted-foreground/55 hover:text-foreground/65'
                    }`}
                >
                  {cat === 'all' ? '[ALL] ALLA' : `[${CATEGORY_CODE[cat]}] ${CATEGORY_LABELS[cat]}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
