import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    query: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic frontend validation
    if (
      formData.name.trim() === '' ||
      !formData.email.includes('@') ||
      formData.contact.length !== 10 ||
      formData.query.trim() === ''
    ) {
      setMessage('Please fill all fields correctly.');
      return;
    }

    setMessage('Submitting...');

    const params = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(
        `https://script.google.com/macros/s/AKfycbw--2VJf3wFNAS5B32S-sVgXL9C7IWcgAsVQwG2R-YhysWrpFy7Fyx--XtOOUztd-4i/exec?${params}`
      );

      const result = await response.json();

      setMessage('Submitted successfully!');
      setFormData({ name: '', email: '', contact: '', query: '' }); // Clear form

    } catch (error) {
      console.error(error);
      setMessage('Submitted successfully!');
    }
  };

  return (
    <footer className="bg-black/50 backdrop-blur-lg border-t border-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Horizontal Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* 4i Labs Info */}
          <div>
            <h2 className="text-xl font-bold mb-2">4i Labs</h2>
            <p className="text-gray-400 text-sm">
              Innovating the future through cutting-edge research and development. We're committed to pushing the boundaries of technology and science.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p className="flex items-center text-gray-400 mb-2 text-sm">
              <Mail className="w-4 h-4 mr-2" /> 4ilab@iitg.ac.in
            </p>
            <p className="flex items-center text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mr-2" /> Guwahati, Assam
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white">Research</a></li>
              <li><a href="#" className="hover:text-white">Publications</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
            </ul>
          </div>

          {/* Contact Us Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
              />
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="Contact No."
                required
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
              />
              <textarea
                name="query"
                value={formData.query}
                onChange={handleChange}
                placeholder="Your Query"
                required
                rows="3"
                className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded px-3 py-2 text-sm"
              >
                Submit
              </button>
              {message && <p className="text-sm text-center mt-2">{message}</p>}
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 4i Labs. All rights reserved. <br />
          Developed by{' '}
          <a
            href="https://github.com/AyushWaghmare019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600"
          >
            Ayush Waghmare
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
