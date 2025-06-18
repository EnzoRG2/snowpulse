
import React from 'react';

interface HeroContentProps {
  isDayMode: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isDayMode }) => {
  return (
    <div className="relative z-10 container mx-auto px-4 text-center">
      <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
        <div className="relative inline-block">
          <span 
            className={`relative z-10 ${isDayMode ? 'text-gray-600' : 'text-white'}`}
            style={{
              textShadow: isDayMode 
                ? '1px 1px 2px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.1)'
                : '1px 1px 2px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            SNOW
          </span>
        </div>
        <div className="relative inline-block mt-2">
          <span 
            className={`relative z-10 ${
              isDayMode ? 'text-day-turquoise' : 'text-night-pink'
            }`}
            style={{
              textShadow: isDayMode 
                ? '1px 1px 2px rgba(0, 0, 0, 0.2), 0 0 4px rgba(0, 0, 0, 0.1)'
                : '1px 1px 2px rgba(0, 0, 0, 0.3), 0 0 4px rgba(0, 0, 0, 0.2)'
            }}
          >
            PULSE
          </span>
        </div>
      </h1>
      
      <h2 className={`text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-8 ${
        isDayMode ? 'text-gray-700' : 'text-gray-200'
      }`}
      style={{
        textShadow: isDayMode 
          ? '1px 1px 2px rgba(0, 0, 0, 0.3)' 
          : '1px 1px 2px rgba(0, 0, 0, 0.4)'
      }}>
        {isDayMode ? (
          "L'adrénaline du snow freestyle en journée."
        ) : (
          "L'énergie électro toute la nuit."
        )}
      </h2>
      
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
        <a 
          href="#tickets" 
          className={`px-6 py-3 rounded-md font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isDayMode 
              ? 'bg-day-turquoise text-white hover:bg-day-blue focus:ring-day-turquoise' 
              : 'bg-night-pink text-white hover:bg-night-purple focus:ring-night-pink'
          }`}
          style={{
            boxShadow: isDayMode 
              ? '0 4px 12px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(96, 240, 214, 0.2)'
              : '0 4px 12px rgba(0, 0, 0, 0.3), 0 2px 6px rgba(255, 45, 149, 0.2)'
          }}
          aria-label="Réserver des billets pour le festival Snow Pulse"
        >
          Réserver maintenant
        </a>
        <a 
          href="#program" 
          className={`z-10 px-6 py-3 rounded-md font-bold text-base transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isDayMode 
              ? 'text-gray-700 hover:text-night-blue border-2 border-gray-600 hover:border-night-blue bg-white/20 hover:bg-white/30 focus:ring-gray-600' 
              : 'text-gray-200 hover:text-white border-2 border-gray-300 hover:border-white bg-black/20 hover:bg-black/30 focus:ring-gray-300'
          }`}
          style={{
            boxShadow: isDayMode 
              ? '0 4px 12px rgba(0, 0, 0, 0.15)'
              : '0 4px 12px rgba(0, 0, 0, 0.2)'
          }}
          aria-label="Consulter le programme du festival Snow Pulse"
        >
          Voir le programme
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
