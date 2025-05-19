
import React, { useEffect, useState } from 'react';
import AuthForm from '@/components/AuthForm';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import type { Session } from '@supabase/supabase-js';

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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4">
      <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          {mode === 'login' ? 'Connexion' : 'Inscription'}
        </h1>
        <p className="text-center text-slate-400 mb-8">
          {mode === 'login' ? 'Accédez à votre compte Snow Pulse.' : 'Créez un compte pour rejoindre Snow Pulse.'}
        </p>
        
        <AuthForm mode={mode} key={mode} />
        
        <div className="mt-6 text-center">
          <Button
            variant="link"
            onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
            className="text-slate-300 hover:text-white"
          >
            {mode === 'login' ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
