import React from 'react';

const enterpriseFeatures = [
  {
    icon: 'local_shipping',
    title: 'Supply Chain Optimization',
    description: 'Our AI analyzes your entire supply chain to identify bottlenecks, reduce logistics costs, and improve delivery timelines.'
  },
  {
    icon: 'precision_manufacturing',
    title: 'Predictive Maintenance',
    description: 'Prevent costly downtime by using AI to predict equipment failures before they happen, scheduling maintenance proactively.'
  },
  {
    icon: 'checklist_rtl',
    title: 'Automated Quality Control',
    description: 'Leverage computer vision to automate quality inspections on your production line, ensuring higher standards and less waste.'
  }
];

const Enterprise: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-white text-3xl font-bold leading-tight tracking-[-0.015em] pb-3 sm:text-4xl">
            Enterprise Solutions for Manufacturing
          </h2>
          <p className="text-gray-400 text-lg">
            From supply chain optimization to predictive maintenance, our enterprise-grade AI agents are built to handle the complexity of modern manufacturing.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {enterpriseFeatures.map((feature) => (
            <div key={feature.title} className="bg-surface p-6 rounded-xl border border-border flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">{feature.icon}</span>
              <h3 className="font-bold text-lg mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
