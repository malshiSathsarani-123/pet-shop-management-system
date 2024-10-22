import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent py-4 px-5 md:px-20 flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-900">Monito</div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-10">
        <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
        <Link to="/category" className="text-gray-700 hover:text-blue-600">Category</Link>
        <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
      </nav>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        {/* Add your hamburger icon here */}
        <button className="text-gray-700 hover:text-blue-600 focus:outline-none">
          {/* Example SVG for a hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Search bar and buttons */}
      <div className="flex items-center space-x-4">
        {/* Search bar */}
        <div className="flex items-center bg-white border rounded-full shadow-md p-2 w-64 md:w-72">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search something here!"
            className="ml-2 w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
          />
        </div>

        {/* Action Buttons */}
        <button className="bg-blue-600 text-white py-2 px-4 rounded-full">
          Join the community
        </button>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-full">
          VND
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
