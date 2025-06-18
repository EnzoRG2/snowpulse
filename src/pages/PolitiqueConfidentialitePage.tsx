
import React, { useState } from 'react';
import { ArrowLeft, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DayNightToggle from '@/components/DayNightToggle';

const PolitiqueConfidentialitePage = () => {
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
              POLITIQUE DE CONFIDENTIALITÉ
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
                  1. Responsable du traitement
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Snow Pulse Festival SARL, société à responsabilité limitée au capital de 50 000 €, 
                  immatriculée au RCS de Chambéry sous le numéro B 123 456 789, 
                  dont le siège social est situé Office du tourisme, 73620 Les Saisies, France.
                </p>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <strong>Contact DPO :</strong> dpo@snowpulse.com
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  2. Données collectées
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Nous collectons les données suivantes :
                </p>
                <ul className={`list-disc list-inside mb-4 space-y-2 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <li><strong>Données d'identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
                  <li><strong>Données de facturation :</strong> adresse de facturation, informations de paiement</li>
                  <li><strong>Données de navigation :</strong> adresse IP, cookies, pages visitées, temps de visite</li>
                  <li><strong>Données du festival :</strong> préférences musicales, participation aux activités via bracelet RFID</li>
                  <li><strong>Données de géolocalisation :</strong> position sur le site du festival (avec consentement)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  3. Finalités du traitement
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Vos données sont traitées pour les finalités suivantes :
                </p>
                <ul className={`list-disc list-inside mb-4 space-y-2 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <li>Gestion des commandes et facturation</li>
                  <li>Fourniture des services du festival (accès, restauration, activités)</li>
                  <li>Amélioration de l'expérience utilisateur via le bracelet connecté</li>
                  <li>Communication et newsletter (avec consentement)</li>
                  <li>Sécurité du site et lutte contre la fraude</li>
                  <li>Respect des obligations légales</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  4. Base légale
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Le traitement de vos données repose sur :
                </p>
                <ul className={`list-disc list-inside mb-4 space-y-2 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <li><strong>Exécution du contrat :</strong> pour la vente de billets et la fourniture des services</li>
                  <li><strong>Consentement :</strong> pour la newsletter, géolocalisation et cookies non essentiels</li>
                  <li><strong>Intérêt légitime :</strong> pour la sécurité et l'amélioration de nos services</li>
                  <li><strong>Obligation légale :</strong> pour la facturation et les obligations comptables</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  5. Destinataires des données
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Vos données peuvent être transmises à :
                </p>
                <ul className={`list-disc list-inside mb-4 space-y-2 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <li>Nos équipes internes habilitées</li>
                  <li>Prestataires de paiement (Stripe, PayPal)</li>
                  <li>Prestataires techniques (hébergement, maintenance)</li>
                  <li>Partenaires du festival (avec consentement explicite)</li>
                  <li>Autorités compétentes en cas d'obligation légale</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  6. Durée de conservation
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Nous conservons vos données pendant les durées suivantes :
                </p>
                <ul className={`list-disc list-inside mb-4 space-y-2 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
                  <li><strong>Données client :</strong> 3 ans après la dernière commande</li>
                  <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                  <li><strong>Newsletter :</strong> jusqu'au désabonnement</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  7. Vos droits
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <ul className={`list-disc list-inside mb-4 space-y-2 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                  <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                  <li><strong>Droit à l'effacement :</strong> supprimer vos données dans certains cas</li>
                  <li><strong>Droit à la limitation :</strong> limiter le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement pour motif légitime</li>
                </ul>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Pour exercer ces droits, contactez-nous à : <strong>dpo@snowpulse.com</strong>
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  8. Cookies
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Notre site utilise des cookies pour améliorer votre expérience. Vous pouvez gérer vos préférences 
                  dans les paramètres de votre navigateur. Les cookies essentiels au fonctionnement du site ne peuvent pas être désactivés.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  9. Sécurité
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données 
                  contre la perte, l'utilisation abusive, l'accès non autorisé, la divulgation, l'altération ou la destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  10. Réclamation
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Si vous estimez que le traitement de vos données ne respecte pas la réglementation, 
                  vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PolitiqueConfidentialitePage;
