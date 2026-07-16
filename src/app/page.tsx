'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroCarousel from '@/components/hero-carousel';
import BlogFeed from '@/components/blog-feed';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header & Navigation */}
      <Navbar />

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Blog Feed */}
      <BlogFeed />

      {/* Books Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Our Books
          </h2>
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">📖</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    99 Names of Allah
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    A beautiful collection of Islamic calligraphy coloring pages featuring the 99 Names of Allah.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      View on Amazon Kindle
                    </a>
                    <a
                      href="#"
                      className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      Buy Paperback on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🎨</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Islamic Geometric Patterns
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Master the art of Islamic geometric design with these intricate coloring pages.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      View on Amazon Kindle
                    </a>
                    <a
                      href="#"
                      className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      Buy Paperback on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">✨</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Arabic Calligraphy Basics
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Learn the fundamentals of Arabic calligraphy with beginner-friendly coloring exercises.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      View on Amazon Kindle
                    </a>
                    <a
                      href="#"
                      className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      Buy Paperback on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🕌</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Mosque Architecture
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Explore stunning mosque designs from around the world with detailed coloring pages.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      View on Amazon Kindle
                    </a>
                    <a
                      href="#"
                      className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      Buy Paperback on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🌟</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Prophetic Stories
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Beautiful illustrations of beloved Islamic stories with educational coloring pages.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      View on Amazon Kindle
                    </a>
                    <a
                      href="#"
                      className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      Buy Paperback on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-1/2 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">🌙</div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">3D Book Cover Placeholder</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Moon & Stars
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    Celestial Islamic designs featuring moon phases, stars, and cosmic patterns.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="#"
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      View on Amazon Kindle
                    </a>
                    <a
                      href="#"
                      className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      Buy Paperback on Amazon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apparel Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Islamic Apparel
          </h2>
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