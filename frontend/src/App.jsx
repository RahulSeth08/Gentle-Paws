import React from 'react';
import { Home } from './pages/Home';
import { Checkout } from './pages/Checkout';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Products } from './pages/Products';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import { AuthProvider } from './components/auth/AuthContext';
import { Navbar } from './components/landing/Navbar';
import { Footer } from './components/landing/Footer';
import { CartProvider } from './components/products/CartContext';

function AppContent() {
  const location = useLocation(); // Hook for location 
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/products';

  return (
    <>
       {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}