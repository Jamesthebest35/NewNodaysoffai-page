import React from 'react';

interface CTAProps {
  onContactClick: () => void;
}

const CTA: React.FC<CTAProps> = ({ onContactClick }) => {
  return (
    <section className="bg-primary/10">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">Ready to transform your business?</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-300">
          Let's discuss how a custom-built AI assistant can solve your biggest challenges and unlock new opportunities for growth.
        </p>
        <button
          onClick={onContactClick}
          className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-background bg-primary hover:bg-primary/90 sm:w-auto"
        >
          Schedule a Free Consultation
        </button>
      </div>
    </section>
  );
};

export default CTA;
