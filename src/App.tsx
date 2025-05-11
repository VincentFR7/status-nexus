import React from 'react';
import { useServerStatus } from './hooks/useServerStatus';
import { ThemeProvider } from './context/ThemeContext';
import Background from './components/Background';
import ServerHeader from './components/ServerHeader';
import ServerStatus from './components/ServerStatus';
import PlayerList from './components/PlayerList';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

// Composant pour le bouton de changement de thème
const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-800/70 backdrop-blur-sm text-white hover:bg-gray-700 transition-colors"
      title={isDarkMode ? "Mode clair" : "Mode sombre"}
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

// Composant pour le pied de page
const Footer: React.FC = () => {
  return (
    <footer className="mt-12 mb-6 text-center text-gray-400 text-sm">
      <p>&copy; 2025 GMOD CloneWars RP [FR] - Tous droits réservés</p>
      <p className="mt-1">
        Serveur Garry's Mod non-officiel basé sur l'univers Star Wars
      </p>
    </footer>
  );
};

function App() {
  const { status, loading, error, refreshServerStatus } = useServerStatus(60000);
  
  return (
    <ThemeProvider>
      <div className="min-h-screen text-gray-100">
        <Background />
        <ThemeToggle />
        
        <div className="container mx-auto px-4 py-8">
          <ServerHeader status={status} loading={loading} />
          
          <ServerStatus 
            status={status} 
            loading={loading} 
            onRefresh={refreshServerStatus} 
          />
          
          <PlayerList 
            players={status?.playerList || []} 
            loading={loading} 
          />
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;