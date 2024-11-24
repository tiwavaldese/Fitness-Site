import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="text-white hover:text-gray-400">Fitness Site</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#programs" className="hover:text-gray-400">Programs</a>
          <a href="#testimonials" className="hover:text-gray-400">Testimonials</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 bg-gray-800 text-white text-center space-y-4">
          <a href="#about" className="block py-2">About</a>
          <a href="#programs" className="block py-2">Programs</a>
          <a href="#testimonials" className="block py-2">Testimonials</a>
          <a href="#contact" className="block py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
