import React, { useRef, useEffect, useState } from 'react';
import World from './World';
import Car from './Car';
import { careerData } from '../data/career';

// Game Constants
const ACCELERATION = 0.4;
const FRICTION = 0.94;
const TURN_SPEED = 0.07;
const MAX_SPEED = 14;
const REVERSE_SPEED = 4;

const Game = ({ onStopEnter, onStopLeave }) => {
  const requestRef = useRef();
  const keysPressed = useRef({});
  const containerRef = useRef(null);
  
  // Game State
  const [gameState, setGameState] = useState({
    x: 100,
    y: 300,
    angle: 0, // in radians
    velocity: 0
  });

  // Viewport size
  const [viewport, setViewport] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setViewport({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Input handling
  useEffect(() => {
    const handleKeyDown = (e) => { keysPressed.current[e.key.toLowerCase()] = true; };
    const handleKeyUp = (e) => { keysPressed.current[e.key.toLowerCase()] = false; };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  // Game Loop
  const update = () => {
    setGameState(prev => {
      let { x, y, angle, velocity } = prev;
      const keys = keysPressed.current;

      // Acceleration
      if (keys['w'] || keys['arrowup']) {
        velocity += ACCELERATION;
      } else if (keys['s'] || keys['arrowdown']) {
        velocity -= ACCELERATION;
      } else {
        velocity *= FRICTION;
      }

      // Cap speed
      if (velocity > MAX_SPEED) velocity = MAX_SPEED;
      if (velocity < -REVERSE_SPEED) velocity = -REVERSE_SPEED;
      
      // Full stop if very slow
      if (Math.abs(velocity) < 0.01) velocity = 0;

      // Turning (only when moving)
      if (Math.abs(velocity) > 0.1) {
        const turnFactor = velocity / MAX_SPEED; // Turn slower when moving slower? Or constant? 
        // Actually standard car physics: turn capability depends on moving, but usually turn radius is constant.
        // Simple arcade physics:
        const direction = velocity > 0 ? 1 : -1;
        if (keys['a'] || keys['arrowleft']) {
          angle -= TURN_SPEED * direction;
        }
        if (keys['d'] || keys['arrowright']) {
          angle += TURN_SPEED * direction;
        }
      }

      // Update Position
      x += Math.sin(angle) * velocity;
      y -= Math.cos(angle) * velocity; // -y is up in CSS/screen coords usually if 0 is top

      return { x, y, angle, velocity };
    });

    requestRef.current = requestAnimationFrame(update);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  // Check collisions / Proximity to stops
  useEffect(() => {
    let nearbyStop = null;
    const PROXIMITY_THRESHOLD = 150; // Distance to trigger

    for (const stop of careerData) {
      const dx = gameState.x - stop.position.x;
      const dy = gameState.y - stop.position.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < PROXIMITY_THRESHOLD) {
        nearbyStop = stop;
        break;
      }
    }

    if (nearbyStop) {
      onStopEnter(nearbyStop);
    } else {
      onStopLeave();
    }
  }, [gameState.x, gameState.y, onStopEnter, onStopLeave]);


  // Camera logic: The world moves opposite to the car to keep car centered
  // We want the car to be at center of viewport
  const cameraX = -gameState.x + viewport.width / 2;
  const cameraY = -gameState.y + viewport.height / 2;

  return (
    <div 
      ref={containerRef}
      className="w-full h-full absolute top-0 left-0 overflow-hidden bg-game-grass"
    >
      {/* World Container - transforms based on camera */}
      <div 
        className="absolute top-0 left-0 origin-top-left transition-transform duration-75 ease-linear will-change-transform"
        style={{ 
          transform: `translate3d(${cameraX}px, ${cameraY}px, 0)` 
        }}
      >
        <World width={4000} height={4000} stops={careerData} />
        <Car x={gameState.x} y={gameState.y} angle={gameState.angle} />
      </div>
    </div>
  );
};

export default Game;

