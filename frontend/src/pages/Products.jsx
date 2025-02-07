import Sidebar from '../components/products/Sidebar';
import ProductList from '../components/products/ProductList';
import React from 'react'

export function Products() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#0e0e0e] text-gray-900">
      <Sidebar />
      <main className="flex-1 p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-blue-500 mb-6">Discover Pet Essentials</h1>
        <ProductList />
      </main>
    </div>
  );
}