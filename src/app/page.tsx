'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header & Navigation */}
      <Navbar />

      {/* Hero Banner & Reader Magnet */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <div className="reader-magnet">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Thoughtful Islamic Art & Literature
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join our community and get an exclusive, high-resolution{' '}
              <span className="text-amber-600 font-semibold dark:text-amber-400">"99 Names of Allah"</span>{' '}
              calligraphy coloring bundle sent directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="cta-button">
                Send Me My Free Pages
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              🎁 Free gift • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* Book Grid / Catalog */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Books
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore our curated collection of Islamic coloring books and educational resources
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book Card 1 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📖</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">99 Names of Allah</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  A beautiful collection of Islamic calligraphy coloring pages featuring the 99 Names of Allah.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    View on Amazon Kindle
                  </a>
                  <a
                    href="#"
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    Buy Paperback on Amazon
                  </a>
                </div>
              </div>
            </div>

            {/* Book Card 2 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎨</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Islamic Geometric Patterns</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Master the art of Islamic geometric design with these intricate coloring pages.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    View on Amazon Kindle
                  </a>
                  <a
                    href="#"
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    Buy Paperback on Amazon
                  </a>
                </div>
              </div>
            </div>

            {/* Book Card 3 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Arabic Calligraphy Basics</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Learn the fundamentals of Arabic calligraphy with beginner-friendly coloring exercises.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    View on Amazon Kindle
                  </a>
                  <a
                    href="#"
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    Buy Paperback on Amazon
                  </a>
                </div>
              </div>
            </div>

            {/* Book Card 4 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🕌</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mosque Architecture</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Explore stunning mosque designs from around the world with detailed coloring pages.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    View on Amazon Kindle
                  </a>
                  <a
                    href="#"
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    Buy Paperback on Amazon
                  </a>
                </div>
              </div>
            </div>

            {/* Book Card 5 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌟</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Prophetic Stories</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Beautiful illustrations of beloved Islamic stories with educational coloring pages.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    View on Amazon Kindle
                  </a>
                  <a
                    href="#"
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    Buy Paperback on Amazon
                  </a>
                </div>
              </div>
            </div>

            {/* Book Card 6 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌙</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moon & Stars</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Celestial Islamic designs featuring moon phases, stars, and cosmic patterns.
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    View on Amazon Kindle
                  </a>
                  <a
                    href="#"
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-2 px-4 rounded text-center transition-colors"
                  >
                    Buy Paperback on Amazon
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel Grid */}
      <section className="section">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Islamic Apparel
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Wear your faith with beautiful Islamic-inspired t-shirt designs
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Apparel Card 1 */}
            <div className="apparel-card">
              <div className="apparel-image flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">👕</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">T-Shirt Design Placeholder</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">"Inna Lillahi" T-Shirt</h3>
                <a
                  href="#"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors text-sm"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>

            {/* Apparel Card 2 */}
            <div className="apparel-card">
              <div className="apparel-image flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">👕</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">T-Shirt Design Placeholder</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">"Alhamdulillah" Tee</h3>
                <a
                  href="#"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors text-sm"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>

            {/* Apparel Card 3 */}
            <div className="apparel-card">
              <div className="apparel-image flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">👕</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">T-Shirt Design Placeholder</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Islamic Geometric Tee</h3>
                <a
                  href="#"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors text-sm"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>

            {/* Apparel Card 4 */}
            <div className="apparel-card">
              <div className="apparel-image flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">👕</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">T-Shirt Design Placeholder</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Bismillah Hoodie</h3>
                <a
                  href="#"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors text-sm"
                >
                  Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}