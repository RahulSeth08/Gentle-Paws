import React from "react";

const products = [
    { img: 'rectangularBedImg', title: 'Rectangular Bed', price: '₹67.72', oldPrice: '₹79.90' },
    // Add more products as needed
  ];
  
export function Products() {
    return (
      <section id="products" className="py-16">
        <h1 className="text-2xl font-bold text-center">Our Latest Products</h1>
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <div key={index} className="m-4 w-1/4">
              <img src={product.img} alt={product.title} className="w-full h-auto" />
              <div className="content p-4">
                <div className="text-lg font-semibold">{product.price} <span className="line-through">{product.oldPrice}</span></div>
                <h3 className="font-semibold">{product.title}</h3>
                <a href="#" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Buy</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  