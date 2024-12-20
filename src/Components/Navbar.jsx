import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-opacity-55 bg-darkForestGreen text-softBeige">
      <div className="h-[60px] flex justify-between items-center px-4 sm:px-10">
        {/* Logo */}
        <div className="text-2xl font-bold cursor-pointer sm:text-3xl">
          <h1>HerBal HaVen</h1>
        </div>

        {/* Desktop Nav Links */}
        <ul className="items-center hidden space-x-8 font-bold sm:flex text-creamyWhite">
          <li className="transition-all duration-300 hover:text-rusticOrange">
            <a href="#home">Home</a>
          </li>
          <li className="transition-all duration-300 hover:text-rusticOrange">
            <a href="#about">About Us</a>
          </li>
          <li className="transition-all duration-300 hover:text-rusticOrange">
            <a href="#shop">Shop</a>
          </li>
          <li className="transition-all duration-300 hover:text-rusticOrange">
            <a href="#blog">Blog</a>
          </li>
          <li className="transition-all duration-300 hover:text-rusticOrange">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-creamyWhite"
          >
            {isMobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 transition-transform transform rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 transition-transform transform rotate-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-[300px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-6 bg-darkForestGreen text-creamyWhite">
          <li className="text-lg transition-all duration-300 hover:text-rusticOrange">
            <a href="#home">Home</a>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-rusticOrange">
            <a href="#about">About Us</a>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-rusticOrange">
            <a href="#shop">Shop</a>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-rusticOrange">
            <a href="#blog">Blog</a>
          </li>
          <li className="text-lg transition-all duration-300 hover:text-rusticOrange">
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
