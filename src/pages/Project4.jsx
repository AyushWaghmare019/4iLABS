import React from 'react';
import { ArrowLeft, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project4 = () => {
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
            Sustainable Energy Systems
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Innovative renewable energy solutions that combine smart grid technology with advanced storage systems.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <img
              src="https://images.pexels.com/photos/9875395/pexels-photo-9875395.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=800"
              alt="Sustainable Energy Systems"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Timeline</h3>
            <p className="text-gray-300">2023 - 2027</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Team Size</h3>
            <p className="text-gray-300">10 Researchers</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
            <p className="text-gray-300">Pilot Phase</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Our Sustainable Energy Systems project focuses on creating innovative renewable energy solutions 
              that maximize efficiency while minimizing environmental impact. By integrating smart grid 
              technology with advanced storage systems, we're paving the way for a sustainable energy future.
            </p>
            <p>
              The system employs AI-driven optimization algorithms to balance energy production, storage, and 
              consumption in real-time. Our approach considers environmental factors, demand patterns, and 
              grid stability to ensure optimal performance and reliability.
            </p>
            <h3 className="text-xl font-semibold text-white pt-4">Key Innovations</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Adaptive energy management algorithms</li>
              <li>Advanced battery storage optimization</li>
              <li>Smart grid integration and control</li>
              <li>Renewable energy forecasting models</li>
              <li>Carbon footprint tracking and reduction</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project4;