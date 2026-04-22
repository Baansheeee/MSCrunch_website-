'use client';

import { products } from '@/lib/products';
import { addToCart } from '@/lib/cart';
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/products" className="text-orange-500 font-bold hover:text-orange-600">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    window.dispatchEvent(new Event('storage'));
  };

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 py-2 sm:py-4 text-xs sm:text-base overflow-x-auto whitespace-nowrap">
        <Link href="/" className="text-orange-500 hover:text-orange-600">
          Home
        </Link>
        {' / '}
        <Link href="/products" className="text-orange-500 hover:text-orange-600">
          Products
        </Link>
        {' / '}
        <span className="text-gray-600">{product.name}</span>
      </div>

      {/* Product Detail */}
      <section className="py-6 sm:py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            {/* Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden h-64 sm:h-80 md:h-full animate-fadeIn">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center animate-fadeInUp">
              <div className="flex items-start justify-between mb-3 sm:mb-4 flex-wrap gap-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h1>
                  {product.featured && (
                    <span className="inline-block bg-red-500 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                      ⭐ Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
                <div className="flex gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400 text-lg sm:text-2xl' : 'text-gray-300 text-lg sm:text-2xl'}
                      >
                        ★
                      </span>
                    ))}
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-700">{product.rating}/5</span>
                <span className="text-gray-500 text-sm sm:text-base">({product.reviews} reviews)</span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-4">Specifications</h3>
                {product.weight && (
                  <p className="text-sm sm:text-base text-gray-700 mb-2">
                    <span className="font-semibold">Weight:</span> {product.weight}
                  </p>
                )}
                {product.ingredients && product.ingredients.length > 0 && (
                  <div className="mb-2">
                    <p className="font-semibold text-gray-700 mb-2 text-sm sm:text-base">Ingredients:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.ingredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className="bg-orange-100 text-orange-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Price & Quantity */}
              <div className="mb-4">
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4 sm:mb-6">
                  ₨.{product.price}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="flex items-center border-2 border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 sm:px-4 py-2 text-base sm:text-lg font-bold text-gray-600 hover:bg-gray-100"
                    >
                      −
                    </button>
                    <span className="px-4 sm:px-6 py-2 text-base sm:text-lg font-bold text-gray-800">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 sm:px-4 py-2 text-base sm:text-lg font-bold text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className={`w-full sm:flex-1 py-2.5 sm:py-3 px-4 sm:px-6 text-sm sm:text-lg font-bold rounded-lg transition-all duration-300 ${
                      isAdded
                        ? 'bg-green-500 text-white'
                        : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105'
                    }`}
                  >
                    {isAdded ? '✓ Added to Cart!' : '🛒 Add to Cart'}
                  </button>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t-2 border-gray-200">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🚚</div>
                  <p className="text-xs sm:text-sm text-gray-600">Free Shipping</p>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🔄</div>
                  <p className="text-xs sm:text-sm text-gray-600">Easy Returns</p>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">🔒</div>
                  <p className="text-xs sm:text-sm text-gray-600">Secure Payment</p>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl mb-1 sm:mb-2">💬</div>
                  <p className="text-xs sm:text-sm text-gray-600">24/7 Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 sm:mt-16 pt-8 sm:pt-16 border-t-2 border-gray-200">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">You Might Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/product/${relatedProduct.id}`}
                    className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <div className="h-40 sm:h-48 bg-gray-100 overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-3 sm:p-4">
                      <h3 className="font-bold text-sm sm:text-base text-gray-800 mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex justify-between items-center">
                        <span className="text-lg sm:text-xl font-bold text-orange-500">
                          ₨{relatedProduct.price}
                        </span>
                        <span className="text-yellow-400 text-sm sm:text-base">★ {relatedProduct.rating}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
