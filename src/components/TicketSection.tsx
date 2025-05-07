
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface TicketSectionProps {
  isDayMode: boolean;
}

const TicketSection: React.FC<TicketSectionProps> = ({ isDayMode }) => {
  return (
    <section 
      id="tickets" 
      className={`py-20 px-4 md:px-6 ${
        isDayMode 
          ? 'bg-white' 
          : 'bg-night-blue'
      }`}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className={`font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            isDayMode ? 'text-night-blue' : 'title-gradient-night'
          }`}>
            BILLETS & OFFRES
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDayMode ? 'text-day-gray' : 'text-white/80'
          }`}>
            Sélectionnez l'expérience Snow Pulse qui vous convient
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <TicketCard 
            name="Full Experience" 
            price="329€" 
            features={[
              "Forfait ski 3 jours", 
              "Accès prioritaire aux scènes", 
              "Zone VIP compétitions", 
              "Places réservées", 
              "Welcome pack exclusif"
            ]}
            highlight={true}
            isDayMode={isDayMode}
          />
          <TicketCard 
            name="Festival + Ski" 
            price="249€" 
            features={[
              "Forfait ski 3 jours", 
              "Accès festival et soirées", 
              "Accès aux compétitions"
            ]}
            highlight={false}
            isDayMode={isDayMode}
          />
          <TicketCard 
            name="Festival Only" 
            price="169€" 
            features={[
              "Accès festival et soirées", 
              "Accès aux compétitions", 
              "Sans forfait de ski"
            ]}
            highlight={false}
            isDayMode={isDayMode}
          />
          <TicketCard 
            name="Journée" 
            price="79€" 
            features={[
              "Accès festival 1 jour", 
              "Accès soirée du même jour", 
              "Jour au choix"
            ]}
            highlight={false}
            isDayMode={isDayMode}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`rounded-xl p-6 md:p-8 ${
            isDayMode 
              ? 'bg-day-blue/10' 
              : 'bg-night-purple/10'
          }`}>
            <h3 className={`font-orbitron text-xl font-bold mb-4 ${
              isDayMode ? 'text-night-blue' : 'text-white'
            }`}>
              Offres Spéciales
            </h3>
            <ul className="space-y-4">
              {[
                "Early Bird (J-4 à J-3 mois): -20%",
                "Pack Groupe (4 personnes): -15%",
                "Pack Famille (2 adultes + 2 enfants): -25%",
                "Pack Hébergement + Festival: -10% sur l'hébergement"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start ${
                    isDayMode ? 'text-day-gray' : 'text-white/80'
                  }`}
                >
                  <div className={`mr-3 ${
                    isDayMode ? 'text-day-turquoise' : 'text-night-pink'
                  }`}>
                    ★
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`rounded-xl p-6 md:p-8 ${
            isDayMode 
              ? 'bg-day-blue/10' 
              : 'bg-night-purple/10'
          }`}>
            <h3 className={`font-orbitron text-xl font-bold mb-4 ${
              isDayMode ? 'text-night-blue' : 'text-white'
            }`}>
              Options Additionnelles
            </h3>
            <ul className="space-y-4">
              {[
                "Upgrade VIP: +80€",
                "Cours de ski/snow: +60€/jour",
                "Initiation vélo sur neige: +40€/2h",
                "Location équipement: tarifs préférentiels (-15%)"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start ${
                    isDayMode ? 'text-day-gray' : 'text-white/80'
                  }`}
                >
                  <div className={`mr-3 ${
                    isDayMode ? 'text-day-turquoise' : 'text-night-pink'
                  }`}>
                    +
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TicketCardProps {
  name: string;
  price: string;
  features: string[];
  highlight: boolean;
  isDayMode: boolean;
}

const TicketCard: React.FC<TicketCardProps> = ({ name, price, features, highlight, isDayMode }) => {
  return (
    <div 
      className={`rounded-xl overflow-hidden transition-transform hover:translate-y-[-5px] ${
        isDayMode
          ? highlight 
            ? 'bg-gradient-to-br from-day-turquoise to-day-blue shadow-lg' 
            : 'bg-white border border-gray-100 shadow-md'
          : highlight 
            ? 'bg-gradient-to-br from-night-pink to-night-purple shadow-lg' 
            : 'bg-night-blue/50 border border-night-purple/20 shadow-md'
      }`}
    >
      <div className="p-6">
        <h3 className={`font-orbitron text-xl font-bold mb-2 ${
          isDayMode
            ? highlight ? 'text-white' : 'text-night-blue'
            : 'text-white'
        }`}>
          {name}
        </h3>
        
        <div className="flex items-end mb-4">
          <div className={`text-2xl font-bold ${
            isDayMode
              ? highlight ? 'text-white' : 'text-night-blue'
              : highlight ? 'text-white' : 'text-white'
          }`}>
            {price}
          </div>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li 
              key={index} 
              className="flex items-start"
            >
              <div className={`mr-2 mt-1 ${
                isDayMode
                  ? highlight ? 'text-white' : 'text-day-turquoise'
                  : highlight ? 'text-white' : 'text-night-pink'
              }`}>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
              </div>
              <span className={
                isDayMode
                  ? highlight ? 'text-white/90' : 'text-day-gray'
                  : highlight ? 'text-white/90' : 'text-white/70'
              }>
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full rounded-md py-3 font-bold transition-all duration-300 flex justify-center items-center ${
            isDayMode
              ? highlight 
                ? 'bg-white text-day-turquoise hover:shadow-lg' 
                : 'bg-night-blue text-white hover:bg-night-blue/90 hover:shadow-lg'
              : highlight 
                ? 'bg-white text-night-pink hover:shadow-lg' 
                : 'bg-night-purple text-white hover:bg-night-purple/90 hover:shadow-lg'
          }`}
        >
          <span>Réserver</span>
          <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default TicketSection;
