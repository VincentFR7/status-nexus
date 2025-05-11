import React, { useState, useEffect } from 'react';
import ServerHeader from '../components/ServerHeader';
import StatusIndicator from '../components/StatusIndicator';
import ServerInfo from '../components/ServerInfo';
import PlayersList from '../components/PlayersList';
import ServerRules from '../components/ServerRules';
import StarfieldBackground from '../components/StarfieldBackground';
import { fetchServerData } from '../utils/serverData';
import { ServerData } from '../utils/types';

interface ServerStatusPageProps {
  serverIP: string;
}

const ServerStatusPage: React.FC<ServerStatusPageProps> = ({ serverIP }) => {
  const [serverData, setServerData] = useState<ServerData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchServerData(serverIP);
        setServerData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données du serveur:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
    const interval = setInterval(getData, 60000);
    return () => clearInterval(interval);
  }, [serverIP]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <StarfieldBackground />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <ServerHeader serverIP={serverIP} />
        
        <div className="mt-8">
          <StatusIndicator 
            isOnline={serverData?.online ?? false} 
            isLoading={isLoading} 
          />
        </div>
        
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : serverData && serverData.online ? (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <ServerInfo serverData={serverData} />
            <PlayersList players={serverData.players} />
          </div>
        ) : (
          <div className="mt-8 p-6 bg-gray-900 bg-opacity-70 rounded-lg border border-red-800">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Serveur Hors Ligne</h2>
            <p className="text-gray-300">
              Le serveur est actuellement indisponible. Veuillez réessayer plus tard ou contacter un administrateur.
            </p>
          </div>
        )}
        
        <div className="mt-8">
          <ServerRules rules={serverData?.rules || []} />
        </div>
      </div>
    </div>
  );
};

export default ServerStatusPage;