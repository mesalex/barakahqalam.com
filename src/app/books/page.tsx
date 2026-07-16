'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Books
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our curated collection of Islamic coloring books and educational resources
          </p>
        </div>
      </section>

      {/* Book Grid */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
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

      {/* Footer */}
      <Footer />
    </div>
  );
}