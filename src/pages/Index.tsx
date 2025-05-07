
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ConceptSection from '../components/ConceptSection';
import ProgramSection from '../components/ProgramSection';
import TechSection from '../components/TechSection';
import TicketSection from '../components/TicketSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isDayMode, setIsDayMode] = useState<boolean>(true);
  
  // Automatically transition to night mode when user scrolls past hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (scrollPosition > windowHeight * 0.75) {
        setIsDayMode(false);
      } else {
        setIsDayMode(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Manual toggle function for the day/night toggle button
  const toggleDayNight = () => {
    setIsDayMode(!isDayMode);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar isDayMode={isDayMode} toggleDayNight={toggleDayNight} />
      <HeroSection isDayMode={isDayMode} />
      <ConceptSection isDayMode={isDayMode} />
      <ProgramSection isDayMode={isDayMode} />
      <TechSection isDayMode={isDayMode} />
      <TicketSection isDayMode={isDayMode} />
      <Footer isDayMode={isDayMode} />
    </div>
  );
};

export default Index;
