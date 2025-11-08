import React from 'react';
import { Logo } from './common/Logo';

const footerLinks = {
  'Quick Links': [
    { href: '#home', label: 'Home' },
    { href: '#demos', label: 'Demos' },
    { href: '#solutions', label: 'Solutions' },
  ],
  Legal: [
    { href: '#privacy-policy', label: 'Privacy Policy' },
    { href: '#cookies-policy', label: 'Cookies Policy' },
    { href: '#cookie-settings', label: 'Cookie Settings' },
  ],
  Services: [
    { href: '#solutions', label: 'Construction AI' },
    { href: '#solutions', label: 'Real Estate AI' },
    { href: '#enterprise', label: 'Custom Solutions' },
    { href: '#enterprise', label: 'Consulting' },
  ],
};

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenCookieModal: () => void;
  onOpenCookieSettingsModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenPrivacyModal, onOpenCookieModal, onOpenCookieSettingsModal }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');

    if (href === '#privacy-policy') {
      onOpenPrivacyModal();
      return;
    }

    if (href === '#cookies-policy') {
      onOpenCookieModal();
      return;
    }
    
    if (href === '#cookie-settings') {
      onOpenCookieSettingsModal();
      return;
    }

    if (href && href.startsWith('#')) {
      const sectionId = href.substring(1);
      
      if (['footer'].includes(sectionId)) {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="footer" className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" onClick={handleLinkClick} className="flex items-center gap-3 mb-4">
              <div className="size-6 text-primary">
                <Logo />
              </div>
              <h2 className="text-white text-lg font-bold">No Days Off AI</h2>
            </a>
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
                    <a className="text-sm text-gray-400 hover:text-primary" href={link.href} onClick={handleLinkClick}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-gray-400">
          <p>© 2025 No Days Off AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;