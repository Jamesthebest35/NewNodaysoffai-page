export interface DemoData {
  industry: 'Construction' | 'Real Estate';
  icon: string;
  title: string;
  description: string;
  features: string[];
  showcaseConversation: {
    role: 'user' | 'model';
    content: string;
  }[];
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
    showcaseConversation: [
      {
        role: 'user',
        content: "What's the status of the 'Downtown Tower' project?",
      },
      {
        role: 'model',
        content: `Of course. Here is the current status for the **Downtown Tower Project**:

- **Overall Progress:** 72% complete
- **Schedule:** Currently 2 days ahead of schedule.
- **Budget:** 3% under budget.
- **Next Milestone:** Concrete pour for the rooftop helipad, scheduled for this Friday.
- **Blockers:** None at the moment. The recent steel delivery arrived on time.`,
      },
      {
        role: 'user',
        content: "Great. Can you check the blueprints for the fire safety requirements on levels 30-35?",
      },
      {
        role: 'model',
        content: `I've analyzed the 'Downtown Tower' blueprints (v3.1). Here are the fire safety requirements for floors 30-35:

- **Sprinkler System:** Type K-25 ESFR heads required in all utility rooms.
- **Fire Extinguishers:** One 10-A:60-B:C rated extinguisher must be located every 75 feet.
- **Stairwells:** Must be pressurized to 0.05 inches of water column.
- **Alarms:** System must integrate with the central building management system and include visual strobes in all common areas.`,
      },
       {
        role: 'user',
        content: "Perfect, thanks. What are our current inventory levels for structural steel?",
      },
      {
        role: 'model',
        content: `Here are the current inventory levels for structural steel at the Downtown Tower site:

| Beam Type | On-Hand Quantity | Required for Phase 4 | Status |
|-----------|------------------|----------------------|--------|
| W12x26    | 150 units        | 120 units            | ✅ Sufficient |
| W18x50    | 80 units         | 100 units            | ⚠️ Low |
| W24x76    | 45 units         | 40 units             | ✅ Sufficient |
 
I've flagged the **W18x50** beams as low. Shall I draft a purchase order to our primary supplier?`,
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
    showcaseConversation: [
      {
        role: 'user',
        content: "A new lead just came in from Zillow for the 123 Main St property. Can you qualify them?",
      },
      {
        role: 'model',
        content: `Absolutely. I've analyzed the new lead, **Jane Doe**.

- **Budget:** $850,000 (Pre-approved)
- **Desired Area:** Downtown, preference for zip code 90210
- **Timeline:** Looking to move in 60-90 days.
- **Notes:** Mentioned needing a home office and a yard for a dog.

Based on this, she is a **high-quality lead**. I've already sent her a welcome email and a link to similar properties. My recommended next step is a phone call to schedule a viewing.`,
      },
      {
        role: 'user',
        content: "Excellent. Before I call her, can you generate a quick valuation report for 123 Main St?",
      },
      {
        role: 'model',
        content: `Here is the automated valuation report for **123 Main St, Anytown, USA**:

- **Estimated Value:** $795,000
- **Confidence Score:** 92%
- **Comparable Properties (Last 90 Days):**
    1. **135 Main St:** Sold for $810,000
    2. **210 Oak Ave:** Sold for $785,000
    3. **111 Main St:** Sold for $805,000

The property is priced competitively for the current market. I can generate a full 10-page PDF report if you need it.`,
      },
       {
        role: 'user',
        content: "That's great. Please draft a follow-up email to Jane Doe suggesting a call.",
      },
       {
        role: 'model',
        content: `Here is a draft email to Jane Doe:

**Subject: Following up on your 123 Main St inquiry**

Hi Jane,

Thanks again for your interest in the property at 123 Main St. It's a fantastic home with a great yard that would be perfect for a dog!

Based on your preferences for a home office and a quick move-in timeline, I have a few other properties you might love as well.

Would you be available for a brief 10-minute call tomorrow afternoon to discuss what you're looking for? 

Best regards,

[Your Name]
[Your Brokerage]`,
      },
    ],
  },
];
