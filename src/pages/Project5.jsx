import React from 'react';
import { ArrowLeft, Calendar, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
<h1 className="text-5xl font-bold text-red-500 mb-6">
  Multimodal AI Poster Generator TEST UPDATE
</h1>

const Project5 = () => {
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
            Multimodal AI Poster Generator
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Empowering local businesses to create indigenous language posters using cutting-edge multimodal AI technology.
          </p>
        </div>

        <div className="mb-12">
          <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <img
              src="https://miro.medium.com/v2/resize:fit:1400/1*SqjUOFL-w7YD83mder4rYw.png"
              alt="Multimodal AI Poster Generator"
              className="w-full max-h-[500px] object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Timeline</h3>
            <p className="text-gray-300">2024 - Ongoing</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Team Size</h3>
            <p className="text-gray-300">6 Researchers</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
            <Target className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
            <p className="text-gray-300">Development Phase</p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Project Overview</h2>
          <div className="space-y-6 text-gray-300 leading-relaxed">
            <p>
              Multimodal AI is a cutting-edge field where the latest research is happening. 4i Labs is leveraging Multimodal AI to help local businesses create their own posters using reference images and indigenous languages, eliminating the dependency on professional designers.
            </p>
            <p>
              Our solution aims to resolve branding challenges faced by small to medium-scale businesses. We provide an indigenous text-to-image model capable of taking input images and prompts in local languages to generate posters with intelligent modifications tailored to cultural context.
            </p>
            <p>
              The team is extensively working on scraping well-captioned datasets, training indigenous LLMs from scratch, and fine-tuning state-of-the-art text-to-image models to ensure high quality, cultural relevance, and impactful visual outputs for our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project5;
