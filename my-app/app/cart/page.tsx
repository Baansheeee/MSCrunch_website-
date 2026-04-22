'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CartItem, Product } from '@/lib/types';
import { 
  getCart, 
  removeFromCart, 
  updateCartQuantity, 
  clearCart, 
  getCartTotal 
} from '@/lib/cart';

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCart(getCart());
    setIsLoading(false);
  }, []);

  const updateQuantity = (productId: number, quantity: number) => {
    const updated = updateCartQuantity(productId, quantity);
    setCart(updated);
    window.dispatchEvent(new Event('storage'));
  };

  const removeItem = (productId: number) => {
    const updated = removeFromCart(productId);
    setCart(updated);
    window.dispatchEvent(new Event('storage'));
  };

  const handleCheckout = () => {
    alert('🎉 Thank you for your order!\n\nCheckout functionality coming soon.\n\nFor now, your order has been saved in your cart.');
  };

  const total = getCartTotal();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-white py-8 sm:py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 animate-fadeInUp">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            🛒 Your Cart
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {/* Empty Cart */}
        {cart.length === 0 ? (
          <div className="text-center py-12 sm:py-16 animate-fadeInUp">
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6">🛒</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base md:text-lg">
              Start shopping to add items to your cart!
            </p>
            <Link
              href="/products"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              Continue Shopping →
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3 sm:space-y-4">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className="flex gap-2 sm:gap-4 bg-gray-50 p-3 sm:p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp flex-col sm:flex-row"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image */}
                  <Link href={`/product/${item.id}`}>
                    <div className="w-full sm:w-24 h-32 sm:h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 hover:scale-110 transition-transform cursor-pointer">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="flex-grow flex flex-col justify-between">
                    <Link
                      href={`/product/${item.id}`}
                      className="text-base sm:text-lg font-bold text-gray-800 hover:text-orange-500 transition line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-gray-600 text-xs sm:text-sm mb-2 line-clamp-1">{item.description}</p>
                    <p className="text-orange-500 font-bold text-sm sm:text-base">₨{item.price} each</p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex sm:flex-col items-end gap-2 sm:gap-2">
                    <div className="flex items-center border-2 border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 sm:px-3 py-1 text-sm font-bold text-gray-600 hover:bg-orange-100"
                      >
                        −
                      </button>
                      <span className="px-3 sm:px-4 py-1 text-sm font-bold text-gray-800">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 sm:px-3 py-1 text-sm font-bold text-gray-600 hover:bg-orange-100"
                      >
                        +
                      </button>
                    </div>

                    {/* Price & Remove */}
                    <div className="text-right">
                      <p className="text-sm sm:text-base md:text-lg font-bold text-orange-500 mb-1 sm:mb-2">
                        ₨{item.price * item.quantity}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-xs sm:text-sm text-red-500 hover:text-red-700 font-bold hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-4 sm:p-6 shadow-lg sticky top-24">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">Order Summary</h3>

                {/* Breakdown */}
                <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gray-200">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="text-gray-800 font-semibold">₨{Math.round(total)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="text-green-600 font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-gray-600">Tax:</span>
                    <span className="text-gray-800 font-semibold">₨{Math.round(total * 0.05)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-2xl font-bold text-gray-800">Total:</span>
                    <span className="text-2xl sm:text-3xl font-bold text-orange-500">
                      ₨{Math.round(total * 1.05)}
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-2 sm:space-y-3">
                  <button
                    onClick={handleCheckout}
                    className="w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-lg hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
                  >
                    Proceed to Checkout →
                  </button>
                  <Link
                    href="/products"
                    className="block w-full py-2.5 sm:py-3 px-3 sm:px-4 bg-white text-orange-500 font-bold rounded-lg border-2 border-orange-500 hover:bg-orange-50 text-center transition-all duration-300 text-sm sm:text-base"
                  >
                    Continue Shopping
                  </Link>
                  {cart.length > 0 && (
                    <button
                      onClick={() => {
                        clearCart();
                        setCart([]);
                        window.dispatchEvent(new Event('storage'));
                      }}
                      className="w-full py-2 text-red-500 font-semibold hover:text-red-700 hover:underline transition text-sm sm:text-base"
                    >
                      Clear Cart
                    </button>
                  )}
                </div>

                {/* Info Box */}
                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white rounded-lg border-l-4 border-orange-500">
                  <p className="text-xs sm:text-sm text-gray-600">
                    ✓ Free shipping on all orders<br className="sm:hidden" />
                    ✓ Money-back guarantee<br className="sm:hidden" />
                    ✓ 24/7 customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Products */}
        {cart.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-16 border-t-2 border-gray-200">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-8 text-center">You Might Also Like</h2>
            <p className="text-gray-600 text-center mb-6 sm:mb-8 text-sm sm:text-base">
              Add more items to your order and get even better value!
            </p>
            <div className="text-center">
              <Link
                href="/products"
                className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-orange-100 text-orange-600 font-bold rounded-full hover:bg-orange-200 transition text-sm sm:text-base"
              >
                Browse All Products →
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
