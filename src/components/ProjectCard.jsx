import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  link, 
  reversed = false, 
  isEmpty = false 
}) => {
  if (isEmpty) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-16">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-64 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-gray-400">+</span>
            </div>
            <p className="text-gray-400">Coming Soon</p>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-64 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-400 mb-2">Future Project</h3>
            <p className="text-gray-500">Details to be announced</p>
          </div>
        </div>
      </div>
    );
  }

  const content = (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      {link && (
        <Link
          to={link}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 group"
        >
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      )}
    </div>
  );

  const imageContent = (
    <div className="relative">
      <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
        <img
          src={image || "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=300&w=400"}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
      {reversed ? (
        <>
          {imageContent}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageContent}
        </>
      )}
    </div>
  );
};

export default ProjectCard;