import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductList() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${API_URL}/products/list`);
        console.log("API Response:", response);  // Inspect the structure of the response
        
        // Adjust this based on your response structure
        if (Array.isArray(response.data)) {
          setProducts(response.data);  // If it's directly an array
        } else if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);  // If products are nested under 'data'
        } else if (Array.isArray(response.data.products)) {
          setProducts(response.data.products);  // If products are nested under 'products'
        } else {
          throw new Error("Invalid response format, expected an array");
        }

        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div>No products available.</div>
      )}
    </div>
  );
}

export default ProductList;
