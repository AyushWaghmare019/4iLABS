import React from 'react';
import { User } from 'lucide-react';

import member1 from '../assets/sm.png';
import member2 from '../assets/as.png';
import member3 from '../assets/esg.png';
import member4 from '../assets/v.png';
import member5 from '../assets/a.png';
import member6 from '../assets/mp.png';
import member7 from '../assets/c.png';
import member8 from '../assets/k.png';
import member9 from '../assets/s.png';
import member10 from '../assets/ak.png';
import member11 from '../assets/sml.png';
import member12 from '../assets/mm.png';
import member13 from '../assets/sd.png';
import member14 from '../assets/vst.png';

const Members = () => {
  const members = [
    { img: member1, name: "Samiksha Mitra", position: "Overall Coordinator", department: "4i LABS" },
    { img: member2, name: "Aryan", position: "Project Lead", department: "MITRA" },
    { img: member3, name: "Ekshith", position: "Electronics & Control", department: "MITRA" },
    { img: member4, name: "Vivek", position: "AI & Control", department: "MITRA" },
    { img: member5, name: "Aakansha", position: "Mechanical Lead", department: "MITRA" },
    { img: member6, name: "Moni Praneeth", position: "Project Lead", department: "ANTHAHSAGIRI" },
    { img: member7, name: "Chanikya", position: "Competitions Head", department: "ANTHAHSAGIRI" },
    { img: member8, name: "Kameshwar", position: "ML Head", department: "ANTHAHSAGIRI" },
    { img: member9, name: "Srinidhi", position: "Design Head", department: "ANTHAHSAGIRI" },
    { img: member10, name: "Ajay Kartik", position: "Electronics & Control", department: "ANTHAHSAGIRI" },
    { img: member11, name: "Snehitha", position: "ML Core Team", department: "ANTHAHSAGIRI" },
    { img: member12, name: "Mir Maiti", position: "Project Lead", department: "INDRONE" },
    { img: member13, name: "Sagnik Debnath", position: "Multi Modal Project Lead", department: "INDRONE" },
    { img: member14, name: "Venkat Sai Teja", position: "Quantum Head", department: "INDRONE" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300 group"
            >
              <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden border-2 border-blue-700 group-hover:scale-110 transition-transform duration-300">
                <img
                  src={member.img}
                  alt={member.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm">{member.position}</p>
              <p className="text-gray-500 text-xs mt-1">{member.department}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
