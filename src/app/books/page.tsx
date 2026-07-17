import { Metadata } from 'next';
import { books } from '@/data/books';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Books | Barakah Qalam',
  description: 'Explore our curated collection of Islamic coloring books and educational resources.',
};

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Books</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Explore our curated collection of Islamic coloring books and educational resources
          </p>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            {books.map((book) => (
              <div key={book.slug} className="py-10">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="w-full md:w-2/5 aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 rounded-xl overflow-hidden shadow-lg flex items-center justify-center">
                    <img
                      src={book.coverImage}
                      alt={book.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="w-full md:w-3/5 flex flex-col justify-center">
                    <span className="text-sm text-amber-600 dark:text-amber-400 font-semibold mb-2">
                      {book.category}
                    </span>
                    <Link href={`/books/${book.slug}`}>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                        {book.title}
                      </h3>
                    </Link>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-2 italic">
                      {book.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {book.description}
                    </p>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span>📄 {book.pages} pages</span>
                      <span>📐 {book.format}</span>
                      <span>💰 {book.price}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={`/books/${book.slug}`}
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                      >
                        View Details
                      </Link>
                      <a
                        href={book.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block border-2 border-amber-500 text-amber-600 hover:bg-amber-50 dark:hover:bg-gray-800 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                      >
                        Buy on Amazon
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
