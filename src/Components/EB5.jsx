import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons
import eb5 from '../assets/eb5.png';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility of the answer
  };

  const faqData = [
    {
      question: "What is EB-5?",
      answer:
        "Congress enacted the EB-5 immigrant visa category for aliens seeking to enter U.S. to engage in a commercial enterprise that will benefit the U.S. economy and create at least 10 full-time jobs. As a general rule, the immigrant must invest at least $1,000,000, although the amount may be $500,000 if the investment is made in a “targeted employment area.”",
    },
    {
      question: "What are the benefits of EB-5?",
      answer:
        "If an EB-5 application is approved, the alien becomes a conditional permanent resident for 2 years. In effect, through his investment, the alien and his family can secure a temporary green card. After 2 years, the person and his family file to remove the condition. If he/she has satisfied the conditions, then he and the family will receive a permanent green card.",
    },
    {
      question: "Is there an exception to the requirement that I must create 10 full-time jobs for U.S. workers?",
      answer:
        "Yes. If you invest in an USCIS-approved regional center, you do not need to directly create 10 full-time jobs. The requirement of creating at least 10 new jobs is met by a showing that as a result of the new enterprise, such jobs will be created directly or indirectly through revenues generated from job creation. In effect, if you invest in USCIS-approved regional center, only a creation of a few jobs may meet the 10 job requirement because an increase in a few jobs also leads to indirect job gains, the sum of which equals at least 10.",
    },
  ];

  return (
    <section id='eb5' className="py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - FAQ Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-[#aa3ea5] to-blue-500 text-center lg:text-left">
              EB-5 Program
            </h2>
            <p className="text-lg">
              Learn about the EB-5 visa program and its benefits for investors.
            </p>

            {faqData.map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <button
                  className="w-full text-left px-6 py-4 text-xl font-semibold text-white focus:outline-none flex items-center justify-between"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{item.question}</span>
                  <span className="ml-2">
                    {activeIndex === index ? (
                      <FaChevronUp className="text-[#aa3ea5]" />
                    ) : (
                      <FaChevronDown className="text-[#aa3ea5]" />
                    )}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="px-6 pb-6 text-base text-gray-300">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column - Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={eb5} // Replace with an actual image URL
              alt="EB-5 Image"
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
