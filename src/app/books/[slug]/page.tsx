import { Metadata } from 'next';
import { books, getBookBySlug } from '@/data/books';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) return { title: 'Book Not Found' };
  return {
    title: `${book.title} | Barakah Qalam`,
    description: book.description,
    keywords: book.seoKeywords,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [book.coverImage],
    },
  };
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = getBookBySlug(slug);
  if (!book) notFound();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero Section */}
      <section className="book-detail-hero">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Book Cover */}
            <div className="w-full md:w-2/5 flex-shrink-0">
              <div className="aspect-[2/3] max-w-sm mx-auto rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800">
                <img
                  src={book.coverImage}
                  alt={book.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Book Info */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <span className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {book.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                {book.subtitle}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-8 max-w-xl">
                {book.description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                <span>📄 {book.pages} pages</span>
                <span>📐 {book.format}</span>
                <span>💰 {book.price}</span>
              </div>

              {/* Buy Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
                >
                  Buy on Amazon
                </a>
                <a
                  href={book.gumroadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-8 rounded-lg text-lg border-2 border-gray-300 dark:border-gray-500 transition-all"
                >
                  Download on Gumroad
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Long Description */}
      <section className="section">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            About This Book
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
            {book.longDescription}
          </div>
        </div>
      </section>

      {/* Other Books */}
      <section className="section bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
            Explore More Books
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {books
              .filter((b) => b.slug !== book.slug)
              .slice(0, 3)
              .map((b) => (
                <Link
                  key={b.slug}
                  href={`/books/${b.slug}`}
                  className="book-card group block"
                >
                  <div className="aspect-[2/3] bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center p-4">
                    <img
                      src={b.coverImage}
                      alt={b.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
                      {b.description}
                    </p>
                    <p className="text-amber-600 dark:text-amber-400 font-semibold mt-2">
                      {b.price}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/books"
              className="inline-block text-amber-600 dark:text-amber-400 hover:text-amber-700 font-semibold"
            >
              View All Books →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
