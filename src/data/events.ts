export interface SubEvent {
  id: string;
  date: string;
  time?: string;
  title: string;
  description: string;
  location: string;
  coordinates: [number, number]; // [lat, lng]
  category: 'observation' | 'military-action' | 'political' | 'investigation';
  sources?: string[];
  classified?: boolean;
}

export const LOCATIONS = {
  malsten: { name: 'Mälsten', coordinates: [58.8577, 18.0614] as [number, number] },
  harsfjarden: { name: 'Hårsfjärden', coordinates: [58.87, 18.05] as [number, number] },
  musko: { name: 'Muskö marinbas', coordinates: [58.92, 18.12] as [number, number] },
  berga: { name: 'Berga örlogsbas', coordinates: [59.06, 18.13] as [number, number] },
  sandhamn: { name: 'Sandhamn/Korsö', coordinates: [59.29, 18.92] as [number, number] },
  danziger_gatt: { name: 'Danziger Gatt', coordinates: [58.85, 18.07] as [number, number] },
} as const;

export const MAP_CENTER: [number, number] = [58.90, 18.15];
export const MAP_ZOOM = 11;

export const events: SubEvent[] = [
  {
    id: 'evt-001',
    date: '1982-10-01',
    title: 'Första indikationer',
    description: 'Tidiga hydrofonkontakter registreras i Stockholms skärgård. Marinens underrättelsetjänst börjar analysera signalerna.',
    location: 'Hårsfjärden',
    coordinates: [58.87, 18.05],
    category: 'observation',
    classified: true,
  },
  {
    id: 'evt-002',
    date: '1982-10-05',
    time: '~06:00',
    title: 'Förstärkt bevakning',
    description: 'Kustflottans enheter beordras till förhöjd beredskap. Ubåtsjaktenheter grupperas i Hårsfjärden.',
    location: 'Berga',
    coordinates: [59.06, 18.13],
    category: 'military-action',
  },
  {
    id: 'evt-003',
    date: '1982-10-11',
    time: '22:30',
    title: 'Visuell observation vid Danziger Gatt',
    description: 'Örlogsfartyg rapporterar visuell observation av periskopliknande föremål i Danziger Gatt söder om Mälsten.',
    location: 'Danziger Gatt',
    coordinates: [58.85, 18.07],
    category: 'observation',
  },
  {
    id: 'evt-004',
    date: '1982-10-12',
    time: '~03:00',
    title: 'Ubåtsindikation vid Mälsten',
    description: 'Starka magnetiska och akustiska indikationer vid Mälsten. Minlinjer läggs ut. Sjunkbomber förbereds.',
    location: 'Mälsten',
    coordinates: [58.8577, 18.0614],
    category: 'military-action',
    classified: true,
  },
  {
    id: 'evt-005',
    date: '1982-10-12',
    time: '~14:00',
    title: 'Sjunkbomber fälls',
    description: 'Minsveparen och ubåtsjaktfartyg fäller sjunkbomber i området kring Mälsten. HKP 4-helikoptrar deltar med sonar.',
    location: 'Mälsten',
    coordinates: [58.8577, 18.0614],
    category: 'military-action',
  },
  {
    id: 'evt-006',
    date: '1982-10-13',
    time: '~19:00',
    title: 'Kvällens incidenter',
    description: 'Intensiva kontakter under kvällen den 13 oktober. Multipla sonar- och hydrofonindikationer. Gustafsson blandar samman med föregående kväll.',
    location: 'Hårsfjärden',
    coordinates: [58.87, 18.05],
    category: 'observation',
    sources: ['Tunander (2009)', 'Gustafsson'],
    classified: true,
  },
  {
    id: 'evt-007',
    date: '1982-10-14',
    title: 'Vapeninsats begränsas',
    description: 'Order om begränsad vapeninsats. De amiraler som senare hävdar att ubåtarna var sovjetiska är samma som sökte begränsa vapeninsatsen.',
    location: 'Berga',
    coordinates: [59.06, 18.13],
    category: 'political',
    sources: ['Tunander'],
    classified: true,
  },
  {
    id: 'evt-008',
    date: '1982-10-27',
    title: 'Observationer Sandhamn/Korsö',
    description: 'Separata ubåtsobservationer rapporteras vid Sandhamn och Korsö i ytterskärgården.',
    location: 'Sandhamn/Korsö',
    coordinates: [59.29, 18.92],
    category: 'observation',
  },
  {
    id: 'evt-009',
    date: '1982-11-01',
    title: 'Dykoperationer vid Mälsten',
    description: 'Dykare undersöker botten vid Mälsten. En sond/sändare hittas. Debatt uppstår: västlig sändare eller tom granat?',
    location: 'Mälsten',
    coordinates: [58.8577, 18.0614],
    category: 'investigation',
    sources: ['Grandinrapporten'],
    classified: true,
  },
  {
    id: 'evt-010',
    date: '1983-04-26',
    title: 'Ubåtsskyddskommissionen tillsätts',
    description: 'Regeringen tillsätter Ubåtsskyddskommissionen under Sven Andersson för att utreda kränkningarna.',
    location: 'Berga',
    coordinates: [59.06, 18.13],
    category: 'political',
  },
  {
    id: 'evt-011',
    date: '1995-01-01',
    title: 'Ubåtsutredningen (Granskningskommissionen)',
    description: 'Ny kommission under ambassadör Rolf Ekéus granskar tidigare slutsatser. Ifrågasätter sovjetisk tillskrivning.',
    location: 'Berga',
    coordinates: [59.06, 18.13],
    category: 'investigation',
    sources: ['SOU 2001:85'],
  },
];

export const CATEGORY_COLORS: Record<SubEvent['category'], string> = {
  'observation': 'hsl(180, 60%, 45%)',
  'military-action': 'hsl(0, 70%, 50%)',
  'political': 'hsl(35, 80%, 55%)',
  'investigation': 'hsl(120, 60%, 50%)',
};

export const CATEGORY_LABELS: Record<SubEvent['category'], string> = {
  'observation': 'OBSERVATION',
  'military-action': 'VAPENINSATS',
  'political': 'POLITISKT',
  'investigation': 'UTREDNING',
};
