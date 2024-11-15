import React from 'react'

const Header = () => {
  return (
    <div>
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

    </div>
  )
}

export default Header
