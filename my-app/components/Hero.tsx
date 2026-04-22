export default function Hero() {
    return (
        <section className="relative h-[400px] sm:h-[500px] md:h-[650px] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-80">
                <img
                    src="/products/WhatsApp Image 2026-04-22 at 2.59.42 PM.jpeg"
                    alt="MS Crunch Hero"
                    className="w-full h-full object-cover"
                />
                {/* Strong Dark Overlay for text visibility */}
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center justify-center px-3 sm:px-4 text-center">
                <div className="max-w-4xl mx-auto animate-fadeIn">
                    {/* Badge */}
                    <div className="mb-3 sm:mb-6 animate-fadeInUp">
                        <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/25 backdrop-blur-md text-white rounded-full font-semibold text-xs sm:text-sm border border-white/40 hover:bg-white/35 transition-all">
                            ✨ Premium Quality Snacks
                        </span>
                    </div>

                    {/* Main Title */}
                    <div className="flex justify-center mb-2 sm:mb-4">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-0 drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] animate-fadeInUp" style={{ fontFamily: "var(--font-poppins)", animationDelay: "0.1s" }}>
                            MS
                        </h1>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-yellow-500 mb-0 drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)] animate-fadeInUp" style={{ fontFamily: "var(--font-poppins)", animationDelay: "0.1s" }}>
                            CRUNCH
                        </h1>
                    </div>

                    {/* Tagline */}
                    <p className="text-xl sm:text-2xl md:text-4xl text-white font-bold mb-3 sm:mb-6 drop-shadow-[0_6px_12px_rgba(0,0,0,0.8)] animate-fadeInUp" style={{ fontFamily: "var(--font-poppins)", animationDelay: "0.2s" }}>
                        Crunch That Rules
                    </p>

                    {/* Description */}
                    <p className="text-sm sm:text-lg md:text-xl text-white/98 mb-4 sm:mb-8 md:mb-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] max-w-3xl mx-auto leading-relaxed animate-fadeInUp px-2 sm:px-0" style={{ animationDelay: "0.3s" }}>
                        Experience bold flavors and satisfying crunch with our premium selection of handcrafted snacks, made with love and passion for your taste buds.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center animate-fadeInUp px-2 sm:px-0" style={{ animationDelay: "0.4s" }}>
                        <a
                            href="#featured"
                            className="px-6 sm:px-10 py-2.5 sm:py-4 bg-white text-orange-600 font-bold rounded-full hover:bg-yellow-50 transform hover:scale-110 transition-all duration-300 shadow-2xl text-sm sm:text-lg"
                            style={{ fontFamily: "var(--font-poppins)" }}
                        >
                            Explore Now
                        </a>
                        <a
                            href="/products"
                            className="px-6 sm:px-10 py-2.5 sm:py-4 bg-orange-600 text-white font-bold rounded-full hover:bg-orange-700 transform hover:scale-110 transition-all duration-300 shadow-2xl text-sm sm:text-lg"
                            style={{ fontFamily: "var(--font-poppins)" }}
                        >
                            Shop All Products
                        </a>
                    </div>

                    {/* Scroll Indicator - Hidden on small mobile */}
                    <div className="hidden sm:block mt-8 md:mt-16 animate-bounce" style={{ animationDelay: "0.5s" }}>
                        <div className="text-white/90 text-xs sm:text-sm font-semibold mb-2 drop-shadow-lg">Scroll to Explore</div>
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 mx-auto text-white/90 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Floating Animated Elements - Responsive sizes */}
            <div className="absolute top-8 sm:top-16 md:top-20 left-4 sm:left-10 text-3xl sm:text-5xl animate-bounce opacity-90 drop-shadow-lg">🍿</div>
            <div className="absolute bottom-16 sm:bottom-32 right-4 sm:right-12 text-3xl sm:text-5xl animate-bounce opacity-90 drop-shadow-lg" style={{ animationDelay: "0.5s" }}>
                🥜
            </div>
            <div className="absolute top-24 sm:top-40 right-4 sm:right-16 text-3xl sm:text-5xl animate-bounce opacity-90 drop-shadow-lg" style={{ animationDelay: "1s" }}>
                🌶️
            </div>
            <div className="absolute bottom-8 sm:bottom-20 left-1/4 text-3xl sm:text-5xl animate-bounce opacity-80 drop-shadow-lg" style={{ animationDelay: "0.3s" }}>
                🍪
            </div>
        </section>
    );
}
