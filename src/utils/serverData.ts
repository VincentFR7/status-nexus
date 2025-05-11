import { ServerData } from './types';

export const fetchServerData = async (serverIP: string): Promise<ServerData> => {
  // Simule un délai réseau
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  return {
    online: true,
    name: "NéxusRP - CloneWars",
    currentMap: "rp_venator_v2",
    maxPlayers: 32,
    ping: 45,
    gameTime: new Date().toLocaleTimeString('fr-FR'),
    description: "Serveur GMOD CloneWars officiel avec système de progression, personnalisations avancées et batailles épiques entre la République et les Séparatistes.",
    players: [
      { name: "CT-7567 Rex", score: 0, ping: 32, faction: "République", role: "Capitaine" }
    ],
    maps: [],
    rules: [
      "[ 1.0 ] En cas de doute, si une règle n'est pas présente sur le règlement, celle-ci est automatiquement interdite.",
      "",
      "Interdictions",
      "[ 1.1 ] Interdiction de freekill",
      "[ 1.2 ] Interdiction de freepunch",
      "[ 1.3 ] Interdiction de metagaming",
      "[ 1.4 ] Interdiction de parler de manière HRP",
      "[ 1.5 ] Interdiction de RPQ",
      "[ 1.6 ] Interdiction de troll (Spam Vocal/ Soundboard/ Props Kill/ Propssurf)",
      "[ 1.7 ] Interdiction de powergaming (commettre une action non réalisable par votre personnage)",
      "[ 1.8 ] Interdiction de use bug (utiliser un bug du jeu à son avantage)",
      "[ 1.9 ] Interdiction de bunny up",
      "[ 1.10 ] Interdiction de Props fly",
      "[ 1.11 ] Interdiction de Force RP (forcer une action)",
      "[ 1.12 ] Interdiction de provoquer dans le tchat OCC suite à une action RP",
      "[ 1.13 ] Il est interdit de dénigrer un régiment",
      "[ 1.14 ] Il est interdit de d'insulter, d'harceler, de participer un un débat pouvant créer une tensions entres plusieurs joueurs",
      "",
      "Obligations",
      "[ 2.1 ] Il est obligatoire de jouer son Pain RP / Fear RP (jouer sa peur, ex: si l'on est braqué par une arme ont ne s'enfuit pas / Jouer sa douleur)",
      "[ 2.2 ] Il est obligatoire d'avoir un comportement RP et d'adopter un comportement en adéquation",
      "[ 2.3 ] Avant de contacter un staff, vous devez finir votre scène RP pour ne pas interrompre l'immersion",
      "[ 2.4 ] Il est obligatoire d'avoir un pseudo RP sans jeux de mots, ou faisant référence à une personnalité publique"
    ]
  };
};