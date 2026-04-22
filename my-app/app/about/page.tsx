'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>
            About MS CRUNCH
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-2 sm:mb-4">
            Bringing authentic flavors and quality snacks to your table
          </p>
          <p className="text-gray-600 text-sm sm:text-base">Founded with passion for premium snacking</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
            {/* Image */}
            <div className="animate-fadeInUp">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg overflow-hidden shadow-lg h-80 sm:h-96 flex items-center justify-center">
                <div className="text-6xl sm:text-8xl">🍿</div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>
                Our Story
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                MS CRUNCH was born from a simple idea: to bring authentic, premium quality snacks to every table. What started as a small passion project has grown into a beloved brand trusted by thousands of customers across the region.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-4 leading-relaxed">
                We believe that snacking should be an experience, not just a habit. Every crunch, every flavor, every bite is carefully crafted to deliver satisfaction and joy to our customers.
              </p>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                With traditional recipes passed down through generations and modern quality standards, we create snacks that honor tradition while embracing innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fadeInUp">
              <div className="text-4xl sm:text-5xl mb-4">🎯</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                To deliver premium quality snacks that bring joy and satisfaction to every customer. We are committed to using the finest ingredients, maintaining rigorous quality standards, and providing exceptional customer service at every touchpoint.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl sm:text-5xl mb-4">🌟</div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                To become the most trusted and loved snack brand in the region, known for quality, innovation, and customer satisfaction. We envision MS CRUNCH as a brand that brings people together through the love of authentic, premium snacks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>
            Our Values
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: '✨',
                title: 'Quality',
                description: 'We never compromise on the quality of our ingredients or products'
              },
              {
                icon: '❤️',
                title: 'Passion',
                description: 'Everything we do is driven by our passion for great snacks'
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'We believe in honest business practices and transparency'
              },
              {
                icon: '🌍',
                title: 'Responsibility',
                description: 'We care for our customers and the community we serve'
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fadeInUp text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-800" style={{ fontFamily: "var(--font-poppins)" }}>
            Why Choose MS CRUNCH?
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                title: 'Premium Ingredients',
                description: 'We source only the finest ingredients from trusted suppliers to ensure superior quality in every product'
              },
              {
                title: 'Traditional Recipes',
                description: 'Our snacks are made using authentic recipes passed down through generations, preserving genuine flavors'
              },
              {
                title: 'Quality Control',
                description: 'Every batch undergoes rigorous quality checks to maintain our high standards'
              },
              {
                title: 'Customer Focus',
                description: 'Your satisfaction is our priority, backed by 24/7 customer support and easy returns'
              },
              {
                title: 'Freshness Guaranteed',
                description: 'Made fresh daily and delivered quickly to ensure you always get the best'
              },
              {
                title: 'Affordable Luxury',
                description: 'Premium quality at prices that respect your budget, making great snacks accessible to everyone'
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex gap-4 animate-fadeInUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 sm:h-10 w-8 sm:w-10 rounded-full bg-orange-500 text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
            Join Our MS CRUNCH Family
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
            Discover the difference quality makes. Start your snacking journey with MS CRUNCH today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-orange-500 font-bold rounded-full hover:scale-105 transform transition-all duration-300 shadow-lg text-sm sm:text-base"
            >
              Shop Now →
            </Link>
            <Link
              href="/cart"
              className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white/25 text-white font-bold rounded-full hover:bg-white/35 transform transition-all duration-300 border-2 border-white text-sm sm:text-base"
            >
              View Cart
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
