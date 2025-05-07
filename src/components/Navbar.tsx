
import React, { useState, useEffect } from 'react';
import { Snowflake } from 'lucide-react';
import DayNightToggle from './DayNightToggle';

interface NavbarProps {
  isDayMode: boolean;
  toggleDayNight: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDayMode, toggleDayNight }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 backdrop-blur-md bg-black/10' : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Snowflake className={`h-8 w-8 mr-2 ${isDayMode ? 'text-day-turquoise' : 'text-night-pink'}`} />
          <span className="font-orbitron text-xl md:text-2xl font-bold tracking-wider">
            <span className={isDayMode ? 'text-day-turquoise' : 'text-night-pink'}>SNOW</span>
            <span className="text-white">PULSE</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#concept" isDayMode={isDayMode}>Concept</NavLink>
          <NavLink href="#program" isDayMode={isDayMode}>Programme</NavLink>
          <NavLink href="#technology" isDayMode={isDayMode}>Technologie</NavLink>
          <NavLink href="#tickets" isDayMode={isDayMode}>Billets</NavLink>
          <DayNightToggle isDayMode={isDayMode} toggleDayNight={toggleDayNight} />
        </div>
        
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 ${isDayMode ? 'bg-night-blue' : 'bg-white'} transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-6 ${isDayMode ? 'bg-night-blue' : 'bg-white'} transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-6 ${isDayMode ? 'bg-night-blue' : 'bg-white'} transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full backdrop-blur-xl ${isDayMode ? 'bg-day-white/80' : 'bg-night-blue/80'} transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <MobileNavLink href="#concept" isDayMode={isDayMode} onClick={() => setMobileMenuOpen(false)}>Concept</MobileNavLink>
          <MobileNavLink href="#program" isDayMode={isDayMode} onClick={() => setMobileMenuOpen(false)}>Programme</MobileNavLink>
          <MobileNavLink href="#technology" isDayMode={isDayMode} onClick={() => setMobileMenuOpen(false)}>Technologie</MobileNavLink>
          <MobileNavLink href="#tickets" isDayMode={isDayMode} onClick={() => setMobileMenuOpen(false)}>Billets</MobileNavLink>
          <div className="py-2 flex justify-center">
            <DayNightToggle isDayMode={isDayMode} toggleDayNight={toggleDayNight} />
          </div>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isDayMode: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isDayMode }) => {
  return (
    <a 
      href={href}
      className={`relative font-medium text-sm tracking-wider hover:opacity-80 transition-opacity after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
        isDayMode ? 'text-night-blue after:bg-day-turquoise' : 'text-white after:bg-night-pink'
      }`}
    >
      {children}
    </a>
  );
};

interface MobileNavLinkProps extends NavLinkProps {
  onClick: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, isDayMode, onClick }) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className={`py-2 block text-center text-lg font-medium ${
        isDayMode ? 'text-night-blue' : 'text-white'
      }`}
    >
      {children}
    </a>
  );
};

export default Navbar;
