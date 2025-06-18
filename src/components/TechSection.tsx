import React from 'react';
import { Wifi, WifiHigh, ArrowRight } from 'lucide-react';
interface TechSectionProps {
  isDayMode: boolean;
}
const TechSection: React.FC<TechSectionProps> = ({
  isDayMode
}) => {
  return <section id="technology" className={`py-20 px-4 md:px-6 ${isDayMode ? 'bg-day-blue/20' : 'bg-night-purple/20'}`}>
      <div className="section-container">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center rounded-full px-4 py-1 mb-4 ${isDayMode ? 'bg-day-turquoise/20' : 'bg-night-pink/20'}`}>
            <WifiHigh className={isDayMode ? 'text-day-turquoise' : 'text-night-pink'} size={16} />
            <span className={`ml-2 text-sm font-medium ${isDayMode ? 'text-day-gray' : 'text-white/80'}`}>
              INNOVATION
            </span>
          </div>
          <h2 className={`font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${isDayMode ? 'text-night-blue' : 'title-gradient-night'}`}>
            SNOW PULSE CONNECT
          </h2>
          <p className={`max-w-2xl mx-auto text-lg ${isDayMode ? 'text-day-gray' : 'text-white/80'}`}>
            Une expérience connectée qui révolutionne votre festival
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2">
            <div className={`h-full rounded-xl p-6 md:p-8 ${isDayMode ? 'bg-white shadow-md' : 'bg-night-blue/50 shadow-md'}`}>
              <h3 className={`font-orbitron text-xl font-bold mb-6 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
                Bracelet RFID & Application Mobile
              </h3>
              
              <div className="space-y-6">
                <FeatureItem title="Accès & Paiements" description="Accès contrôlé aux zones et système de paiement cashless rechargeable" isDayMode={isDayMode} />
                <FeatureItem title="Localisation" description="Retrouvez vos amis grâce aux 25 bornes de géolocalisation sur le site" isDayMode={isDayMode} />
                <FeatureItem title="Programme personnalisé" description="Notifications pour les compétitions et artistes selon vos préférences" isDayMode={isDayMode} />
                <FeatureItem title="Interaction & Partage" description="Votes, jeux sur écrans géants, partage automatique de photos" isDayMode={isDayMode} />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative overflow-hidden">
            <div className={`h-full rounded-xl p-6 md:p-8 ${isDayMode ? 'bg-gradient-to-br from-day-turquoise/20 via-day-blue/20 to-day-turquoise/20 border border-day-turquoise/20' : 'bg-gradient-to-br from-night-pink/20 via-night-purple/20 to-night-pink/20 border border-night-pink/20'}`}>
              <div className={`absolute -top-6 -right-6 w-24 h-24 rounded-full ${isDayMode ? 'bg-day-turquoise/10' : 'bg-night-pink/10'}`} />
              <div className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full ${isDayMode ? 'bg-day-blue/10' : 'bg-night-purple/10'}`} />
              
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <h3 className={`font-orbitron text-xl font-bold ${isDayMode ? 'text-night-blue' : 'text-white'}`}>Fonctionnalités du bracelet</h3>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${isDayMode ? 'bg-day-turquoise text-white' : 'bg-night-pink text-white'}`}>
                    Inclus avec chaque billet
                  </div>
                </div>
                
                <div className="space-y-4">
                  {["Suivi des performances des athlètes en temps réel", "Programme personnalisé et alertes", "Géolocalisation des amis", "Paiement cashless sécurisé", "Accès zones VIP et exclusives", "Partage automatique de photos", "Votes pour concours et feedback"].map((feature, index) => <div key={index} className={`flex items-center p-2 rounded-lg ${isDayMode ? 'bg-white/40' : 'bg-night-blue/40'}`}>
                      <div className={`rounded-full p-1 mr-3 ${isDayMode ? 'bg-day-turquoise/20' : 'bg-night-pink/20'}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDayMode ? 'text-day-turquoise' : 'text-night-pink'}>
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className={isDayMode ? 'text-day-gray' : 'text-white/80'}>
                        {feature}
                      </span>
                    </div>)}
                </div>
                
                <div className="mt-6">
                  <a href="#tickets" className={`inline-flex items-center font-medium ${isDayMode ? 'text-night-blue' : 'text-white'} hover:underline`}>
                    <span>Découvrir les offres</span>
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`rounded-xl p-6 md:p-8 text-center ${isDayMode ? 'bg-gradient-to-r from-day-blue to-day-turquoise text-white' : 'bg-gradient-to-r from-night-purple to-night-pink text-white'}`}>
          <h3 className="font-orbitron text-2xl font-bold mb-4">
            Prêt pour une expérience révolutionnaire ?
          </h3>
          <p className="max-w-2xl mx-auto mb-6 opacity-90">
            Snow Pulse Connect transforme votre festival avec une technologie innovante pour une immersion totale.
          </p>
          <a href="#tickets" className="inline-block bg-white rounded-md px-6 py-3 font-bold transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]" style={{
          color: isDayMode ? '#60F0D6' : '#FF2D95'
        }}>
            Réserver mon accès
          </a>
        </div>
      </div>
    </section>;
};
interface FeatureItemProps {
  title: string;
  description: string;
  isDayMode: boolean;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  isDayMode
}) => {
  return <div className="flex">
      <div className="mr-4">
        <div className={`rounded-full p-2 ${isDayMode ? 'bg-day-turquoise/20' : 'bg-night-pink/20'}`}>
          <Wifi className={isDayMode ? 'text-day-turquoise' : 'text-night-pink'} size={20} />
        </div>
      </div>
      <div>
        <h4 className={`font-semibold mb-1 ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
          {title}
        </h4>
        <p className={`text-sm ${isDayMode ? 'text-day-gray' : 'text-white/70'}`}>
          {description}
        </p>
      </div>
    </div>;
};
export default TechSection;