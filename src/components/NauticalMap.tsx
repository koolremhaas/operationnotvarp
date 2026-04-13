import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet';
import L from 'leaflet';
import { events, LOCATIONS, MAP_CENTER, MAP_ZOOM, CATEGORY_COLORS, CATEGORY_LABELS } from '@/data/events';
import 'leaflet/dist/leaflet.css';

// Custom marker icon
const createIcon = (color: string) => L.divIcon({
  className: '',
  html: `<div style="
    width: 10px; height: 10px;
    background: ${color};
    border: 1px solid hsl(45, 20%, 80%);
    transform: rotate(45deg);
  "></div>`,
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

const locationIcon = L.divIcon({
  className: '',
  html: `<div style="
    width: 8px; height: 8px;
    border: 1px solid hsl(180, 60%, 45%);
    background: transparent;
    border-radius: 0;
  "></div>`,
  iconSize: [8, 8],
  iconAnchor: [4, 4],
});

export default function NauticalMap() {
  return (
    <div className="relative h-[calc(100vh-52px)]">
      {/* Map legend */}
      <div className="absolute top-4 left-4 z-[1000] bg-card border border-border p-3">
        <div className="text-[9px] font-mono tracking-widest text-muted-foreground mb-2">
          TECKENFÖRKLARING
        </div>
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <div key={key} className="flex items-center gap-2 mb-1">
            <span
              className="w-2 h-2 inline-block"
              style={{
                backgroundColor: CATEGORY_COLORS[key as keyof typeof CATEGORY_COLORS],
                transform: 'rotate(45deg)',
              }}
            />
            <span className="text-[9px] font-mono text-foreground">{label}</span>
          </div>
        ))}
        <div className="mt-2 pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 inline-block border border-primary" />
            <span className="text-[9px] font-mono text-foreground">PLATS</span>
          </div>
        </div>
      </div>

      {/* Coordinate readout */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-card border border-border px-3 py-1.5">
        <span className="text-[9px] font-mono text-primary tracking-wider">
          WGS 84 — {MAP_CENTER[0].toFixed(4)}°N {MAP_CENTER[1].toFixed(4)}°E
        </span>
      </div>

      <MapContainer
        center={MAP_CENTER}
        zoom={MAP_ZOOM}
        className="h-full w-full"
        zoomControl={true}
        attributionControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OSM'
        />

        {/* Location markers */}
        {Object.values(LOCATIONS).map((loc) => (
          <Marker
            key={loc.name}
            position={loc.coordinates}
            icon={locationIcon}
          >
            <Popup className="nautical-popup">
              <div className="font-mono text-xs p-1">
                <div className="font-bold tracking-wider">{loc.name}</div>
                <div className="text-[10px] mt-1 opacity-70">
                  {loc.coordinates[0].toFixed(4)}°N, {loc.coordinates[1].toFixed(4)}°E
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Event markers */}
        {events.map((event) => (
          <Marker
            key={event.id}
            position={event.coordinates}
            icon={createIcon(CATEGORY_COLORS[event.category])}
          >
            <Popup>
              <div className="font-mono text-xs p-1 max-w-[250px]">
                <div className="text-[9px] tracking-widest opacity-60 mb-1">
                  {event.date} {event.time || ''}
                </div>
                <div className="font-bold tracking-wider text-sm mb-1">{event.title}</div>
                <p className="text-[11px] leading-relaxed opacity-80">{event.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Mälsten highlight circle */}
        <Circle
          center={LOCATIONS.malsten.coordinates}
          radius={800}
          pathOptions={{
            color: 'hsl(180, 60%, 45%)',
            fillColor: 'hsl(180, 60%, 45%)',
            fillOpacity: 0.05,
            weight: 1,
            dashArray: '4 4',
          }}
        />
      </MapContainer>
    </div>
  );
}
