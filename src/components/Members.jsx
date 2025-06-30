import React from 'react';
import { User } from 'lucide-react';

const Members = () => {
  const memberSlots = Array(8).fill(null);

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {memberSlots.map((_, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <User className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Team Member {index + 1}</h3>
              <p className="text-gray-400 text-sm">Position Title</p>
              <p className="text-gray-500 text-xs mt-1">Department</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;