import React from 'react';
import { ArrowLeft, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const Project3 = () => {
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
            Quantum Computing Platform
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Next-generation quantum computing infrastructure that accelerates complex computational problems.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-br from-teal-500/20 to-blue-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <img
              src="https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=800"
              alt="Quantum Computing Platform"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Timeline</h3>
            <p className="text-gray-300">2021 - 2026</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Team Size</h3>
            <p className="text-gray-300">15 Researchers</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
            <p className="text-gray-300">Beta Testing</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Our Quantum Computing Platform provides researchers and industries with unprecedented processing 
              power for optimization, cryptography, and scientific simulation. This revolutionary system 
              harnesses the principles of quantum mechanics to solve complex problems exponentially faster 
              than classical computers.
            </p>
            <p>
              The platform features a scalable architecture with advanced error correction mechanisms and 
              intuitive programming interfaces. Our hybrid quantum-classical approach ensures optimal 
              performance across a wide range of computational tasks.
            </p>
            <h3 className="text-xl font-semibold text-white pt-4">Capabilities</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Quantum algorithm optimization</li>
              <li>Cryptographic security analysis</li>
              <li>Molecular simulation and drug discovery</li>
              <li>Financial modeling and risk analysis</li>
              <li>Machine learning acceleration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project3;