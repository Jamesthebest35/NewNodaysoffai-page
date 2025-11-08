import React from 'react';

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36">
       <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background"></div>
        <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/10 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-white">
          Automate Your Industry with Specialized AI
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-400">
          We build custom AI assistants that understand the nuances of your business, from construction sites to real estate closings. Stop wasting time on manual tasks and start focusing on what matters.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-background bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full sm:w-auto"
          >
            Request a Consultation
          </button>
           <a
            href="#demos"
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-white bg-surface hover:bg-border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-border w-full sm:w-auto"
          >
            See Demos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
