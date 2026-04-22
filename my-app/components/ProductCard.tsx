'use client';

import Link from 'next/link';
import { Product } from '@/lib/types';
import { addToCart } from '@/lib/cart';
import { useState } from 'react';

export default function ProductCard({ product }: { product: Product }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ ...product, quantity: 1 });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    // Trigger storage event for header to update
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <Link href={`/product/${product.id}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full flex flex-col group">
        {/* Product Image */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.featured && (
            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-3 sm:p-4 flex-grow flex flex-col">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-orange-500 transition">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-yellow-400">★</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-700">
              {product.rating}
            </span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-gray-600 mb-3 line-clamp-2 flex-grow">
            {product.description}
          </p>

          {/* Weight */}
          {product.weight && (
            <p className="text-xs text-gray-500 mb-3">📦 {product.weight}</p>
          )}

          {/* Price and Button */}
          <div className="flex items-center justify-between gap-2 mt-auto">
            <span className="text-xl sm:text-2xl font-bold text-orange-500">₨.{product.price}</span>
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-2 rounded-lg font-semibold transition-all duration-300 ${
                isAdded
                  ? 'bg-green-500 text-white'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              {isAdded ? '✓ Added!' : '🛒 Add'}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
