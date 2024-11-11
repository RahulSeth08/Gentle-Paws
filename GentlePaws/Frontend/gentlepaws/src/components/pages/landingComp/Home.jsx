import React from 'react';
import banner from '../../../assets/beautiful-pet-portrait-dog.jpg';
import { Button } from "../../ui/Button"; // Adjust the import based on your project structure
import { Heart } from "lucide-react"; // Ensure this package is installed

export function Home() {
  return (
    <section
      id="home"
      className="flex h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="flex items-center justify-end w-full bg-gray-900 bg-opacity-50 p-6">
        <div className="text-right text-white">
          <span className="text-lg font-bold mb-2">Discounts up to 50%</span>
          <h3 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Affection & Care <br /> for Your Pet!
          </h3>
          {/* Replacing the original Start button with the new button */}
          <div className="flex items-center justify-center min-h-[300px]">
            <Button 
              className="group relative px-10 py-5 text-lg font-semibold transition-all duration-300 ease-out bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              <span className="relative z-10">Start Your Pet Journey</span>
              <Heart className="inline-block ml-2 w-6 h-6 transition-transform duration-300 ease-out group-hover:scale-110 group-hover:text-pink-200" />
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300 ease-out"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
