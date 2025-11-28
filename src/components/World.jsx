import React from 'react';
import * as Icons from 'lucide-react';

const World = ({ width, height, stops }) => {
  // Generate some random trees/decorations deterministically (based on position)
  const generateDecorations = () => {
    const decorations = [];
    for (let i = 0; i < 150; i++) {
      const x = Math.floor(Math.random() * width);
      const y = Math.floor(Math.random() * height);
      decorations.push({ x, y, id: i, type: Math.random() > 0.5 ? 'tree' : 'bush' });
    }
    return decorations;
  };

  const decorations = React.useMemo(() => generateDecorations(), [width, height]);

  return (
    <div 
      className="relative bg-game-grass"
      style={{ width: width, height: height }}
    >
      {/* Grid pattern for ground texture effect */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ 
          backgroundImage: 'radial-gradient(#15803d 2px, transparent 2px)', 
          backgroundSize: '50px 50px' 
        }} 
      />

      {/* Roads */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <polyline 
          points={stops.map(s => `${s.position.x},${s.position.y}`).join(' ')}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="140"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline 
          points={stops.map(s => `${s.position.x},${s.position.y}`).join(' ')}
          fill="none"
          stroke="#fff"
          strokeWidth="4"
          strokeDasharray="20,30"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Decorations */}
      {decorations.map((dec) => (
        <div
          key={dec.id}
          className="absolute text-green-600 opacity-80"
          style={{ 
            left: dec.x, 
            top: dec.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
           <div className={`rounded-full ${dec.type === 'tree' ? 'w-12 h-12 bg-green-700 shadow-lg' : 'w-6 h-6 bg-green-600'} opacity-60`}></div>
        </div>
      ))}

      {/* Career Stops */}
      {stops.map((stop) => {
        // Dynamically select icon component
        const IconComponent = Icons[stop.icon] || Icons.MapPin;
        
        return (
          <div 
            key={stop.id}
            className="absolute flex flex-col items-center justify-center"
            style={{ 
              left: stop.position.x, 
              top: stop.position.y,
              transform: 'translate(-50%, -50%)' 
            }}
          >
            {/* Ground Marker */}
            <div className={`w-32 h-32 rounded-full opacity-20 animate-pulse ${stop.color} blur-xl absolute`}></div>
            
            {/* Building/Icon */}
            <div className={`relative z-10 p-4 rounded-2xl shadow-2xl border-4 border-white ${stop.color} text-white transform transition-transform hover:scale-110`}>
              <IconComponent size={48} strokeWidth={1.5} />
            </div>
            
            {/* Label on the ground */}
            <div className="mt-4 bg-white/90 px-3 py-1 rounded-full text-sm font-bold text-gray-700 shadow-md backdrop-blur border border-gray-200 whitespace-nowrap">
              {stop.title}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default World;
