import React, { useState, useEffect, useRef } from 'react';

interface CookieCategoryProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  disabled?: boolean;
}

const CookieCategory: React.FC<CookieCategoryProps> = ({ title, description, enabled, onToggle, disabled = false }) => {
  const handleToggle = () => {
    if (!disabled) {
      onToggle(!enabled);
    }
  };

  return (
    <div className="py-4 border-b border-border last:border-b-0">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h4 className="font-bold text-white">{title}</h4>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
        <label className={`relative inline-flex items-center ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}>
          <input
            type="checkbox"
            checked={enabled}
            onChange={handleToggle}
            className="sr-only peer"
            disabled={disabled}
          />
          <div className={`w-11 h-6 bg-border rounded-full peer peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/50 ${disabled ? 'opacity-50' : ''} peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary`}></div>
        </label>
      </div>
    </div>
  );
};

const CookieSettingsModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [performanceCookies, setPerformanceCookies] = useState(true);
  const [marketingCookies, setMarketingCookies] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
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

  const handleSave = () => {
    // In a real app, you'd save these preferences to localStorage or a cookie.
    console.log('Preferences saved:', { performanceCookies, marketingCookies });
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      onClose();
    }, 2000);
  };

  const handleAcceptAll = () => {
    setPerformanceCookies(true);
    setMarketingCookies(true);
    console.log('Accepted all cookies');
    setShowConfirmation(true);
    setTimeout(() => {
      setShowConfirmation(false);
      onClose();
    }, 2000);
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
          <h2 className="text-xl sm:text-2xl font-bold text-white">Cookie Settings</h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:bg-border hover:text-white transition-colors"
            aria-label="Close cookie settings"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <p className="text-sm text-gray-300 mb-4">
            We use cookies to enhance your experience. You can customize your preferences below. For more details, see our <a href="#" onClick={(e) => { e.preventDefault(); /* Could open cookie policy here */ }} className="text-primary hover:underline">Cookie Policy</a>.
          </p>
          <div className="space-y-2">
            <CookieCategory
              title="Strictly Necessary Cookies"
              description="These cookies are essential for the website to function and cannot be switched off in our systems."
              enabled={true}
              onToggle={() => {}}
              disabled={true}
            />
            <CookieCategory
              title="Performance & Analytics Cookies"
              description="These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."
              enabled={performanceCookies}
              onToggle={setPerformanceCookies}
            />
            <CookieCategory
              title="Marketing Cookies"
              description="These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads."
              enabled={marketingCookies}
              onToggle={setMarketingCookies}
            />
          </div>
        </div>

        <footer className="p-4 sm:p-6 border-t border-border bg-surface/50 rounded-b-xl flex flex-col sm:flex-row justify-between items-center gap-3">
          <button
            onClick={handleSave}
            className="w-full sm:w-auto flex justify-center py-2 px-5 border border-border rounded-lg text-sm font-bold text-white hover:bg-border transition-colors"
          >
            Save Preferences
          </button>
          <button
            onClick={handleAcceptAll}
            className="w-full sm:w-auto flex justify-center py-2 px-5 border border-transparent rounded-lg text-sm font-bold text-background-dark bg-primary hover:bg-primary/90 transition-colors"
          >
            Accept All
          </button>
        </footer>
      </div>

      {showConfirmation && (
        <div className="fixed bottom-5 left-1/2 -translate-x-1/2 bg-primary text-background-dark px-6 py-3 rounded-lg flex items-center gap-3 shadow-lg animate-fade-in-out">
          <span className="material-symbols-outlined">check_circle</span>
          <span className="text-sm font-semibold">Your preferences have been saved.</span>
        </div>
      )}
      <style>{`
        @keyframes fade-in-out {
          0%, 100% { opacity: 0; transform: translate(-50%, 10px); }
          10%, 90% { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default CookieSettingsModal;
