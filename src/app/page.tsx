import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-emerald-900">
              Barakah Qalam
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/books"
                className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
              >
                Books
              </Link>
              <Link
                href="/apparel"
                className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
              >
                Apparel
              </Link>
              <Link
                href="/free-resources"
                className="text-emerald-700 hover:text-emerald-800 font-semibold"
              >
                Free Samples
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Reader Magnet Format */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Value Proposition */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🎁 FREE BONUS: Get 5 Free Coloring Pages
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Relaxation Routine
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Discover the calming beauty of Islamic art with our exclusive "99 Names of Allah" calligraphy collection. Perfect for stress relief, meditation, and creative inspiration.
              </p>

              {/* Email Signup - High Conversion */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0 mb-6">
                <input
                  type="email"
                  placeholder="Enter your email for free samples"
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-gray-900"
                />
                <Link
                  href="/free-resources"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center shadow-lg hover:shadow-xl"
                >
                  Download Now
                </Link>
              </div>

              <p className="text-sm text-gray-500 mb-8">
                ✅ No credit card required ✅ Instant download ✅ 100% Free
              </p>

              {/* Social Proof */}
              <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-2">★★★★★</span>
                  <span>500+ Happy Customers</span>
                </div>
                <div className="flex items-center">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Instant Access</span>
                </div>
              </div>
            </div>

            {/* Right: Featured Product */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-[3/4] bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">📚</div>
                    <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                      99 Names of Allah
                    </h3>
                    <p className="text-gray-600">
                      Calligraphy Coloring Book
                    </p>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Premium Islamic Coloring Collection
                  </h4>
                  <p className="text-gray-600 mb-4">
                    50+ intricate designs featuring the 99 names of Allah in beautiful calligraphy
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-3xl font-bold text-emerald-700">$24.99</span>
                    <span className="text-gray-400 line-through">$39.99</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-semibold">
                      37% OFF
                    </span>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/books/99-names-of-allah"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center shadow-lg hover:shadow-xl"
                    >
                      Buy on Amazon
                    </Link>
                    <Link
                      href="/free-resources"
                      className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors text-center shadow-lg hover:shadow-xl"
                    >
                      Get Free Samples
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-emerald-600 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Absolutely beautiful designs! I use these for my daily meditation and it's so calming."
              </p>
              <p className="font-semibold text-gray-900">- Aisha M.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-emerald-600 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "The quality is amazing. My kids love the Islamic patterns!"
              </p>
              <p className="font-semibold text-gray-900">- Omar K.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-emerald-600 mb-4">★★★★★</div>
              <p className="text-gray-700 mb-4">
                "Perfect for my Islamic art collection. Highly recommend!"
              </p>
              <p className="font-semibold text-gray-900">- Fatima H.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/books"
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700">
                Books
              </h3>
              <p className="text-gray-600">Coloring books & activity books</p>
            </Link>

            <Link
              href="/apparel"
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-700">
                Apparel
              </h3>
              <p className="text-gray-600">T-shirts & minimalist designs</p>
            </Link>

            <Link
              href="/free-resources"
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700">
                Free Resources
              </h3>
              <p className="text-gray-600">Sample coloring pages</p>
            </Link>

            <Link
              href="/about"
              className="group bg-white rounded-xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-700">
                About
              </h3>
              <p className="text-gray-600">Learn about us</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-700 to-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Community
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get exclusive free samples, new releases, and Islamic art inspiration delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-lg border-2 border-white/30 focus:outline-none focus:ring-2 focus:ring-white focus:border-white text-gray-900"
            />
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold transition-colors hover:bg-gray-100">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-white/80 mt-4">
            Join 500+ subscribers • No spam, unsubscribe anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Barakah Qalam</h3>
              <p className="text-gray-400">
                Premium Islamic content, books, and apparel for modern living.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/books"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Books
                  </Link>
                </li>
                <li>
                  <Link
                    href="/apparel"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Apparel
                  </Link>
                </li>
                <li>
                  <Link
                    href="/free-resources"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Free Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <p className="text-gray-400 mb-4">
                Get free samples and new releases
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button className="bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2026 Barakah Qalam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}