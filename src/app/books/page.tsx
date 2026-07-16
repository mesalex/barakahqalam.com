import Link from "next/link";
import Image from "next/image";

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Books Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium collection of coloring books and activity books
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Book Card 1 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-emerald-100 to-emerald-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Mandala Coloring Book
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Mandala Coloring Book
              </h3>
              <p className="text-gray-600 mb-4">
                50+ intricate mandala designs for relaxation and creativity
              </p>
              <Link
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Available on Amazon
              </Link>
            </div>
          </div>

          {/* Book Card 2 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-amber-100 to-amber-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📖</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Islamic Patterns
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Islamic Patterns
              </h3>
              <p className="text-gray-600 mb-4">
                Beautiful geometric patterns inspired by Islamic art
              </p>
              <Link
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Available on Amazon
              </Link>
            </div>
          </div>

          {/* Book Card 3 */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">✏️</div>
                  <h3 className="text-xl font-semibold text-gray-700">
                    Kids Activity Book
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Kids Activity Book
              </h3>
              <p className="text-gray-600 mb-4">
                Fun activities and coloring pages for children
              </p>
              <Link
                href="https://amazon.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Available on Amazon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
