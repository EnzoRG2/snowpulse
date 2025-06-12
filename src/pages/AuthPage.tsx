
import React, { useEffect, useState } from 'react';
import AuthForm from '@/components/AuthForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import type { Session } from '@supabase/supabase-js';

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot-password'>('login');
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [resetEmail, setResetEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        navigate('/');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        navigate('/');
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
      setMode('login');
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

  if (session) {
    return null; // Or a loading spinner, redirecting happens in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4">
      <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          {mode === 'login' ? 'Connexion' : mode === 'signup' ? 'Inscription' : 'Mot de passe oublié'}
        </h1>
        <p className="text-center text-slate-400 mb-8">
          {mode === 'login' 
            ? 'Accédez à votre compte Snow Pulse.' 
            : mode === 'signup' 
            ? 'Créez un compte pour rejoindre Snow Pulse.'
            : 'Entrez votre email pour recevoir un lien de réinitialisation.'
          }
        </p>
        
        {mode === 'forgot-password' ? (
          <div className="space-y-6">
            <div>
              <label htmlFor="reset-email" className="block text-sm font-medium text-slate-300 mb-2">
                Adresse email
              </label>
              <Input
                id="reset-email"
                type="email"
                placeholder="votre@email.com"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                disabled={isLoading}
                className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
            <Button
              onClick={handlePasswordReset}
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? 'Envoi en cours...' : 'Envoyer le lien'}
            </Button>
          </div>
        ) : (
          <AuthForm mode={mode} key={mode} />
        )}
        
        <div className="mt-6 text-center space-y-3">
          {mode !== 'forgot-password' && (
            <Button
              variant="link"
              onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
              className="text-slate-300 hover:text-white"
            >
              {mode === 'login' ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
            </Button>
          )}
          
          {mode === 'login' && (
            <div>
              <Button
                variant="link"
                onClick={() => setMode('forgot-password')}
                className="text-slate-400 hover:text-slate-300 text-sm"
              >
                J'ai oublié mon mot de passe
              </Button>
            </div>
          )}
          
          {mode === 'forgot-password' && (
            <Button
              variant="link"
              onClick={() => setMode('login')}
              className="text-slate-300 hover:text-white"
            >
              Retour à la connexion
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
