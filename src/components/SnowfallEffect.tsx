
import React from 'react';
import { Snowflake } from 'lucide-react';

interface SnowfallEffectProps {
  show: boolean;
}

const SnowfallEffect: React.FC<SnowfallEffectProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {[...Array(20)].map((_, i) => (
        <div
          key={`snowflake-${i}`}
          className="absolute animate-snowfall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        >
          <Snowflake
            size={10 + Math.random() * 20}
            className="text-white opacity-60"
            aria-hidden="true"
          />
        </div>
      ))}
    </div>
  );
};

export default SnowfallEffect;
