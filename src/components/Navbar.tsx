'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="block w-full px-0 md:px-10  bg-black shadow-md text-white" role="navigation" aria-label="Main Navigation">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Go to homepage">
          <Image src="/logo.png" height={60} width={60} alt="Website Logo" priority />
          <span className="ml-2 text-xl md:text-3xl font-bold text-gray-100">Provincial Justice</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex gap-8 items-center">
            <li>
              <Link href="/" className="text-lg text-gray-200 hover:text-white transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg text-gray-200 hover:text-white transition-all">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-lg text-gray-200 hover:text-white transition-all">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/support" className="text-lg text-gray-200 hover:text-white transition-all">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-200 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="w-full mt-4 lg:hidden">
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-200 hover:text-white transition-all">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-200 hover:text-white transition-all">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-200 hover:text-white transition-all">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" onClick={() => setIsMenuOpen(false)} className="block text-lg text-gray-200 hover:text-white transition-all">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
