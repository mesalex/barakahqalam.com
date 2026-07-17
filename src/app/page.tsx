'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import HeroCarousel from '@/components/hero-carousel';
import BlogFeed from '@/components/blog-feed';
import Link from 'next/link';

const featuredBooks = [
  {
    slug: "99-names-of-allah",
    title: "99 Names of Allah",
    description: "A beautiful collection of Islamic calligraphy coloring pages featuring the 99 Names of Allah.",
    cover: "/carousel/3.png",
    category: "Coloring Book"
  },
  {
    slug: "islamic-geometric-patterns",
    title: "Islamic Geometric Patterns",
    description: "Master the art of Islamic geometric design with these intricate coloring pages.",
    cover: "/carousel/009.png",
    category: "Coloring Book",
  },
  {
    slug: "arabic-calligraphy-basics",
    title: "Arabic Calligraphy Basics",
    description: "Learn the fundamentals of Arabic calligraphy with beginner-friendly coloring exercises.",
    cover: "/carousel/011.png",
    category: "Educational",
  },
  {
    slug: "mosque-architecture",
    title: "Mosque Architecture",
    description: "Explore stunning mosque designs from around the world with detailed coloring pages.",
    cover: "/carousel/16.png",
    category: "Educational",
  },
  {
    slug: "prophetic-stories",
    title: "Prophetic Stories",
    description: "Beautiful illustrations of beloved Islamic stories with educational coloring pages.",
    cover: "/carousel/009.png",
    category: "Children's Book",
  },
  {
    slug: "moon-and-stars",
    title: "Moon & Stars",
    description: "Celestial Islamic designs featuring moon phases, stars, and cosmic patterns.",
    cover: "/carousel/16.png",
    category: "Coloring Book",
  }
];

const featuredApparel = [
  {
    id: "inna-lillahi",
    title: "\"Inna Lillahi\" T-Shirt",
    description: "Wear your faith with this beautiful \"Inna Lillahi\" Islamic calligraphy t-shirt.",
    image: "/carousel/001.png"
  },
  {
    id: "alhamdulillah",
    title: "\"Alhamdulillah\" Tee",
    description: "Beautiful \"Alhamdulillah\" Islamic calligraphy t-shirt for daily wear.",
    image: "/carousel/002.png"
  },
  {
    id: "geometric-tee",
    title: "Islamic Geometric Tee",
    description: "Stunning Islamic geometric pattern t-shirt with modern design.",
    image: "/carousel/003.png"
  },
  {
    id: "bismillah-hoodie",
    title: "Bismillah Hoodie",
    description: "Cozy \"Bismillah\" Islamic calligraphy hoodie for cold days.",
    image: "/carousel/004.png"
  },
  {
    id: "subhanallah",
    title: "\"Subhanallah\" T-Shirt",
    description: "Glorify Allah with this elegant \"Subhanallah\" Arabic calligraphy design.",
    image: "/carousel/005.png"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <HeroCarousel />
      <BlogFeed />

      {/* Books Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Books
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Beautiful Islamic coloring books for all ages — perfect for relaxation, learning, and spiritual reflection.
          </p>
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            {featuredBooks.slice(0, 3).map((book) => (
              <div key={book.slug} className="py-8 md:py-10">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                  <Link href={`/books/${book.slug}`} className="w-full md:w-2/5 flex-shrink-0">
                    <div className="aspect-[2/3] max-w-xs mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 hover:shadow-xl transition-shadow">
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Link>
                  <div className="w-full md:w-3/5 flex flex-col justify-center">
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wide mb-1">
                      {book.category}
                    </span>
                    <Link href={`/books/${book.slug}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                        {book.title}
                      </h3>
                    </Link>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                      {book.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/books/${book.slug}`}
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors text-sm sm:text-base"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/books"
              className="inline-block text-amber-600 dark:text-amber-400 hover:text-amber-700 font-semibold text-lg"
            >
              View All Books →
            </Link>
          </div>
        </div>
      </section>

      {/* Apparel Section */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Islamic Apparel
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Wear your faith with pride. Beautiful Islamic calligraphy and geometric designs on premium apparel.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredApparel.slice(0, 3).map((item) => (
              <div key={item.id} className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <Link href="/apparel" className="block aspect-square bg-gradient-to-br from-amber-50 to-amber-100 dark:from-gray-600 dark:to-gray-500 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="font-bold text-base text-gray-900 dark:text-gray-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <Link
                    href="/apparel"
                    className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
                  >
                    View on Amazon
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/apparel"
              className="inline-block text-amber-600 dark:text-amber-400 hover:text-amber-700 font-semibold text-lg"
            >
              View All Apparel →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
