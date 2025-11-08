import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Challenges from './components/Challenges';
import Demos from './components/Demos';
import Enterprise from './components/Enterprise';
import CTA from './components/CTA';
import Footer from './components/Footer';

const ContactModal = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    modalRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div onClick={handleBackdropClick} className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/80 backdrop-blur-sm p-4" aria-modal="true" role="dialog">
      <div ref={modalRef} tabIndex={-1} className="relative w-full max-w-lg bg-surface p-8 rounded-xl border border-border shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-border hover:text-white transition-colors"
          aria-label="Close form"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        {isSubmitted ? (
          <div className="text-center py-8 flex flex-col items-center">
            <span className="material-symbols-outlined text-5xl text-primary mb-4">check_circle</span>
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] pb-2">Message Sent!</h2>
            <p className="text-gray-400 text-sm">Thank you for reaching out. We've received your message and will be in touch shortly.</p>
        </div>
        ) : (
          <>
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] pb-2">Get in Contact</h2>
            <p className="text-gray-400 text-sm mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="full-name" className="block text-xs font-medium text-gray-400">Full Name</label>
                <input required type="text" name="full-name" id="full-name" autoComplete="name" className="mt-1 block w-full rounded-md border-border/50 bg-border text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-gray-400">Email</label>
                <input required id="email" name="email" type="email" autoComplete="email" className="mt-1 block w-full rounded-md border-border/50 bg-border text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="you@company.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs font-medium text-gray-400">Phone Number</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-1 block w-full rounded-md border-border/50 bg-border text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="(555) 123-4567" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-gray-400">Message</label>
                <textarea required id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-border/50 bg-border text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Your message..."></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-background-dark bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-surface"
                >
                  Send Request
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header onOpenModal={handleOpenModal} />
        <main className="flex-1">
          <Hero onOpenModal={handleOpenModal} />
          <Stats />
          <Challenges />
          <Demos />
          <Enterprise />
          <CTA onOpenModal={handleOpenModal} />
        </main>
        <Footer />
      </div>
       {isModalOpen && <ContactModal onClose={handleCloseModal} />}
    </div>
  );
};

export default App;