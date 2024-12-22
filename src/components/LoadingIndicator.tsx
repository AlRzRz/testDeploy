import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingIndicator = () => {
  return (
    <div className="relative">
      <Loader2 className="w-12 h-12 text-white/80 animate-spin" />
      <div className="absolute inset-0 blur-xl bg-white/5 rounded-full" />
    </div>
  );
};