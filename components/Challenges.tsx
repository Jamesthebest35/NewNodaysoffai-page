import React from 'react';

const challengesData = [
  {
    icon: 'manage_search',
    title: 'Information Overload',
    description: "Your team spends hours sifting through documents, emails, and reports. Our AI finds the exact information they need in seconds."
  },
  {
    icon: 'schedule',
    title: 'Project Delays',
    description: "Unexpected issues and poor resource allocation lead to missed deadlines. Our AI predicts bottlenecks and optimizes schedules proactively."
  },
  {
    icon: 'group_off',
    title: 'Lost Opportunities',
    description: "Qualified leads fall through the cracks due to slow follow-up. Our AI engages and qualifies leads 24/7, so you never miss a client."
  },
  {
    icon: 'assessment',
    title: 'Inaccurate Reporting',
    description: "Manual data entry is prone to errors, leading to flawed business intelligence. Our AI automates data collection and generates precise reports."
  }
];

const Challenges: React.FC = () => {
  return (
    <section id="features" className="py-16 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Stop Fighting Fires, Start Building the Future</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
            Your industry has unique challenges. We have AI solutions tailored to solve them.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {challengesData.map((challenge) => (
            <div key={challenge.title} className="flex flex-col items-start p-6 border border-border rounded-xl">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                  <span className="material-symbols-outlined text-2xl">{challenge.icon}</span>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-white">{challenge.title}</h3>
                <p className="mt-2 text-base text-gray-400">{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
