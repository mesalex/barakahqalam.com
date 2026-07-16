import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Mock data - will be replaced with Sanity CMS
const mockBooks = [
  {
    _id: "1",
    slug: "mandala-coloring-book",
    title: "Mandala Coloring Book",
    displayImage: {
      url: "/images/books/mandala.jpg",
    },
    description: "50+ intricate mandala designs for relaxation and creativity.",
    amazonLink: "https://amazon.com/dp/mandala-book",
    gumroadLink: "https://gumroad.com/dp/mandala-book",
    price: "$12.99",
  },
  {
    _id: "2",
    slug: "islamic-patterns",
    title: "Islamic Patterns",
    displayImage: {
      url: "/images/books/islamic-patterns.jpg",
    },
    description: "Beautiful geometric patterns inspired by Islamic art.",
    amazonLink: "https://amazon.com/dp/islamic-patterns",
    price: "$14.99",
  },
  {
    _id: "3",
    slug: "kids-activity-book",
    title: "Kids Activity Book",
    displayImage: {
      url: "/images/books/kids-activity.jpg",
    },
    description: "Fun activities and coloring pages for children.",
    amazonLink: "https://amazon.com/dp/kids-activity",
    price: "$9.99",
  },
];

export function generateStaticParams() {
  return mockBooks.map((book) => ({
    slug: book.slug,
  }));
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = mockBooks.find((b) => b.slug === params.slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Book Cover */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-emerald-100 to-emerald-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">📚</div>
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {book.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Book Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
            <p className="text-2xl text-emerald-700 font-semibold">{book.price}</p>
            <p className="text-lg text-gray-600">{book.description}</p>

            {/* Purchase Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={book.amazonLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
              >
                Available on Amazon
              </Link>
              {book.gumroadLink && (
                <Link
                  href={book.gumroadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
                >
                  Download on Gumroad
                </Link>
              )}
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-emerald-700 mr-2">✓</span>
                  High-quality printing
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-emerald-700 mr-2">✓</span>
                  Premium paper stock
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-emerald-700 mr-2">✓</span>
                  Single-sided printing
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-emerald-700 mr-2">✓</span>
                  Perfect binding
                </li>
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Specifications
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pages:</span>
                  <span className="text-gray-900">100 pages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimensions:</span>
                  <span className="text-gray-900">8.5" x 11"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Weight:</span>
                  <span className="text-gray-900">12 oz</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="text-gray-900">English</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Books */}
        <div className="mt-12 text-center">
          <Link
            href="/books"
            className="inline-flex items-center text-emerald-700 hover:text-emerald-800 font-semibold"
          >
            ← Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}