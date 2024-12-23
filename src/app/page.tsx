import React from 'react';
import  Hero  from './pages/HeroPage';
import Headers  from './layout/Header';
import Footer from './layout/Footer';
import CommunityPage from './pages/CommunityPage';
import EventsPage from './pages/Events-ClubsPage';
import ProjectsPage from './pages/ProjectsPage';

export default function Home() {
  return (
    
    <main>
        <Headers />
        <Hero />  
        <CommunityPage />
        <EventsPage />
        <ProjectsPage />
        <Footer />    
    </main>
  );
}
