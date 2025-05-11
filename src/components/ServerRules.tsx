import React from 'react';
import { ShieldAlert } from 'lucide-react';

interface ServerRulesProps {
  rules: string[];
}

const ServerRules: React.FC<ServerRulesProps> = ({ rules }) => {
  return (
    <div className="bg-gray-900 bg-opacity-70 p-6 rounded-lg border border-green-800 relative transform transition-all hover:scale-[1.01] w-full">
      <div className="absolute top-0 right-0 bg-green-600 px-3 py-1 rounded-bl-md text-xs font-bold">
        RÈGLES
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-green-300 flex items-center justify-center">
        <ShieldAlert className="mr-2" size={24} />
        Règles du Serveur
      </h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div 
              key={index} 
              className={`${
                rule === "" ? "my-8" : 
                rule.startsWith("Interdictions") || rule.startsWith("Obligations") 
                  ? "text-2xl font-bold text-green-400 my-6 text-center" 
                  : "text-gray-300 text-lg"
              } ${rule.startsWith("[") ? "hover:text-green-200 transition-colors" : ""}`}
            >
              {rule}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerRules;