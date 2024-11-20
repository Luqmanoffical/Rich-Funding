import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { LampContainer } from "./Designfile/Lamp";
import consultant from "../assets/consultant.png"; // Replace with an actual image related to consultation

const Consulting = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true, // Animation occurs once while scrolling
    });
  }, []);

  return (
    <>
    
      <section id="consultation" className="overflow-x-hidden " >
        <div  className="relative min-h-screen overflow-hidden pt-20 font-poppins">
          {/* LampContainer positioned closer to the Header */}

          {/* Consultation Page Content */}
          <div   className="relative z-10 flex flex-col justify-center  md:p-10 min-h-screen">
            <div className="flex flex-col items-center mt-10 md:mt-20 text-white">
              {/* Page Header */}
              <h1
                className="font-bold text-3xl md:text-5xl font-poppins text-center"
                data-aos="fade-up"
              >
                Consultation Services
              </h1>

              {/* Introduction */}
              <p
                className="font-poppins  mt-4 max-w-3xl text-sm md:text-base m-5 lg:m-10  text-justify"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                At <span className="font-bold ">FundingRich.com</span>, we specialize in personalized financial consulting services to help you achieve your funding and financial goals. Our experts work closely with you to provide tailored advice and solutions that support your growth and success.
              </p>

              {/* Row Layout for Image and Contact Info */}
              <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-10 mt-10">
                {/* Image Section */}
                <div className="flex justify-center mb-6 lg:mb-0" data-aos="fade-right">
                  <img
                    src={consultant}
                    alt="Consultation"
                    className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px] rounded-lg transition-transform transform hover:scale-105"
                  />
                </div>

                {/* Contact Information */}
                <div className="text-center lg:text-left" data-aos="fade-left">
                  <h2 className="font-bold text-2xl md:text-3xl font-poppins">
                    Contact Joseph Choi
                  </h2>
                  <p className="mt-2 text-sm md:text-base">
                    42480 Moraga Rd, Suite# 303<br />
                    Temecula, CA 92591
                  </p>
                  <p className="mt-4 text-sm md:text-base">
                    Phone: <a href="tel:1-760-716-4170" className="underline hover:text-blue-300">1-760-716-4170</a><br />
                    Fax: 1-951-699-3202
                  </p>
                  <p  className="mt-4 text-sm md:text-base">
                    Email Me: <a href="mailto:richfunding@yahoo.com" className="underline hover:text-blue-300">richfunding@yahoo.com</a><br />
                    <a href="https://richfunding.wordpress.com/" target="_blank" rel="noopener noreferrer">
                      <button className="gradient-button mt-7">Visit my blog here</button>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Consulting;
