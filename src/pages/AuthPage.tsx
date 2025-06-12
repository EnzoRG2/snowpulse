
import React, { useEffect, useState } from 'react';
import AuthForm from '@/components/AuthForm';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';
import type { Session } from '@supabase/supabase-js';
import { Eye, EyeClosed, Snowflake } from 'lucide-react';

const AuthPage: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'signup' | 'forgot-password' | 'reset-password'>('login');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [session, setSession] = useState<Session | null>(null);
  const [resetEmail, setResetEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if this is a password reset flow
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    const type = searchParams.get('type');

    if (type === 'recovery' && accessToken && refreshToken) {
      // Set the session with the tokens from the URL
      supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: refreshToken,
      }).then(({ data, error }) => {
        if (error) {
          console.error('Error setting session:', error);
          toast({
            title: 'Erreur',
            description: 'Lien de réinitialisation invalide ou expiré.',
            variant: 'destructive',
          });
        } else {
          setMode('reset-password');
          toast({
            title: 'Lien valide',
            description: 'Vous pouvez maintenant définir votre nouveau mot de passe.',
          });
        }
      });
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session && mode !== 'reset-password') {
        navigate('/');
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session && mode !== 'reset-password') {
        navigate('/');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, searchParams, mode]);

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
      // Utilisez l'URL de votre site déployé au lieu de localhost
      const siteUrl = window.location.hostname === 'localhost' 
        ? 'https://your-site.lovable.app' // Remplacez par votre URL Lovable
        : window.location.origin;

      const { error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
        redirectTo: `${siteUrl}/auth`,
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

  const handleNewPasswordSubmit = async () => {
    if (!newPassword || !confirmPassword) {
      toast({
        title: 'Erreur',
        description: 'Veuillez remplir tous les champs.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({
        title: 'Erreur',
        description: 'Les mots de passe ne correspondent pas.',
        variant: 'destructive',
      });
      return;
    }

    if (newPassword.length < 6) {
      toast({
        title: 'Erreur',
        description: 'Le mot de passe doit contenir au moins 6 caractères.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      toast({
        title: 'Succès',
        description: 'Votre mot de passe a été mis à jour avec succès.',
      });
      
      // Redirect to home page
      navigate('/');
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

  if (session && mode !== 'reset-password') {
    return null; // Or a loading spinner, redirecting happens in useEffect
  }

  const getTitle = () => {
    switch (mode) {
      case 'login': return 'Connexion';
      case 'signup': return 'Inscription';
      case 'forgot-password': return 'Mot de passe oublié';
      case 'reset-password': return 'Définir un nouveau mot de passe';
      default: return 'Connexion';
    }
  };

  const getDescription = () => {
    switch (mode) {
      case 'login': return 'Accédez à votre compte Snow Pulse.';
      case 'signup': return 'Créez un compte pour rejoindre Snow Pulse.';
      case 'forgot-password': return 'Entrez votre email pour recevoir un lien de réinitialisation.';
      case 'reset-password': return 'Entrez votre nouveau mot de passe pour sécuriser votre compte.';
      default: return 'Accédez à votre compte Snow Pulse.';
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4">
      {/* Logo et titre principal */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-4">
          <Snowflake className="h-12 w-12 mr-3 text-blue-400" />
          <span className="font-orbitron text-3xl font-bold tracking-wider">
            <span className="text-blue-400">SNOW</span>
            <span className="text-white">PULSE</span>
          </span>
        </div>
      </div>

      <div className="bg-slate-800/50 backdrop-blur-md p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2">
          {getTitle()}
        </h1>
        <p className="text-center text-slate-400 mb-8">
          {getDescription()}
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
        ) : mode === 'reset-password' ? (
          <div className="space-y-6">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
              <p className="text-blue-300 text-sm text-center">
                ✓ Lien de réinitialisation validé. Définissez votre nouveau mot de passe ci-dessous.
              </p>
            </div>
            
            <div>
              <label htmlFor="new-password" className="block text-sm font-medium text-slate-300 mb-2">
                Nouveau mot de passe
              </label>
              <div className="relative">
                <Input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  placeholder="Minimum 6 caractères"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  disabled={isLoading}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 pr-10"
                  style={!showNewPassword ? { 
                    fontFamily: 'monospace',
                    letterSpacing: '0.2em'
                  } : {}}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  disabled={isLoading}
                >
                  {showNewPassword ? (
                    <EyeClosed className="h-4 w-4 text-slate-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-slate-500" />
                  )}
                </Button>
              </div>
            </div>
            
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-slate-300 mb-2">
                Confirmer le mot de passe
              </label>
              <div className="relative">
                <Input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Répétez le mot de passe"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isLoading}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-slate-400 pr-10"
                  style={!showConfirmPassword ? { 
                    fontFamily: 'monospace',
                    letterSpacing: '0.2em'
                  } : {}}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  disabled={isLoading}
                >
                  {showConfirmPassword ? (
                    <EyeClosed className="h-4 w-4 text-slate-500" />
                  ) : (
                    <Eye className="h-4 w-4 text-slate-500" />
                  )}
                </Button>
              </div>
            </div>
            
            <Button
              onClick={handleNewPasswordSubmit}
              disabled={isLoading || !newPassword || !confirmPassword}
              className="w-full bg-green-600 hover:bg-green-700 font-semibold"
            >
              {isLoading ? 'Mise à jour...' : 'Valider le nouveau mot de passe'}
            </Button>
          </div>
        ) : (
          <AuthForm mode={mode} key={mode} />
        )}
        
        <div className="mt-6 text-center space-y-3">
          {mode !== 'forgot-password' && mode !== 'reset-password' && (
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
          
          {(mode === 'forgot-password' || mode === 'reset-password') && (
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
