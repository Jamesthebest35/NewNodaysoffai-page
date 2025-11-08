import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="get-started" className="py-16 sm:py-20 lg:py-24 animated-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          See how our AI agents can streamline your operations, reduce costs, and drive growth. Get started with a personalized demo today.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            <span className="truncate">Schedule a Demo</span>
          </button>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-surface text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-border/50 transition-colors border border-border">
            <span className="truncate">View Demos</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;