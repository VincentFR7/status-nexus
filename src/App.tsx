import React from 'react';
import ServerStatusPage from './pages/ServerStatusPage';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ServerStatusPage serverIP="31.56.58.24:27026" />
    </div>
  );
}

export default App;