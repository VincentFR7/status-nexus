import React from 'react';
import { Map as MapIcon } from 'lucide-react';
import { MapInfo } from '../utils/types';

interface ServerMapsProps {
  maps: MapInfo[];
}

const ServerMaps: React.FC<ServerMapsProps> = ({ maps }) => {
  return (
    <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-yellow-700 relative transform transition-all hover:scale-[1.01]">
      <div className="absolute top-0 right-0 bg-yellow-600 px-3 py-1 rounded-bl-md text-xs font-bold">
        CARTES
      </div>
      
      <h2 className="text-2xl font-bold mb-4 text-yellow-300 flex items-center">
        <MapIcon className="mr-2" size={24} />
        Cartes Disponibles
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
        {maps.map((map, index) => (
          <div 
            key={index} 
            className="relative group rounded-lg overflow-hidden border border-gray-800 hover:border-yellow-500 transition-all"
          >
            <div className="aspect-video bg-gray-800 relative">
              <img 
                src={map.thumbnail} 
                alt={map.name} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <div className="font-bold text-white">{map.name}</div>
              <div className="text-xs text-gray-300 truncate">{map.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServerMaps;