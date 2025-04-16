import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8" role="contentinfo" aria-label="Footer">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:flex md:items-center md:justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center mb-6 md:mb-0" aria-label="Go to homepage">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Provincial Justice</span>
        </Link>

        {/* Navigation */}
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium md:mb-0 gap-6">
          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:underline">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <hr className="my-6 border-gray-700" />

      {/* Bottom */}
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
        © 2024 <Link href="/" className="hover:underline">Provincial Justice™</Link>. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
