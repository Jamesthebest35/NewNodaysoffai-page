import React, { useState } from 'react';

type Industry = 'Construction' | 'Real Estate';

const challengesData: Record<Industry, { icon: string; title: string }[]> = {
  Construction: [
    { icon: 'schedule', title: 'Project Delays & Schedule Management' },
    { icon: 'find_in_page', title: 'Intelligent Document Search' },
    { icon: 'inventory_2', title: 'Resource Allocation & Inventory' },
  ],
  'Real Estate': [
    { icon: 'groups', title: 'Lead Qualification & Nurturing' },
    { icon: 'analytics', title: 'Market Analysis & Valuation' },
    { icon: 'real_estate_agent', title: 'Property Management Automation' },
  ],
};

const Challenges: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('Construction');

  const handleIndustryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIndustry(event.target.value as Industry);
  };

  return (
    <section id="solutions" className="py-16 sm:py-20 lg:py-24 animated-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 sm:text-4xl">Industry Challenges We Solve</h2>
        </div>
        <div className="flex justify-center py-3">
          <div className="flex h-10 w-full max-w-xs items-center justify-center rounded-lg bg-surface p-1 border border-border">
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-primary has-[:checked]:text-background-dark text-gray-300 text-sm font-medium leading-normal transition-colors">
              <span className="truncate">Construction</span>
              <input
                type="radio"
                name="industry-challenges"
                value="Construction"
                checked={selectedIndustry === 'Construction'}
                onChange={handleIndustryChange}
                className="invisible w-0 peer"
              />
            </label>
            <label className="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-primary has-[:checked]:text-background-dark text-gray-300 text-sm font-medium leading-normal transition-colors">
              <span className="truncate">Real Estate</span>
              <input
                type="radio"
                name="industry-challenges"
                value="Real Estate"
                checked={selectedIndustry === 'Real Estate'}
                onChange={handleIndustryChange}
                className="invisible w-0 peer"
              />
            </label>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {challengesData[selectedIndustry].map((challenge) => (
            <div key={challenge.title} className="bg-surface p-6 rounded-xl border border-border flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">{challenge.icon}</span>
              <h3 className="font-bold text-lg mb-2 text-white">{challenge.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;