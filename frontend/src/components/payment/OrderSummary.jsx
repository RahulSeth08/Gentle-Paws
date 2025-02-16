import React from 'react';
import product1 from "../../assets/product1.jpg"
import product2 from "../../assets/product2.jpeg"

export function OrderSummary() {
  const orderData = {
    title: "Order Summary",
    description: "Check your items. And select a suitable shipping method.",
    items: [
      {
        name: "Premium Dog Food",
        description: "High-quality food for your dog.",
        price: "$29.99",
        imgSrc: product1
      },
      {
        name: "Cat Treats",
        description: "Tasty treats for your feline friend.",
        price: "$15.99",
        imgSrc: product2
      }
    ]
  };

  return (
    <section className="px-4 pt-8">
      <h2 className="text-xl font-medium">{orderData.title}</h2>
      <p className="text-gray-400">{orderData.description}</p>
      <div className="mt-8 space-y-3 rounded-lg border border-blue-800 bg-gray-800 p-4">
        {orderData.items.map((item, index) => (
          <div key={index} className="flex flex-col rounded-lg bg-gray-800 sm:flex-row">
            <img src={item.imgSrc} alt={item.name} className="m-2 h-24 w-28 rounded-md border border-blue-800 object-cover" />
            <div className="flex w-full flex-col px-4 py-4">
              <span className="font-semibold">{item.name}</span>
              <span className="text-gray-400">{item.description}</span>
              <p className="text-lg font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
