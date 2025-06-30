import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Project1 from './pages/Project1.jsx';
import Project2 from './pages/Project2.jsx';
import Project3 from './pages/Project3.jsx';
import Project4 from './pages/Project4.jsx';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 relative overflow-hidden">
        {/* 3D Animated Background */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-gray-900 to-black"></div>
          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>
          <div className="floating-orb orb-3"></div>
          <div className="floating-orb orb-4"></div>
          <div className="floating-orb orb-5"></div>
        </div>
        
        <div className="relative z-10">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project1" element={<Project1 />} />
              <Route path="/project2" element={<Project2 />} />
              <Route path="/project3" element={<Project3 />} />
              <Route path="/project4" element={<Project4 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;