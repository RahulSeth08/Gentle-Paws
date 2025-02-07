import { Link } from "react-router-dom";
import { PawPrintIcon as Paw } from "lucide-react";
import Pet_1 from "../../assets/Pet_1.png";
import Pet_2 from "../../assets/Pet_2.png";
import Pet_3 from "../../assets/Pet_3.png";
import Pet_4 from "../../assets/Pet_4.png";

export function Category() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl text-center font-medium text-gray-800 mb-12 flex items-center justify-center gap-2">
        <Paw className="w-8 h-8 text-blue-400" />
        Pet Food By Category
        <Paw className="w-8 h-8 text-blue-400" />
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <div className="bg-gray-50 rounded-full" />
            <img
              src={Pet_1}
              alt="Dog Food"
              className="w-full h-full object-contain p-4"
            />
          </div>
          <h2 className="text-xl font-medium text-gray-800 mb-3">Dog Food</h2>
          <Link
            to="/products"
            className="inline-block bg-blue-500 text-gray-200 px-6 py-2 rounded-md font-medium 
                     shadow-[2px_2px_8px_rgba(0,0,0,0.2)] 
                     hover:bg-indigo-500 transition-colors duration-200"
          >
            Buy Now
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <div className=" bg-gray-50 rounded-full" />
            <img
              src={Pet_2}
              alt="Rabbit Food"
              className="w-full h-full object-contain p-4"
            />
          </div>
          <h2 className="text-xl font-medium text-gray-800 mb-3">Rabbit Food</h2>
          <Link
            to="/products"
            className="inline-block bg-blue-500 text-gray-200 px-6 py-2 rounded-md font-medium 
                     shadow-[2px_2px_8px_rgba(0,0,0,0.2)] 
                     hover:bg-indigo-500 transition-colors duration-200"
          >
            Buy Now
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <div className="bg-gray-50 rounded-full" />
            <img
              src={Pet_3}
              alt="Cat Food"
              className="w-full h-full object-contain p-4"
            />
          </div>
          <h2 className="text-xl font-medium text-gray-800 mb-3">Cat Food</h2>
          <Link
            to="/products"
            className="inline-block bg-blue-500 text-gray-200 px-6 py-2 rounded-md font-medium 
                     shadow-[2px_2px_8px_rgba(0,0,0,0.2)] 
                     hover:bg-indigo-500 transition-colors duration-200"
          >
            Buy Now
          </Link>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-48 h-48 mb-4">
            <div className="bg-gray-50 rounded-full" />
            <img
              src={Pet_4}
              alt="Bird Food"
              className="w-full h-full object-contain p-4"
            />
          </div>
          <h2 className="text-xl font-medium text-gray-800 mb-3">Bird Food</h2>
          <Link
            to="/products"
            className="inline-block bg-blue-500 text-gray-200 px-6 py-2 rounded-md font-medium 
                     shadow-[2px_2px_8px_rgba(0,0,0,0.2)] 
                     hover:bg-indigo-500 transition-colors duration-200"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
}
