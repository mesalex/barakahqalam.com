'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Barakah Qalam
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Creating thoughtful Islamic art and literature to inspire and educate
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Barakah Qalam was founded with a simple yet powerful mission: to create
              beautiful, meaningful Islamic art and literature that inspires and educates.
              We believe that faith can be expressed through creativity, and our work
              reflects this belief in every page we create.
            </p>

            <h2 className="text-3xl font-bold mb-6">What We Do</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We specialize in creating Islamic coloring books, calligraphy art, and
              educational resources that make faith-based learning accessible and enjoyable.
              Our books are designed for all ages and skill levels, from beginners to
              advanced artists.
            </p>

            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <ul className="text-lg text-gray-700 dark:text-gray-300 space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 text-xl">✓</span>
                <span>Authenticity - We stay true to Islamic teachings and values</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 text-xl">✓</span>
                <span>Quality - Every page is carefully designed and crafted</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 text-xl">✓</span>
                <span>Inclusivity - Our work is accessible to everyone</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-600 dark:text-amber-400 text-xl">✓</span>
                <span>Community - We build connections through shared faith and creativity</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mb-6">Our Products</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Our product line includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Coloring Books</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Beautiful Islamic calligraphy, geometric patterns, and religious art
                  coloring pages for all ages.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Apparel</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Islamic-inspired t-shirts and hoodies with meaningful designs that
                  let you wear your faith.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Educational Resources</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Free templates, coloring pages, and educational materials to support
                  Islamic learning.
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Join our growing community of artists, learners, and faith-minded
                  individuals.
                </p>
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