
import React from 'react';
import { Snowflake, Disc2, Wifi, Users } from 'lucide-react';

interface ConceptSectionProps {
  isDayMode: boolean;
}

const ConceptSection: React.FC<ConceptSectionProps> = ({ isDayMode }) => {
  return (
    <section 
      id="concept" 
      className={`py-20 px-4 md:px-6 ${isDayMode ? 'bg-white' : 'bg-night-blue'}`}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className={`font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            isDayMode ? 'text-night-blue' : 'title-gradient-night'
          }`}>
            UN FESTIVAL UNIQUE
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDayMode ? 'text-day-gray' : 'text-white/80'
          }`}>
            Snow Pulse révolutionne l'expérience montagne en fusionnant adrénaline sportive et énergie musicale dans un cadre naturel exceptionnel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
          <FeatureCard 
            icon={<Snowflake />}
            title="Sport Extrême"
            description="Compétitions de ski et snowboard freestyle avec des athlètes internationaux et amateurs. Cash prize de 45 000€."
            isDayMode={isDayMode}
            delay="animate-delay-200"
          />
          <FeatureCard 
            icon={<Disc2 />}
            title="Musique Électro"
            description="Artistes internationaux et locaux sur 3 scènes. Une programmation électro variée pour vibrer jusqu'au bout de la nuit."
            isDayMode={isDayMode}
            delay="animate-delay-400"
          />
          <FeatureCard 
            icon={<Wifi />}
            title="Technologie"
            description="Une expérience connectée grâce aux bracelets RFID et l'app mobile Snow Pulse Connect pour une immersion totale."
            isDayMode={isDayMode}
            delay="animate-delay-600"
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <div className={`rounded-2xl overflow-hidden shadow-xl ${
              isDayMode ? 'bg-gradient-to-br from-day-blue/20 to-day-turquoise/20 shadow-day-blue/20' : 
              'bg-gradient-to-br from-night-purple/20 to-night-pink/20 shadow-night-purple/20'
            }`}>
              <div className="p-6 md:p-8">
                <h3 className={`font-orbitron text-xl md:text-2xl font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  Notre Vision
                </h3>
                <p className={`mb-6 ${
                  isDayMode ? 'text-day-gray' : 'text-white/80'
                }`}>
                  Devenir le festival de référence alliant sport d'hiver et musique électronique en Europe, reconnu pour son innovation technologique et son expérience client unique.
                </p>
                <div className="flex items-center">
                  <Users className={isDayMode ? 'text-day-turquoise' : 'text-night-pink'} size={20} />
                  <span className={`ml-2 ${
                    isDayMode ? 'text-day-gray' : 'text-white/80'
                  }`}>
                    Pour une communauté passionnée
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-6">
            <h3 className={`font-orbitron text-xl md:text-2xl font-bold ${
              isDayMode ? 'text-night-blue' : 'text-white'
            }`}>
              L'expérience Snow Pulse
            </h3>
            <ul className="space-y-4">
              {[
                "Compétitions de ski et snowboard freestyle de jour",
                "Soirées électro avec artistes internationaux de nuit",
                "Expérience augmentée via technologie RFID",
                "Cadre exceptionnel aux Saisies"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className={`flex items-start ${
                    isDayMode ? 'text-day-gray' : 'text-white/80'
                  }`}
                >
                  <div className={`mr-3 mt-1 min-w-4 ${
                    isDayMode ? 'text-day-turquoise' : 'text-night-pink'
                  }`}>
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a 
              href="#program" 
              className={`inline-block snow-pulse-button ${isDayMode ? 'snow-pulse-button-day' : 'snow-pulse-button-night'} mt-4`}
            >
              Voir le programme
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isDayMode: boolean;
  delay: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, isDayMode, delay }) => {
  return (
    <div 
      className={`rounded-xl p-6 md:p-8 transition-transform duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in ${delay} ${
        isDayMode 
          ? 'bg-gradient-to-br from-white to-day-blue/10 shadow-md' 
          : 'bg-gradient-to-br from-night-blue to-night-purple/20 shadow-md'
      }`}
    >
      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
        isDayMode 
          ? 'bg-day-turquoise/20 text-day-turquoise' 
          : 'bg-night-pink/20 text-night-pink'
      }`}>
        {icon}
      </div>
      <h3 className={`font-orbitron text-xl font-bold mb-2 ${
        isDayMode ? 'text-night-blue' : 'text-white'
      }`}>
        {title}
      </h3>
      <p className={isDayMode ? 'text-day-gray' : 'text-white/70'}>
        {description}
      </p>
    </div>
  );
};

export default ConceptSection;
