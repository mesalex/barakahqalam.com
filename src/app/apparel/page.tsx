'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ApparelPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Islamic Apparel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Wear your faith with beautiful Islamic-inspired t-shirt designs
          </p>
        </div>
      </section>

      {/* Apparel Grid */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
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