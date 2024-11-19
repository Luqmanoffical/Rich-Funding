import React from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import Logo from '../../assets/Logorich.png';

const Footer = () => {
  return (
    <div>
      {/* Main Footer Section */}
      <footer className="bg-[#0e0c15] py-10">
        <div className="max-w-screen-xl mx-auto text-center text-white px-6">
          {/* Logo */}
          <div className="mb-6">
            <img src={Logo} alt="Logo" className="mx-auto h-16 w-auto" />
          </div>

          {/* Description */}
          <p className="text-lg font-light max-w-2xl mx-auto mb-8 leading-relaxed">
            Building bridges to brighter futures. Discover opportunities with RichFunding and take the first step toward success.
          </p>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm uppercase font-medium tracking-wide mb-8">
            <li>
              <a href="#home" className="hover:text-[#aa3ea5] transition-colors duration-300 cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#investing" className="hover:text-[#aa3ea5] transition-colors duration-300 cursor-pointer">
                Investing
              </a>
            </li>
            <li>
              <a href="#funding" className="hover:text-[#aa3ea5] transition-colors duration-300 cursor-pointer">
                Funding
              </a>
            </li>
            <li>
              <a href="#eb5" className="hover:text-[#aa3ea5] transition-colors duration-300 cursor-pointer">
                EB-5
              </a>
            </li>
            <li>
              <a href="#consultation" className="hover:text-[#aa3ea5] transition-colors duration-300 cursor-pointer">
                Consultation
              </a>
            </li>
            <li>
              <a href="https://richfunding.wordpress.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#aa3ea5] transition-colors duration-300 cursor-pointer">
                Blog
              </a>
            </li>
          </ul>

          {/* Divider */}
          <div className="border-t border-gray-600 my-8"></div>

          {/* Contact Information */}
          <p className="text-sm text-gray-400 mb-4">
            If you can’t find the answer to your questions, reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm items-center">
            <div className="flex items-center space-x-2 text-[#aa3ea5] cursor-pointer hover:text-teal-400 transition duration-300">
              <FaPhoneAlt className="text-lg" />
              <span>1-760-716-4170</span>
            </div>
            <div className="flex items-center space-x-2 text-[#aa3ea5] cursor-pointer hover:text-teal-400 transition duration-300">
              <FaEnvelope className="text-lg" />
              <span>richfunding@yahoo.com</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-gray-900 flex flex-col md:flex-row justify-between items-center text-white py-4 px-6">
        {/* Left: First Paragraph */}
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          Designed and Developed by <span className="text-[#aa3ea5]">Glaxit</span>.
        </p>

        {/* Center: Second Paragraph */}
        <p className="text-xs text-gray-400 text-center mb-4 md:mb-0">
          © 2008 Mountain Top Media & RichFundingLLC. All Rights Reserved.
        </p>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#aa3ea5] transition duration-300"
          >
            <FaFacebookF className="text-lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#aa3ea5] transition duration-300"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#aa3ea5] transition duration-300"
          >
            <FaLinkedinIn className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
