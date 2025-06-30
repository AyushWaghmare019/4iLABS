import React from 'react';
import { ArrowLeft, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project2 = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-300 hover:text-white mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Neural Interface Technology
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Revolutionary brain-computer interface that bridges the gap between human cognition and digital systems.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <img
              src="https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=800"
              alt="Neural Interface Technology"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Timeline</h3>
            <p className="text-gray-300">2022 - 2025</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Team Size</h3>
            <p className="text-gray-300">12 Researchers</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
            <p className="text-gray-300">Clinical Trials</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Our Neural Interface Technology project aims to create seamless communication between the human 
              brain and digital devices. This groundbreaking research opens new possibilities for medical 
              applications, enhanced human capabilities, and revolutionary human-machine interaction.
            </p>
            <p>
              The interface uses advanced neural signal processing and machine learning algorithms to decode 
              brain activity patterns and translate them into digital commands. Our non-invasive approach 
              ensures safety while maintaining high accuracy and responsiveness.
            </p>
            <h3 className="text-xl font-semibold text-white pt-4">Key Applications</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Assistive technology for paralyzed patients</li>
              <li>Enhanced cognitive processing capabilities</li>
              <li>Direct neural control of robotic systems</li>
              <li>Real-time thought-to-text communication</li>
              <li>Advanced prosthetic control systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;