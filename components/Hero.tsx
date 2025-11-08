import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-16 sm:py-24 lg:py-32 animated-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex flex-col gap-6">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
              AI Agents That Never Sleep
            </h1>
            <h2 className="text-gray-400 text-lg font-normal leading-normal sm:text-xl">
              Transform your construction and real estate business with our 24/7 AI agents designed to solve your biggest operational challenges.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center mt-10">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
              <span className="truncate">See Our Demos</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-surface border border-border text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-border/50 transition-colors">
              <span className="truncate">View Solutions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;