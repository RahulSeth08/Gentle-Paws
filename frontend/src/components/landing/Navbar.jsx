import React from "react";
import { Dog, ShoppingCart, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";  // Import ShadCN Button
import StaggeredDropDown from "./StaggeredDropDown";

// Singleton function for smooth scrolling
const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Navbar() {
  const navigate = useNavigate();

  // Check if the user is logged in by looking for JWT tokens in localStorage
  const isAuthenticated = Boolean(localStorage.getItem("access_token"));

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white shadow-lg">
      {/* Mobile Menu Icon */}
      <div id="menu" className="md:hidden cursor-pointer text-xl">
        <Menu />
      </div>

      {/* Logo */}
      <a href="/" className="flex items-center text-2xl font-semibold">
        <Dog size={38} className="mr-2 text-blue-500" />GentlePaws
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-lg font-medium">
        <button
          onClick={() => scrollToSection("home")}
          className="hover:text-blue-500 capitalize transition-colors duration-200 focus:outline-none"
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection("category")}
          className="hover:text-blue-500 capitalize transition-colors duration-200 focus:outline-none"
        >
          Category
        </button>
        <button
          onClick={() => scrollToSection("features")}
          className="hover:text-blue-500 capitalize transition-colors duration-200 focus:outline-none"
        >
          Features
        </button>
        <button
          onClick={() => navigate('/products')}
          className="hover:text-blue-500 capitalize transition-colors duration-200 focus:outline-none"
        >
          Products
        </button>
        <button
          onClick={() => scrollToSection("offers")}
          className="hover:text-blue-500 capitalize transition-colors duration-200 focus:outline-none"
        >
          Offers
        </button>
      </nav>

      {/* Conditional rendering for Authenticated User */}
      {isAuthenticated ? (
        <div className="flex items-center space-x-4">
          {/* Profile Button */}
          <StaggeredDropDown
            onClick={() => navigate('/profile')}
            variant="outline"
            className="text-white border-white hover:bg-blue-500 hover:border-blue-500 transition-colors duration-200 relative"
          >
            Profile
          </StaggeredDropDown>

          {/* Cart Button */}
          <Button
            onClick={() => navigate('/checkout')}
            className="text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 rounded-lg"
          >
            <ShoppingCart />
          </Button>
        </div>
      ) : (
        <div className="flex space-x-4">
          {/* Sign In Button */}
          <Button
            onClick={() => navigate('/signin')}
            variant="outline"
            className="text-white border-white hover:bg-blue-500 hover:border-blue-500 transition-colors duration-200"
          >
            Sign In
          </Button>

          {/* Get Started Button */}
          <Button
            onClick={() => navigate('/signup')}
            className="text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-200 rounded-lg"
          >
            Get Started
          </Button>
        </div>
      )}
    </header>
  );
}
