
import React, { useState } from 'react';
import { ArrowLeft, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import DayNightToggle from '@/components/DayNightToggle';

const CGVPage = () => {
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
              CONDITIONS GÉNÉRALES DE VENTE
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
                  1. Objet et champ d'application
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les ventes de billets et services proposés dans le cadre du Snow Pulse Festival. Toute commande implique l'acceptation pleine et entière des présentes conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  2. Produits et services
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Snow Pulse Festival propose différents types de billets :
                </p>
                <ul className={`list-disc list-inside mb-4 space-y-2 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  <li><strong>Pass Jour :</strong> 89€ - Accès à une journée complète du festival</li>
                  <li><strong>Pass Weekend :</strong> 149€ - Accès aux trois jours du festival</li>
                  <li><strong>Pass VIP :</strong> 299€ - Accès privilégié avec services exclusifs</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  3. Commande et paiement
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Les commandes sont validées après réception du paiement intégral. Les moyens de paiement acceptés sont : carte bancaire, PayPal et virement bancaire. Les prix sont exprimés en euros TTC.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  4. Livraison des billets
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Les billets sont envoyés par email sous format électronique dans les 24h suivant la confirmation de paiement. Il est de la responsabilité de l'acheteur de vérifier ses emails et dossier spam.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  5. Droit de rétractation
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de fourniture de services liés aux loisirs dont la date d'exécution est fixée. Les billets ne sont donc ni échangeables ni remboursables, sauf en cas d'annulation du festival.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  6. Annulation du festival
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  En cas d'annulation du festival pour cause de force majeure, les billets seront remboursés intégralement. En cas d'annulation pour d'autres raisons, les modalités de remboursement seront communiquées dans les meilleurs délais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  7. Conditions d'accès
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  L'accès au festival est soumis à la présentation d'un billet valide et d'une pièce d'identité. Le festival est interdit aux mineurs non accompagnés. L'organisateur se réserve le droit de refuser l'accès en cas de non-respect du règlement intérieur.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  8. Responsabilité
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  La responsabilité de l'organisateur est limitée au montant du billet acheté. Les participants évoluent sous leur propre responsabilité et doivent être couverts par une assurance personnelle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  9. Données personnelles
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Les données personnelles collectées sont nécessaires au traitement de la commande et sont protégées conformément au RGPD. Elles ne sont pas transmises à des tiers sans consentement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className={`text-2xl font-orbitron font-bold mb-4 ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  10. Réclamations et litiges
                </h2>
                <p className={`mb-4 ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
                  Toute réclamation doit être adressée à contact@snowpulse.com. En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux français seront compétents.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CGVPage;
