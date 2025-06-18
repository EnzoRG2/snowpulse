
import React, { useEffect, useState } from 'react';
import AuthForm from '@/components/AuthForm';
import { useNavigate } from 'react-router-dom';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);

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

  if (session) {
    return null; // Or a loading spinner, redirecting happens in useEffect
  }

  const getTitle = () => {
    switch (mode) {
      case 'login': return 'Connexion';
      case 'signup': return 'Inscription';
      default: return 'Connexion';
    }
  };

  const getDescription = () => {
    switch (mode) {
      case 'login': return 'Accédez à votre compte Snow Pulse.';
      case 'signup': return 'Créez un compte pour rejoindre Snow Pulse.';
      default: return 'Accédez à votre compte Snow Pulse.';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4">
      {/* Bouton de retour */}
      <Button
        onClick={() => navigate('/')}
        variant="ghost"
        className="absolute top-4 left-4 text-slate-300 hover:text-white hover:bg-slate-700/50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Retour à l'accueil
      </Button>

      <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          {getTitle()}
        </h1>
        <p className="text-center text-slate-400 mb-8">
          {getDescription()}
        </p>
        
        <AuthForm mode={mode} key={mode} />
        
        <div className="mt-6 text-center">
          <button
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-slate-300 hover:text-white underline"
          >
            {mode === 'login' ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
