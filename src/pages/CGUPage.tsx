
import React, { useState } from 'react';
import { ArrowLeft, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DayNightToggle from '@/components/DayNightToggle';

const CGUPage = () => {
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
      <div className="section-container pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Page title */}
          <div className="text-center mb-12">
            <h1 className={`font-orbitron text-4xl md:text-5xl font-bold mb-4 ${
              isDayMode ? 'title-gradient-day' : 'title-gradient-night'
            }`}>
              CONDITIONS GÉNÉRALES D'UTILISATION
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
                  1. Objet
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web Snow Pulse Festival et de tous les services associés. En accédant à notre site, vous acceptez pleinement et sans réserve les présentes conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  2. Mentions légales
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <strong>Éditeur :</strong> Snow Pulse Festival<br/>
                  <strong>Adresse :</strong> Office du tourisme, Les Saisies, 73620 Les Saisies, France<br/>
                  <strong>Email :</strong> contact@snowpulse.com<br/>
                  <strong>Téléphone :</strong> +33 (0)4 XX XX XX XX
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  3. Utilisation du site
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  L'utilisateur s'engage à utiliser le site de manière conforme à sa destination et aux présentes CGU. Il est notamment interdit de :
                </p>
                <ul className={`list-disc list-inside mb-4 space-y-2 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <li>Utiliser le site à des fins illégales ou non autorisées</li>
                  <li>Porter atteinte aux droits de propriété intellectuelle</li>
                  <li>Diffuser des contenus offensants, diffamatoires ou contraires aux bonnes mœurs</li>
                  <li>Tenter de porter atteinte à la sécurité du site</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  4. Données personnelles
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Les données personnelles collectées sont traitées conformément à notre Politique de Confidentialité et au Règlement Général sur la Protection des Données (RGPD). L'utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  5. Propriété intellectuelle
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Tous les éléments du site (textes, images, vidéos, logos, etc.) sont protégés par les droits de propriété intellectuelle. Toute reproduction, même partielle, est interdite sans autorisation préalable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  6. Responsabilité
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Snow Pulse Festival s'efforce de fournir des informations exactes et à jour. Cependant, nous ne pouvons garantir l'exactitude, la complétude ou la pertinence de toutes les informations diffusées sur le site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  7. Modification des CGU
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Snow Pulse Festival se réserve le droit de modifier les présentes CGU à tout moment. Les modifications prennent effet dès leur publication sur le site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  8. Droit applicable
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGUPage;
