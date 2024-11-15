import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import squareImage1 from '../assets/property3.jpg';
import squareImage2 from '../assets/property2.jpg';
import rectangleImage from '../assets/property1.jpg';
import './Designfile/Button.css';
import PropertyInvestmentSection from './Funding';
import Footer from './Layout/Footer';
import Investing from './Investing';
import Consulting from './Consultation';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Light and fast animation duration
      once: true, // Animation should only occur once
      easing: 'ease-out', // Smooth easing for animations
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0c15] via-[#0e0c15] to-[#0f3460] bg-fixed">
      {/* Header */}
      <header className="flex items-center p-4 bg-[#01000310] backdrop-blur-md sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-[#aa3ea5] mr-8">RichFunding</h1>
        <nav className="flex-grow flex justify-center">
          <ul className="flex space-x-8">
            {/* Navigation Links */}
            <li>
              <a href="#home" className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4">
                Investing
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4">
                Funding
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4">
                Consultation
              </a>
            </li>

            <li>
              <a href="#contact" className="text-gray-300 hover:text-[#aa3ea5] text-lg font-semibold transition-colors duration-300 hover:underline underline-offset-4">
               EB-5
              </a>
            </li>

            
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-10 min-h-screen">
        {/* Left Side: Text Content */}
        <div className="flex flex-col w-full md:w-1/2 space-y-4 mb-6 md:mb-0" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-200">Welcome to RichFunding</h1>
          <span className="text-[#ffff] text-lg">"The Resource for Investors"</span>
          <p className="text-lg md:text-xl text-gray-300">
            We  serve to help investors and sellers achieve their financial goals. I can help you maximize your investment potential! You can contact me anytime, any day of the week.
          </p>
          <div>
            <button className='gradient-button' data-aos="fade-up">Explore plans</button>
          </div>

          {/* Statistics Section */}
          <div className="flex space-x-8 mt-6" data-aos="fade-up">
            <div className="text-center bg-[#1f1a3d] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-4xl font-bold text-[#aa3ea5]">
                <CountUp end={500} duration={3} suffix="+" />
              </h2>
              <p className="text-gray-300">Completed Projects</p>
            </div>
            <div className="text-center bg-[#1f1a3d] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-4xl font-bold text-[#aa3ea5]">
                <CountUp end={1200} duration={3} suffix="+" />
              </h2>
              <p className="text-gray-300">Satisfied Customers</p>
            </div>
            <div className="text-center bg-[#1f1a3d] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-4xl font-bold text-[#aa3ea5]">
                <CountUp end={15} duration={3} suffix="+" />
              </h2>
              <p className="text-gray-300">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image Layout */}
        <div className="flex flex-col w-full md:w-1/2 items-center md:items-end" data-aos="fade-left">
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-2 mb-2">
            <img src={squareImage1} alt="Square 1" className="w-[250px] h-[200px] object-cover rounded-3xl shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up"/>
            <img src={squareImage2} alt="Square 2" className="w-[250px] h-[200px] object-cover rounded-3xl shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up"/>
          </div>
          <img src={rectangleImage} alt="Rectangle" className="w-[520px] h-[250px] object-cover rounded-3xl shadow-2xl transition-transform transform hover:scale-105" data-aos="zoom-in"/>
        </div>
      </section>
      <PropertyInvestmentSection/>
      <Investing/>
      <Consulting/>
      
    </div>
  );
};

export default HeroSection;
