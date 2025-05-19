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
import { Link, useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [isDayMode, setIsDayMode] = useState<boolean>(true);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
      setSession(initialSession);
      console.log("Initial session on Index:", initialSession);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, currentSession) => {
      setSession(currentSession);
      console.log("Auth state changed on Index:", event, currentSession);
      if (event === "SIGNED_OUT") {
        navigate('/'); 
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
      <Navbar 
        isDayMode={isDayMode} 
        toggleDayNight={toggleDayNight} 
        session={session} 
        handleLogout={handleLogout} 
      />
      
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
