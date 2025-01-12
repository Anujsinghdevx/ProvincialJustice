import React from 'react';

const Navbar = () => {
  return (   
      <nav className="block w-full text-white bg-black shadow-md lg:px-8">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
          <a
            href="/"
            className="block cursor-pointer text-base text-gray-200 font-semibold"
          >
            <img src="logo.png" width={100} alt="Logo" />
          </a>

          <div className="hidden lg:block">
            <ul className="flex gap-8 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
              <li className="flex items-center p-1 text-sm text-gray-200">
                <a href="/" className="flex items-center text-xl hover:text-2xl transition-all">
                  Home
                </a>
              </li>
              <li className="flex items-center p-1 text-sm text-gray-200">
                <a href="about" className="flex items-center text-xl hover:text-2xl transition-all">
                  About
                </a>
              </li>
              <li className="flex items-center p-1 text-sm text-gray-200">
                <a href="contact" className="flex items-center text-xl hover:text-2xl transition-all ">
                  Contact Us
                </a>
              </li>
              <li className="flex items-center p-1 text-sm text-gray-200">
                <a href="support" className="flex items-center text-xl hover:text-2xl transition-all">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </span>
          </button>
        </div>
      </nav>
  );
};

export default Navbar;
