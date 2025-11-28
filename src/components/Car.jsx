import React from 'react';

const Car = ({ x, y, angle }) => {
  // angle is in radians. 0 is pointing UP (negative Y).
  // Rotation in CSS transform is degrees clockwise.
  // If 0 rad = UP, then 0 deg = UP.
  const degrees = (angle * 180) / Math.PI;

  return (
    <div
      className="absolute z-50 will-change-transform"
      style={{
        left: 0, // We translate the world relative to camera, but car is actually rendered at WORLD coordinates, inside the world container.
                 // Wait, in Game.jsx: <Car x={gameState.x} y={gameState.y} ... /> is inside the container that moves.
                 // So yes, we position it absolutely at x,y.
        top: 0,
        transform: `translate(${x}px, ${y}px) rotate(${degrees}deg) translate(-50%, -50%)` 
        // translate(-50%, -50%) centers the car pivot point
      }}
    >
      {/* Car Body */}
      <div className="relative w-12 h-20">
         {/* Shadow */}
         <div className="absolute inset-0 bg-black opacity-20 blur-sm rounded-lg transform scale-90 translate-y-2"></div>

         {/* Chassis */}
         <div className="absolute inset-0 bg-game-accent rounded-xl shadow-sm overflow-hidden border-2 border-red-700">
            {/* Stripe */}
            <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-white transform -translate-x-1/2 opacity-80"></div>
            
            {/* Roof/Windshield */}
            <div className="absolute top-4 left-1 right-1 height-8 bg-gray-800 rounded-sm h-8 opacity-80"></div>
            <div className="absolute bottom-4 left-1 right-1 height-4 bg-gray-800 rounded-sm h-4 opacity-80"></div>
         </div>
         
         {/* Headlights */}
         <div className="absolute -top-1 left-1 w-3 h-2 bg-yellow-200 rounded-full blur-[1px] shadow-[0_-4px_8px_rgba(255,255,0,0.6)]"></div>
         <div className="absolute -top-1 right-1 w-3 h-2 bg-yellow-200 rounded-full blur-[1px] shadow-[0_-4px_8px_rgba(255,255,0,0.6)]"></div>

         {/* Taillights */}
         <div className="absolute -bottom-0.5 left-1.5 w-2 h-1 bg-red-500 rounded-full shadow-[0_2px_4px_rgba(255,0,0,0.5)]"></div>
         <div className="absolute -bottom-0.5 right-1.5 w-2 h-1 bg-red-500 rounded-full shadow-[0_2px_4px_rgba(255,0,0,0.5)]"></div>
      </div>
    </div>
  );
};

export default Car;

