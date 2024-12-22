import React from 'react';
import  Hero  from './pages/HeroPage';
import Headers  from './layout/Header';
import Footer from './layout/Footer';
import CommunityPage from './pages/CommunityPage';
import EventsPage from './pages/EventsPage';
import ClubsPage from './pages/ClubsPage';
import ProjectsPage from './pages/ProjectsPage';

export default function Home() {
  return (
    
    <main>
        <Headers />
        <Hero />  
        <CommunityPage />
        <EventsPage />
        <ClubsPage />
        <ProjectsPage />
        <Footer />    
    </main>
  );
}
