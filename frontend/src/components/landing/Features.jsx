import React from "react";
import { motion } from "framer-motion";

export function Features() {
  return (
    <div className="w-full bg-gray-900">
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
          <h2 className="max-w-lg text-4xl font-bold text-white md:text-5xl">
            Keep your pets happy and healthy with our
            <span className="text-gray-400"> premium pet food solutions</span>
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-xl bg-white px-4 py-2 font-medium text-gray-900 shadow-xl transition-colors hover:bg-gray-200"
          >
            Learn more
          </motion.button>
        </div>
        <div className="mb-4 grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Custom Meal Plans</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-violet-500 to-indigo-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-white">
                Personalized diets for every pet.
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Freshness Guaranteed</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-white">
                Only the best ingredients for your furry friends.
              </span>
            </div>
          </BounceCard>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <BounceCard className="col-span-12 md:col-span-8">
            <CardTitle>Fast & Reliable Delivery</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-white">
                Get your orders delivered to your door in no time.
              </span>
            </div>
          </BounceCard>
          <BounceCard className="col-span-12 md:col-span-4">
            <CardTitle>Rewards Program</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-pink-500 to-red-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-white">
                Earn points and save on future purchases.
              </span>
            </div>
          </BounceCard>
        </div>
      </section>
    </div>
  );
}

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-gray-800 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold text-white">{children}</h3>
  );
};