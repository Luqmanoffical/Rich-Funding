import React, { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import propertyImage from '../assets/property1.jpg';
import './Designfile/Button.css';

const investments = [ 
  '100,000 - 500,000',
  '500,000 - 1,000,000',
  '1,000,000 - 5,000,000',
  '5,000,000 - 10,000,000',
  '10,000,000 - 25,000,000',
  '25,000,000 - 50,000,000',
  '50,000,000 - 75,000,000',
  '75,000,000 - 100,000,000',
  '100,000,000 - 1,000,000,000'
];

const properties = [
  {
    title: 'Cottonwood Retail Center',
    investment: '5,400,000',
    image: propertyImage,
    location: 'San Jacinto, Riverside County, California',
    description: `73,800+ square feet, 11.28-acre site, zoned for commercial/retail uses.
                  High growth area of Hemet Valley with many credit tenants vying for position.
                  Equity Requirement: 3.7 Million. Annual Net Operating Income: 1.4+ Million.
                  Total Costs: $18.4 Million.`,
    pdf: '/path/to/pdf'
  },
  {
    title: ' Galway Downs',
    investment: '20,000,000',
    image: propertyImage,
    location: 'Temecula, Southern California',
    description: `150,000+ square feet, 5-acre site, prime office space location.
                  High demand for office leasing in downtown LA.
                  Equity Requirement: 6 Million. Annual Net Operating Income: 3 Million.
                  Total Costs: $22 Million.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Sunset Heights Residential',
    investment: '3,200,000',
    image: propertyImage,
    location: 'Phoenix, Arizona',
    description: `45,000+ square feet, 10-acre site, zoned for residential use.
                  High-end residential development in a growing market.
                  Equity Requirement: 2 Million. Annual Net Operating Income: 800K.
                  Total Costs: $10 Million.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Riverfront Mall Expansion',
    investment: '8,000,000',
    image: propertyImage,
    location: 'Chicago, Illinois',
    description: `120,000+ square feet, 15-acre site, mixed-use commercial space.
                  Growing demand for retail and commercial spaces.
                  Equity Requirement: 4 Million. Annual Net Operating Income: 2 Million.
                  Total Costs: $18 Million.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Lakeside Luxury Condominiums',
    investment: '10,500,000',
    image: propertyImage,
    location: 'Lake Tahoe, California',
    description: `50,000+ square feet, 3-acre waterfront site, zoned for luxury condos.
                  High potential for rental income in prime tourist location.
                  Equity Requirement: 5 Million. Annual Net Operating Income: 1.5 Million.
                  Total Costs: $30 Million.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Cityview Tower Redevelopment',
    investment: '15,000,000',
    image: propertyImage,
    location: 'San Francisco, California',
    description: `200,000+ square feet, 10-acre site, commercial/office redevelopment.
                  Prime location with high demand for office space in the city.
                  Equity Requirement: 7 Million. Annual Net Operating Income: 5 Million.
                  Total Costs: $40 Million.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Mountain Ridge Resort',
    investment: '7,000,000',
    image: propertyImage,
    location: 'Aspen, Colorado',
    description: `100,000+ square feet, 20-acre resort development.
                  Prime location for luxury resorts and vacation homes.
                  Equity Requirement: 3.5 Million. Annual Net Operating Income: 2 Million.
                  Total Costs: $20 Million.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Golden Valley Business Park',
    investment: '9,000,000',
    image: propertyImage,
    location: 'Dallas, Texas',
    description: `130,000+ square feet, 8-acre site, industrial park development.
                  High demand for warehouse and distribution centers.
                  Equity Requirement: 4.5 Million. Annual Net Operating Income: 2.5 Million.
                  Total Costs: $25 Million.`,
    pdf: '/path/to/pdf'
  }
];

const PropertyInvestmentSection = () => {
  const [selectedInvestment, setSelectedInvestment] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState(properties);

  const filterProperties = (investmentRange) => {
    if (investmentRange === 'All') {
      setSelectedInvestment(null);
      setFilteredProperties(properties);
      return;
    }

    setSelectedInvestment(investmentRange);
    const [min, max] = investmentRange.split(' - ').map(val => parseInt(val.replace(/,/g, '')));
    const filtered = properties.filter(property => {
      const investment = parseInt(property.investment.replace(/,/g, ''));
      return investment >= min && investment <= max;
    });
    setFilteredProperties(filtered);
  };

  return (
    <div id="investing" className="flex flex-col items-center py-16 px-6 lg:px-20">
      {/* Main Headings */}
      <h1 className="text-4xl font-bold text-center mb-4 text-white">
        Investment Opportunity
      </h1>
      <h2 className="text-2xl font-semibold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#6d378d] via-[#972491] to-[#6d378d]">
        Explore all Investment Properties
      </h2>

      <div className="flex flex-col lg:flex-row w-full">
        {/* Sidebar Filter with Sticky Position */}
        <div className="w-full lg:w-1/4 pr-6 lg:sticky lg:top-4 h-full">
          <h3 className="text-xl font-bold text-gray-200  mt-0 lg:mt-20 mb-6">Filter by Investment</h3>
          <button
            onClick={() => filterProperties('All')}
            className={`w-full px-4 py-2 mb-2 text-sm font-semibold rounded-lg transition-colors ${selectedInvestment === null ? 'bg-[#aa3ea5] text-white' : 'bg-gray-700 text-gray-300'} hover:bg-[#aa3ea5] hover:text-white`}
          >
            All
          </button>
          {investments.map((range, index) => (
            <button
              key={index}
              onClick={() => filterProperties(range)}
              className={`w-full px-4 py-2 mb-2 text-sm font-semibold rounded-lg transition-colors ${selectedInvestment === range ? 'bg-[#aa3ea5] text-white' : 'bg-gray-700 text-gray-300'} hover:bg-[#aa3ea5] hover:text-white`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* Property Cards */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property, index) => (
              <div
                key={index}
                className="bg-[#1f1a3d] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-6 border border-gray-700"
              >
                {/* Image with Rounded Corners and Hover Effect */}
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl text-white font-semibold">{property.title}</h3>
                  <p className="text-gray-400 text-sm italic">{property.location}</p>
                  <p className="text-gray-300 leading-relaxed">{property.description}</p>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xl font-semibold text-[#aa3ea5]">{`$${property.investment}`}</span>
                    <a
                      href={property.pdf}
                      className="text-sm font-semibold text-[#aa3ea5] flex items-center hover:text-white"
                    >
                      <FaFileDownload className="mr-2" />
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white">No properties available in this investment range.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyInvestmentSection;
