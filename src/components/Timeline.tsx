import { events, CATEGORY_COLORS, CATEGORY_LABELS, type SubEvent } from '@/data/events';
import { useState } from 'react';

function EventCard({ event, isExpanded, onToggle }: { event: SubEvent; isExpanded: boolean; onToggle: () => void }) {
  return (
    <div
      className={`border border-border bg-card p-4 cursor-pointer transition-colors hover:border-primary/50 relative
        ${event.classified ? 'border-l-2 border-l-classified' : ''}`}
      onClick={onToggle}
    >
      {event.classified && (
        <div className="absolute top-2 right-2 text-[8px] text-classified font-mono tracking-widest opacity-60">
          HEMLIG
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Date column */}
        <div className="flex-shrink-0 w-24 text-right">
          <div className="text-xs text-primary font-mono">{event.date}</div>
          {event.time && (
            <div className="text-[10px] text-muted-foreground font-mono mt-0.5">{event.time}</div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-block w-2 h-2 flex-shrink-0"
              style={{ backgroundColor: CATEGORY_COLORS[event.category] }}
            />
            <span className="text-[9px] font-mono tracking-widest text-muted-foreground">
              {CATEGORY_LABELS[event.category]}
            </span>
          </div>

          <h3 className="text-sm font-mono font-semibold text-foreground tracking-wide">
            {event.title}
          </h3>

          <div className="text-[10px] text-muted-foreground font-mono mt-1">
            ◎ {event.location} [{event.coordinates[0].toFixed(4)}, {event.coordinates[1].toFixed(4)}]
          </div>

          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-border">
              <p className="text-xs text-secondary-foreground leading-relaxed font-body">
                {event.description}
              </p>
              {event.sources && event.sources.length > 0 && (
                <div className="mt-2 flex gap-2 flex-wrap">
                  {event.sources.map((s) => (
                    <span key={s} className="text-[9px] font-mono px-2 py-0.5 border border-border text-muted-foreground">
                      SRC: {s}
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

  const filtered = filter === 'all' ? events : events.filter(e => e.category === filter);

  return (
    <div className="grid-paper min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="text-[10px] text-muted-foreground font-mono tracking-widest mb-2">
            KRONOLOGISK REDOGÖRELSE
          </div>
          <h2 className="text-lg font-mono font-bold text-foreground tracking-widest">
            HÄNDELSEFÖRLOPP — OKT/NOV 1982
          </h2>
          <div className="w-32 h-px bg-primary mt-2" />
        </div>

        {/* Filters */}
        <div className="flex gap-0 mb-6 border border-border inline-flex">
          {(['all', 'observation', 'military-action', 'political', 'investigation'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 text-[10px] font-mono tracking-wider transition-colors border-r border-border last:border-r-0
                ${filter === cat
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              {cat === 'all' ? 'ALLA' : CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>

        {/* Events */}
        <div className="space-y-1">
          {filtered.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              isExpanded={expandedId === event.id}
              onToggle={() => setExpandedId(expandedId === event.id ? null : event.id)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 pt-4 border-t border-border">
          <p className="text-[9px] text-muted-foreground font-mono tracking-wider">
            DATAKÄLLA: SAMMANSTÄLLNING BASERAD PÅ UBÅTSSKYDDSKOMMISSIONEN (SOU 1983:13),
            GRANSKNINGSKOMMISSIONEN (SOU 2001:85), TUNANDER (2009), GRANDINRAPPORTEN M.FL.
          </p>
        </div>
      </div>
    </div>
  );
}
