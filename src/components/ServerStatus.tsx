import React from 'react';
import { ServerStatus as ServerStatusType } from '../types';
import { Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface ServerStatusProps {
  status: ServerStatusType | null;
  loading: boolean;
  onRefresh: () => void;
}

const ServerStatus: React.FC<ServerStatusProps> = ({ status, loading, onRefresh }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-6"
    >
      <div className="bg-gray-900/80 rounded-lg p-5 border border-blue-500/20 backdrop-blur-sm shadow-lg">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <div className="p-2 bg-blue-600/20 rounded-md mr-3">
              <Clock size={20} className="text-blue-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Dernière mise à jour</h2>
            <button 
              onClick={onRefresh}
              disabled={loading}
              className="ml-3 bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 p-2 rounded transition-colors disabled:opacity-50"
              title="Rafraîchir"
            >
              <svg 
                className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <span className="text-2xl font-semibold text-white">{new Date().toLocaleTimeString('fr-FR')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServerStatus;