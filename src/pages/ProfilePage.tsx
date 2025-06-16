
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { User, Trash2, ArrowLeft, Snowflake, LogOut } from 'lucide-react';
import DayNightToggle from '@/components/DayNightToggle';
import type { Session } from '@supabase/supabase-js';

const ProfilePage = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isDayMode, setIsDayMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [confirmationEmail, setConfirmationEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      setSession(session);
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate('/auth');
      } else {
        setSession(session);
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const toggleDayNight = () => {
    setIsDayMode(!isDayMode);
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: 'Erreur de déconnexion',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Déconnexion réussie',
        description: 'À bientôt !',
      });
      navigate('/');
    }
  };

  const handleDeleteAccount = async () => {
    if (!session?.user) return;

    // Vérifier que l'email de confirmation correspond
    if (confirmationEmail !== session.user.email) {
      toast({
        title: 'Erreur de confirmation',
        description: 'L\'adresse email saisie ne correspond pas à celle de votre compte.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      console.log('Demande de suppression du compte pour l\'utilisateur:', session.user.id);
      
      // Appeler la fonction Edge pour supprimer le compte
      const { data, error } = await supabase.functions.invoke('delete-user', {
        body: { userId: session.user.id }
      });

      if (error) {
        console.error('Erreur lors de l\'appel de la fonction:', error);
        throw error;
      }

      console.log('Réponse de la fonction:', data);

      toast({
        title: 'Compte supprimé',
        description: 'Votre compte a été supprimé définitivement.',
      });

      // Déconnecter l'utilisateur et rediriger
      await supabase.auth.signOut();
      navigate('/auth');

    } catch (error: any) {
      console.error('Erreur lors de la suppression du compte:', error);
      toast({
        title: 'Erreur',
        description: 'Une erreur est survenue lors de la suppression du compte. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!session) {
    return null;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDayMode ? 'bg-day-gradient' : 'bg-night-gradient'
    }`}>
      {/* Header with SNOWPULSE branding */}
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
        <div className="max-w-2xl mx-auto">
          {/* Page title */}
          <div className="text-center mb-12">
            <h1 className={`font-orbitron text-4xl md:text-5xl font-bold mb-4 ${
              isDayMode ? 'title-gradient-day' : 'title-gradient-night'
            }`}>
              MON PROFIL
            </h1>
            <p className={`text-lg ${isDayMode ? 'text-night-blue/80' : 'text-white/80'}`}>
              Gérez votre compte et vos préférences
            </p>
          </div>

          {/* User info card */}
          <div className={`rounded-2xl p-8 mb-8 backdrop-blur-md transition-all duration-300 ${
            isDayMode 
              ? 'bg-white/80 border border-day-turquoise/20 shadow-lg' 
              : 'bg-night-blue/30 border border-night-pink/20 shadow-2xl'
          }`}>
            <div className="flex items-center space-x-6 mb-6">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                isDayMode 
                  ? 'bg-day-turquoise/20 border-2 border-day-turquoise/30' 
                  : 'bg-night-pink/20 border-2 border-night-pink/30'
              }`}>
                <User className={`h-10 w-10 ${isDayMode ? 'text-day-turquoise' : 'text-night-pink'}`} />
              </div>
              <div>
                <h2 className={`text-2xl font-orbitron font-bold ${
                  isDayMode ? 'text-night-blue' : 'text-white'
                }`}>
                  {session.user.email?.split('@')[0]}
                </h2>
                <p className={`text-lg ${isDayMode ? 'text-night-blue/70' : 'text-white/70'}`}>
                  {session.user.email}
                </p>
              </div>
            </div>
          </div>

          {/* Account actions */}
          <div className={`rounded-2xl p-8 backdrop-blur-md transition-all duration-300 ${
            isDayMode 
              ? 'bg-white/80 border border-day-turquoise/20 shadow-lg' 
              : 'bg-night-blue/30 border border-night-pink/20 shadow-2xl'
          }`}>
            <h3 className={`text-2xl font-orbitron font-bold mb-8 ${
              isDayMode ? 'text-night-blue' : 'text-white'
            }`}>
              Actions du compte
            </h3>

            <div className="space-y-6">
              {/* Logout section */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${isDayMode ? 'bg-day-turquoise/20' : 'bg-night-pink/20'}`}>
                    <LogOut className={`h-6 w-6 ${isDayMode ? 'text-day-turquoise' : 'text-night-pink'}`} />
                  </div>
                  <h4 className={`text-xl font-semibold ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
                    Se déconnecter
                  </h4>
                </div>
                <p className={`text-sm leading-relaxed ${isDayMode ? 'text-night-blue/70' : 'text-white/70'}`}>
                  Déconnectez-vous de votre compte.
                </p>
                <Button 
                  onClick={handleLogout}
                  variant="outline"
                  className={`font-orbitron font-semibold tracking-wider ${
                    isDayMode 
                      ? 'border-day-turquoise/30 text-night-blue hover:bg-day-turquoise/10' 
                      : 'border-night-pink/30 text-white hover:bg-night-pink/10'
                  }`}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Se déconnecter
                </Button>
              </div>

              {/* Divider */}
              <div className={`border-t ${isDayMode ? 'border-slate-200' : 'border-slate-700'}`}></div>

              {/* Delete account section */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-red-500/20">
                    <Trash2 className="h-6 w-6 text-red-500" />
                  </div>
                  <h4 className={`text-xl font-semibold ${isDayMode ? 'text-night-blue' : 'text-white'}`}>
                    Supprimer le compte
                  </h4>
                </div>
                <p className={`text-sm leading-relaxed ${isDayMode ? 'text-night-blue/70' : 'text-white/70'}`}>
                  Cette action supprimera définitivement votre compte et toutes les données associées. Cette action est irréversible.
                </p>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button 
                      variant="destructive" 
                      disabled={isLoading}
                      className="font-orbitron font-semibold tracking-wider bg-red-600 hover:bg-red-700"
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Supprimer définitivement
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className={`${
                    isDayMode 
                      ? 'bg-white border-day-turquoise/20' 
                      : 'bg-night-blue border-night-pink/20'
                  }`}>
                    <AlertDialogHeader>
                      <AlertDialogTitle className={`font-orbitron ${
                        isDayMode ? 'text-night-blue' : 'text-white'
                      }`}>
                        Confirmer la suppression du compte
                      </AlertDialogTitle>
                      <AlertDialogDescription className={`${
                        isDayMode ? 'text-night-blue/70' : 'text-white/70'
                      }`}>
                        Cette action supprimera définitivement votre compte et toutes les données associées. Cette action est irréversible.
                        <br /><br />
                        Pour confirmer, veuillez saisir votre adresse email : <strong>{session.user.email}</strong>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="py-4">
                      <Input
                        type="email"
                        placeholder="Confirmer votre email"
                        value={confirmationEmail}
                        onChange={(e) => setConfirmationEmail(e.target.value)}
                        className={`${
                          isDayMode 
                            ? 'border-day-turquoise/30 focus:border-day-turquoise' 
                            : 'border-night-pink/30 focus:border-night-pink bg-night-blue/30 text-white'
                        }`}
                      />
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel 
                        onClick={() => setConfirmationEmail('')}
                        className={`${
                          isDayMode 
                            ? 'border-day-turquoise/30 text-night-blue hover:bg-day-turquoise/10' 
                            : 'border-night-pink/30 text-white hover:bg-night-pink/10'
                        }`}
                      >
                        Annuler
                      </AlertDialogCancel>
                      <AlertDialogAction 
                        onClick={handleDeleteAccount}
                        disabled={isLoading || confirmationEmail !== session.user.email}
                        className="bg-red-600 hover:bg-red-700 font-orbitron font-semibold disabled:opacity-50"
                      >
                        {isLoading ? 'Suppression...' : 'Supprimer définitivement'}
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
