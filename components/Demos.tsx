import React, { useState } from 'react';
import DemoShowcase from './DemoShowcase';
import { DemoData, demosData } from '../data/demos';

const Demos: React.FC = () => {
  const [showcaseVisible, setShowcaseVisible] = useState(false);
  const [activeDemo, setActiveDemo] = useState<DemoData | null>(null);

  const handleOpenShowcase = (demo: DemoData) => {
    setActiveDemo(demo);
    setShowcaseVisible(true);
  };

  const handleCloseShowcase = () => {
    setShowcaseVisible(false);
    setActiveDemo(null);
  };

  return (
    <>
      <section id="demos" className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 sm:text-4xl">Our AI Agent Demos</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {demosData.map((demo) => (
              <div key={demo.title} className="flex flex-col bg-surface p-8 rounded-xl border border-border">
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary py-1 px-3 rounded-full text-sm font-semibold">
                    <span className="material-symbols-outlined text-base">{demo.icon}</span>
                    {demo.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{demo.title}</h3>
                <p className="text-gray-400 mb-6 flex-grow">{demo.description}</p>
                <ul className="space-y-3 mb-8">
                  {demo.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-lg text-primary mt-1">check_circle</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleOpenShowcase(demo)}
                  className="w-full flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  <span className="truncate">View Demo Showcase</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {showcaseVisible && activeDemo && <DemoShowcase demo={activeDemo} onClose={handleCloseShowcase} />}
    </>
  );
};

export default Demos;