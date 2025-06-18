
import React, { useState } from 'react';
import { ArrowLeft, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DayNightToggle from '@/components/DayNightToggle';

const MentionsLegalesPage = () => {
  const [isDayMode, setIsDayMode] = useState<boolean>(true);
  const navigate = useNavigate();

  const toggleDayNight = () => {
    setIsDayMode(!isDayMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDayMode ? 'bg-day-gradient' : 'bg-night-gradient'
    }`}>
      {/* Header */}
      <header className="fixed w-full z-40 py-4 backdrop-blur-md bg-black/10">
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className={`${isDayMode ? 'hover:bg-white/20 text-night-blue' : 'hover:bg-black/20 text-white'}`}
              aria-label="Retourner à la page d'accueil"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center">
              <Snowflake className={`h-8 w-8 mr-2 ${isDayMode ? 'text-day-turquoise' : 'text-night-pink'}`} />
              <span className="font-orbitron text-xl md:text-2xl font-bold tracking-wider">
                <span className={isDayMode ? 'text-day-turquoise' : 'text-night-pink'}>SNOW</span>
                <span className={isDayMode ? 'text-night-blue' : 'text-white'}>PULSE</span>
              </span>
            </div>
          </div>
          
          <DayNightToggle isDayMode={isDayMode} toggleDayNight={toggleDayNight} />
        </div>
      </header>

      {/* Main content */}
      <main className="section-container pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Page title */}
          <div className="text-center mb-12">
            <h1 className={`font-orbitron text-4xl md:text-5xl font-bold mb-4 ${
              isDayMode ? 'title-gradient-day' : 'title-gradient-night'
            }`}>
              MENTIONS LÉGALES
            </h1>
            <p className={`text-lg ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
              Dernière mise à jour : 18 juin 2025
            </p>
          </div>

          {/* Content */}
          <div className={`rounded-2xl p-8 backdrop-blur-md transition-all duration-300 ${
            isDayMode 
              ? 'bg-white/80 border border-day-turquoise/20 shadow-lg' 
              : 'bg-night-blue/30 border border-night-pink/20 shadow-2xl'
          }`}>
            <div className={`prose prose-lg max-w-none ${
              isDayMode ? 'prose-slate' : 'prose-invert'
            }`}>
              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  1. Éditeur du site
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <strong>Dénomination sociale :</strong> Snow Pulse Festival SARL<br/>
                  <strong>Forme juridique :</strong> Société à Responsabilité Limitée<br/>
                  <strong>Capital social :</strong> 50 000 €<br/>
                  <strong>RCS :</strong> Chambéry B 123 456 789<br/>
                  <strong>SIRET :</strong> 123 456 789 00012<br/>
                  <strong>Code APE :</strong> 9001Z (Arts du spectacle vivant)<br/>
                  <strong>TVA intracommunautaire :</strong> FR12123456789
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  2. Coordonnées
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <strong>Adresse du siège social :</strong><br/>
                  Snow Pulse Festival SARL<br/>
                  Office du tourisme<br/>
                  73620 Les Saisies<br/>
                  France<br/><br/>
                  <strong>Téléphone :</strong> +33 (0)4 79 38 90 30<br/>
                  <strong>Email :</strong> contact@snowpulse.com<br/>
                  <strong>Site web :</strong> www.snowpulse.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  3. Directeur de la publication
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <strong>Nom :</strong> Alexandre Martin<br/>
                  <strong>Qualité :</strong> Gérant de Snow Pulse Festival SARL<br/>
                  <strong>Email :</strong> direction@snowpulse.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  4. Hébergement
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <strong>Hébergeur :</strong> OVH SAS<br/>
                  <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France<br/>
                  <strong>Téléphone :</strong> 1007 (service client OVH)<br/>
                  <strong>Site web :</strong> www.ovh.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  5. Propriété intellectuelle
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  L'ensemble du contenu de ce site (textes, images, vidéos, logos, musiques) est protégé par les lois relatives à la propriété intellectuelle. 
                  La marque "Snow Pulse" est déposée auprès de l'INPI sous le numéro 20 4 123 456.
                </p>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Toute reproduction, même partielle, de ce site ou de son contenu est strictement interdite sans autorisation préalable écrite de Snow Pulse Festival SARL.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  6. Limitation de responsabilité
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Snow Pulse Festival SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. 
                  Toutefois, elle ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                </p>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  En conséquence, Snow Pulse Festival SARL décline toute responsabilité pour toute imprécision, inexactitude ou omission 
                  portant sur des informations disponibles sur ce site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  7. Loi applicable
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MentionsLegalesPage;
