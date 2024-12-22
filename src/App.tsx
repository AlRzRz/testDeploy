import React, { useEffect, useState } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ParticleBackground } from './components/ParticleBackground';
import { WaterEffect } from './components/WaterEffect';
import { BuildingText } from './components/BuildingText';
import { CursorGlow } from './components/CursorGlow';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A192F] to-black flex flex-col overflow-hidden">
      <ParticleBackground />
      <WaterEffect />
      <CursorGlow />
      
      {/* Header */}
      <div className="relative w-full p-4 sm:p-6 md:p-8">
        <div className={`text-xl sm:text-2xl tracking-[0.5em] text-white/30 text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          ROYATIVE
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div 
          className={`relative flex flex-col items-center gap-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <LoadingSpinner />
          <BuildingText />
        </div>
      </div>
    </div>
  );
}

export default App;