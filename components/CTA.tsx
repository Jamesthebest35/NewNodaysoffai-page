import React, { useState, useEffect, useRef } from 'react';

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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/80 backdrop-blur-sm" aria-modal="true" role="dialog">
      <div ref={modalRef} tabIndex={-1} className="relative w-full max-w-lg bg-surface p-8 rounded-xl border border-border shadow-2xl m-4">
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
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] pb-2">Request Submitted!</h2>
            <p className="text-gray-400 text-sm">Thank you for your interest. Our team will be in touch shortly to schedule your personalized demo.</p>
        </div>
        ) : (
          <>
            <h2 className="text-white text-2xl font-bold leading-tight tracking-[-0.015em] pb-2">Schedule a Demo</h2>
            <p className="text-gray-400 text-sm mb-6">Our team will contact you to schedule a demo tailored to your business needs.</p>
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
                <label htmlFor="company" className="block text-xs font-medium text-gray-400">Company</label>
                <input type="text" name="company" id="company" autoComplete="organization" className="mt-1 block w-full rounded-md border-border/50 bg-border text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm" placeholder="Your Company Inc." />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-background-dark bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-surface"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const CTA: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const sectionId = href.substring(1);
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <section id="get-started" className="py-16 sm:py-20 lg:py-24 animated-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            See how our AI agents can streamline your operations, reduce costs, and drive growth. Get started with a personalized demo today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
            >
              <span className="truncate">Schedule a Demo</span>
            </button>
            <a href="#demos" onClick={handleScroll} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-surface text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-border/50 transition-colors border border-border">
              <span className="truncate">View Demos</span>
            </a>
          </div>
        </div>
      </section>
      {isModalOpen && <ContactModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default CTA;