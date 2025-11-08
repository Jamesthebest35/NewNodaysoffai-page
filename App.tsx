import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Challenges from './components/Challenges';
import Demos from './components/Demos';
import Enterprise from './components/Enterprise';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Stats />
          <Challenges />
          <Demos />
          <Enterprise />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;