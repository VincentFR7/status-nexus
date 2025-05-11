export interface ServerStatus {
  online: boolean;
  name: string;
  map: string;
  players: number;
  maxPlayers: number;
  playerList: Player[];
  ping: number;
}

export interface Player {
  name: string;
  steamId?: string;
  avatar?: string;
  profileUrl?: string;
}

export interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}