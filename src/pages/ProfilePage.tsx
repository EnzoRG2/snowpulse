
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { User, Trash2, KeyRound, ArrowLeft, Mail } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';

const ProfilePage = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isDayMode, setIsDayMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/auth');
        return;
      }
      setSession(session);
      setResetEmail(session.user.email || '');
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

  const handlePasswordReset = async () => {
    if (!resetEmail) {
      toast({
        title: 'Erreur',
        description: 'Veuillez entrer une adresse email.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${window.location.origin}/auth`,
      });

      if (error) throw error;

      toast({
        title: 'Email envoyé',
        description: 'Un lien de réinitialisation a été envoyé à votre adresse email.',
      });
    } catch (error: any) {
      toast({
        title: 'Erreur',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async () => {
    if (!session?.user) return;

    setIsLoading(true);
    try {
      // Note: Supabase doesn't have a direct method to delete user account from client-side
      // This would typically require a server function or admin action
      toast({
        title: 'Fonctionnalité non disponible',
        description: 'La suppression de compte nécessite une intervention manuelle. Contactez le support.',
        variant: 'destructive',
      });
    } catch (error: any) {
      toast({
        title: 'Erreur',
        description: error.message,
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
    <div className={`min-h-screen ${isDayMode ? 'bg-slate-50' : 'bg-slate-900'} transition-colors duration-300`}>
      {/* Header with back button */}
      <div className={`${isDayMode ? 'bg-white' : 'bg-slate-800'} border-b ${isDayMode ? 'border-slate-200' : 'border-slate-700'}`}>
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate('/')}
              className={isDayMode ? 'hover:bg-slate-100' : 'hover:bg-slate-700'}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className={`text-2xl font-bold ${isDayMode ? 'text-slate-900' : 'text-white'}`}>
              Mon Profil
            </h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* User info card */}
        <div className={`${isDayMode ? 'bg-white' : 'bg-slate-800'} rounded-lg border ${isDayMode ? 'border-slate-200' : 'border-slate-700'} p-6 mb-6`}>
          <div className="flex items-center space-x-4 mb-4">
            <div className={`w-16 h-16 rounded-full ${isDayMode ? 'bg-slate-100' : 'bg-slate-700'} flex items-center justify-center`}>
              <User className={`h-8 w-8 ${isDayMode ? 'text-slate-600' : 'text-slate-300'}`} />
            </div>
            <div>
              <h2 className={`text-xl font-semibold ${isDayMode ? 'text-slate-900' : 'text-white'}`}>
                {session.user.email?.split('@')[0]}
              </h2>
              <p className={`${isDayMode ? 'text-slate-600' : 'text-slate-400'}`}>
                {session.user.email}
              </p>
            </div>
          </div>
        </div>

        {/* Account actions */}
        <div className={`${isDayMode ? 'bg-white' : 'bg-slate-800'} rounded-lg border ${isDayMode ? 'border-slate-200' : 'border-slate-700'} p-6 space-y-6`}>
          <h3 className={`text-lg font-semibold ${isDayMode ? 'text-slate-900' : 'text-white'} mb-4`}>
            Actions du compte
          </h3>

          {/* Password reset section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <KeyRound className={`h-5 w-5 ${isDayMode ? 'text-slate-600' : 'text-slate-400'}`} />
              <h4 className={`font-medium ${isDayMode ? 'text-slate-900' : 'text-white'}`}>
                Réinitialiser le mot de passe
              </h4>
            </div>
            <p className={`text-sm ${isDayMode ? 'text-slate-600' : 'text-slate-400'}`}>
              Recevez un lien de réinitialisation par email
            </p>
            <div className="flex space-x-3">
              <Input
                type="email"
                placeholder="Votre adresse email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={handlePasswordReset}
                disabled={isLoading}
                className="shrink-0"
              >
                <Mail className="h-4 w-4 mr-2" />
                Envoyer
              </Button>
            </div>
          </div>

          {/* Delete account section */}
          <div className="pt-6 border-t border-slate-200">
            <div className="flex items-center space-x-2 mb-2">
              <Trash2 className="h-5 w-5 text-red-500" />
              <h4 className={`font-medium ${isDayMode ? 'text-slate-900' : 'text-white'}`}>
                Supprimer le compte
              </h4>
            </div>
            <p className={`text-sm ${isDayMode ? 'text-slate-600' : 'text-slate-400'} mb-4`}>
              Cette action est irréversible. Toutes vos données seront définitivement supprimées.
            </p>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" disabled={isLoading}>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Supprimer le compte
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Êtes-vous absolument sûr ?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Cette action est irréversible. Votre compte et toutes vos données associées seront définitivement supprimés.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Annuler</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteAccount} className="bg-red-600 hover:bg-red-700">
                    Oui, supprimer mon compte
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
