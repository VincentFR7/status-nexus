import React from 'react';
import { Users, Map, Cpu, Clock } from 'lucide-react';
import { ServerData } from '../utils/types';

interface ServerInfoProps {
  serverData: ServerData;
}

const ServerInfo: React.FC<ServerInfoProps> = ({ serverData }) => {
  return (
    <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-blue-800 relative overflow-hidden transform transition-all hover:scale-[1.01]">
      <div className="absolute top-0 right-0 bg-blue-600 px-3 py-1 rounded-bl-md text-xs font-bold">
        INFORMATIONS
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-blue-300">Détails du Serveur</h2>
      
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="bg-blue-800 p-2 rounded-md mr-3">
            <Map size={20} className="text-blue-200" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Carte actuelle</div>
            <div className="text-lg font-semibold">{serverData.currentMap}</div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-blue-800 p-2 rounded-md mr-3">
            <Users size={20} className="text-blue-200" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Joueurs</div>
            <div className="text-lg font-semibold">{serverData.players.length} / {serverData.maxPlayers}</div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-blue-800 p-2 rounded-md mr-3">
            <Cpu size={20} className="text-blue-200" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Ping</div>
            <div className="text-lg font-semibold">{serverData.ping} ms</div>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-blue-800 p-2 rounded-md mr-3">
            <Clock size={20} className="text-blue-200" />
          </div>
          <div>
            <div className="text-sm text-gray-400">Temps de jeu</div>
            <div className="text-lg font-semibold">{serverData.gameTime}</div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-700">
        <h3 className="text-lg font-semibold mb-2 text-blue-300">À propos du serveur</h3>
        <p className="text-gray-300">
          {serverData.description}
        </p>
      </div>
    </div>
  );
};

export default ServerInfo;