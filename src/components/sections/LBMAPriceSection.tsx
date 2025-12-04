"use client";

import { MotionDiv, MotionH2 } from "../motion";

const LBMAPriceSection = () => {
  return (
    <section className="px-[10%] py-20 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        <MotionH2
          className="text-6xl max-md:text-4xl font-bold text-gold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          LBMA Gold Price
        </MotionH2>

        <MotionDiv
          className="bg-white border-3 border-gold rounded-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-sm text-secondary-text mb-2">LBMA Gold Price AM</p>
              <p className="text-2xl font-bold text-gold">USD</p>
              <p className="text-lg text-primary-text mt-1">-</p>
            </div>
            <div>
              <p className="text-sm text-secondary-text mb-2">LBMA Gold Price PM</p>
              <p className="text-2xl font-bold text-gold">USD</p>
              <p className="text-lg text-primary-text mt-1">-</p>
            </div>
            <div>
              <p className="text-sm text-secondary-text mb-2">LBMA Gold Price AM</p>
              <p className="text-2xl font-bold text-gold">EUR</p>
              <p className="text-lg text-primary-text mt-1">-</p>
            </div>
            <div>
              <p className="text-sm text-secondary-text mb-2">LBMA Gold Price PM</p>
              <p className="text-2xl font-bold text-gold">EUR</p>
              <p className="text-lg text-primary-text mt-1">-</p>
            </div>
          </div>
          <p className="text-center text-sm text-secondary-text mt-6">
            * Preise werden zweimal täglich um 10:30 Uhr (AM) und 15:00 Uhr (PM) Londoner Zeit festgestellt
          </p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default LBMAPriceSection;

