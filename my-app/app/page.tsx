import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import Testimonials from '@/components/Testimonials';
import { products } from '@/lib/products';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);

  return (
    <>
      <Hero />

      {/* Featured Products Section */}
      <section id="featured" className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>
              ⭐ Featured Products
            </h2>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg">
              Handpicked favorites from our premium collection
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12">
            <a
              href="/products"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              View All Products →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Why Choose MS Crunch */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose MS CRUNCH?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                icon: '✅',
                title: 'Premium Quality',
                description: 'Only the finest ingredients sourced from trusted suppliers worldwide'
              },
              {
                icon: '⚡',
                title: 'Fresh & Delicious',
                description: 'Made fresh daily with authentic recipes passed down through generations'
              },
              {
                icon: '💚',
                title: 'Natural Ingredients',
                description: 'No artificial preservatives or additives - just pure snacking goodness'
              },
              {
                icon: '🚚',
                title: 'Fast Delivery',
                description: 'Quick shipping to get your favorite snacks to your doorstep ASAP'
              },
              {
                icon: '💰',
                title: 'Great Prices',
                description: 'Amazing quality at affordable prices that fit your budget'
              },
              {
                icon: '🎯',
                title: 'Customer First',
                description: '24/7 customer support ready to help with any questions'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fadeInUp text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready for a Snack Adventure?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
            Explore our full collection and find your new favorite flavor
          </p>
          <a
            href="/products"
            className="inline-block px-6 sm:px-10 py-2.5 sm:py-4 bg-white text-orange-500 font-bold rounded-full hover:scale-110 transform transition-all duration-300 shadow-2xl text-sm sm:text-base md:text-lg"
          >
            Start Shopping Now →
          </a>
        </div>
      </section>
    </>
  );
}
