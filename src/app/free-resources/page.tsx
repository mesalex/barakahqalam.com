'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function FreeResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Download free Islamic coloring pages, templates, and educational materials
          </p>
        </div>
      </section>

      {/* Free Resources Grid */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource Card 1 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🎁</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Free Download Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  99 Names of Allah - Free Preview
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Get a sneak peek at our premium coloring bundle with 10 free pages.
                </p>
                <a
                  href="#"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors w-full"
                >
                  Download Free Preview
                </a>
              </div>
            </div>

            {/* Resource Card 2 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">✨</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Free Download Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Islamic Geometric Template Pack
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Free vector templates for creating your own Islamic geometric art.
                </p>
                <a
                  href="#"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors w-full"
                >
                  Download Templates
                </a>
              </div>
            </div>

            {/* Resource Card 3 */}
            <div className="book-card">
              <div className="book-image flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🌙</div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Free Download Placeholder</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Moon Phase Calendar Coloring
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Monthly moon phases calendar with beautiful Islamic designs.
                </p>
                <a
                  href="#"
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded text-center transition-colors w-full"
                >
                  Download Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section">
        <div className="max-w-3xl mx-auto">
          <div className="reader-magnet">
            <h2 className="text-3xl font-bold mb-4">
              Get More Free Resources
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join our community and receive free Islamic art resources, updates on new releases, and exclusive discounts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="cta-button">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              🎁 Free resources • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}