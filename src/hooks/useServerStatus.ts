import { useState, useEffect } from 'react';
import { ServerStatus } from '../types';
import { fetchServerStatus } from '../services/serverApi';

export const useServerStatus = (refreshInterval = 60000) => {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const refreshServerStatus = async () => {
    try {
      setLoading(true);
      const data = await fetchServerStatus();
      setStatus(data);
      setError(null);
    } catch (err) {
      setError('Impossible de récupérer les données du serveur');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    refreshServerStatus();
    
    // Mettre en place l'intervalle de rafraîchissement
    const intervalId = setInterval(refreshServerStatus, refreshInterval);
    
    // Nettoyer l'intervalle lorsque le composant est démonté
    return () => clearInterval(intervalId);
  }, [refreshInterval]);

  return { status, loading, error, refreshServerStatus };
};