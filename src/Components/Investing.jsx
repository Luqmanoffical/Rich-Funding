import React, { useState } from 'react';
import imger from '../assets/property1.jpg';

const Investing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (type) => {
    setModalContent(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id='funding' className=''>
      <section  className="py-12 pt-0 lg:pt-20 ">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">Loan Offers</h2>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto text-justify">
            At <span className="font-semibold text-[#aa3ea5]">RichFunding.com</span>, we understand the importance of reliable financing for your business and personal needs. 
            Our loan offerings provide flexible options tailored to various ventures, from commercial real estate investments to small business expansion. 
            With competitive rates, customizable terms, and quick approval processes, RichFunding.com is committed to supporting your financial growth and success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Commercial Loan Card */}
            {[{
              title: "Commercial Loan",
              description: "Finance your commercial property investments.",
              onClick: () => openModal('commercial')
            }, {
              title: "Land purchase Loan",
              description: "Secure funds to buy land for future projects.",
              onClick: () => openModal('multifamily')
            }, {
              title: "Construction Loan",
              description: "Funding for new construction or renovation projects.",
              onClick: () => openModal('mixeduse')
            }, {
              title: " bussiness Loan",
              description: "Get capital to grow your small business.",
              onClick: () => openModal('industrial')
            }].map((card, index) => (
              <div
                key={index}
                className="bg-[#1f1a3d] p-8 rounded-lg shadow-xl  transform transition hover:scale-105 hover:shadow-2xl border-t-4 border-[#aa3ea5]  text-center relative"
              >
                <img
                  src={imger}
                  alt={card.title}
                  className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-[#aa3ea5] transform hover:rotate-6 hover:scale-110 transition duration-300"
                />
                <h3 className="text-2xl font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 mt-2 mb-4">{card.description}</p>
                <button onClick={card.onClick} className="gradient-button">
                  Read more!
                </button>
              </div>
            ))}
          </div>

          {/* Modal for Loan Types */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
              <div className="bg-[#1a1a2e] text-white p-10 rounded-3xl shadow-2xl w-full h-full max-w-5xl max-h-full overflow-auto transform transition duration-500 ease-in-out scale-105">
                <button onClick={closeModal} className="text-gray-500 absolute top-4 right-4 text-4xl font-bold hover:text-[#e94057] transform transition-all ease-in-out">
                  &times;
                </button>
                <h2 className="text-4xl font-semibold text-[#aa3ea5] mb-6">
                  {modalContent === 'commercial' && 'Commercial Loan - Stated Income Product'}
                  {modalContent === 'multifamily' && 'Multifamily Loan - Stated Income Product'}
                  {modalContent === 'mixeduse' && 'Mixed-Use Loan - Stated Income Product'}
                  {modalContent === 'industrial' && 'Industrial Loan - Stated Income Product'}
                </h2>
                <div className="space-y-6 text-lg text-gray-300 text-left justify-start">
                  <p>
                    <strong>Stated Income for All Types of {modalContent === 'commercial' ? 'Commercial' : modalContent === 'multifamily' ? 'Multifamily' : modalContent === 'mixeduse' ? 'Mixed-Use' : 'Industrial'} Properties:</strong>
                    Richfunding.com is excited to announce the release of a stated income loan product for the real estate investment community. 
                    The bank will no longer require the borrowers’ tax returns for all financing requests. This program allows the bank to rely on:
                    <ul className="list-disc ml-6 mt-2 text-gray-200">
                      <li>Current personal financial statement and proof of assets.</li>
                      <li>Verification that the debt service on the bank’s loan is at least equal to the Net Operating Income (NOI) of the property.</li>
                      <li>Debt coverage ratio of no less than 1.00 : 1.00.</li>
                    </ul>
                  </p>
                  <p>
                    <strong>Loan Terms:</strong>
                    <ul className="list-disc ml-6 mt-2 text-gray-200">
                      <li>Maximum loan-to-value: 60% of the appraisal or purchase price, whichever is less.</li>
                      <li>Minimum down payment: 20%, with an option for a 20% second loan (payments do not count against cash flow analysis).</li>
                      <li>Full recourse to the borrower.</li>
                      <li>Interest rate and margin increased by 50 basis points over the standard loan pricing grid.</li>
                    </ul>
                  </p>
                  <p>
                    This loan is ideal for clients who:
                    <ul className="list-disc ml-6 mt-2 text-gray-200">
                      <li>Have Debt to Income (DTI) ratios greater than 50%.</li>
                      <li>Do not have filed taxes for the most recent tax year or a year-to-date profit and loss statement.</li>
                      <li>Have good liquidity and net worth but low reported taxable income.</li>
                    </ul>
                  </p>
                  <p>
                    <strong>To apply, please provide the following via email:</strong>
                    <ul className="list-disc ml-6 mt-2 text-gray-200">
                      <li>Property: Brief cover letter, property description, current rent roll, and YTD & previous 2 years operating statements.</li>
                      <li>Personal: 1003 form, current personal financial statement, credit report(s), and key pages of personal and corporate taxes.</li>
                    </ul>
                  </p>
                  <p>
                    <strong>Contact:</strong> For more details, contact Joseph Choi at 1-888-417-5598 ext. 1# or email richfunding@yahoo.com.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Investing;
