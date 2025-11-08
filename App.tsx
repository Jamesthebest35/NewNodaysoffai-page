import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Challenges from './components/Challenges';
import Demos from './components/Demos';
import Enterprise from './components/Enterprise';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import DemoShowcase from './components/DemoShowcase';
import { DemoData } from './data/demos';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedDemo, setSelectedDemo] = useState<DemoData | null>(null);

  const handleOpenContactModal = () => setIsContactModalOpen(true);
  const handleCloseContactModal = () => setIsContactModalOpen(false);
  const handleOpenDemo = (demo: DemoData) => setSelectedDemo(demo);
  const handleCloseDemo = () => setSelectedDemo(null);

  return (
    <div className="bg-background text-white antialiased">
      <Header onContactClick={handleOpenContactModal} />
      <main>
        <Hero onContactClick={handleOpenContactModal} />
        <Stats />
        <Challenges />
        <Demos onDemoClick={handleOpenDemo} />
        <Enterprise />
        <CTA onContactClick={handleOpenContactModal} />
      </main>
      <Footer />

      {isContactModalOpen && <ContactModal onClose={handleCloseContactModal} />}
      {selectedDemo && <DemoShowcase demo={selectedDemo} onClose={handleCloseDemo} />}
    </div>
  );
}

export default App;
