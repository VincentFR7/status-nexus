export interface Player {
  name: string;
  score: number;
  ping: number;
  faction: 'République' | 'Séparatistes';
  role?: string;
}

export interface MapInfo {
  name: string;
  description: string;
  thumbnail: string;
}

export interface ServerData {
  online: boolean;
  name: string;
  currentMap: string;
  maxPlayers: number;
  ping: number;
  gameTime: string;
  description: string;
  players: Player[];
  maps: MapInfo[];
  rules: string[];
}