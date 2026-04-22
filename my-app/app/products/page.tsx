import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fadeInUp">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            All Products
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-xl">
            {products.length} delicious flavors to choose from
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fadeInUp"
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Need Help?</h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Can't find what you're looking for? Contact our support team at support@mscrunch.com
          </p>
        </div>
      </div>
    </section>
  );
}
