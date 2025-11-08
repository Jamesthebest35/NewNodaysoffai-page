import React, { useEffect, useRef } from 'react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    
    // Focus the modal for accessibility
    modalRef.current?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here.
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/80 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-lg bg-surface rounded-xl border border-border shadow-2xl p-8 outline-none"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-border hover:text-white transition-colors"
          aria-label="Close contact modal"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <h2 className="text-2xl font-bold text-white">Contact Us</h2>
        <p className="mt-2 text-gray-400">
          We're excited to learn about your business. Please fill out the form below and we'll be in touch to schedule your consultation.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full bg-border rounded-md border-border p-2 text-white placeholder-gray-500 focus:ring-primary focus:border-primary" placeholder="Jane Doe" />
            </div>
             <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full bg-border rounded-md border-border p-2 text-white placeholder-gray-500 focus:ring-primary focus:border-primary" placeholder="jane.doe@example.com" />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">How can we help?</label>
                <textarea name="message" id="message" rows={4} required className="mt-1 block w-full bg-border rounded-md border-border p-2 text-white placeholder-gray-500 focus:ring-primary focus:border-primary" placeholder="Tell us about your project..."></textarea>
            </div>
             <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-background bg-primary hover:bg-primary/90">
                    Submit Request
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
