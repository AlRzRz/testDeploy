import React, { useEffect, useRef, useCallback } from 'react';
import { debounce } from '../utils/debounce';

export const WaterEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const ripples = useRef<Array<{ x: number; y: number; radius: number; strength: number }>>([]);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    contextRef.current = canvas.getContext('2d');
  };

  const createRipple = (x: number, y: number) => {
    ripples.current.push({ x, y, radius: 0, strength: 1 });
  };

  const animate = useCallback(() => {
    const ctx = contextRef.current;
    if (!ctx || !canvasRef.current) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ripples.current = ripples.current.filter(ripple => {
      ripple.radius += 2;
      ripple.strength *= 0.95;

      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.strength * 0.2})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      return ripple.strength > 0.01;
    });

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    initCanvas();
    animate();

    const handleResize = debounce(() => {
      initCanvas();
    }, 250);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [animate]);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = ('touches' in e) 
      ? e.touches[0].clientX - rect.left 
      : e.clientX - rect.left;
    const y = ('touches' in e) 
      ? e.touches[0].clientY - rect.top 
      : e.clientY - rect.top;

    createRipple(x, y);
  };

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      onClick={handleInteraction}
      onTouchStart={handleInteraction}
    />
  );
};