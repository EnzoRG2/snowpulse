
import React from 'react';
import { Snowflake, Disc } from 'lucide-react';

interface DayNightToggleProps {
  isDayMode: boolean;
  toggleDayNight: () => void;
}

const DayNightToggle: React.FC<DayNightToggleProps> = ({ isDayMode, toggleDayNight }) => {
  return (
    <button 
      onClick={toggleDayNight}
      className="relative flex items-center justify-center w-14 h-7 rounded-full p-1 transition-colors duration-300"
      style={{
        backgroundColor: isDayMode ? '#C7EFFF' : '#8E44AD',
        boxShadow: isDayMode 
          ? '0 0 10px rgba(199, 239, 255, 0.7), 0 0 20px rgba(199, 239, 255, 0.5)' 
          : '0 0 10px rgba(142, 68, 173, 0.7), 0 0 20px rgba(142, 68, 173, 0.5)'
      }}
    >
      <div 
        className={`absolute w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 ${
          isDayMode ? 'translate-x-[-30%]' : 'translate-x-[30%]'
        }`}
        style={{
          backgroundColor: isDayMode ? '#FFFFFF' : '#0D1B2A',
          boxShadow: isDayMode 
            ? '0 0 5px rgba(255, 255, 255, 0.7)' 
            : '0 0 5px rgba(13, 27, 42, 0.7)'
        }}
      >
        {isDayMode 
          ? <Snowflake className="h-3 w-3 text-day-turquoise" />
          : <Disc className="h-3 w-3 text-night-pink" />
        }
      </div>
    </button>
  );
};

export default DayNightToggle;
