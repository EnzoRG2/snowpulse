
import React from 'react';
import { Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FooterProps {
  isDayMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDayMode }) => {
  return (
    <footer className={
      isDayMode 
        ? 'bg-day-gray/10 border-t border-day-gray/10' 
        : 'bg-night-blue border-t border-night-purple/20'
    }>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Snowflake className={`h-6 w-6 mr-2 ${isDayMode ? 'text-day-turquoise' : 'text-night-pink'}`} />
              <span className="font-orbitron text-lg font-bold tracking-wider">
                <span className={isDayMode ? 'text-day-turquoise' : 'text-night-pink'}>SNOW</span>
                <span className={isDayMode ? 'text-night-blue' : 'text-white'}>PULSE</span>
              </span>
            </div>
            <p className={`mb-4 text-sm ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}>
              Le festival qui fusionne adrénaline glacée et énergie électro pour une expérience unique au cœur des Alpes.
            </p>
            <p className={`text-sm ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}>
              13 - 15 Mars 2026<br />
              Les Saisies, France
            </p>
          </div>
          
          <div>
            <h4 className={`font-orbitron font-semibold mb-4 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              {[
                ["Concept", "#concept"],
                ["Programme", "#program"],
                ["Technologie", "#technology"],
                ["Billets", "#tickets"],
              ].map(([label, link]) => (
                <li key={label}>
                  <a 
                    href={link} 
                    className={`text-sm hover:underline ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className={`font-orbitron font-semibold mb-4 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
              Contact
            </h4>
            <ul className="space-y-2">
              {[
                ["Email", "contact@snowpulse.com"],
                ["Téléphone", "+33 (0)4 XX XX XX XX"],
                ["Adresse", "Office du tourisme, Les Saisies"],
              ].map(([label, value]) => (
                <li key={label} className={`text-sm ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}>
                  <span className="font-semibold">{label}:</span> {value}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className={`font-orbitron font-semibold mb-4 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
              Newsletter
            </h4>
            <p className={`text-sm mb-4 ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}>
              Restez informé des dernières actualités et promotions.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Votre email" 
                className={`rounded-l-md px-4 py-2 text-sm w-full outline-none ${
                  isDayMode 
                    ? 'bg-white border border-day-gray/20' 
                    : 'bg-night-blue/50 border border-night-purple/20 text-white'
                }`}
                required
              />
              <button 
                type="submit" 
                className={`rounded-r-md px-4 py-2 font-medium text-white ${
                  isDayMode ? 'bg-day-turquoise' : 'bg-night-pink'
                }`}
              >
                OK
              </button>
            </form>
          </div>
        </div>
        
        <div className={`mt-12 pt-6 border-t ${
          isDayMode ? 'border-day-gray/10' : 'border-night-purple/20'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-xs mb-4 md:mb-0 ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}>
              &copy; 2025 Snow Pulse Festival. Tous droits réservés.
            </p>
            
            <div className="flex space-x-4">
              <Link 
                to="/cgu"
                className={`text-xs hover:underline ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}
              >
                Mentions légales
              </Link>
              <a 
                href="#" 
                className={`text-xs hover:underline ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}
              >
                Politique de confidentialité
              </a>
              <Link 
                to="/cgv"
                className={`text-xs hover:underline ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}
              >
                CGV
              </Link>
              <a 
                href="#" 
                className={`text-xs hover:underline ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}
              >
                Accessibilité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
