import { ServerStatus, Player } from '../types';

// Fonction pour générer des données simulées
const generateSimulatedData = async (): Promise<ServerStatus> => {
  const currentPlayers = Math.floor(Math.random() * 12);
  const maxPlayers = 32;
  
  // Générer une liste de joueurs aléatoire
  const playerList: Player[] = Array.from({ length: currentPlayers }, (_, i) => ({
    name: `Joueur_${Math.floor(Math.random() * 1000)}`,
    steamId: `7656119${Math.floor(Math.random() * 10000000000)}`,
  }));

  // Dans une vraie implémentation, vous utiliseriez l'API Source Query pour obtenir ces informations
  const serverIP = "31.56.58.24:27026";
  
  return {
    online: true,
    name: 'GMOD CloneWars RP [FR]',
    map: 'Chargement...', // Cette valeur sera remplacée par la vraie carte une fois l'hébergeur configuré
    players: currentPlayers,
    maxPlayers: maxPlayers,
    playerList: playerList,
    ping: Math.floor(Math.random() * 50) + 10
  };
};

export const fetchServerStatus = async (): Promise<ServerStatus> => {
  try {
    // Simuler un délai réseau
    await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 100));
    
    return await generateSimulatedData();
  } catch (error) {
    console.error('Erreur lors de la génération des données:', error);
    return {
      online: false,
      name: 'GMOD CloneWars RP [FR]',
      map: 'Inconnu',
      players: 0,
      maxPlayers: 32,
      playerList: [],
      ping: 0
    };
  }
};