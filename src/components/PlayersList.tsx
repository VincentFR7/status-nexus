import React, { useState } from 'react';
import { Player } from '../utils/types';

interface PlayersListProps {
  players: Player[];
}

const PlayersList: React.FC<PlayersListProps> = ({ players }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPlayers = players.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Trier les joueurs par scores
  const sortedPlayers = [...filteredPlayers].sort((a, b) => b.score - a.score);

  return (
    <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-red-800 relative transform transition-all hover:scale-[1.01]">
      <div className="absolute top-0 right-0 bg-red-600 px-3 py-1 rounded-bl-md text-xs font-bold">
        JOUEURS
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-red-300">
        Joueurs Connectés <span className="text-sm font-normal">({players.length})</span>
      </h2>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Rechercher un joueur..."
          className="w-full bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      <div className="max-h-80 overflow-y-auto pr-2 custom-scrollbar">
        {sortedPlayers.length > 0 ? (
          <table className="w-full">
            <thead className="bg-gray-800 text-gray-400 text-sm">
              <tr>
                <th className="px-2 py-2 text-left">Joueur</th>
                <th className="px-2 py-2 text-center">Faction</th>
                <th className="px-2 py-2 text-right">Score</th>
                <th className="px-2 py-2 text-right">Ping</th>
              </tr>
            </thead>
            <tbody>
              {sortedPlayers.map((player, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-800 hover:bg-gray-800 hover:bg-opacity-50 transition-colors
                  ${player.faction === 'République' ? 'text-blue-200' : 'text-red-200'}`}
                >
                  <td className="px-2 py-3 font-medium">
                    <div className="flex items-center">
                      <div className={`w-2 h-8 mr-2 rounded-sm ${player.faction === 'République' ? 'bg-blue-500' : 'bg-red-500'}`}></div>
                      {player.name}
                    </div>
                  </td>
                  <td className="px-2 py-3 text-center">
                    <span className={`px-2 py-1 rounded-md text-xs font-bold 
                      ${player.faction === 'République' ? 'bg-blue-900 text-blue-200' : 'bg-red-900 text-red-200'}`}>
                      {player.faction}
                    </span>
                  </td>
                  <td className="px-2 py-3 text-right font-bold">{player.score}</td>
                  <td className="px-2 py-3 text-right text-gray-400">{player.ping} ms</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center py-4 text-gray-400">
            Aucun joueur trouvé
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayersList;