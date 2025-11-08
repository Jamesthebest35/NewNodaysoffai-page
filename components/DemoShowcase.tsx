import React, { useEffect, useRef, useState } from 'react';
import { DemoData, Project, Lead } from '../data/demos';
import { Logo } from './common/Logo';

interface DemoShowcaseProps {
  demo: DemoData;
  onClose: () => void;
}

const sidebarLinks = {
  Construction: [
    { icon: 'dashboard', label: 'Dashboard', active: true },
    { icon: 'apartment', label: 'Projects' },
    { icon: 'inventory_2', label: 'Inventory' },
    { icon: 'bar_chart', label: 'Reports' },
    { icon: 'settings', label: 'Settings' },
  ],
  'Real Estate': [
    { icon: 'dashboard', label: 'Dashboard', active: true },
    { icon: 'groups', label: 'Leads' },
    { icon: 'house', label: 'Listings' },
    { icon: 'analytics', label: 'Market Analysis' },
    { icon: 'settings', label: 'Settings' },
  ]
}

const DemoShowcase: React.FC<DemoShowcaseProps> = ({ demo, onClose }) => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const currentSidebar = sidebarLinks[demo.industry];
  const initialView = currentSidebar.find(link => link.active)?.label || currentSidebar[0].label;
  const [activeView, setActiveView] = useState(initialView);


  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    
    showcaseRef.current?.focus();

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const renderActiveView = () => {
    switch(activeView) {
      case 'Projects':
        return <ProjectsView projects={demo.projects || []} />;
      case 'Leads':
        return <LeadsView leads={demo.leads || []} />;
      case 'Dashboard':
        return <DashboardView industry={demo.industry} />;
      case 'Inventory':
      case 'Listings':
        return <TableView industry={demo.industry} />;
      case 'Reports':
      case 'Market Analysis':
        return <ReportsView industry={demo.industry} />;
      case 'Settings':
        return <SettingsView />;
      default:
        return <div className="p-6 text-gray-400">Select a view from the sidebar.</div>;
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background-dark/80 backdrop-blur-sm"
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={showcaseRef}
        tabIndex={-1}
        className="relative flex flex-col w-full h-full max-w-6xl max-h-[90vh] bg-background-dark rounded-xl border border-border shadow-2xl overflow-hidden"
      >
        <header className="flex items-center justify-between p-3 border-b border-border flex-shrink-0 bg-surface">
           <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="size-3 bg-red-500 rounded-full"></span>
              <span className="size-3 bg-yellow-500 rounded-full"></span>
              <span className="size-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="text-sm text-gray-400">{demo.title} - Showcase</div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:bg-border hover:text-white transition-colors"
            aria-label="Close demo showcase"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </header>
        
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <aside className="w-56 bg-surface border-r border-border p-4 hidden md:flex flex-col">
             <div className="flex items-center gap-2 mb-8">
                <div className="size-6 text-primary"><Logo /></div>
                <h2 className="text-white font-bold">No Days Off</h2>
            </div>
            <nav className="flex flex-col gap-2">
              {currentSidebar.map(link => (
                <a 
                  key={link.label}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveView(link.label);
                  }}
                  className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === link.label
                      ? 'bg-primary/10 text-primary' 
                      : 'text-gray-400 hover:bg-border hover:text-gray-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">{link.icon}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 flex flex-col bg-background-dark/50">
            {renderActiveView()}
          </main>
        </div>
      </div>
    </div>
  );
};

// --- Sub-components for different views ---

const ViewHeader: React.FC<{ icon: string; title: string; children?: React.ReactNode }> = ({ icon, title, children }) => (
  <header className="p-4 sm:p-6 border-b border-border flex-shrink-0">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <span className="material-symbols-outlined text-2xl text-primary">{icon}</span>
        <h1 className="text-xl font-bold text-white">{title}</h1>
      </div>
      {children}
    </div>
  </header>
);

const ProjectsView: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'On Track': return 'bg-green-500/10 text-green-400';
      case 'At Risk': return 'bg-yellow-500/10 text-yellow-400';
      case 'Delayed': return 'bg-red-500/10 text-red-500';
      default: return 'bg-gray-500/10 text-gray-400';
    }
  };

  return (
    <>
      <ViewHeader icon="apartment" title="Projects">
        <button className="flex items-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer justify-center overflow-hidden rounded-md h-9 px-3 bg-primary text-background-dark text-sm font-bold hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-base">add</span>
          <span className="truncate">New Project</span>
        </button>
      </ViewHeader>
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
        {projects.map(project => (
          <div key={project.id} className="bg-surface border border-border rounded-xl p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-bold text-white">{project.name}</h3>
                <span className={`mt-1 inline-block px-2 py-0.5 text-xs font-semibold rounded-full ${getStatusColor(project.status)}`}>{project.status}</span>
              </div>
              <div className="text-right">
                 <p className="text-sm text-gray-300">Schedule: <span className="font-semibold text-white">{project.schedule}</span></p>
                 <p className="text-sm text-gray-300">Budget: <span className="font-semibold text-white">{project.budget}</span></p>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center mb-1">
                 <span className="text-xs font-medium text-gray-400">Overall Progress</span>
                 <span className="text-xs font-medium text-primary">{project.progress}%</span>
              </div>
              <div className="w-full bg-border rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
              </div>
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">Upcoming Milestones</h4>
              <ul className="space-y-2">
                {project.milestones.filter(m => !m.completed).map(milestone => (
                   <li key={milestone.name} className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-gray-500">radio_button_unchecked</span>
                      <span className="text-gray-300">{milestone.name}</span>
                      <span className="ml-auto text-xs text-gray-400 bg-border px-2 py-1 rounded-md">{milestone.date}</span>
                   </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const LeadsView: React.FC<{ leads: Lead[] }> = ({ leads }) => {
  const getStatusColor = (status: Lead['status']) => {
    switch (status) {
      case 'New': return 'bg-blue-500/10 text-blue-400';
      case 'Contacted': return 'bg-cyan-500/10 text-cyan-400';
      case 'Qualified': return 'bg-green-500/10 text-green-400';
      case 'Appointment Set': return 'bg-purple-500/10 text-purple-400';
      default: return 'bg-gray-500/10 text-gray-400';
    }
  };

  const headers = ['Lead Name', 'Property', 'Status', 'Next Action'];
  
  return (
    <>
      <ViewHeader icon="groups" title="Leads">
        <button className="flex items-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer justify-center overflow-hidden rounded-md h-9 px-3 bg-primary text-background-dark text-sm font-bold hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-base">add</span>
          <span className="truncate">Add Lead</span>
        </button>
      </ViewHeader>
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="bg-surface border border-border rounded-xl overflow-hidden">
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="bg-border/50">
              <tr>{headers.map(h => <th key={h} className="px-6 py-3 font-medium text-gray-300 uppercase tracking-wider">{h}</th>)}</tr>
            </thead>
            <tbody className="divide-y divide-border">
              {leads.map(lead => (
                <tr key={lead.id} className="hover:bg-border/30">
                  <td className="px-6 py-4">
                    <div className="font-bold text-white">{lead.name}</div>
                    <div className="text-xs text-gray-400">{lead.budget}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-400">{lead.property}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(lead.status)}`}>{lead.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-2 cursor-pointer rounded-md h-8 px-3 bg-border text-gray-300 text-xs font-medium hover:bg-border/70 transition-colors">
                      <span className="truncate">Schedule Call</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// FIX: Define a type for stats to include optional 'color' property
interface Stat {
  label: string;
  value: string;
  change: string;
  icon: string;
  color?: string;
}

const DashboardView: React.FC<{ industry: 'Construction' | 'Real Estate' }> = ({ industry }) => {
  const constructionStats: Stat[] = [
    { label: 'Active Projects', value: '12', change: '+2', icon: 'apartment' },
    { label: 'Budget Variance', value: '-2.5%', change: 'Improving', icon: 'account_balance_wallet', color: 'text-green-400' },
    { label: 'On-Time Completion Rate', value: '92%', change: '+5%', icon: 'task_alt' },
    { label: 'Safety Incidents', value: '1', change: '-1', icon: 'warning', color: 'text-yellow-400' },
  ];
  const realEstateStats: Stat[] = [
    { label: 'New Leads This Month', value: '84', change: '+12%', icon: 'groups' },
    { label: 'Properties Sold', value: '8', change: '+3', icon: 'real_estate_agent' },
    { label: 'Average Closing Time', value: '28 days', change: '-2 days', icon: 'speed' },
    { label: 'Total Sales Volume', value: '$4.2M', change: '+$800k', icon: 'monetization_on' },
  ];
  const stats = industry === 'Construction' ? constructionStats : realEstateStats;
  return (
    <>
      <ViewHeader icon="dashboard" title="Dashboard" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(stat => (
            <div key={stat.label} className="bg-surface border border-border rounded-xl p-5 flex flex-col">
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400">{stat.label}</p>
                <span className={`material-symbols-outlined text-lg ${stat.color || 'text-gray-500'}`}>{stat.icon}</span>
              </div>
              <p className="text-3xl font-bold text-white mt-2">{stat.value}</p>
              <p className="text-xs text-green-400 mt-1">{stat.change}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-surface border border-border rounded-xl p-5">
            <h3 className="text-lg font-semibold text-white mb-4">Activity Feed</h3>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm"><span className="text-primary material-symbols-outlined">add_task</span> <span className="text-white">Downtown Tower:</span><span className="text-gray-400">Helipad concrete pour completed.</span></li>
                <li className="flex items-center gap-3 text-sm"><span className="text-primary material-symbols-outlined">person_add</span> <span className="text-white">New Lead:</span><span className="text-gray-400">Jane Doe assigned to agent Sarah.</span></li>
                <li className="flex items-center gap-3 text-sm"><span className="text-primary material-symbols-outlined">inventory</span> <span className="text-white">Inventory Alert:</span><span className="text-gray-400">W18x50 steel beams running low.</span></li>
            </ul>
        </div>
      </div>
    </>
  );
};

const TableView: React.FC<{ industry: 'Construction' | 'Real Estate' }> = ({ industry }) => {
    const isConstruction = industry === 'Construction';
    const headers = isConstruction ? ['Item Name', 'SKU', 'Quantity', 'Status'] : ['Property Address', 'Price', 'Status', 'Lead'];
    const data = isConstruction ? [
        ['W12x26 Beam', 'STL-W1226', '150 units', 'In Stock'],
        ['W18x50 Beam', 'STL-W1850', '80 units', 'Low Stock'],
        ['Concrete Mix A', 'CNC-MXA', '500 cu ft', 'In Stock'],
        ['Drywall Sheets', 'DRW-48', '2,000 units', 'On Order'],
    ] : [
        ['123 Main St', '$795,000', 'Active', 'Jane Doe'],
        ['456 Oak Ave', '$1,250,000', 'Pending', 'John Smith'],
        ['789 Pine Ln', '$650,000', 'Sold', 'Emily White'],
        ['101 Maple Dr', '$980,000', 'Active', 'Michael Brown'],
    ];
  return (
    <>
        <ViewHeader icon={isConstruction ? 'inventory_2' : 'house'} title={isConstruction ? 'Inventory' : 'Listings'} />
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="bg-surface border border-border rounded-xl overflow-hidden">
                <table className="w-full text-sm text-left text-gray-300">
                    <thead className="bg-border/50">
                        <tr>{headers.map(h => <th key={h} className="px-6 py-3 font-medium text-gray-300 uppercase tracking-wider">{h}</th>)}</tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-border/30">
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className={`px-6 py-4 ${cellIndex === 0 ? 'font-bold text-white' : 'text-gray-400'}`}>
                                        {cell.includes('Stock') || cell.includes('Active') ? <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">{cell}</span> : cell.includes('Pending') || cell.includes('Order') ? <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400">{cell}</span> : cell.includes('Sold') ? <span className="px-2 py-1 text-xs rounded-full bg-gray-500/20 text-gray-400">{cell}</span>: cell }
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  );
};

const ReportsView: React.FC<{ industry: 'Construction' | 'Real Estate' }> = ({ industry }) => {
  const isConstruction = industry === 'Construction';
  const title = isConstruction ? 'Reports' : 'Market Analysis';
  const icon = isConstruction ? 'bar_chart' : 'analytics';
  const reportTitle = isConstruction ? 'Quarterly Project Performance' : 'Local Market Trends: Q2 2024';
  const chartData = isConstruction 
    ? [{ label: 'Q1', value: 80 }, { label: 'Q2', value: 92 }, { label: 'Q3', value: 88 }, { label: 'Q4', value: 95 }]
    : [{ label: 'Jan', value: 750 }, { label: 'Feb', value: 780 }, { label: 'Mar', value: 820 }, { label: 'Apr', value: 810 }];
  const maxChartValue = Math.max(...chartData.map(d => d.value)) * 1.2;

  return (
     <>
        <ViewHeader icon={icon} title={title}>
             <button className="flex items-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer justify-center overflow-hidden rounded-md h-9 px-3 bg-border text-gray-300 text-sm font-medium hover:bg-border/70 transition-colors">
                <span className="material-symbols-outlined text-base">download</span>
                <span className="truncate">Export PDF</span>
            </button>
        </ViewHeader>
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
            <div className="bg-surface border border-border rounded-xl p-5">
                 <h3 className="text-lg font-semibold text-white mb-4">{reportTitle}</h3>
                 <div className="w-full h-64 bg-background-dark/50 rounded-lg p-4 flex items-end justify-around gap-2 border border-border/50">
                    {/* Fake bar chart */}
                    {chartData.map(data => (
                      <div key={data.label} className="flex flex-col items-center justify-end h-full w-full">
                        <div 
                          className="w-3/4 bg-primary/80 hover:bg-primary transition-colors rounded-t-sm" 
                          style={{ height: `${(data.value / maxChartValue) * 100}%` }}
                          title={`${isConstruction ? '' : '$'}${data.value}${isConstruction ? '%' : 'k'}`}
                        ></div>
                        <span className="text-xs text-gray-400 mt-2">{data.label}</span>
                      </div>
                    ))}
                 </div>
                 <p className="text-sm text-gray-400 mt-4 text-center">
                    {isConstruction 
                      ? 'On-time project completion rate by quarter.' 
                      : 'Average home sale price (in thousands).'}
                 </p>
            </div>
        </div>
    </>
  );
};

const SettingsView: React.FC = () => {
  return (
    <>
      <ViewHeader icon="settings" title="Settings" />
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="bg-surface border border-border rounded-xl divide-y divide-border">
            <div className="p-5">
                <h3 className="text-base font-semibold text-white">Profile</h3>
                <p className="text-sm text-gray-400 mt-1">Update your personal information.</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="name" className="text-xs font-medium text-gray-400">Name</label>
                        <input type="text" id="name" defaultValue="Demo User" className="w-full mt-1 bg-border text-white text-sm rounded-md border-border/50 focus:ring-primary focus:border-primary" />
                    </div>
                    <div>
                        <label htmlFor="email" className="text-xs font-medium text-gray-400">Email</label>
                        <input type="email" id="email" defaultValue="demo@nodays.ai" className="w-full mt-1 bg-border text-white text-sm rounded-md border-border/50 focus:ring-primary focus:border-primary" />
                    </div>
                </div>
            </div>
            <div className="p-5">
                <h3 className="text-base font-semibold text-white">Notifications</h3>
                <p className="text-sm text-gray-400 mt-1">Manage how you receive notifications.</p>
                <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Email Notifications</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-300">Push Notifications</span>
                         <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" value="" className="sr-only peer" />
                          <div className="w-11 h-6 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
         <div className="mt-6 flex justify-end">
            <button className="flex items-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer justify-center overflow-hidden rounded-md h-9 px-4 bg-primary text-background-dark text-sm font-bold hover:bg-primary/90 transition-colors">
                <span className="truncate">Save Changes</span>
            </button>
        </div>
      </div>
    </>
  );
}

export default DemoShowcase;
