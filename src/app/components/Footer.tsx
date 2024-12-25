"use client";
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here, you could add the logic to handle the form submission, like saving the email.
    setMessage(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Branding Section */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-bold mb-2">TastyBites</h2>
            <p className="text-sm">Sharing the best recipes for every food lover!</p>
          </div>
          
          {/* Newsletter Section */}
          <div className="flex flex-col gap-6 mt-6 sm:mt-0 text-center">
            <h3 className="text-lg font-semibold">Subscribe to our Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-md text-black mb-2"
                required
              />
              <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-700">
                Subscribe
              </button>
            </form>
            {message && <p className="text-sm mt-4">{message}</p>}
          </div>
        </div>

        <div className="mt-8 border-t border-gray-600 pt-4 text-center">
          {/* Social Media Links with Icons */}
          <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-2xl text-white hover:text-blue-500 transition-colors duration-300">
              <FaFacebook />
            </a>
            <a href="#" className="text-2xl text-white hover:text-pink-500 transition-colors duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="text-2xl text-white hover:text-blue-400 transition-colors duration-300">
              <FaTwitter />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm">&copy; 2024 Food Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
