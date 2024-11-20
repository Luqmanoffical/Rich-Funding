import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
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

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0e0c15] via-[#0e0c15] to-[#0f3460] bg-fixed">
      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Hero Section */}
      <section
  id="home"
  className="flex w-full flex-col  md:flex-row items-center pt-20 mt-0 lg:-mt-20 justify-between p-6 md:p-10 min-h-screen space-y-6 md:space-y-0"
>
  {/* Left: Hero Content */}
  <div
    className="flex flex-col px-6 w-full md:w-1/2 space-y-6"
    data-aos="fade-right"
  >
    <h1 className="text-3xl md:text-5xl font-bold text-gray-200">
      Welcome to{' '}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6d378d] via-[#972491] to-[#6d378d]">
        RichFunding
      </span>
    </h1>
    <span className="text-lg text-[#ffff]">"The Resource for Investors"</span>
    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
      We serve to help investors and sellers achieve their financial goals.
      Maximize your investment potential! Contact us anytime, any day of the week.
    </p>
    <button
      className="gradient-button w-fit"
      data-aos="fade-up"
    >
      Explore Plans
    </button>

    {/* Statistics */}
    <div
      className="flex flex-wrap md:flex-nowrap md:space-x-6 mt-6 justify-center gap-y-4"
      data-aos="fade-up"
    >
      {[
        { count: 500, label: 'Completed Projects' },
        { count: 1200, label: 'Satisfied Customers' },
        { count: 15, label: 'Years of Experience' },
      ].map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-[#1f1a3d] p-4 rounded-lg shadow-lg w-full sm:w-1/3 transform hover:scale-105 transition-transform"
        >
          <h2 className="text-2xl sm:text-4xl md:text-lg  lg:text-3xl font-bold text-[#aa3ea5]">
            <CountUp end={stat.count} duration={3} suffix="+" />
          </h2>
          <p className="text-gray-300">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Right: Image Grid */}
  <div
    className="flex flex-col  w-full md:w-1/2 items-center md:items-end gap-4 "
    data-aos="fade-left"
  >
    {/* Image Grid */}
    <div className="grid grid-cols-2 gap-2 md:gap-4">
      <img
        src={pr}
        alt="Square 1"
        className="w-full md:w-[250px] h-[200px] object-cover rounded-3xl shadow-lg transition-transform hover:scale-105"
      />
      <img
        src={squareImage2}
        alt="Square 2"
        className="w-full md:w-[250px] h-[200px] object-cover rounded-3xl shadow-lg transition-transform hover:scale-105"
      />
    </div>
    <img
      src={rectangleImage}
      alt="Rectangle"
      className="w-full md:w-[300px] lg:w-[520px] h-[200px] md:h-[250px] object-cover rounded-3xl shadow-2xl transition-transform hover:scale-105"
    />
  </div>
</section>


      {/* Other Sections */}
      <PropertyInvestmentSection />
      <Investing />
      <EB5 />
      <Consulting    />
      <Footer />
    </div>
  );
};

export default HeroSection;
