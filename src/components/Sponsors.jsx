import React from 'react';
import { Building2 } from 'lucide-react';

const Sponsors = () => {
  const sponsorSlots = Array(4).fill(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsorSlots.map((_, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 text-center hover:bg-gray-800/50 transition-all duration-300 group h-32 flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <p className="text-gray-400 text-sm font-medium">Partner Company</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;