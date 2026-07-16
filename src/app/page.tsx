import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-amber-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Discover Thoughtful Islamic Art & Literature
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Explore our exclusive "99 Names of Allah" calligraphy collection. Download your free high-resolution coloring pages today.
              </p>

              {/* Newsletter Signup */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start max-w-md mx-auto lg:mx-0">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
                <Link
                  href="/free-resources"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-center"
                >
                  Download Free Samples
                </Link>
              </div>

              <p className="text-sm text-gray-500 mt-4">
                Get free coloring pages. No sign-up required.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="relative aspect-square lg:aspect-[4/3] bg-gradient-to-br from-emerald-100 to-amber-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📚</div>
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                    Beautiful Coloring Books
                  </h3>
                  <p className="text-gray-600">
                    Handcrafted mandalas, flowers, and intricate patterns
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collections
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Books */}
            <Link
              href="/books"
              className="group bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">📖</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700">
                Books
              </h3>
              <p className="text-gray-600">
                Coloring books & activity books
              </p>
            </Link>

            {/* Apparel */}
            <Link
              href="/apparel"
              className="group bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">👕</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-700">
                Apparel
              </h3>
              <p className="text-gray-600">
                T-shirts & minimalist designs
              </p>
            </Link>

            {/* Free Resources */}
            <Link
              href="/free-resources"
              className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-700">
                Free Resources
              </h3>
              <p className="text-gray-600">
                Sample coloring pages
              </p>
            </Link>

            {/* About */}
            <Link
              href="/about"
              className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-700">
                About
              </h3>
              <p className="text-gray-600">
                Learn about us
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Available in 6+ Languages
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Collection: 99 Names of Allah
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our flagship calligraphy collection featuring the 99 beautiful names of Allah
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="aspect-[4/3] bg-gradient-to-br from-emerald-100 to-amber-100 rounded-xl mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🦋</div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                  99 Names of Allah
                </h3>
                <p className="text-gray-600">
                  Exquisite calligraphy art
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
              >
                Available on Amazon
              </Link>
              <Link
                href="https://gumroad.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
              >
                Download on Gumroad
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
