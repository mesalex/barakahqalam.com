import { Metadata } from 'next';
import { bookCategories } from '@/data/books';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Books | Barakah Qalam',
  description: 'Browse our collections of Islamic books — coloring books, calligraphy, geometric patterns, and more.',
};

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Books</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our curated collections
          </p>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/books/category/${cat.slug}`}
                className="group flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-md hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-5xl mb-4">{cat.emoji}</span>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {cat.name}
                </h2>
                <span className="text-amber-600 dark:text-amber-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                  Browse collection →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
