export interface Project {
  id: string;
  name: string;
  progress: number;
  status: 'On Track' | 'At Risk' | 'Delayed';
  completionEst: string;
  details?: string;
}

export interface Lead {
  id: string;
  name: string;
  lookingFor: string;
  matchScore: number;
  lastContact: string;
  nextShowing?: string;
  temperature: 'Hot Lead' | 'Warm Lead';
}


export interface DemoData {
  industry: 'Construction' | 'Real Estate';
  icon: string;
  title: string;
  description: string;
  features: string[];
  projects?: Project[];
  leads?: Lead[];
}

export const demosData: DemoData[] = [
  {
    industry: 'Construction',
    icon: 'construction',
    title: 'Construction Project Manager AI',
    description: 'Automate project tracking, resource allocation, and document analysis to keep your projects on time and under budget.',
    features: [
      'Predictive schedule adjustments',
      'Real-time inventory tracking',
      'Instant answers from project documents',
    ],
    projects: [
      {
        id: 'p1',
        name: 'Downtown Tower - Phase 2',
        progress: 75,
        status: 'On Track',
        completionEst: 'Est. 15 days remaining',
      },
      {
        id: 'p2',
        name: 'Harbor Bridge Renovation',
        progress: 45,
        status: 'At Risk',
        completionEst: '',
        details: 'Weather delay detected',
      },
    ],
  },
  {
    industry: 'Real Estate',
    icon: 'real_estate_agent',
    title: 'Real Estate Lead Generator AI',
    description: 'Never miss a lead. Our AI qualifies, nurtures, and schedules appointments with potential clients around the clock.',
    features: [
      '24/7 lead qualification & follow-up',
      'Automated property valuation reports',
      'Intelligent appointment scheduling',
    ],
    leads: [
      {
        id: 'l1',
        name: 'Sarah Johnson',
        lookingFor: '3BR condo, $400K-500K',
        matchScore: 92,
        lastContact: '2 hours ago',
        temperature: 'Hot Lead',
        nextShowing: 'Scheduled showing for tomorrow at 2 PM',
      },
      {
        id: 'l2',
        name: 'Michael Chen',
        lookingFor: 'Investment property',
        matchScore: 78,
        lastContact: '1 day ago',
        temperature: 'Warm Lead',
      },
    ],
  },
];