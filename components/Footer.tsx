import React from 'react';
import { Logo } from './common/Logo';

const footerLinks = {
  'Quick Links': [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Demos' },
    { href: '#', label: 'Solutions' },
  ],
  Legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Cookies Policy' },
    { href: '#', label: 'Cookie Settings' },
  ],
  Services: [
    { href: '#', label: 'Construction AI' },
    { href: '#', label: 'Real Estate AI' },
    { href: '#', label: 'Custom Solutions' },
    { href: '#', label: 'Consulting' },
  ],
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-6 text-primary">
                <Logo />
              </div>
              <h2 className="text-white text-lg font-bold">No Days Off AI</h2>
            </div>
            <p className="text-sm text-gray-400">
              24/7 AI agents for the modern construction and real estate industries.
            </p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a className="text-sm text-gray-400 hover:text-primary" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-gray-400">
          <p>© 2024 No Days Off AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;