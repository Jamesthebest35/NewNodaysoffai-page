import React from 'react';
import { Logo } from './common/Logo';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-border bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2" aria-label="Home">
            <div className="flex-shrink-0 h-8 w-8 text-primary">
              <Logo />
            </div>
            <span className="font-bold text-white text-lg">No Days Off AI</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#demos" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Demos</a>
            <a href="#enterprise" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Enterprise</a>
          </nav>
          <div className="flex items-center">
            <button
              onClick={onContactClick}
              className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-background bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;