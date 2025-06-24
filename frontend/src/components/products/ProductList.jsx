import React, { useState } from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  if (!products) {
    return <div>Loading...</div>;
  }

  if (products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCardWithSkeleton key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCardWithSkeleton({ product }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="relative">
      {!imgLoaded && (
        <div className="absolute top-0 left-0 w-full h-48 bg-gray-200 animate-pulse rounded-t-lg z-0" />
      )}
      <div className={imgLoaded ? '' : 'invisible'}>
        <ProductCard
          product={{ ...product, image: product.image }}
          onImgLoad={() => setImgLoaded(true)}
        />
      </div>
    </div>
  );
}

export default ProductList;
