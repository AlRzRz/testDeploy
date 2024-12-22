import React from 'react';

export const LoadingBar = () => {
  return (
    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-white/40 to-white/60 rounded-full"
        style={{
          width: '100%',
          animation: 'loading 2s ease-in-out infinite',
        }}
      />
    </div>
  );
};