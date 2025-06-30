import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">4i Labs</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Innovating the future through cutting-edge research and development. 
              We're committed to pushing the boundaries of technology and science.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4" />
                <span>contact@4ilabs.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Innovation District, Tech City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Research
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Publications
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Careers
              </a>
              <a href="#" className="block text-gray-400 hover:text-white text-sm transition-colors duration-200">
                News
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2024 4i Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;