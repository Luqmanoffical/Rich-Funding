import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center p-4 bg-[#01000310] backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-[#aa3ea5] mr-8">RichFunding</h1>
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-8">
            {/* Navigation Links */}
            <li>
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="investing" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer"
              >
                Investing
              </Link>
            </li>
            <li>
              <Link 
                to="funding" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer"
              >
                Funding
              </Link>
            </li>
            <li>
              <Link 
                to="consultation" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer"
              >
                Consultation
              </Link>
            </li>
            <li>
              <Link 
                to="eb5" 
                smooth={true} 
                duration={500} 
                activeClass="active"
                className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4 cursor-pointer"
              >
                EB-5
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
