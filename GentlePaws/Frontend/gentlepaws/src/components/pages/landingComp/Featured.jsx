import React from 'react';
import antislipSteps from "../../../assets/escada-pet.png";
import marmita from "../../../assets/marmita-para-pet.png";

const featuredProducts = [
  { img: antislipSteps, title: 'Pet Stairs with 4 Anti-Slip Steps', price: '₹249.99' },
  { img: marmita, title: 'Pet Food Container Stainless Steel', price: '₹139.90' },
];

export function Featured() {
  return (
    <section id="featured" className="py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">New Releases</h1>
      <div className="flex flex-wrap justify-center">
        {featuredProducts.map((product, index) => (
          <div key={index} className="m-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover" // Fixed height for uniformity
              />
              <div className="p-4 bg-white">
                <div className="text-lg font-semibold text-gray-700">{product.price}</div>
                <h3 className="font-semibold text-xl text-gray-800 mt-2">{product.title}</h3>
                <p className="text-gray-600 mt-1">Make Your Pet's Routine and Life Easier with Portable Stairs and Ramps!</p>
                <a
                  href="#"
                  className="mt-4 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-xl transition-shadow duration-200"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
