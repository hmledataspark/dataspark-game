import React, { useState, useEffect, useRef } from 'react';
import Game from './components/Game';
import UI from './components/UI';

function App() {
  const [activeStop, setActiveStop] = useState(null);

  return (
    <div className="relative w-full h-full overflow-hidden bg-game-grass">
      <Game onStopEnter={setActiveStop} onStopLeave={() => setActiveStop(null)} />
      <UI activeStop={activeStop} />
      
      {/* Instructions */}
      <div className="absolute top-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-200 pointer-events-none z-40">
        <h3 className="font-bold text-gray-800 mb-2">How to Drive</h3>
        <div className="flex flex-col gap-1 text-sm text-gray-600">
          <p><span className="font-mono font-bold bg-gray-100 px-1 rounded">↑</span> or <span className="font-mono font-bold bg-gray-100 px-1 rounded">W</span> to Accelerate</p>
          <p><span className="font-mono font-bold bg-gray-100 px-1 rounded">↓</span> or <span className="font-mono font-bold bg-gray-100 px-1 rounded">S</span> to Brake/Reverse</p>
          <p><span className="font-mono font-bold bg-gray-100 px-1 rounded">← →</span> or <span className="font-mono font-bold bg-gray-100 px-1 rounded">A D</span> to Steer</p>
        </div>
      </div>
    </div>
  );
}

export default App;

