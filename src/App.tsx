import React from 'react';
import ServerStatusPage from './pages/ServerStatusPage';
import StarfieldBackground from './components/StarfieldBackground';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <StarfieldBackground />
      <div className="relative z-10">
        <ServerStatusPage serverIP="31.56.58.24:27026" />
      </div>
    </div>
  );
}

export default App;