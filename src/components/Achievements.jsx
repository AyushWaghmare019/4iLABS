// src/components/Achievements.jsx

import React from 'react';

const Achievements = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="space-y-10">
          <div className="bg-gray-800/40 rounded-xl p-6 shadow hover:bg-gray-800/60 transition">
            <h3 className="text-2xl font-semibold mb-2">Tech4Seva</h3>
            <p className="text-gray-300">
              The Mitra agricultural robot secured <span className="font-bold text-blue-400">2nd place</span> in this prestigious national competition,
              showcasing its innovation and potential to transform precision farming across India.
            </p>
          </div>

          <div className="bg-gray-800/40 rounded-xl p-6 shadow hover:bg-gray-800/60 transition">
            <h3 className="text-2xl font-semibold mb-2">Inter IIT Tech Meet</h3>
            <p className="text-gray-300">
              4i Labs earned a <span className="font-bold text-blue-400">bronze medal</span> at this renowned event, establishing the club as a leader
              in tackling complex engineering challenges across the IIT network.
            </p>
          </div>

          <div className="bg-gray-800/40 rounded-xl p-6 shadow hover:bg-gray-800/60 transition">
            <h3 className="text-2xl font-semibold mb-2">EDC Funding</h3>
            <p className="text-gray-300">
              The <span className="font-bold text-blue-400">Antahsagari underwater vehicle</span> received crucial funding from the Innovation and
              Entrepreneurship Development Cell (IEDC), enabling significant leaps in development and technological advancement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
