import React from 'react';

const statsData = [
  { label: 'Reduction in Manual Tasks', value: '87%' },
  { label: 'AI Monitoring & Support', value: '24/7' },
  { label: 'Increase in Operational Efficiency', value: '30%' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {statsData.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2 rounded-xl p-6 bg-surface border border-border">
              <p className="text-gray-400 text-base font-medium leading-normal">{stat.label}</p>
              <p className="text-primary tracking-tight text-5xl font-bold leading-tight">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;