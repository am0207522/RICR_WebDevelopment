import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-orange-500 backdrop-blur-lg border-b border-gray-200 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 text-2xl font-bold text-blue-600"
        >
          <div className="p-2 bg-blue-100 rounded-xl">
            <FaStore className="text-blue-600 text-xl" />
          </div>
        
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-blue-700 font-medium hover:text-blue-500 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="text-blue-700 font-medium hover:text-blue-500 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/product"
            className="text-blue-700 font-medium hover:text-blue-500 transition duration-300"
          >
            Products
          </Link>

          <Link
            to="/contactUs"
            className="text-blue-700 font-medium hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;