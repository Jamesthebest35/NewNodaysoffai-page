import React from 'react';

const enterpriseFeatures = [
    { icon: 'dns', name: 'On-Premise Deployment', description: 'Deploy our AI within your own infrastructure for maximum security and control.' },
    { icon: 'model_training', name: 'Custom Model Training', description: 'We fine-tune models on your proprietary data for unparalleled accuracy and domain expertise.' },
    { icon: 'support_agent', name: 'Dedicated Support', description: 'Get a dedicated success manager and 24/7 priority support for your mission-critical operations.' },
    { icon: 'database', name: 'Full Data Ownership', description: 'You retain 100% ownership and control over your data, models, and intellectual property.' },
    { icon: 'security', name: 'Advanced Security', description: 'Benefit from enterprise-grade security features, including SSO, audit logs, and role-based access control.' },
    { icon: 'hub', name: 'Scalable Infrastructure', description: 'Our solutions are built to scale with your business, from a single department to a global enterprise.' },
];

const Enterprise: React.FC = () => {
    return (
        <section id="enterprise" className="py-16 sm:py-20 lg:py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base font-semibold text-primary tracking-wide uppercase">For Enterprise</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                        Built for the Most Demanding Environments
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto">
                        We provide the security, scalability, and support that large organizations require to deploy AI with confidence.
                    </p>
                </div>

                <div className="mt-12">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3">
                        {enterpriseFeatures.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-background">
                                         <span className="material-symbols-outlined">{feature.icon}</span>
                                    </div>
                                    <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    );
};

export default Enterprise;
