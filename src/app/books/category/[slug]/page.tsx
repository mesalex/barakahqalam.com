'use client';

import { useParams, useSearchParams } from 'next/navigation';
import { getBooksByCategorySlug, getCategoryBySlug } from '@/data/books';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { Suspense } from 'react';

const PER_PAGE = 10;

function CategoryContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const pageParam = searchParams.get('page');
  const page = Math.max(1, parseInt(pageParam || '1', 10) || 1);

  const cat = getCategoryBySlug(slug);
  const books = getBooksByCategorySlug(slug);
  const totalPages = Math.ceil(books.length / PER_PAGE);
  const pagedBooks = books.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  if (!cat) {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
        <Navbar />
        <section className="section text-center">
          <h1 className="text-4xl font-bold mb-4">Category not found</h1>
          <Link href="/books" className="text-amber-600 hover:text-amber-700">← Back to Books</Link>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="section">
        <div className="max-w-5xl mx-auto">
          <Link href="/books" className="text-amber-600 dark:text-amber-400 hover:text-amber-700 text-sm mb-4 inline-block">
            ← All Collections
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            <span className="mr-3">{cat.emoji}</span>
            {cat.name}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            {books.length} book{books.length !== 1 ? 's' : ''} in this collection
          </p>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-5xl mx-auto">
          {books.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No books in this category yet. Check back soon!</p>
              <Link href="/books" className="text-amber-600 dark:text-amber-400 hover:text-amber-700 mt-4 inline-block">
                Browse all collections →
              </Link>
            </div>
          ) : (
            <>
              <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
                {pagedBooks.map((book) => (
                  <div key={book.slug} className="py-8 md:py-10">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      <Link href={`/books/${book.slug}`} className="w-full md:w-2/5 flex-shrink-0">
                        <div className="aspect-[2/3] max-w-xs mx-auto md:mx-0 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 hover:shadow-xl transition-shadow">
                          <img
                            src={book.coverImage}
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

              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-12">
                  {page > 1 && (
                    <Link
                      href={`/books/category/${slug}?page=${page - 1}`}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold text-sm transition-colors"
                    >
                      ← Previous
                    </Link>
                  )}
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Page {page} of {totalPages}
                  </span>
                  {page < totalPages && (
                    <Link
                      href={`/books/category/${slug}?page=${page + 1}`}
                      className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-semibold text-sm transition-colors"
                    >
                      Next →
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function CategoryPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-900" />}>
      <CategoryContent />
    </Suspense>
  );
}
