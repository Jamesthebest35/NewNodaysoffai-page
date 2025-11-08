import React from 'react';
import { demosData, DemoData } from '../data/demos';

interface DemosProps {
  onDemoClick: (demo: DemoData) => void;
}

const Demos: React.FC<DemosProps> = ({ onDemoClick }) => {
  return (
    <section id="demos" className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">See It In Action</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Explore interactive demos tailored for your industry. No powerpoints, just real-world application.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-2 lg:max-w-none">
          {demosData.map((demo) => (
            <div key={demo.title} className="flex flex-col rounded-xl shadow-lg overflow-hidden border border-border bg-surface">
              <div className="p-6">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                        <span className="material-symbols-outlined text-2xl">{demo.icon}</span>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-primary">{demo.industry}</p>
                        <h3 className="text-xl font-semibold text-white">{demo.title}</h3>
                    </div>
                </div>
                <p className="mt-4 text-base text-gray-400">{demo.description}</p>
                <ul className="mt-4 space-y-2">
                  {demo.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className="material-symbols-outlined text-base text-green-400 mt-1">check_circle</span>
                      </div>
                      <p className="ml-3 text-base text-gray-400">{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-background-dark/50 mt-auto">
                <button
                  onClick={() => onDemoClick(demo)}
                  className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20"
                >
                  Launch Interactive Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Demos;
