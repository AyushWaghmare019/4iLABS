import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import logo from "../assets/logo.jpg";
const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = async (sectionId) => {
    if (location.pathname !== '/') {
      await navigate('/');
      // Delay to ensure home is rendered
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-black/30 backdrop-blur-lg border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <img src={logo} alt="" />
            </div>
            <span className="text-xl font-bold text-white">4i LABS</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavClick('about')} className="nav-link text-white">About</button>
            <button onClick={() => handleNavClick('projects')} className="nav-link text-white">Projects</button>
            <button onClick={() => handleNavClick('members')} className="nav-link text-white">Members</button>
            <button onClick={() => handleNavClick('sponsors')} className="nav-link text-white">Sponsors</button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-gray-800/50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-lg">
            <button onClick={() => handleNavClick('about')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2">About</button>
            <button onClick={() => handleNavClick('projects')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2">Projects</button>
            <button onClick={() => handleNavClick('sponsors')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2">Sponsors</button>
            <button onClick={() => handleNavClick('members')} className="block w-full text-left text-gray-300 hover:text-white px-3 py-2">Members</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
