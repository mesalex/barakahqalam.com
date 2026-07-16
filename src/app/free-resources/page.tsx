import Link from "next/link";
import Image from "next/image";

export default function FreeResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Download free coloring pages and samples. No sign-up required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[1] bg-gradient-to-br from-emerald-100 to-emerald-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌸</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Mandala Flower
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mandala Flower Pattern
              </h3>
              <p className="text-gray-600 mb-4">
                Intricate flower mandala for relaxation
              </p>
              <Link
                href="/downloads/mandala-flower.pdf"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </div>

          {/* Sample 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[1] bg-gradient-to-br from-amber-100 to-amber-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔷</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Geometric Pattern
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Islamic Geometric Design
              </h3>
              <p className="text-gray-600 mb-4">
                Traditional geometric pattern
              </p>
              <Link
                href="/downloads/geometric-pattern.pdf"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </div>

          {/* Sample 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[1] bg-gradient-to-br from-blue-100 to-blue-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌙</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Crescent Moon
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Crescent Moon Design
              </h3>
              <p className="text-gray-600 mb-4">
                Minimalist crescent moon pattern
              </p>
              <Link
                href="/downloads/crescent-moon.pdf"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </div>

          {/* Sample 4 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[1] bg-gradient-to-br from-purple-100 to-purple-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🕋</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Mosque Architecture
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mosque Arch Pattern
              </h3>
              <p className="text-gray-600 mb-4">
                Traditional mosque arch design
              </p>
              <Link
                href="/downloads/mosque-arch.pdf"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </div>

          {/* Sample 5 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[1] bg-gradient-to-br from-green-100 to-green-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌿</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Islamic Foliate
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Islamic Foliate Pattern
              </h3>
              <p className="text-gray-600 mb-4">
                Elegant leaf and vine design
              </p>
              <Link
                href="/downloads/islamic-foliate.pdf"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </div>

          {/* Sample 6 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[1] bg-gradient-to-br from-red-100 to-red-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✨</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Star Pattern
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Islamic Star Design
              </h3>
              <p className="text-gray-600 mb-4">
                Eight-pointed star pattern
              </p>
              <Link
                href="/downloads/islamic-star.pdf"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Download PDF
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-emerald-700 to-amber-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get More Free Samples
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and get exclusive coloring pages every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}