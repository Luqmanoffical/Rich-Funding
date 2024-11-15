import React from "react";
import Logo from "../../assets/Logorich.png";

const Footer = () => {
  return (
    <footer className="bg-[#0e0c15] text-gray-300 py-8 border-t-2 border-[#aa3ea54f]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-center px-6 ">
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <img src={Logo} alt="Rich Realty" className="h-12 mb-2" />
          <p className="text-sm text-gray-400 text-center md:text-left leading-relaxed">
            Trusted solutions for property investments, buying, and selling.
          </p>
        </div>

        {/* Quick Links */}
        <nav className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-200 mb-4 uppercase tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {["About Us", "Properties", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="text-gray-400 hover:text-[#009ca0] transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold text-gray-200 mb-4 uppercase tracking-wide">
            Contact Us
          </h3>
          <p className="text-sm text-gray-400">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-[#009ca0]">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-sm text-gray-400">
            Email:{" "}
            <a href="mailto:info@richrealty.com" className="hover:text-[#009ca0]">
              info@richrealty.com
            </a>
          </p>
          <p className="text-sm text-gray-400">
            Address: 123 Realty Lane, Cityville, USA
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-6 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Rich Realty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
