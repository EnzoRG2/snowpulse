
import React from 'react';

interface LocationDateInfoProps {
  isDayMode: boolean;
}

const LocationDateInfo: React.FC<LocationDateInfoProps> = ({ isDayMode }) => {
  return (
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
  );
};

export default LocationDateInfo;
