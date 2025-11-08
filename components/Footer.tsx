import React from 'react';
import { Logo } from './common/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2">
            <div className="h-8 w-8 text-primary">
                <Logo />
            </div>
            <span className="font-bold text-white text-lg">No Days Off AI</span>
        </div>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-4" aria-label="Footer">
            <a href="#features" className="text-sm text-gray-400 hover:text-white">Features</a>
            <a href="#demos" className="text-sm text-gray-400 hover:text-white">Demos</a>
            <a href="#enterprise" className="text-sm text-gray-400 hover:text-white">Enterprise</a>
        </nav>
        <p className="mt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} No Days Off AI, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;