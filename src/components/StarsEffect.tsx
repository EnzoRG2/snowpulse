
import React from 'react';

interface StarsEffectProps {
  show: boolean;
}

const StarsEffect: React.FC<StarsEffectProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {[...Array(40)].map((_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 2}px`,
            height: `${Math.random() * 2}px`,
            backgroundColor: 'white',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            opacity: 0.3 + Math.random() * 0.4,
            animation: `pulse ${3 + Math.random() * 3}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarsEffect;
