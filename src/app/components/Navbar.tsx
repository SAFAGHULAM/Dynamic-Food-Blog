"use client";
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        {/* Brand Name */}
        <div className="text-white text-3xl font-bold">
          TastyBites
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white md:hidden focus:outline-none"
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-y-2 md:space-y-0 md:space-x-6 mt-4 md:mt-0`}
        >
          <li>
            <Link
              href="/"
              className="block text-white text-lg hover:underline"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block text-white text-lg hover:underline"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block text-white text-lg hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
