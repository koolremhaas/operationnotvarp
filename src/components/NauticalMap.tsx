import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { events, LOCATIONS, MAP_CENTER, MAP_ZOOM, CATEGORY_COLORS, CATEGORY_LABELS } from '@/data/events';
import 'leaflet/dist/leaflet.css';

const createIcon = (color: string) => L.divIcon({
  className: '',
  html: `<div style="
    width: 8px; height: 8px;
    background: ${color};
    border: 1px solid hsl(42, 20%, 60%);
    transform: rotate(45deg);
    opacity: 0.8;
  "></div>`,
  iconSize: [8, 8],
  iconAnchor: [4, 4],
});

const locationIcon = L.divIcon({
  className: '',
  html: `<div style="
    width: 6px; height: 6px;
    border: 1px solid hsl(160, 30%, 40%);
    background: transparent;
  "></div>`,
  iconSize: [6, 6],
  iconAnchor: [3, 3],
});

export default function NauticalMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: MAP_CENTER,
      zoom: MAP_ZOOM,
      zoomControl: true,
      attributionControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OSM',
    }).addTo(map);

    // Location markers
    Object.values(LOCATIONS).forEach((loc) => {
      const marker = L.marker(loc.coordinates, { icon: locationIcon }).addTo(map);
      marker.bindPopup(`
        <div style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; padding: 2px;">
          <div style="font-weight: 600; letter-spacing: 0.1em; font-size: 10px;">${loc.name}</div>
          <div style="font-size: 9px; opacity: 0.5; margin-top: 2px;">
            ${loc.coordinates[0].toFixed(4)}°N, ${loc.coordinates[1].toFixed(4)}°E
          </div>
        </div>
      `);
    });

    // Event markers
    events.forEach((event) => {
      const marker = L.marker(event.coordinates, {
        icon: createIcon(CATEGORY_COLORS[event.category]),
      }).addTo(map);
      marker.bindPopup(`
        <div style="font-family: 'IBM Plex Mono', monospace; font-size: 11px; padding: 2px; max-width: 220px;">
          <div style="font-size: 9px; letter-spacing: 0.1em; opacity: 0.4; margin-bottom: 3px;">
            ${event.date} ${event.time || ''}
          </div>
          <div style="font-weight: 600; font-size: 11px; letter-spacing: 0.05em; margin-bottom: 4px;">${event.title}</div>
          <p style="font-size: 10px; line-height: 1.5; opacity: 0.6;">${event.description}</p>
        </div>
      `);
    });

    // Mälsten circle
    L.circle(LOCATIONS.malsten.coordinates, {
      radius: 800,
      color: 'hsl(160, 30%, 40%)',
      fillColor: 'hsl(160, 30%, 40%)',
      fillOpacity: 0.03,
      weight: 0.5,
      dashArray: '4 6',
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div className="relative h-[calc(100vh-52px)]">
      {/* Legend */}
      <div className="absolute top-4 left-4 z-[1000] bg-card/90 border border-border/40 p-3 photocopy-border">
        <div className="text-[8px] font-mono tracking-[0.25em] text-muted-foreground/50 mb-2">
          TECKENFÖRKLARING
        </div>
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2 mb-0.5">
            <span
              className="w-1.5 h-1.5 inline-block opacity-70"
              style={{
                backgroundColor: CATEGORY_COLORS[key as keyof typeof CATEGORY_COLORS],
                transform: 'rotate(45deg)',
              }}
            />
            <span className="text-[8px] font-mono text-foreground/60">{label}</span>
          </div>
        ))}
        <div className="mt-1.5 pt-1.5 border-t border-border/20">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 inline-block border border-primary/50" />
            <span className="text-[8px] font-mono text-foreground/60">PLATS</span>
          </div>
        </div>
      </div>

      {/* Coordinates */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-card/90 border border-border/40 px-3 py-1">
        <span className="text-[8px] font-mono text-primary/60 tracking-wider">
          WGS 84 — {MAP_CENTER[0].toFixed(4)}°N {MAP_CENTER[1].toFixed(4)}°E
        </span>
      </div>

      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
}
