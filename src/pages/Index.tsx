
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ConceptSection from '../components/ConceptSection';
import ProgramSection from '../components/ProgramSection';
import TechSection from '../components/TechSection';
import TicketSection from '../components/TicketSection';
import Footer from '../components/Footer';
import { supabase } from '@/integrations/supabase/client';
import type { Session, User } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { LogOut, User as UserIcon } from 'lucide-react';

const Index = () => {
  const [isDayMode, setIsDayMode] = useState<boolean>(true);
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      setSession(initialSession);
      setUser(initialSession?.user ?? null);
      console.log("Initial session on Index:", initialSession);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, currentSession) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      console.log("Auth state changed on Index:", event, currentSession);
      if (event === "SIGNED_OUT") {
        navigate('/'); // Ensure redirection to home on logout
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
      toast({ title: 'Erreur de déconnexion', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Déconnexion réussie', description: 'À bientôt !' });
      // State update and navigation handled by onAuthStateChange
    }
  };

  return (
    <div className={`min-h-screen overflow-x-hidden ${isDayMode ? 'bg-slate-50' : 'bg-slate-900'}`}>
      <Navbar isDayMode={isDayMode} toggleDayNight={toggleDayNight} />
      
      <div className="fixed top-4 right-28 z-50 flex items-center space-x-3">
        {user ? (
          <>
            <span className={`text-sm ${isDayMode ? 'text-slate-700' : 'text-slate-300'} hidden md:inline`}>
              <UserIcon className="inline h-4 w-4 mr-1" /> {user.email}
            </span>
            <Button onClick={handleLogout} variant="outline" size="sm" className={`${isDayMode ? 'border-slate-300 text-slate-700 hover:bg-slate-100' : 'border-slate-700 text-slate-300 hover:bg-slate-800'}`}>
              <LogOut className="mr-0 md:mr-2 h-4 w-4" /> <span className="hidden md:inline">Déconnexion</span>
            </Button>
          </>
        ) : (
          <Button asChild variant="outline" size="sm" className={`${isDayMode ? 'border-slate-300 text-slate-700 hover:bg-slate-100' : 'border-slate-700 text-slate-300 hover:bg-slate-800'}`}>
            <Link to="/auth">
              <UserIcon className="mr-0 md:mr-2 h-4 w-4" /> <span className="hidden md:inline">Connexion</span>
            </Link>
          </Button>
        )}
      </div>

      <HeroSection isDayMode={isDayMode} />
      <ConceptSection isDayMode={isDayMode} />
      <ProgramSection isDayMode={isDayMode} />
      <TechSection isDayMode={isDayMode} />
      <TicketSection isDayMode={isDayMode} />
      <Footer isDayMode={isDayMode} />
    </div>
  );
};

export default Index;
