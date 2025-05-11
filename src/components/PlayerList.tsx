import React, { useState } from 'react';
import { Player } from '../types';
import { motion } from 'framer-motion';
import { Users, Search, ExternalLink } from 'lucide-react';

interface PlayerListProps {
  players: Player[];
  loading: boolean;
}

const PlayerList: React.FC<PlayerListProps> = ({ players, loading }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPlayers = players.filter(player => 
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gray-900/80 rounded-lg p-5 border border-blue-500/20 backdrop-blur-sm shadow-lg"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center">
          <div className="p-2 bg-blue-600/20 rounded-md mr-3">
            <Users size={20} className="text-blue-400" />
          </div>
          <h2 className="text-xl font-semibold text-white">Liste des Joueurs</h2>
        </div>
        <div className="text-sm text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full">
          {filteredPlayers.length} {filteredPlayers.length === 1 ? 'joueur' : 'joueurs'}
        </div>
      </div>

      <div className="relative mb-5">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          className="bg-gray-800/50 text-white w-full pl-10 pr-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Rechercher un joueur..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredPlayers.length === 0 ? (
        <div className="bg-gray-800/50 rounded-lg p-6 text-center">
          <p className="text-gray-400">
            {players.length === 0 
              ? "Aucun joueur connecté au serveur" 
              : "Aucun joueur ne correspond à votre recherche"}
          </p>
        </div>
      ) : (
        <motion.div 
          variants={listVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          {filteredPlayers.map((player, index) => (
            <motion.div
              key={`${player.name}-${index}`}
              variants={itemVariants}
              className="bg-gray-800/60 rounded-lg p-4 flex items-center border border-gray-700/50 hover:border-blue-500/30 transition-all"
            >
              <img 
                src={player.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(player.name)}&background=0D47A1&color=fff`}
                alt={player.name}
                className="h-10 w-10 rounded-full mr-3 border border-blue-500/20"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center">
                  <h3 className="text-white font-medium truncate">{player.name}</h3>
                  {player.profileUrl && (
                    <a
                      href={player.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
                      title="Voir le profil Steam"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};

export default PlayerList;