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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Islamic Apparel
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Wear your faith with beautiful Islamic-inspired t-shirt designs
          </p>
        </div>
      </section>

      {/* Apparel List */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👕</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">T-Shirt Design Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    "Inna Lillahi" T-Shirt
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Wear your faith with this beautiful "Inna Lillahi" Islamic calligraphy t-shirt.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👕</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">T-Shirt Design Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    "Alhamdulillah" Tee
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Beautiful "Alhamdulillah" Islamic calligraphy t-shirt for daily wear.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👕</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">T-Shirt Design Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Islamic Geometric Tee
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Stunning Islamic geometric pattern t-shirt with modern design.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👕</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">T-Shirt Design Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Bismillah Hoodie
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Cozy "Bismillah" Islamic calligraphy hoodie for cold days.
                  </p>
                  <a
                    href="#"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                  >
                    Buy on Amazon
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