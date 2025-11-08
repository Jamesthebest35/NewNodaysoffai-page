import React from 'react';

const CTA: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  return (
    <section id="get-started" className="py-16 sm:py-20 lg:py-24 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          We're here to help. Send us a message to discuss your unique challenges and explore how a tailored AI solution can drive your business forward.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onOpenModal}
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
          >
            <span className="truncate">Get in Contact</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
