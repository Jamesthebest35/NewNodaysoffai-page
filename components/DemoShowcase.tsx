import React, { useEffect, useRef } from 'react';
// FIX: Import `demosData` to resolve reference errors.
import { DemoData, demosData } from '../data/demos';

interface DemoShowcaseProps {
  demo: DemoData;
  onClose: () => void;
}

const DemoSection: React.FC<{ icon: string; title: string; children: React.ReactNode; iconBgColor: string; iconTextColor: string }> = ({ icon, title, children, iconBgColor, iconTextColor }) => (
  <section>
    <div className="flex items-center gap-3 mb-6">
      <div className={`flex items-center justify-center size-8 rounded-lg ${iconBgColor}`}>
        <span className={`material-symbols-outlined text-lg ${iconTextColor}`}>{icon}</span>
      </div>
      <h3 className="font-bold text-white text-lg">{title}</h3>
    </div>
    <div className="space-y-4">
      {children}
    </div>
  </section>
);

const ConstructionDemoContent: React.FC = () => {
  const projects = demosData.find(d => d.industry === 'Construction')?.projects || [];
  const metrics = [
    { value: '23%', label: 'Time saved' },
    { value: '$47K', label: 'Cost Reduction' },
    { value: '94%', label: 'On-Time Rate' },
  ];
  return (
    <div className="space-y-10">
      <DemoSection icon="schedule" title="Real-Time Project Monitoring" iconBgColor="bg-blue-500/10" iconTextColor="text-blue-400">
        {projects.map(project => (
          <div key={project.id} className="bg-background-dark p-4 rounded-lg border border-border">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-semibold text-white">{project.name}</h4>
              <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${project.status === 'On Track' ? 'bg-green-500/10 text-green-400' : 'bg-yellow-500/10 text-yellow-400'}`}>{project.status}</span>
            </div>
            <div className="flex justify-between items-center mb-1 text-xs text-gray-400">
              <span>Completion: {project.progress}%</span>
              <span>{project.completionEst}</span>
            </div>
            <div className="w-full bg-border rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
            </div>
            {project.details && <p className="text-xs text-yellow-400 mt-2">{project.details}</p>}
          </div>
        ))}
      </DemoSection>

      <DemoSection icon="error" title="AI-Detected Issues & Recommendations" iconBgColor="bg-red-500/10" iconTextColor="text-red-400">
        <div className="border border-red-500/30 bg-red-500/5 rounded-lg p-4 space-y-4">
          <div>
            <h5 className="font-bold text-red-400 flex items-center gap-2"><span className="material-symbols-outlined text-base">warning</span>Material Shortage Alert</h5>
            <p className="text-sm text-gray-300 mt-1">Steel beams inventory below critical level for Harbor Bridge project.</p>
            <p className="text-sm text-primary mt-1"><span className="font-semibold">AI Action:</span> Order placed with backup supplier, est. arrival in 2 days.</p>
          </div>
           <div>
            <h5 className="font-bold text-yellow-400 flex items-center gap-2"><span className="material-symbols-outlined text-base">health_and_safety</span>Safety Compliance Warning</h5>
            <p className="text-sm text-gray-300 mt-1">PPE non-compliance rate detected at 82% at Site B.</p>
            <p className="text-sm text-primary mt-1"><span className="font-semibold">AI Action:</span> Safety briefing scheduled, supervisor notified.</p>
          </div>
        </div>
      </DemoSection>

      <DemoSection icon="trending_up" title="Efficiency Improvements" iconBgColor="bg-green-500/10" iconTextColor="text-green-400">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {metrics.map(metric => (
            <div key={metric.label} className="bg-background-dark p-4 rounded-lg border border-border">
              <p className="text-3xl font-bold text-white">{metric.value}</p>
              <p className="text-sm text-gray-400">{metric.label}</p>
            </div>
          ))}
        </div>
      </DemoSection>
    </div>
  );
};

const RealEstateDemoContent: React.FC = () => {
  const leads = demosData.find(d => d.industry === 'Real Estate')?.leads || [];
  const timeline = [
    { title: 'Initial Contact', description: 'AI sends personalized intro email within 5 minutes of lead capture.' },
    { title: 'Property Matching', description: 'AI analyzes lead preferences and sends top 5 matches within 24 hours.' },
    { title: 'Appointment Scheduling', description: 'AI coordinates showing times based on availability and preferences.' },
    { title: 'Follow-Up & Nurture', description: 'Ongoing personalized communication until conversion or opt-out.' },
  ];
  const metrics = [
    { value: '43%', label: 'Conversion Rate' },
    { value: '2.3x', label: 'More Showings' },
    { value: '89%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="space-y-10">
      <DemoSection icon="pipe" title="Active Lead Pipeline" iconBgColor="bg-green-500/10" iconTextColor="text-green-400">
        {leads.map(lead => (
          <div key={lead.id} className="bg-background-dark p-4 rounded-lg border border-border">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-semibold text-white">{lead.name}</h4>
                <p className="text-sm text-gray-400">Looking for: {lead.lookingFor}</p>
              </div>
              <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${lead.temperature === 'Hot Lead' ? 'bg-red-500/10 text-red-400' : 'bg-yellow-500/10 text-yellow-400'}`}>{lead.temperature}</span>
            </div>
            <div className="w-full bg-border rounded-full h-1.5 mb-2">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: `${lead.matchScore}%` }}></div>
            </div>
            <div className="text-xs text-gray-400 flex justify-between items-center">
                <span>Match Score: {lead.matchScore}%</span>
                <span>Last Contact: {lead.lastContact}</span>
            </div>
            {lead.nextShowing && <p className="text-xs text-primary mt-2 flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">calendar_month</span> {lead.nextShowing}</p>}
          </div>
        ))}
         <div className="text-sm text-gray-400 flex items-center justify-center gap-2 pt-2">
            <span className="material-symbols-outlined text-primary text-base">auto_awesome</span>
            AI sent personalized property recommendations
        </div>
      </DemoSection>

      <DemoSection icon="timeline" title="Automated Engagement Timeline" iconBgColor="bg-blue-500/10" iconTextColor="text-blue-400">
        <ul className="relative space-y-6">
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -z-0"></div>
            {timeline.map((item, index) => (
                <li key={item.title} className="flex items-start gap-4 z-10">
                    <div className="flex-shrink-0 size-8 bg-blue-500 text-white font-bold text-sm rounded-full flex items-center justify-center">{index + 1}</div>
                    <div>
                        <h5 className="font-semibold text-white">{item.title}</h5>
                        <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                </li>
            ))}
        </ul>
      </DemoSection>

      <DemoSection icon="bar_chart_4_bars" title="Performance Metrics" iconBgColor="bg-purple-500/10" iconTextColor="text-purple-400">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {metrics.map(metric => (
                <div key={metric.label} className="bg-background-dark p-4 rounded-lg border border-border">
                <p className="text-3xl font-bold text-primary">{metric.value}</p>
                <p className="text-sm text-gray-400">{metric.label}</p>
                </div>
            ))}
        </div>
      </DemoSection>
    </div>
  );
};

const DemoShowcase: React.FC<DemoShowcaseProps> = ({ demo, onClose }) => {
  const showcaseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    showcaseRef.current?.focus();
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/80 backdrop-blur-sm p-4"
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={showcaseRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl max-h-[90vh] bg-surface rounded-xl border border-border shadow-2xl flex flex-col"
      >
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <header className="relative text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white">{demo.title} AI Demo</h2>
            <button
              onClick={onClose}
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 p-2 rounded-full text-gray-400 hover:bg-border hover:text-white transition-colors"
              aria-label="Close demo showcase"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>
          
          {demo.industry === 'Construction' 
            ? <ConstructionDemoContent /> 
            : <RealEstateDemoContent />}
        </div>

        <footer className="p-4 sm:p-6 border-t border-border bg-surface/50 rounded-b-xl flex justify-end">
          <button
            onClick={onClose}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-5 bg-primary text-background-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            Close Demo
          </button>
        </footer>
      </div>
    </div>
  );
};

export default DemoShowcase;