import React from 'react';
import { ServerStatus } from '../types';
import { Shield, Users, Map, Zap } from 'lucide-react';

interface ServerHeaderProps {
  status: ServerStatus | null;
  loading: boolean;
}

const ServerHeader: React.FC<ServerHeaderProps> = ({ status, loading }) => {
  const serverIP = "31.56.58.24:27026";
  
  return (
    <div className="w-full">
      <div 
        className="relative flex flex-col p-6 rounded-lg mb-6 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 48, 73, 0.9) 0%, rgba(28, 30, 55, 0.95) 100%)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.05)'
        }}
      >
        {/* Animation de l'hologramme */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent overflow-hidden">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index}
              className="absolute h-px bg-blue-400/20"
              style={{
                width: '100%',
                top: `${index * 12.5}%`,
                animationName: 'scanline',
                animationDuration: '4s',
                animationTimingFunction: 'linear',
                animationIterationCount: 'infinite',
                animationDelay: `${index * 0.3}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="flex items-center mb-6">
          <div className="bg-blue-600 p-3 rounded-full mr-4 shadow-glow">
            <Shield size={28} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-white">
              {status?.name || "GMOD CloneWars RP [FR]"}
            </h1>
            <div className="flex items-center mt-1">
              <div className={`h-3 w-3 rounded-full mr-2 ${status?.online ? 'bg-green-500' : 'bg-red-500'}`}></div>
              <p className="text-blue-200 font-medium">
                {status?.online ? 'En ligne' : 'Hors ligne'}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* IP du serveur */}
          <div className="bg-gray-900/60 px-4 py-3 rounded-md border border-blue-500/30">
            <p className="text-gray-400 text-sm mb-1">IP du Serveur</p>
            <div className="flex items-center justify-between">
              <p className="font-mono text-white">{serverIP}</p>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(serverIP);
                  alert('IP copiée dans le presse-papier!');
                }}
                className="ml-3 text-blue-400 hover:text-blue-300 transition-colors p-1"
                title="Copier l'IP"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Joueurs connectés */}
          <div className="bg-gray-900/60 px-4 py-3 rounded-md border border-blue-500/30">
            <div className="flex items-center mb-1">
              <Users size={16} className="text-blue-400 mr-2" />
              <p className="text-gray-400 text-sm">Joueurs</p>
            </div>
            <p className="text-xl font-semibold text-white">
              {loading ? "..." : `${status?.players || 0} / ${status?.maxPlayers || 32}`}
            </p>
          </div>

          {/* Carte actuelle */}
          <div className="bg-gray-900/60 px-4 py-3 rounded-md border border-blue-500/30">
            <div className="flex items-center mb-1">
              <Map size={16} className="text-yellow-400 mr-2" />
              <p className="text-gray-400 text-sm">Carte</p>
            </div>
            <p className="text-xl font-semibold text-white">
              {loading ? "..." : status?.map || "Inconnue"}
            </p>
          </div>

          {/* Ping */}
          <div className="bg-gray-900/60 px-4 py-3 rounded-md border border-blue-500/30">
            <div className="flex items-center mb-1">
              <Zap size={16} className="text-green-400 mr-2" />
              <p className="text-gray-400 text-sm">Ping</p>
            </div>
            <p className="text-xl font-semibold text-white">
              {loading ? "..." : `${status?.ping || 0} ms`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerHeader;