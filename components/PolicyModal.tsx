import React, { useEffect, useRef } from 'react';

interface PolicyModalProps {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ title, children, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    modalRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/80 backdrop-blur-sm p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl max-h-[90vh] bg-surface rounded-xl border border-border shadow-2xl flex flex-col"
      >
        <header className="relative text-center p-6 border-b border-border">
          <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-border hover:text-white transition-colors"
            aria-label={`Close ${title}`}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-gray-300 space-y-6">
          {children}
        </div>

        <footer className="p-4 sm:p-6 border-t border-border bg-surface/50 rounded-b-xl flex justify-end">
          <button
            onClick={onClose}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default PolicyModal;
