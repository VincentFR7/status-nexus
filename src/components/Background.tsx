import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Background: React.FC = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Image d'arrière-plan */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/6499007/pexels-photo-6499007.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
          filter: isDarkMode ? 'brightness(0.3) saturate(1.2)' : 'brightness(0.8)',
          opacity: 0.6
        }}
      ></div>
      
      {/* Overlay bleu pour l'ambiance Clone Wars */}
      <div 
        className="absolute inset-0"
        style={{
          background: isDarkMode 
            ? 'linear-gradient(135deg, rgba(0, 8, 20, 0.8) 0%, rgba(16, 24, 54, 0.7) 100%)'
            : 'linear-gradient(135deg, rgba(32, 68, 114, 0.7) 0%, rgba(44, 52, 90, 0.6) 100%)'
        }}
      ></div>
      
      {/* Effet de grille holographique */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 86, 160, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(16, 86, 160, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Particules bleues qui flottent (simulation hologramme) */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute bg-blue-500 rounded-full opacity-20"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + 'vw',
              top: Math.random() * 100 + 'vh',
              animation: `float ${Math.random() * 10 + 15}s linear infinite`,
              animationDelay: `-${Math.random() * 15}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Effet de scan horizontal (comme un scanner holographique) */}
      <div 
        className="absolute inset-0 overflow-hidden opacity-10"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(0, 212, 255, 0.2) 50%, transparent)',
          height: '200px',
          animation: 'scan 8s linear infinite'
        }}
      ></div>
    </div>
  );
};

export default Background;