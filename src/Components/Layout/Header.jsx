import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import Logo from '../../assets/Logorich.png';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between p-2 bg-[#0e0c15] backdrop-blur-md sticky top-0 z-50">
      {/* Logo */}
      <img src={Logo} className="h-16" alt="Logo" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-grow justify-center">
        <ul className="flex space-x-8">
          {['home', 'investing', 'funding', 'eb5', 'consultation'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                activeClass="text-[#aa3ea5]"
                className={`text-gray-300 text-lg font-semibold transition-colors duration-300 hover:text-[#aa3ea5] cursor-pointer ${
                  activeSection === section
                    ? 'text-[#aa3ea5] underline decoration-[#aa3ea5] decoration-2 font-bold transition-all duration-300 ease-in-out transform scale-105'
                    : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="flex md:hidden ml-auto">
        <button
          className="text-gray-300 text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0e0c15] p-4 shadow-md md:hidden">
          <ul className="flex flex-col space-y-4">
            {['home', 'investing', 'funding', 'eb5', 'consultation'].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  activeClass="text-[#aa3ea5]"
                  className={`text-gray-300 text-lg font-semibold transition-colors duration-300 hover:text-[#aa3ea5] cursor-pointer ${
                    activeSection === section
                      ? 'text-[#aa3ea5] underline decoration-[#aa3ea5] decoration-2 font-bold transition-all duration-300 ease-in-out transform scale-105'
                      : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
