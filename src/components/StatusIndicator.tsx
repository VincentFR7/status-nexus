import React from 'react';

interface StatusIndicatorProps {
  isOnline: boolean;
  isLoading: boolean;
}

const StatusIndicator: React.FC<StatusIndicatorProps> = ({ isOnline, isLoading }) => {
  const handlePlayClick = () => {
    window.location.href = 'steam://connect/31.56.58.24:27026';
  };

  return (
    <div className="flex items-center justify-center bg-gray-900 bg-opacity-70 py-4 px-6 rounded-lg border border-gray-700">
      {isLoading ? (
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-yellow-400 animate-pulse mr-3"></div>
          <span className="text-xl font-medium">Vérification du statut...</span>
        </div>
      ) : (
        <div className="flex items-center">
          <div 
            className={`w-4 h-4 rounded-full ${isOnline ? 'bg-green-500' : 'bg-red-500'} mr-3 ${isOnline ? 'animate-pulse' : ''}`}
          ></div>
          <span className="text-xl font-medium">
            Statut: {isOnline ? 'En Ligne' : 'Hors Ligne'}
          </span>
          {isOnline && (
            <button
              onClick={handlePlayClick}
              className="ml-8 flex items-center bg-blue-900 hover:bg-blue-800 transition-colors px-6 py-2 rounded-md cursor-pointer"
            >
              <span className="font-bold mr-2">JOUEZ MAINTENANT</span>
              <span className="text-blue-300 text-sm">steam://connect/31.56.58.24:27026</span>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default StatusIndicator;