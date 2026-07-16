'use client';

import Link from 'next/link';

export default function ApparelPage() {
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
            Islamic Apparel
          </h1>
          <p className="text-xl text-gray-600">
            Wear your faith with beautiful Islamic-inspired t-shirt designs
          </p>
        </div>
      </section>

      {/* Apparel Grid */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Apparel Card 1 */}
            <div className="apparel-card">
              <div className="apparel-image flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="text-5xl mb-2">👕</div>
                  <p className="text-gray-600 text-sm">T-Shirt Design Placeholder</p>
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
                  <p className="text-gray-600 text-sm">T-Shirt Design Placeholder</p>
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
                  <p className="text-gray-600 text-sm">T-Shirt Design Placeholder</p>
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
                  <p className="text-gray-600 text-sm">T-Shirt Design Placeholder</p>
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
