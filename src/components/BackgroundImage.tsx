
import React from 'react';

interface BackgroundImageProps {
  isDayMode: boolean;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ isDayMode }) => {
  return (
    <div 
      className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
      style={{
        backgroundImage: isDayMode 
          ? 'url("https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=1920&h=1080")'
          : 'url("https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1920&h=1080")'
      }}
      role="img"
      aria-label={isDayMode ? "Vue panoramique des Alpes enneigées sous un ciel bleu, cadre du festival Snow Pulse" : "Forêt de sapins enneigés la nuit, ambiance nocturne du festival Snow Pulse"}
    />
  );
};

export default BackgroundImage;
