import React, { useEffect, useRef, useState } from 'react';
import { DemoData } from '../data/demos';
import { Logo } from './common/Logo';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface DemoShowcaseProps {
  demo: DemoData;
  onClose: () => void;
}

const sidebarLinks = {
  Construction: [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'apartment', label: 'Projects', active: true },
    { icon: 'inventory_2', label: 'Inventory' },
    { icon: 'bar_chart', label: 'Reports' },
    { icon: 'settings', label: 'Settings' },
  ],
  'Real Estate': [
    { icon: 'dashboard', label: 'Dashboard' },
    { icon: 'groups', label: 'Leads', active: true },
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
      case 'Leads':
        return <ChatView conversation={demo.showcaseConversation} />;
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

const ChatView: React.FC<{ conversation: DemoData['showcaseConversation'] }> = ({ conversation }) => (
  <>
    <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
      {conversation.map((msg, index) => (
        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
          {msg.role === 'model' && (
            <div className="flex-shrink-0 size-8 bg-border rounded-full flex items-center justify-center text-primary mt-1">
              <span className="material-symbols-outlined text-lg">smart_toy</span>
            </div>
          )}
          <div
            className={`px-4 py-2.5 rounded-xl max-w-lg prose prose-invert prose-sm ${
              msg.role === 'user'
                ? 'bg-primary text-background-dark'
                : 'bg-surface border border-border text-gray-300'
            }`}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
    <footer className="p-4 border-t border-border bg-surface/80 flex-shrink-0">
      <div className="relative">
        <input 
          type="text"
          readOnly
          value="Interact with your AI Assistant here..."
          className="w-full bg-border rounded-lg p-3 text-gray-400 text-sm pl-4 pr-10 cursor-not-allowed"
        />
        <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          send
        </span>
      </div>
    </footer>
  </>
);

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
                                        {cell.includes('Stock') || cell.includes('Active') ? <span className="px-2 py-1 text-xs rounded-full bg-green-500/10 text-green-400">{cell}</span> : cell.includes('Pending') || cell.includes('Order') ? <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-400">{cell}</span> : cell }
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
                 <h3 className="text-lg font-semibold text-white mb-4">{isConstruction ? 'Project Budget vs. Actual' : 'Median Sale Price Trend'}</h3>
                 <div className="w-full h-64 bg-border/50 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">
                      {isConstruction ? '[ Mock Chart: Bar chart showing budget vs actual spending per project ]' : '[ Mock Chart: Line chart showing property price trends over 12 months ]'}
                    </p>
                 </div>
            </div>
        </div>
     </>
  );
};

const SettingsView: React.FC = () => {
    return (
        <>
            <ViewHeader icon="settings" title="Settings" />
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
                <div className="bg-surface border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
                     <div className="flex items-center justify-between">
                        <span className="text-gray-300">Email Notifications</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                            <div className="w-11 h-6 bg-border rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
                 <div className="bg-surface border border-border rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-white mb-4">API Integrations</h3>
                    <p className="text-sm text-gray-400">Manage your connected applications.</p>
                </div>
            </div>
        </>
    )
};


export default DemoShowcase;