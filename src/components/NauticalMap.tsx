import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { events, LOCATIONS, MAP_CENTER, MAP_ZOOM, CATEGORY_COLORS, CATEGORY_LABELS } from '@/data/events';
import 'leaflet/dist/leaflet.css';

const createIcon = (color: string) => L.divIcon({
  className: '',
  html: `<div style="
    width: 7px; height: 7px;
    background: ${color};
    border: 1px solid hsl(42, 20%, 55%);
    transform: rotate(45deg);
    opacity: 0.75;
  "></div>`,
  iconSize: [7, 7],
  iconAnchor: [3.5, 3.5],
});

const locationIcon = L.divIcon({
  className: '',
  html: `<div style="
    width: 5px; height: 5px;
    border: 1px solid hsl(42, 35%, 50%);
    background: transparent;
  "></div>`,
  iconSize: [5, 5],
  iconAnchor: [2.5, 2.5],
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

    // Dark base layer
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; CartoDB',
    }).addTo(map);

    // EMODnet Bathymetry — color-shaded depth (darker blue = deeper)
    L.tileLayer.wms('https://ows.emodnet-bathymetry.eu/wms', {
      layers: 'emodnet:mean_depth',
      format: 'image/png',
      transparent: true,
      attribution: '&copy; EMODnet Bathymetry',
      opacity: 0.25,
      styles: 'emodnet:mean_depth',
    } as any).addTo(map);

    // EMODnet depth contour lines (subtle)
    L.tileLayer.wms('https://ows.emodnet-bathymetry.eu/wms', {
      layers: 'emodnet:contours',
      format: 'image/png',
      transparent: true,
      attribution: '&copy; EMODnet Bathymetry',
      opacity: 0.15,
    } as any).addTo(map);

    // Nautical chart overlay (OpenSeaMap)
    L.tileLayer('https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenSeaMap',
      opacity: 0.7,
    }).addTo(map);

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
          <p style="font-size: 10px; line-height: 1.5; opacity: 0.6;">${event.description.substring(0, 200)}...</p>
        </div>
      `);
    });

    // Mälsten circle
    L.circle(LOCATIONS.malsten.coordinates, {
      radius: 800,
      color: 'hsl(42, 35%, 50%)',
      fillColor: 'hsl(42, 35%, 50%)',
      fillOpacity: 0.03,
      weight: 0.5,
      dashArray: '4 6',
    }).addTo(map);

    // Märsgarns hamn highlight
    L.circle(LOCATIONS.marsgarn.coordinates, {
      radius: 400,
      color: 'hsl(25, 40%, 40%)',
      fillColor: 'hsl(25, 40%, 40%)',
      fillOpacity: 0.04,
      weight: 0.5,
      dashArray: '3 5',
    }).addTo(map);

    // Vitsgarnssund highlight
    L.circle(LOCATIONS.vitsgarnssund.coordinates, {
      radius: 300,
      color: 'hsl(0, 70%, 50%)',
      fillColor: 'hsl(0, 70%, 50%)',
      fillOpacity: 0.05,
      weight: 0.5,
      dashArray: '2 4',
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
