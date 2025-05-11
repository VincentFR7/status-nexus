import React from 'react';
import { Sword } from 'lucide-react';

interface ServerHeaderProps {
  serverIP: string;
}

const ServerHeader: React.FC<ServerHeaderProps> = ({ serverIP }) => {
  return (
    <header className="relative">
      <div className="bg-gradient-to-r from-blue-900 to-red-900 p-6 rounded-lg shadow-lg border border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="bg-blue-600 p-2 rounded-full mr-4">
              <Sword size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                Serveur GMOD CloneWars
              </h1>
              <div className="mt-2 flex items-center">
                <span className="bg-gray-800 px-3 py-1 rounded-md font-mono text-gray-200">
                  {serverIP}
                </span>
                <button 
                  className="ml-3 bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-1 rounded-md text-sm"
                  onClick={() => {navigator.clipboard.writeText(serverIP)}}
                >
                  Copier
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="p-2 bg-gray-800 bg-opacity-70 rounded-md">
              <span className="text-sm">Dernière mise à jour</span>
              <div className="text-lg font-semibold">
                {new Date().toLocaleTimeString('fr-FR')}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -top-4 -left-4 h-8 w-8 border-t-2 border-l-2 border-blue-400"></div>
      <div className="absolute -top-4 -right-4 h-8 w-8 border-t-2 border-r-2 border-red-400"></div>
      <div className="absolute -bottom-4 -left-4 h-8 w-8 border-b-2 border-l-2 border-blue-400"></div>
      <div className="absolute -bottom-4 -right-4 h-8 w-8 border-b-2 border-r-2 border-red-400"></div>
    </header>
  );
};

export default ServerHeader;