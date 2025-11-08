import React, { useState, useEffect } from 'react';
import { Logo } from './common/Logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#demos', label: 'Demos' },
  { href: '#solutions', label: 'Solutions' },
];

const Header: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

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

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handleScroll(e);
    setIsMobileMenuOpen(false);
  };

  const handleMobileModalOpen = () => {
    onOpenModal();
    setIsMobileMenuOpen(false);
  };

  const handleMobileMenuBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border px-4 sm:px-6 lg:px-10 py-3 max-w-7xl mx-auto">
          <a href="#home" onClick={handleScroll} className="flex items-center gap-4 text-white">
            <div className="size-6 text-primary">
              <Logo />
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">No Days Off AI</h2>
          </a>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              {navLinks.map((link) => (
                <a key={link.label} className="text-gray-300 hover:text-primary text-sm font-medium leading-normal" href={link.href} onClick={handleScroll}>
                  {link.label}
                </a>
              ))}
            </nav>
            <button onClick={onOpenModal} className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Get in Contact</span>
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="p-2 rounded-md text-gray-300 hover:bg-surface" aria-label="Toggle menu">
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div onClick={handleMobileMenuBackdropClick} className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                className="text-gray-300 hover:text-primary text-2xl font-bold" 
                href={link.href}
                onClick={handleMobileLinkClick}
              >
                {link.label}
              </a>
            ))}
             <button
                onClick={handleMobileModalOpen}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 mt-4 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Get in Contact</span>
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
