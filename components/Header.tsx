import React, { useState } from 'react';
import { Logo } from './common/Logo';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#demos', label: 'Demos' },
  { href: '#solutions', label: 'Solutions' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-sm">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-border px-4 sm:px-6 lg:px-10 py-3 max-w-7xl mx-auto">
          <a href="#" className="flex items-center gap-4 text-white">
            <div className="size-6 text-primary">
              <Logo />
            </div>
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">No Days Off AI</h2>
          </a>
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <nav className="flex items-center gap-9">
              {navLinks.map((link) => (
                <a key={link.label} className="text-gray-300 hover:text-primary text-sm font-medium leading-normal" href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="#get-started" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Get Started</span>
            </a>
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
        <div className="fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                className="text-gray-300 hover:text-primary text-2xl font-bold" 
                href={link.href}
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
             <a 
                href="#get-started" 
                onClick={handleLinkClick}
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 mt-4 bg-primary text-background-dark text-lg font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">Get Started</span>
            </a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;