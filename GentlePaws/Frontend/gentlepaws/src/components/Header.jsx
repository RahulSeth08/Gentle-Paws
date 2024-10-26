import React from 'react';
import { FaDog, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div id="menu" className="cursor-pointer"><FaBars /></div>
      <a href="#home" className="flex items-center text-2xl">
        <FaDog className="mr-2" /> GentlePaws
      </a>
      <nav className="flex space-x-4">
        {['home', 'category', 'features', 'products', 'offers', 'contact'].map(item => (
          <a href={`#${item}`} key={item} className="hover:underline">{item}</a>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <FaSearch className="cursor-pointer" />
        <FaHeart className="cursor-pointer" />
        <a href="/checkout" className="cursor-pointer"><FaShoppingCart /></a>
      </div>
      <form className="flex items-center">
        <input type="search" placeholder="Search at GentlePaws..." className="p-2 rounded" />
        <button type="submit" className="ml-2">
          <FaSearch />
        </button>
      </form>
    </header>
  );
};

export default Header;
