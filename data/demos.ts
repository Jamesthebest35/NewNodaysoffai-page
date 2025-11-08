export interface Project {
  id: string;
  name: string;
  progress: number;
  status: 'On Track' | 'At Risk' | 'Delayed';
  schedule: string;
  budget: string;
  milestones: {
    name: string;
    date: string;
    completed: boolean;
  }[];
}

export interface Lead {
  id: string;
  name: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Appointment Set';
  property: string;
  budget: string;
  timeline: string;
  notes: string[];
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
        name: 'Downtown Tower',
        progress: 72,
        status: 'On Track',
        schedule: '2 days ahead',
        budget: '3% under',
        milestones: [
          { name: 'Rooftop Helipad Concrete Pour', date: 'This Friday', completed: false },
          { name: 'Facade Panel Installation', date: 'Next Tuesday', completed: false },
          { name: 'Steel Delivery', date: 'Yesterday', completed: true },
        ],
      },
      {
        id: 'p2',
        name: 'Oceanview Condos',
        progress: 45,
        status: 'At Risk',
        schedule: '1 week behind',
        budget: '5% over',
        milestones: [
          { name: 'Plumbing Inspection', date: 'Tomorrow', completed: false },
          { name: 'Window Installation', date: 'Next Monday', completed: false },
        ],
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
        name: 'Jane Doe',
        status: 'Qualified',
        property: '123 Main St',
        budget: '$850,000 (Pre-approved)',
        timeline: '60-90 days',
        notes: ['Needs home office', 'Has a dog, needs yard'],
      },
      {
        id: 'l2',
        name: 'John Smith',
        status: 'Appointment Set',
        property: '456 Oak Ave',
        budget: '$1.2M',
        timeline: 'ASAP',
        notes: ['Wants a pool', 'Viewing scheduled for Sat @ 2pm'],
      },
      {
        id: 'l3',
        name: 'Emily White',
        status: 'Contacted',
        property: '789 Pine Ln',
        budget: '$650,000',
        timeline: '3-6 months',
        notes: ['First-time home buyer', 'Sent market report'],
      },
       {
        id: 'l4',
        name: 'Michael Brown',
        status: 'New',
        property: '101 Maple Dr',
        budget: 'N/A',
        timeline: 'Just browsing',
        notes: ['Inquired via website form'],
      },
    ],
  },
];