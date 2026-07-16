'use client';

import Link from 'next/link';

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <nav className="navbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-600">
            Barakah Qalam
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/books" className="nav-link">
              Books
            </Link>
            <Link href="/apparel" className="nav-link">
              Apparel
            </Link>
            <Link href="/free-resources" className="nav-link">
              Free Resources
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Books
          </h1>
          <p className="text-xl text-gray-600">
            Explore our curated collection of Islamic coloring books and educational resources
          </p>
        </div>
      </section>

      {/* Book Grid */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Book Card 1 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📖</div>
                  <p className="text-gray-600 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">99 Names of Allah</h3>
                <p className="text-gray-600 mb-4">
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
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded text-center transition-colors"
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
                  <p className="text-gray-600 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Islamic Geometric Patterns</h3>
                <p className="text-gray-600 mb-4">
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
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded text-center transition-colors"
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
                  <p className="text-gray-600 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Arabic Calligraphy Basics</h3>
                <p className="text-gray-600 mb-4">
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
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded text-center transition-colors"
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
                  <p className="text-gray-600 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mosque Architecture</h3>
                <p className="text-gray-600 mb-4">
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
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded text-center transition-colors"
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
                  <p className="text-gray-600 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Prophetic Stories</h3>
                <p className="text-gray-600 mb-4">
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
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded text-center transition-colors"
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
                  <p className="text-gray-600 text-sm">3D Book Cover Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Moon & Stars</h3>
                <p className="text-gray-600 mb-4">
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
                    className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-2 px-4 rounded text-center transition-colors"
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
      <footer className="footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Barakah Qalam
              </h3>
              <p className="text-gray-600 text-sm">
                Creating thoughtful Islamic art and literature to inspire and educate.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/books" className="hover:text-amber-600">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="/apparel" className="hover:text-amber-600">
                    Apparel
                  </Link>
                </li>
                <li>
                  <Link href="/free-resources" className="hover:text-amber-600">
                    Free Resources
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-2xl hover:text-amber-600 transition-colors"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-amber-600 transition-colors"
                >
                  📸
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-amber-600 transition-colors"
                >
                  📱
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                © 2024 Barakah Qalam. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-2">
                <Link href="/privacy-policy" className="hover:text-amber-600">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
