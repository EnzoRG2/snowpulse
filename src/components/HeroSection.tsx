
import React, { useState, useEffect } from 'react';
import BackgroundImage from './BackgroundImage';
import SnowfallEffect from './SnowfallEffect';
import StarsEffect from './StarsEffect';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';
import LocationDateInfo from './LocationDateInfo';

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
          ? 'linear-gradient(to bottom, #6A9CBF 0%, #E0F0FF 100%)'
          : 'linear-gradient(to bottom, #03070E 0%, #4A1F5A 100%)'
      }}
      role="banner"
      aria-label="Section principale du festival Snow Pulse"
    >
      <BackgroundImage isDayMode={isDayMode} />
      
      <SnowfallEffect show={showSnowflakes && isDayMode} />
      <StarsEffect show={!isDayMode} />

      <HeroContent isDayMode={isDayMode} />
      <ScrollIndicator isDayMode={isDayMode} />
      <LocationDateInfo isDayMode={isDayMode} />
    </section>
  );
};

export default HeroSection;
