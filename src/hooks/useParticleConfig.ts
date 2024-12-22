import { useState, useCallback } from 'react';
import { Particle } from '../types/particle';

interface ParticleConfig {
  count: number;
  minSize: number;
  maxSize: number;
  minSpeed: number;
  maxSpeed: number;
}

export const useParticleConfig = (config: ParticleConfig) => {
  const [particles, setParticles] = useState<Particle[]>(() => 
    Array.from({ length: config.count }, () => createRandomParticle())
  );

  function createRandomParticle(): Particle {
    return {
      id: Math.random().toString(36).substr(2, 9),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
      speed: Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed,
      opacity: Math.random() * 0.5 + 0.5
    };
  }

  const createParticle = useCallback(() => {
    setParticles(prev => {
      const newParticles = [...prev];
      if (newParticles.length >= config.count) {
        newParticles.shift();
      }
      newParticles.push(createRandomParticle());
      return newParticles;
    });
  }, [config.count]);

  return { particles, createParticle };
};