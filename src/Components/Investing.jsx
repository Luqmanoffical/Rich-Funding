import React from 'react';
import imger from '../assets/property1.jpg';

const Investing = () => {
  return (
    <div>
      <section className="py-12 ">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Loan Offers</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            At <span className="font-semibold text-[#aa3ea5]">RichFunding.com</span>, we understand the importance of reliable financing for your business and personal needs. 
            Our loan offerings provide flexible options tailored to various ventures, from commercial real estate investments to small business expansion. 
            With competitive rates, customizable terms, and quick approval processes, RichFunding.com is committed to supporting your financial growth and success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Loan Card */}
            {[
              {
                title: "Commercial Loan",
                description: "Finance your commercial property investments.",
              },
              {
                title: "Land Purchase Loan",
                description: "Secure funds to buy land for future projects.",
              },
              {
                title: "Construction Loan",
                description: "Funding for new construction or renovation projects.",
              },
              {
                title: "Small Business Loan",
                description: "Get capital to grow your small business.",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#1f1a3d] p-8 rounded-lg shadow-lg transform transition hover:scale-105 hover:shadow-2xl border-t-4 border-[#aa3ea5] hover:border-[#e94057] text-center"
              >
                <img
                  src={imger}
                  alt={card.title}
                  className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-[#aa3ea5] transform hover:rotate-6 hover:scale-110 transition duration-300"
                />
                <h3 className="text-2xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 mt-2 mb-4">{card.description}</p>
                <button className="gradient-button">
                  Learn More
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Investing;
