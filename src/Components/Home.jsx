import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Added import for Link from react-scroll
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import squareImage1 from '../assets/property3.jpg';
import squareImage2 from '../assets/property2.jpg';
import rectangleImage from '../assets/property1.jpg';
import pr from '../assets/pr.jpeg';
import './Designfile/Button.css';
import PropertyInvestmentSection from './Funding';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Investing from './Investing';
import Consulting from './Consultation';
import StickyScrollSection from './EB5';
import EB5 from './EB5';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out',
    });

    const handleScroll = () => {
      const sections = ['home', 'investing', 'funding', 'consultation', 'eb5'];
      let currentSection = '';
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0c15] via-[#0e0c15] to-[#0f3460] bg-fixed">
      
      <Header activeSection={activeSection} />

      {/* Hero Section */}
      <section id='home' className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 min-h-screen">
  {/* Left Side: Text Content */}
  <div className="flex flex-col w-full md:w-1/2 space-y-4 mb-6 md:mb-0" data-aos="fade-right">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-200">
      Welcome to <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6d378d] via-[#972491] to-[#6d378d]'>RichFunding </span>
    </h1>
    <span className="text-[#ffff] text-lg">"The Resource for Investors"</span>
    <p className="text-lg md:text-xl text-gray-300">
      We serve to help investors and sellers achieve their financial goals. I can help you maximize your investment potential! You can contact me anytime, any day of the week.
    </p>
    <div>
      <div className="absolute h-64 w-64 bg-[#aa3ea5] rounded-full blur-3xl top-10 left-10 opacity-[20%]"></div>
      <button className='gradient-button' data-aos="fade-up">Explore plans</button>
    </div>

    {/* Statistics Section */}
    <div className="flex flex-wrap md:flex-nowrap  md:space-x-8 mt-6 justify-center" data-aos="fade-up">
      <div className="flex flex-col items-center bg-[#1f1a3d] p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/3">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#aa3ea5]">
          <CountUp end={500} duration={3} suffix="+" />
        </h2>
        <p className="text-gray-300">Completed Projects</p>
      </div>
      <div className="flex flex-col items-center bg-[#1f1a3d] mt-1 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/3">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#aa3ea5]">
          <CountUp end={1200} duration={3} suffix="+" />
        </h2>
        <p className="text-gray-300">Satisfied Customers</p>
      </div>
      <div className="flex flex-col items-center bg-[#1f1a3d] mt-1 p-4 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-1/3">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#aa3ea5]">
          <CountUp end={15} duration={3} suffix="+" />
        </h2>
        <p className="text-gray-300">Years of Experience</p>
      </div>
    </div>
  </div>

  {/* Right Side: Image Layout */}
  <div className="flex flex-col w-full md:w-1/2 items-center md:items-end" data-aos="fade-left">
    {/* Image Grid */}
    <div className="grid grid-cols-2 gap-2 mb-4 md:mb-2">
      <img src={pr} alt="Square 1" className="w-full md:w-[250px] h-[200px] object-cover rounded-3xl shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up"/>
      <img src={squareImage2} alt="Square 2" className="w-full md:w-[250px] h-[200px] object-cover rounded-3xl shadow-lg transition-transform transform hover:scale-105" data-aos="fade-up"/>
    </div>
    <img src={rectangleImage} alt="Rectangle" className="w-full md:w-[520px] h-[250px] object-cover rounded-3xl shadow-2xl transition-transform transform hover:scale-105" data-aos="zoom-in"/>
  </div>
</section>

      <PropertyInvestmentSection />
      <Investing />
      <EB5 />
      <Consulting />
      <Footer />
    </div>
  );
};

export default HeroSection;
