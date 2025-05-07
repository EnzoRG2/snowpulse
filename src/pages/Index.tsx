
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ConceptSection from '../components/ConceptSection';
import ProgramSection from '../components/ProgramSection';
import TechSection from '../components/TechSection';
import TicketSection from '../components/TicketSection';
import Footer from '../components/Footer';

const Index = () => {
  const [isDayMode, setIsDayMode] = useState<boolean>(true);
  
  // Removed the automatic transition to night mode when scrolling past hero section
  
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
