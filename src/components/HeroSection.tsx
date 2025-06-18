
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
          ? 'linear-gradient(to bottom, #6A9CBF 0%, #E0F0FF 100%)' // Even darker blue for day mode
          : 'linear-gradient(to bottom, #03070E 0%, #4A1F5A 100%)' // Darker night mode gradient
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40" // Further reduced opacity for darker effect
        style={{
          backgroundImage: isDayMode 
            ? 'url("https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=1920&h=1080")'
            : 'url("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&h=1080")'
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
                className="text-white opacity-60"
              />
            </div>
          ))}
        </div>
      )}
      
      {!isDayMode && (
        <div className="absolute inset-0 z-0">
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
      )}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-orbitron text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
          <div className="relative inline-block">
            <span 
              className={`relative z-10 ${isDayMode ? 'text-gray-600' : 'text-white'}`}
              style={{
                textShadow: isDayMode 
                  ? '2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5)'
                  : '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)'
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
                  ? '2px 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(0, 0, 0, 0.5)'
                  : '2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6)'
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
            ? '1px 1px 4px rgba(0, 0, 0, 0.6)' 
            : '1px 1px 4px rgba(0, 0, 0, 0.8)'
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
            className={`px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
              isDayMode 
                ? 'bg-day-turquoise text-white hover:bg-day-blue' 
                : 'bg-night-pink text-white hover:bg-night-purple'
            }`}
            style={{
              boxShadow: isDayMode 
                ? '0 8px 25px rgba(0, 0, 0, 0.3), 0 4px 10px rgba(96, 240, 214, 0.3)'
                : '0 8px 25px rgba(0, 0, 0, 0.4), 0 4px 10px rgba(255, 45, 149, 0.3)'
            }}
          >
            Réserver maintenant
          </a>
          <a 
            href="#program" 
            className={`z-10 px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-sm ${
              isDayMode 
                ? 'text-gray-700 hover:text-night-blue border-2 border-gray-600 hover:border-night-blue bg-white/20 hover:bg-white/30' 
                : 'text-gray-200 hover:text-white border-2 border-gray-300 hover:border-white bg-black/20 hover:bg-black/30'
            }`}
            style={{
              boxShadow: isDayMode 
                ? '0 8px 25px rgba(0, 0, 0, 0.2)'
                : '0 8px 25px rgba(0, 0, 0, 0.3)'
            }}
          >
            Voir le programme
          </a>
        </div>
        
        <div className={`absolute bottom-12 left-0 right-0 flex justify-center ${
          isDayMode ? 'text-gray-600' : 'text-gray-300'
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
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </a>
        </div>
        
        <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 font-medium">
          <div 
            className={`text-base md:text-xl font-extrabold ${isDayMode ? 'text-gray-600' : 'text-white'}`}
            style={{
              textShadow: isDayMode 
                ? '1px 1px 2px rgba(0, 0, 0, 0.3), 0 0 5px rgba(0, 0, 0, 0.4)' 
                : '1px 1px 2px rgba(0, 0, 0, 0.3), 0 0 5px rgba(255, 255, 255, 0.3)',
              letterSpacing: '1.2px',
              padding: '2px 6px',
            }}
          >
            Les Saisies
          </div>
          <div 
            className={`text-sm md:text-lg font-extrabold ${
              isDayMode ? 'text-day-turquoise' : 'text-night-pink'
            }`}
            style={{
              textShadow: isDayMode 
                ? '1px 1px 3px rgba(0, 0, 0, 0.4), 0 0 7px rgba(0, 0, 0, 0.6)' 
                : '1px 1px 3px rgba(0, 0, 0, 0.4), 0 0 7px rgba(255, 255, 255, 0.4)',
              letterSpacing: '1.2px',
              padding: '2px 6px',
            }}
          >
            13 - 15 Mars 2026
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
