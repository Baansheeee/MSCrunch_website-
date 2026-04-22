'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getCartItemCount } from '@/lib/cart';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setCartCount(getCartItemCount());
    
    // Listen for cart updates
    const handleStorageChange = () => {
      setCartCount(getCartItemCount());
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform" style={{ fontFamily: "var(--font-poppins)" }}>
            🍿 MS CRUNCH
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-orange-500 transition font-medium">
            Home
          </Link>
          <Link href="/products" className="text-gray-700 hover:text-orange-500 transition font-medium">
            Products
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-500 transition font-medium">
            About
          </Link>
          <Link href="/cart" className="relative">
            <button className="relative text-2xl hover:scale-110 transition-transform">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Link href="/cart" className="relative">
            <button className="relative text-2xl hover:scale-110 transition-transform">
              🛒
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
          <Link
            href="/"
            className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            Products
          </Link>
          <Link
            href="/about"
            className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
        </div>
      )}
    </header>
  );
}
