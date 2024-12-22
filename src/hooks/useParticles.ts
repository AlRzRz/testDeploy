import { useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
}

export const useParticles = () => {
  const initParticles = useCallback(() => {
    const particles: Particle[] = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 4 + 2,
        speedY: Math.random() * 0.5 + 0.2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        opacity: Math.random() * 0.5 + 0.3
      });
    }

    return particles;
  }, []);

  const animate = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    const updateParticle = (particle: Particle) => {
      particle.y -= particle.speedY;
      particle.rotation += particle.rotationSpeed;

      if (particle.y + particle.size < 0) {
        particle.y = window.innerHeight + particle.size;
        particle.x = Math.random() * window.innerWidth;
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate((particle.rotation * Math.PI) / 180);
      ctx.beginPath();
      ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      particles.forEach(particle => {
        updateParticle(particle);
        drawParticle(particle);
      });

      requestAnimationFrame(render);
    };

    render();
  }, []);

  return { initParticles, animate };
};