
import React, { useState } from 'react';
import { Snowflake, Disc3, ArrowDown, ArrowUp } from 'lucide-react';

interface ProgramSectionProps {
  isDayMode: boolean;
}

const ProgramSection: React.FC<ProgramSectionProps> = ({ isDayMode }) => {
  const [activeDay, setActiveDay] = useState<'vendredi' | 'samedi' | 'dimanche'>('vendredi');
  const [activeSport, setActiveSport] = useState(true);
  
  const days = ['vendredi', 'samedi', 'dimanche'] as const;
  
  return (
    <section 
      id="program" 
      className={`py-20 px-4 md:px-6 ${
        isDayMode 
          ? 'bg-gradient-to-b from-white to-day-blue/20' 
          : 'bg-gradient-to-b from-night-blue to-night-purple/20'
      }`}
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className={`font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            isDayMode ? 'text-night-blue' : 'title-gradient-night'
          }`}>
            PROGRAMME
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${
            isDayMode ? 'text-day-gray' : 'text-white/80'
          }`}>
            Trois jours intenses de compétitions et performances du 10 au 12 mars 2025
          </p>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-center mb-10 overflow-x-auto">
            <div className={`inline-flex p-1 rounded-lg ${
              isDayMode ? 'bg-day-blue/20' : 'bg-night-purple/20'
            }`}>
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-4 py-2 font-medium rounded-md transition-colors duration-300 ${
                    activeDay === day
                      ? isDayMode
                        ? 'bg-white text-night-blue shadow-md'
                        : 'bg-night-purple text-white shadow-md'
                      : isDayMode
                        ? 'text-day-gray hover:text-night-blue'
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className={`inline-flex items-center p-1 rounded-lg ${
              isDayMode ? 'bg-day-blue/20' : 'bg-night-purple/20'
            }`}>
              <button
                onClick={() => setActiveSport(true)}
                className={`px-4 py-2 flex items-center font-medium rounded-md transition-colors duration-300 ${
                  activeSport
                    ? isDayMode
                      ? 'bg-white text-night-blue shadow-md'
                      : 'bg-night-purple text-white shadow-md'
                    : isDayMode
                      ? 'text-day-gray hover:text-night-blue'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                <Snowflake size={16} className="mr-2" />
                Sports (10h-16h30)
              </button>
              <button
                onClick={() => setActiveSport(false)}
                className={`px-4 py-2 flex items-center font-medium rounded-md transition-colors duration-300 ${
                  !activeSport
                    ? isDayMode
                      ? 'bg-white text-night-blue shadow-md'
                      : 'bg-night-purple text-white shadow-md'
                    : isDayMode
                      ? 'text-day-gray hover:text-night-blue'
                      : 'text-white/70 hover:text-white'
                }`}
              >
                <Disc3 size={16} className="mr-2" />
                Musique (17h-2h)
              </button>
            </div>
          </div>
          
          <div>
            {activeSport ? (
              <div>
                <div className={`rounded-xl p-6 md:p-8 mb-6 ${
                  isDayMode 
                    ? 'bg-white shadow-md' 
                    : 'bg-night-blue/50 shadow-md'
                }`}>
                  <h3 className={`font-orbitron text-xl font-bold mb-4 ${
                    isDayMode ? 'text-night-blue' : 'text-white'
                  }`}>
                    Programme Sports - {activeDay.charAt(0).toUpperCase() + activeDay.slice(1)}
                  </h3>
                  
                  <div className="space-y-6">
                    {activeDay === 'vendredi' && (
                      <>
                        <TimelineItem 
                          time="10h-12h" 
                          title="Qualifications ski freestyle" 
                          description="Big air et slopestyle"
                          isDayMode={isDayMode}
                        />
                        <TimelineItem 
                          time="13h-15h" 
                          title="Qualifications snowboard freestyle" 
                          description="Big air et slopestyle"
                          isDayMode={isDayMode}
                        />
                        <TimelineItem 
                          time="15h30-16h30" 
                          title="Course de vélo sur neige amateur" 
                          description="Qualifications"
                          isDayMode={isDayMode}
                        />
                      </>
                    )}
                    
                    {activeDay === 'samedi' && (
                      <>
                        <TimelineItem 
                          time="10h-12h" 
                          title="Demi-finales ski freestyle" 
                          description="Les meilleurs des qualifications s'affrontent"
                          isDayMode={isDayMode}
                        />
                        <TimelineItem 
                          time="13h-15h" 
                          title="Compétitions snow freestyle" 
                          description="Demi-finales"
                          isDayMode={isDayMode}
                        />
                        <TimelineItem 
                          time="15h30-16h30" 
                          title="Finale vélo sur neige" 
                          description="Catégories pro et amateur"
                          isDayMode={isDayMode}
                        />
                      </>
                    )}
                    
                    {activeDay === 'dimanche' && (
                      <>
                        <TimelineItem 
                          time="10h-12h" 
                          title="Finales ski freestyle" 
                          description="Les meilleurs s'affrontent pour le Cash Prize"
                          isDayMode={isDayMode}
                        />
                        <TimelineItem 
                          time="13h-15h" 
                          title="Finales snowboard freestyle" 
                          description="Dernière chance de remporter le Cash Prize"
                          isDayMode={isDayMode}
                        />
                        <TimelineItem 
                          time="15h30-16h30" 
                          title="Boardercross exhibition" 
                          description="Avec athlètes invités"
                          isDayMode={isDayMode}
                        />
                      </>
                    )}
                  </div>
                </div>
                
                <div className={`rounded-xl p-6 md:p-8 ${
                  isDayMode 
                    ? 'bg-day-turquoise/10' 
                    : 'bg-night-purple/10'
                }`}>
                  <h4 className={`font-orbitron text-lg font-bold mb-2 ${
                    isDayMode ? 'text-night-blue' : 'text-white'
                  }`}>
                    Cash Prize
                  </h4>
                  <p className={`mb-3 ${
                    isDayMode ? 'text-day-gray' : 'text-white/80'
                  }`}>
                    Budget total: 45 000€
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <PrizeItem place="1er" amount="8 000€" isDayMode={isDayMode} />
                    <PrizeItem place="2ème" amount="4 000€" isDayMode={isDayMode} />
                    <PrizeItem place="3ème" amount="2 000€" isDayMode={isDayMode} />
                    <PrizeItem place="4ème" amount="1 000€" isDayMode={isDayMode} />
                  </div>
                  <p className={`mt-3 text-sm ${
                    isDayMode ? 'text-day-gray' : 'text-white/70'
                  }`}>
                    5ème - 10ème : 500€ chacun
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className={`rounded-xl p-6 md:p-8 mb-6 ${
                  isDayMode 
                    ? 'bg-white shadow-md' 
                    : 'bg-night-blue/50 shadow-md'
                }`}>
                  <h3 className={`font-orbitron text-xl font-bold mb-4 ${
                    isDayMode ? 'text-night-blue' : 'text-white'
                  }`}>
                    Programme Musique - {activeDay.charAt(0).toUpperCase() + activeDay.slice(1)}
                  </h3>
                  
                  <div className="space-y-6">
                    <TimelineItem 
                      time="17h-19h" 
                      title="DJ résidents locaux" 
                      description="Warm-up par les talents de la région"
                      isDayMode={isDayMode}
                    />
                    <TimelineItem 
                      time="19h-21h" 
                      title={activeDay === 'vendredi' ? "Artistes émergents" : "Artistes nationaux"} 
                      description="Techno et Electro"
                      isDayMode={isDayMode}
                    />
                    <TimelineItem 
                      time="21h-2h" 
                      title="Têtes d'affiche internationales" 
                      description={activeDay === 'samedi' ? "3 artistes internationaux" : "2 artistes internationaux"}
                      isDayMode={isDayMode}
                    />
                  </div>
                </div>
                
                <div className={`rounded-xl p-6 md:p-8 ${
                  isDayMode 
                    ? 'bg-day-turquoise/10' 
                    : 'bg-night-purple/10'
                }`}>
                  <h4 className={`font-orbitron text-lg font-bold mb-3 ${
                    isDayMode ? 'text-night-blue' : 'text-white'
                  }`}>
                    Scènes
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <SceneItem 
                      name="Grande scène" 
                      location="Front de neige" 
                      capacity="5000 personnes"
                      isDayMode={isDayMode}
                    />
                    <SceneItem 
                      name="Scène découverte" 
                      location="Chapiteau" 
                      capacity="1500 personnes"
                      isDayMode={isDayMode}
                    />
                    <SceneItem 
                      name="After party" 
                      location="Salle polyvalente" 
                      capacity="800 personnes"
                      isDayMode={isDayMode}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  isDayMode: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ time, title, description, isDayMode }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/4 mb-2 md:mb-0">
        <div className={`inline-block font-orbitron font-semibold px-3 py-1 rounded-full text-sm ${
          isDayMode 
            ? 'bg-day-turquoise/20 text-night-blue' 
            : 'bg-night-pink/20 text-white'
        }`}>
          {time}
        </div>
      </div>
      <div className="md:w-3/4">
        <h4 className={`font-semibold text-lg mb-1 ${
          isDayMode ? 'text-night-blue' : 'text-white'
        }`}>
          {title}
        </h4>
        <p className={isDayMode ? 'text-day-gray' : 'text-white/70'}>
          {description}
        </p>
      </div>
    </div>
  );
};

interface PrizeItemProps {
  place: string;
  amount: string;
  isDayMode: boolean;
}

const PrizeItem: React.FC<PrizeItemProps> = ({ place, amount, isDayMode }) => {
  return (
    <div className={`p-3 rounded-lg text-center ${
      isDayMode 
        ? 'bg-white shadow-sm' 
        : 'bg-night-blue/50 shadow-sm'
    }`}>
      <div className={`font-orbitron font-bold ${
        isDayMode ? 'text-night-blue' : 'text-white'
      }`}>
        {place}
      </div>
      <div className={`text-sm ${
        isDayMode ? 'text-day-turquoise' : 'text-night-pink'
      }`}>
        {amount}
      </div>
    </div>
  );
};

interface SceneItemProps {
  name: string;
  location: string;
  capacity: string;
  isDayMode: boolean;
}

const SceneItem: React.FC<SceneItemProps> = ({ name, location, capacity, isDayMode }) => {
  return (
    <div className={`p-4 rounded-lg ${
      isDayMode 
        ? 'bg-white shadow-sm' 
        : 'bg-night-blue/50 shadow-sm'
    }`}>
      <h5 className={`font-orbitron font-semibold mb-1 ${
        isDayMode ? 'text-night-blue' : 'text-white'
      }`}>
        {name}
      </h5>
      <p className={`text-sm mb-1 ${
        isDayMode ? 'text-day-gray' : 'text-white/80'
      }`}>
        {location}
      </p>
      <p className={`text-xs ${
        isDayMode ? 'text-day-turquoise' : 'text-night-pink'
      }`}>
        {capacity}
      </p>
    </div>
  );
};

export default ProgramSection;
