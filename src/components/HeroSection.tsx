
import React, { useState, useEffect } from 'react';
import { Snowflake } from 'lucide-react';

interface HeroSectionProps {
  isDayMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isDayMode }) => {
  const [showSnowflakes, setShowSnowflakes] = useState<boolean>(isDayMode);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSnowflakes(isDayMode);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [isDayMode]);
  
  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: isDayMode
          ? 'linear-gradient(to bottom, #C7EFFF 0%, #FFFFFF 100%)'
          : 'linear-gradient(to bottom, #0D1B2A 0%, #8E44AD 100%)'
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: isDayMode 
            ? 'url("https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=1920&h=1080")'
            : 'url("https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=1920&h=1080")'
        }}
      />
      
      {/* Background Effects */}
      {showSnowflakes && isDayMode && (
        <div className="absolute inset-0 z-0">
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
                className="text-white opacity-80"
              />
            </div>
          ))}
        </div>
      )}
      
      {/* Night stars */}
      {!isDayMode && (
        <div className="absolute inset-0 z-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                backgroundColor: 'white',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 60}%`,
                opacity: 0.4 + Math.random() * 0.6,
                animation: `pulse ${2 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 tracking-tighter">
          <div className="relative inline-block" data-text="SNOW">
            <span className={`relative z-10 ${isDayMode ? 'text-day-gray' : 'text-white'}`}>SNOW</span>
          </div>
          <div className={`relative inline-block mt-2 ${isDayMode ? 'glitch-effect' : ''}`} data-text="PULSE">
            <span className={`relative z-10 ${
              isDayMode ? 'title-gradient-day' : 'title-gradient-night'
            }`}>PULSE</span>
          </div>
        </h1>
        
        <h2 className={`text-xl md:text-2xl font-medium max-w-2xl mx-auto mb-8 ${
          isDayMode ? 'text-day-gray' : 'text-white/80'
        }`}>
          {isDayMode ? (
            "L'adrénaline du snow freestyle en journée."
          ) : (
            "L'énergie électro toute la nuit."
          )}
        </h2>
        
        <div className="relative flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
          <a 
            href="#tickets" 
            className={`snow-pulse-button ${isDayMode ? 'snow-pulse-button-day' : 'snow-pulse-button-night'} z-10`}
          >
            Réserver maintenant
          </a>
          <a 
            href="#program" 
            className={`z-10 px-6 py-3 rounded-md font-bold transition-colors duration-300 ${
              isDayMode 
                ? 'text-day-gray hover:text-night-blue' 
                : 'text-white/80 hover:text-white'
            }`}
          >
            Voir le programme
          </a>
        </div>
        
        <div className={`absolute bottom-12 left-0 right-0 flex justify-center animate-pulse-slow ${
          isDayMode ? 'text-day-gray' : 'text-white/80'
        }`}>
          <a href="#concept">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="animate-bounce"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </div>
        
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 font-orbitron font-bold">
          <div className={`text-sm md:text-base ${isDayMode ? 'text-day-gray' : 'text-white/80'}`}>
            Les Saisies
          </div>
          <div className={`text-xs md:text-sm ${isDayMode ? 'text-day-turquoise' : 'text-night-pink'}`}>
            10-12 MARS 2025
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
