import React, { useState, useEffect } from 'react';
import { Snowflake, User as UserIcon, LogOut } from 'lucide-react';
import DayNightToggle from './DayNightToggle';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import type { Session } from '@supabase/supabase-js';

interface NavbarProps {
  isDayMode: boolean;
  toggleDayNight: () => void;
  session: Session | null;
  handleLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDayMode, toggleDayNight, session, handleLogout }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const user = session?.user;
  
  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${ // Adjusted z-index from 50 to 40 to be below potential fixed elements like auth buttons on Index if not removed
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
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLink href="#concept" isDayMode={isDayMode}>Concept</NavLink>
          <NavLink href="#program" isDayMode={isDayMode}>Programme</NavLink>
          <NavLink href="#technology" isDayMode={isDayMode}>Technologie</NavLink>
          <NavLink href="#tickets" isDayMode={isDayMode}>Billets</NavLink>
          <DayNightToggle isDayMode={isDayMode} toggleDayNight={toggleDayNight} />
          {user ? (
            <>
              <span className={`text-sm ${isDayMode ? 'text-slate-700' : 'text-slate-300'} flex items-center`}>
                <UserIcon className="h-4 w-4 mr-1" /> {user.email?.split('@')[0]}
              </span>
              <Button onClick={handleLogout} variant="outline" size="sm" className={`${isDayMode ? 'border-slate-300 text-slate-700 hover:bg-slate-100' : 'border-slate-700 text-slate-300 hover:bg-slate-800'}`}>
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <Link 
              to="/auth"
              className={`rounded-md py-3 px-6 font-bold transition-all duration-300 flex justify-center items-center text-sm ${
                isDayMode 
                  ? 'bg-night-blue text-white hover:bg-night-blue/90 hover:shadow-lg'
                  : 'bg-night-purple text-white hover:bg-night-purple/90 hover:shadow-lg'
              }`}
            >
              <span>Connexion</span>
            </Link>
          )}
        </div>
        
        <button 
          className="md:hidden z-50" // Ensure burger menu is on top
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
          mobileMenuOpen ? 'max-h-[calc(100vh-4rem)] py-4' : 'max-h-0' // Adjusted max-h
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <MobileNavLink href="#concept" isDayMode={isDayMode} onClick={() => setMobileMenuOpen(false)}>Concept</MobileNavLink>
          <MobileNavLink href="#program" isDayMode={isDayMode} onClick={() => setMobileMenuOpen(false)}>Programme</MobileNavLink>
          <MobileNavLink href="#technology" isDayMode={isDayMode} onClick={() => setMobileMenuOpen(false)}>Technologie</MobileNavLink>
          <MobileNavLink href="#tickets" isDayMode={isDayMode} onClick={() => setMobileMenuOpen(false)}>Billets</MobileNavLink>
          
          <div className="border-t pt-4 mt-2 space-y-3 ${isDayMode ? 'border-slate-200' : 'border-slate-700'}">
            {user ? (
              <>
                <div className={`flex items-center justify-center text-sm mb-2 ${isDayMode ? 'text-slate-700' : 'text-slate-300'}`}>
                  <UserIcon className="h-4 w-4 mr-2" /> {user.email}
                </div>
                <Button onClick={() => { handleLogout(); setMobileMenuOpen(false); }} variant="ghost" size="sm" className={`w-full ${isDayMode ? 'text-slate-700 hover:bg-slate-100' : 'text-slate-300 hover:bg-slate-800'}`}>
                  <LogOut className="mr-2 h-4 w-4" /> Déconnexion
                </Button>
              </>
            ) : (
              <Button asChild variant="ghost" size="sm" className={`w-full ${isDayMode ? 'text-slate-700 hover:bg-slate-100' : 'border-slate-700 text-slate-300 hover:bg-slate-800'}`} onClick={() => setMobileMenuOpen(false)}>
                <Link to="/auth">
                  <UserIcon className="mr-2 h-4 w-4" /> Connexion / Inscription
                </Link>
              </Button>
            )}
          </div>

          <div className="py-2 flex justify-center mt-2">
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
