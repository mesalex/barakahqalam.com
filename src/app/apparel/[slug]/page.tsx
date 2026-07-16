import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Mock data - will be replaced with Sanity CMS
const mockApparel = [
  {
    _id: "1",
    slug: "islamic-geometric-pattern-tshirt",
    title: "Islamic Geometric Pattern T-Shirt",
    displayImage: {
      url: "/images/apparel/islamic-geometric.jpg",
    },
    description: "Minimalist geometric pattern inspired by Islamic art.",
    amazonMerchLink: "https://amazon.com/dp/islamic-geometric-tshirt",
    price: "$24.99",
    tags: ["geometric", "islamic", "minimalist"],
  },
  {
    _id: "2",
    slug: "arabic-calligraphy-hoodie",
    title: "Arabic Calligraphy Hoodie",
    displayImage: {
      url: "/images/apparel/arabic-calligraphy.jpg",
    },
    description: "Elegant Arabic calligraphy design on premium hoodie.",
    amazonMerchLink: "https://amazon.com/dp/arabic-calligraphy-hoodie",
    price: "$39.99",
    tags: ["calligraphy", "arabic", "minimalist"],
  },
  {
    _id: "3",
    slug: "minimalist-crescent-moon-tee",
    title: "Minimalist Crescent Moon Tee",
    displayImage: {
      url: "/images/apparel/crescent-moon.jpg",
    },
    description: "Simple crescent moon design for modern Islamic style.",
    amazonMerchLink: "https://amazon.com/dp/crescent-moon-tshirt",
    price: "$22.99",
    tags: ["minimalist", "moon", "symbolic"],
  },
];

export function generateStaticParams() {
  return mockApparel.map((apparel) => ({
    slug: apparel.slug,
  }));
}

export default function ApparelPage({ params }: { params: { slug: string } }) {
  const apparel = mockApparel.find((a) => a.slug === params.slug);

  if (!apparel) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Apparel Image */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-[1] bg-gradient-to-br from-amber-100 to-amber-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">👕</div>
                  <h3 className="text-2xl font-semibold text-gray-700">
                    {apparel.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Apparel Details */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">{apparel.title}</h1>
            <p className="text-2xl text-amber-700 font-semibold">{apparel.price}</p>
            <p className="text-lg text-gray-600">{apparel.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {apparel.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm bg-amber-50 text-amber-700 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Purchase Button */}
            <Link
              href={apparel.amazonMerchLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-amber-700 hover:bg-amber-800 text-white text-center py-4 px-6 rounded-lg font-semibold transition-colors"
            >
              Buy on Amazon
            </Link>

            {/* Features */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Features
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-amber-700 mr-2">✓</span>
                  100% premium cotton
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-amber-700 mr-2">✓</span>
                  Machine washable
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-amber-700 mr-2">✓</span>
                  Pre-shrunk
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-amber-700 mr-2">✓</span>
                  Eco-friendly printing
                </li>
              </ul>
            </div>

            {/* Size Chart */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Size Chart
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">XS:</span>
                  <span className="text-gray-900">32-34"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">S:</span>
                  <span className="text-gray-900">34-36"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">M:</span>
                  <span className="text-gray-900">36-38"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">L:</span>
                  <span className="text-gray-900">38-40"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">XL:</span>
                  <span className="text-gray-900">40-42"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">XXL:</span>
                  <span className="text-gray-900">42-44"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Apparel */}
        <div className="mt-12 text-center">
          <Link
            href="/apparel"
            className="inline-flex items-center text-amber-700 hover:text-amber-800 font-semibold"
          >
            ← Back to Apparel
          </Link>
        </div>
      </div>
    </div>
  );
}