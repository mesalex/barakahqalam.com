'use client';

import Link from 'next/link';

export default function AboutPage() {
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
            About Barakah Qalam
          </h1>
          <p className="text-xl text-gray-600">
            Creating thoughtful Islamic art and literature to inspire and educate
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              Barakah Qalam was founded with a simple yet powerful mission: to create
              beautiful, meaningful Islamic art and literature that inspires and educates.
              We believe that faith can be expressed through creativity, and our work
              reflects this belief in every page we create.
            </p>

            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-gray-700 mb-6">
              We specialize in creating Islamic coloring books, calligraphy art, and
              educational resources that make faith-based learning accessible and enjoyable.
              Our books are designed for all ages and skill levels, from beginners to
              advanced artists.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="text-lg text-gray-700 space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">✓</span>
                <span>Authenticity - We stay true to Islamic teachings and values</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">✓</span>
                <span>Quality - Every page is carefully designed and crafted</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">✓</span>
                <span>Inclusivity - Our work is accessible to everyone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 text-xl">✓</span>
                <span>Community - We build connections through shared faith and creativity</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Our Products</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our product line includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Coloring Books</h3>
                <p className="text-gray-600">
                  Beautiful Islamic calligraphy, geometric patterns, and religious art
                  coloring pages for all ages.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Apparel</h3>
                <p className="text-gray-600">
                  Islamic-inspired t-shirts and hoodies with meaningful designs that
                  let you wear your faith.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <p className="text-gray-600">
                  Free templates, coloring pages, and educational materials to support
                  Islamic learning.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">
                  Join our growing community of artists, learners, and faith-minded
                  individuals.
                </p>
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
