import React from 'react';
import { Heart } from "lucide-react";
import banner from '../../assets/banner.jpg';
import { useNavigate } from "react-router-dom";
import RotatingText from '../ui/RotatingText';

export function Hero() {
  const navigate = useNavigate();
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
          <div className="flex items-center justify-center min-h-[300px]">
            <div className='p-3 font-semibold text-2xl'>
              Discover
            </div>
            <RotatingText
              texts={["a Pet Adventure", "an Amazing Journey", "a Loving Bond"]}
              mainClassName="px-2 sm:px-2 md:px-3 font-semibold text-2xl bg-blue-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-xl"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.020}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

