import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import axios from 'axios';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = (import.meta.env && import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : 'http://localhost:8000') + '/products';

  const getAuthHeader = () => {
    const token = localStorage.getItem('access_token');
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  // Fetch cart from backend
  const fetchCart = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/cart/`, { headers: getAuthHeader() });
      setCart(res.data);
    } catch (err) {
      setError('Failed to fetch cart');
    } finally {
      setLoading(false);
    }
  }, []);

  // Add item to cart
  const addToCart = async (product, quantity = 1) => {
    setLoading(true);
    setError(null);
    try {
      await axios.post(
        `${API_BASE}/cart/items/add/`,
        { product, quantity },
        { headers: getAuthHeader() }
      );
      await fetchCart();
    } catch (err) {
      setError('Failed to add to cart');
    } finally {
      setLoading(false);
    }
  };

  // Update cart item quantity
  const updateCartItem = async (itemId, quantity) => {
    setLoading(true);
    setError(null);
    try {
      await axios.patch(
        `${API_BASE}/cart/items/${itemId}/`,
        { quantity },
        { headers: getAuthHeader() }
      );
      await fetchCart();
    } catch (err) {
      setError('Failed to update cart item');
    } finally {
      setLoading(false);
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_BASE}/cart/items/${itemId}/`, { headers: getAuthHeader() });
      await fetchCart();
    } catch (err) {
      setError('Failed to remove item from cart');
    } finally {
      setLoading(false);
    }
  };

  // Clear cart
  const clearCart = async () => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_BASE}/cart/`, { headers: getAuthHeader() });
      await fetchCart();
    } catch (err) {
      setError('Failed to clear cart');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <CartContext.Provider
      value={{ cart, loading, error, fetchCart, addToCart, updateCartItem, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};