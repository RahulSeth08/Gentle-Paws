import React from 'react';
import { FaDog, FaHeart, FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-lg">
      {/* Mobile Menu Icon */}
      <div id="menu" className="md:hidden cursor-pointer text-xl">
        <FaBars />
      </div>

      {/* Logo */}
      <a href="#home" className="flex items-center text-3xl font-semibold">
        <FaDog className="mr-2 text-blue-500" /> GentlePaws
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        {['home', 'category', 'features', 'products', 'offers', 'contact'].map((item) => (
          <a href={`#${item}`} key={item} className="hover:text-blue-500 capitalize transition-colors duration-200">
            {item}
          </a>
        ))}
      </nav>

      {/* Icons & Cart */}
      <div className="flex items-center space-x-6">
        <FaSearch className="cursor-pointer hidden md:block text-xl" />
        <FaHeart className="cursor-pointer text-xl hover:text-blue-500 transition-colors duration-200" />
        <a href="/checkout" className="cursor-pointer text-xl hover:text-blue-500 transition-colors duration-200">
          <FaShoppingCart />
        </a>
      </div>

      {/* Search Form */}
      <form className="hidden md:flex items-center ml-4">
        <input 
          type="search" 
          placeholder="Search at GentlePaws..." 
          className="p-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="ml-2 text-blue-500 hover:text-blue-700 transition-colors duration-200">
          <FaSearch />
        </button>
      </form>
    </header>
  );
}
