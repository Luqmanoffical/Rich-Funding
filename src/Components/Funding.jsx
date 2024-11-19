import React, { useState } from 'react';
import { FaFileDownload } from 'react-icons/fa';
import propertyImage from '../assets/property1.jpg';
import cotton from '../assets/cotton.jpg'
import galway from '../assets/galway.webp'
import helmet from '../assets/helmet.webp'
import desol from '../assets/desol.jpeg'
import helcon from '../assets/helcon.jpg'
import parkstorage from '../assets/parkstorage.png'
import beach from '../assets/beach.webp'
import rio from '../assets/rio.webp'
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
    image: cotton,
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
    image: galway,
    location: 'Temecula, Southern California',
    description: `150,000+ square feet, 5-acre site, prime office space location.
                  High demand for office leasing in downtown LA.
                  Equity Requirement: 6 Million. Annual Net Operating Income: 3 Million.
                  Total Costs: $22 Million.`,
    pdf: '/path/to/pdf'
  },
  {
    title: '63 Acres, Hemet CA',
    investment: '8,000,000',
    image: helmet,
    location: 'Hemet CA',
    description: `Prime Development / Investment opportunity located in the heart of the majority of the new housing and commercial growth. Several key retail projects proposed. Priced to sell, asking $10,500,000 ($3.77/sf)`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Lomas Del Sol',
    investment: '80,000,000',
    image: desol,
    location: 'Coachella, California',
    description: `Lomas Del Sol is a 2,200 acre, 9070 unit master-planned resort community being proposed in Coachella, California which is approximately 20 miles east of Palm Springs, 70 miles east of Riverside, and 120 miles east of Los Angeles. The project consists of 2,200 acres with 9070 residential units, 1,100,000 SF of commercial, a 500 room hotel, three school sites, two golf courses, parks and open spaces.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Halcon Rojo Business Park',
    investment: '4,460,000',
    image: helcon,
    location: 'Lake Tahoe, California',
    description: `Proceeds will be used to pay off the balance of the Land Loan and to continue with the engineering and planning and permitting work of the project. Exit Strategy is to pay a portion the investment from procceds of the Construction Loan and the balance from proceeds of a Permanent Loan.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Rancho Pueblo Business Park and Super Storage',
    investment: '12,000,000',
    image: parkstorage,

    description: `This is a Premier mixed-use project consisting of 14.8 acres made up of 8-parcels: self-storage facility, five two-story A-class professional office buildings, and two restaurant pads. Most of the office space is already pre-sold and pre-leased. The restaurant pads are currently on the market for sale. This project is located in Temecula, halfway between Los Angeles and San Diego cities.`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Ventura Beach Ranch',
    investment: '18,000,000',
    image: beach,
    location: 'west coast, Ventura',
    description: `Located in one of the most popular places on the west coast, Ventura is the place to be! Especially on this Beach-Front property. Unique size and location, close to both Los Angeles and Santa Barbara areas, and easy access to the 101 freeway - this property is hard to beat!`,
    pdf: '/path/to/pdf'
  },
  {
    title: 'Rio Vistancia',
    investment: '1,000,000',
    image: rio,
    location: 'Colorado River in Needles, California',
    description: `Rio Vistancia is a 113 acre riverfront master-planned resort community located on the Colorado River in Needles, California. The site straddles both the Colorado River and Needles Highway, the main gateway for over 5 ½ million annual visitors to Laughlin, Nevada and only two miles off the busy Interstate 40 Freeway. It is just two to three hours away from Los Angeles, Orange, and Riverside Counties.`,
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
