import React, { useState } from 'react';
import { Snowflake, Disc3, ArrowDown, ArrowUp } from 'lucide-react';
interface ProgramSectionProps {
  isDayMode: boolean;
}
const ProgramSection: React.FC<ProgramSectionProps> = ({
  isDayMode
}) => {
  const [activeDay, setActiveDay] = useState<'jeudi' | 'vendredi' | 'samedi' | 'dimanche'>('jeudi');
  const [activeSport, setActiveSport] = useState(true);
  const days = ['jeudi', 'vendredi', 'samedi', 'dimanche'] as const;
  return <section id="program" className={`py-20 px-4 md:px-6 ${isDayMode ? 'bg-gradient-to-b from-white to-day-blue/20' : 'bg-gradient-to-b from-night-blue to-night-purple/20'}`}>
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className={`font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDayMode ? 'text-night-blue' : 'title-gradient-night'}`}>
            PROGRAMME
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDayMode ? 'text-day-gray' : 'text-white/80'}`}>Découvrez le planning détaillé du festival. Les dates mentionnées (13-15 Mars) concernent les jours principaux de compétition.</p>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-center mb-10 overflow-x-auto">
            <div className={`inline-flex p-1 rounded-lg ${isDayMode ? 'bg-day-blue/20' : 'bg-night-purple/20'}`}>
              {days.map(day => <button key={day} onClick={() => setActiveDay(day)} className={`px-4 py-2 font-medium rounded-md transition-colors duration-300 ${activeDay === day ? isDayMode ? 'bg-white text-night-blue shadow-md' : 'bg-night-purple text-white shadow-md' : isDayMode ? 'text-day-gray hover:text-night-blue' : 'text-white/70 hover:text-white'}`}>
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </button>)}
            </div>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className={`inline-flex items-center p-1 rounded-lg ${isDayMode ? 'bg-day-blue/20' : 'bg-night-purple/20'}`}>
              <button onClick={() => setActiveSport(true)} className={`px-4 py-2 flex items-center font-medium rounded-md transition-colors duration-300 ${activeSport ? isDayMode ? 'bg-white text-night-blue shadow-md' : 'bg-night-purple text-white shadow-md' : isDayMode ? 'text-day-gray hover:text-night-blue' : 'text-white/70 hover:text-white'}`}>
                <Snowflake size={16} className="mr-2" />
                Activités Journée
              </button>
              <button onClick={() => setActiveSport(false)} className={`px-4 py-2 flex items-center font-medium rounded-md transition-colors duration-300 ${!activeSport ? isDayMode ? 'bg-white text-night-blue shadow-md' : 'bg-night-purple text-white shadow-md' : isDayMode ? 'text-day-gray hover:text-night-blue' : 'text-white/70 hover:text-white'}`}>
                <Disc3 size={16} className="mr-2" />
                Soirées & Festivités
              </button>
            </div>
          </div>
          
          <div>
            {activeSport ?
          // Activités Journée
          <div>
                <div className={`rounded-xl p-6 md:p-8 mb-6 ${isDayMode ? 'bg-white shadow-md' : 'bg-night-blue/50 shadow-md'}`}>
                  <h3 className={`font-orbitron text-xl font-bold mb-4 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
                    Programme Journée - {activeDay.charAt(0).toUpperCase() + activeDay.slice(1)}
                  </h3>
                  
                  <div className="space-y-6">
                    {activeDay === 'jeudi' && <>
                        <TimelineItem time="16h00 - 22h00" title="Accueil et Installation" description="Arrivée des premiers bus, check-in, remise des forfaits, installation dans les hébergements partenaires." isDayMode={isDayMode} />
                        <TimelineItem time="Après-midi / Soirée" title="Animation & Convivialité" description="Petite animation musicale sur la place centrale et vin chaud offert." isDayMode={isDayMode} />
                      </>}
                    {activeDay === 'vendredi' && <>
                        <TimelineItem time="8h00 - 11h00" title="Qualifications Ski Compétition (PISTE)" description="Sessions sur les modules du snowpark, juges sur place et DJ set pour ambiancer les riders." isDayMode={isDayMode} />
                        <TimelineItem time="11h30 - 13h30" title="Pause Déjeuner & Animations Village" description="Stands, foodtrucks, DJ soft." isDayMode={isDayMode} />
                        <TimelineItem time="14h00 - 15h45" title="Snowpark" description="Sessions libres et animations." isDayMode={isDayMode} />
                         <TimelineItem time="16h00 - 17h30" title="Premiers Tours Courses de Luges" description="20 départs de 50 personnes. Piste forêt, départ en haut du télésiège forêt. Location de luge obligatoire (25 luges réutilisées par départ), possibilité d'achat de luges floquées. Casque obligatoire et protections pour la piste." isDayMode={isDayMode} />
                      </>}
                    {activeDay === 'samedi' && <>
                        <TimelineItem time="10h00 - 12h00" title="Ski Freestyle" description="Compétitions et démonstrations." isDayMode={isDayMode} />
                        <TimelineItem time="12h00 - 13h00" title="Pause Déjeuner & Mini-Concert" description="Sur la terrasse principale." isDayMode={isDayMode} />
                        <TimelineItem time="13h00 - 15h00" title="Slalom" description="Présence des meilleurs riders, animation micro, interviews entre les manches." isDayMode={isDayMode} />
                        <TimelineItem time="15h30 - 16h30" title="GRANDE FINALE DES COURSES DE LUGE 🛷🔥" description="Qualification des 3 premiers de chaque départ du vendredi pour la finale. Parcours agrandi et chronométré, finale en duel sur écran géant, ambiance survoltée ! Trophée remis sur le podium." isDayMode={isDayMode} />
                      </>}
                    {activeDay === 'dimanche' && <>
                        <TimelineItem time="10h00 - 12h00" title="Finales Techniques (Ski & Snowboard Cross)" description="Les meilleures épreuves pour déterminer les champions." isDayMode={isDayMode} />
                        <TimelineItem time="12h00 - 13h00" title="Brunch Montagnard Géant & Jeux Concours" description="Sur scène, avec de nombreux lots à gagner." isDayMode={isDayMode} />
                        <TimelineItem time="13h00 - 15h00" title="Session Freestyle Libre & Best Trick" description="Ambiance fun, riders invités à lâcher leurs meilleures figures." isDayMode={isDayMode} />
                        <TimelineItem time="15h00 - 17h00" title="Cérémonie de Clôture & Remise des Prix" description="Podiums, photos, lots pour les gagnants (et meilleurs déguisements !), discours final, remerciements." isDayMode={isDayMode} />
                      </>}
                  </div>
                </div>
                
                {/* Cash Prize section */}
                {activeDay !== 'jeudi' && <div className={`rounded-xl p-6 md:p-8 ${isDayMode ? 'bg-day-turquoise/10' : 'bg-night-purple/10'}`}>
                    <h4 className={`font-orbitron text-lg font-bold mb-2 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
                      Cash Prize
                    </h4>
                    <p className={`mb-3 ${isDayMode ? 'text-day-gray' : 'text-white/80'}`}>
                      Budget total: 45 000€
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <PrizeItem place="1er" amount="8 000€" isDayMode={isDayMode} />
                      <PrizeItem place="2ème" amount="4 000€" isDayMode={isDayMode} />
                      <PrizeItem place="3ème" amount="2 000€" isDayMode={isDayMode} />
                      <PrizeItem place="4ème" amount="1 000€" isDayMode={isDayMode} />
                    </div>
                    <p className={`mt-3 text-sm ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}>
                      5ème - 10ème : 500€ chacun
                    </p>
                  </div>}

              </div> :
          // Soirées & Festivités
          <div>
                <div className={`rounded-xl p-6 md:p-8 mb-6 ${isDayMode ? 'bg-white shadow-md' : 'bg-night-blue/50 shadow-md'}`}>
                  <h3 className={`font-orbitron text-xl font-bold mb-4 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
                    Soirées & Festivités - {activeDay.charAt(0).toUpperCase() + activeDay.slice(1)}
                  </h3>
                  
                  <div className="space-y-6">
                    {activeDay === 'jeudi' && <p className={isDayMode ? 'text-day-gray' : 'text-white/80'}>
                         Les festivités nocturnes débutent dès vendredi ! Profitez de l'accueil et de l'animation en place centrale.
                       </p>}
                    {activeDay === 'vendredi' && <TimelineItem time="18h00 - 2h00" title="Soirée Festival – Opening Night" description="Line-up DJ & groupes live – 2 scènes (intérieure & extérieure). Ambiance ski party, bar à shots givrés, écrans géants rediffusant les meilleures images de la journée." isDayMode={isDayMode} />}
                    {activeDay === 'samedi' && <>
                        <TimelineItem time="17h00 - 18h00" title="Apéro Sunset avec DJ Set au Sommet" description="Accès par télécabine, vue imprenable." isDayMode={isDayMode} />
                        <TimelineItem time="18h00 - 2h00" title="Soirée Festival – Nuit du Feu" description="Line-up principal, guests surprise, show laser et GROS FEU D’ARTIFICE à 22h30. Bar extérieur en igloo, dancefloor sur neige." isDayMode={isDayMode} />
                      </>}
                     {activeDay === 'dimanche' && <TimelineItem time="17h00 - 20h00" title="Départ des Festivaliers" description="Derniers instants sur la station, fin du festival." isDayMode={isDayMode} />}
                  </div>
                </div>
                
                {/* Scènes section */}
                {activeDay !== 'jeudi' && <div className={`rounded-xl p-6 md:p-8 ${isDayMode ? 'bg-day-turquoise/10' : 'bg-night-purple/10'}`}>
                    <h4 className={`font-orbitron text-lg font-bold mb-3 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
                      Scènes
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <SceneItem name="Grande scène" location="Front de neige" capacity="5000 personnes" isDayMode={isDayMode} />
                      <SceneItem name="Scène découverte" location="Chapiteau" capacity="1500 personnes" isDayMode={isDayMode} />
                      <SceneItem name="After party" location="Salle polyvalente" capacity="800 personnes" isDayMode={isDayMode} />
                    </div>
                  </div>}
              </div>}
          </div>
        </div>
      </div>
    </section>;
};
interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  isDayMode: boolean;
}
const TimelineItem: React.FC<TimelineItemProps> = ({
  time,
  title,
  description,
  isDayMode
}) => {
  return <div className="flex flex-col md:flex-row md:items-center">
      <div className="md:w-1/4 mb-2 md:mb-0">
        <div className={`inline-block font-orbitron font-semibold px-3 py-1 rounded-full text-sm ${isDayMode ? 'bg-day-turquoise/20 text-night-blue' : 'bg-night-pink/20 text-white'}`}>
          {time}
        </div>
      </div>
      <div className="md:w-3/4">
        <h4 className={`font-semibold text-lg mb-1 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
          {title}
        </h4>
        <p className={isDayMode ? 'text-day-gray' : 'text-white/70'}>
          {description}
        </p>
      </div>
    </div>;
};
interface PrizeItemProps {
  place: string;
  amount: string;
  isDayMode: boolean;
}
const PrizeItem: React.FC<PrizeItemProps> = ({
  place,
  amount,
  isDayMode
}) => {
  return <div className={`p-3 rounded-lg text-center ${isDayMode ? 'bg-white shadow-sm' : 'bg-night-blue/50 shadow-sm'}`}>
      <div className={`font-orbitron font-bold ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
        {place}
      </div>
      <div className={`text-sm ${isDayMode ? 'text-day-turquoise' : 'text-night-pink'}`}>
        {amount}
      </div>
    </div>;
};
interface SceneItemProps {
  name: string;
  location: string;
  capacity: string;
  isDayMode: boolean;
}
const SceneItem: React.FC<SceneItemProps> = ({
  name,
  location,
  capacity,
  isDayMode
}) => {
  return <div className={`p-4 rounded-lg ${isDayMode ? 'bg-white shadow-sm' : 'bg-night-blue/50 shadow-sm'}`}>
      <h5 className={`font-orbitron font-semibold mb-1 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
        {name}
      </h5>
      <p className={`text-sm mb-1 ${isDayMode ? 'text-day-gray' : 'text-white/80'}`}>
        {location}
      </p>
      <p className={`text-xs ${isDayMode ? 'text-day-turquoise' : 'text-night-pink'}`}>
        {capacity}
      </p>
    </div>;
};
export default ProgramSection;