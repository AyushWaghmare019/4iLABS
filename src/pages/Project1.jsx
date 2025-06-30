import React from 'react';
import { ArrowLeft, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project1 = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 text-gray-300 hover:text-white mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Autonomous Navigation System
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Advanced AI-powered navigation system that enables robots to navigate complex environments 
            with unprecedented accuracy and efficiency.
          </p>
        </div>

        {/* Project Image */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <img
              src="https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=800"
              alt="Autonomous Navigation System"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Timeline</h3>
            <p className="text-gray-300">2023 - 2024</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Team Size</h3>
            <p className="text-gray-300">8 Researchers</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
            <p className="text-gray-300">In Development</p>
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Our Autonomous Navigation System represents a breakthrough in robotics and artificial intelligence. 
              By combining advanced computer vision algorithms with machine learning models, we've created a 
              system that can navigate complex, dynamic environments with human-like intuition and precision.
            </p>
            <p>
              The system utilizes state-of-the-art sensor fusion technology, integrating data from multiple 
              sources including LiDAR, cameras, and inertial measurement units. This multi-modal approach 
              ensures robust performance across various environmental conditions and scenarios.
            </p>
            <h3 className="text-xl font-semibold text-white pt-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Real-time obstacle detection and avoidance</li>
              <li>Dynamic path planning and optimization</li>
              <li>Adaptive learning from environmental changes</li>
              <li>Multi-robot coordination capabilities</li>
              <li>Robust performance in diverse lighting conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;