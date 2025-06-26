import Sidebar from '../components/products/Sidebar';
import ProductList from '../components/products/ProductList';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../assets/products.json';

export function Products() {
  // const API_URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState(productsData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Filter state
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('price-asc');
  const [categories, setCategories] = useState([]); // array of selected categories
  const [priceRange, setPriceRange] = useState([0, 5000]);

  // Filtering logic
  const filteredProducts = products
    .filter((product) => {
      // Search filter
      if (search && !product.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      // Category filter
      if (categories.length > 0 && !categories.includes(product.category)) {
        return false;
      }
      // Price range filter
      const price = parseFloat(product.price) || 0;
      if (price < priceRange[0] || price > priceRange[1]) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      // Sorting logic
      if (sort === 'price-asc') return (parseFloat(a.price) || 0) - (parseFloat(b.price) || 0);
      if (sort === 'price-desc') return (parseFloat(b.price) || 0) - (parseFloat(a.price) || 0);
      if (sort === 'name-asc') return a.name.localeCompare(b.name);
      if (sort === 'name-desc') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0e0e0e] text-gray-900">
      <Sidebar
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
        categories={categories}
        setCategories={setCategories}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <main className="flex-1 p-6 lg:p-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-end mb-4">
            <Link
              to="/checkout"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
            >
              Go to Cart
            </Link>
          </div>
          <h1 className="text-3xl font-bold text-blue-500 mb-6">Discover Pet Essentials</h1>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>{error}</div>
          ) : (
            <ProductList products={filteredProducts} />
          )}
        </div>
      </main>
    </div>
  );
}