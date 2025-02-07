import React from 'react';

export function OrderSummary({ items }) {
  return (
    <section className="px-4 pt-8">
      <h2 className="text-xl font-medium">Order Summary</h2>
      <p className="text-gray-400">Check your items. And select a suitable shipping method.</p>
      <div className="mt-8 space-y-3 rounded-lg border border-blue-800 bg-gray-800 p-4">
        {items.map((item, index) => (
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
