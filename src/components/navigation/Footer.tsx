import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Barakah Qalam</h3>
            <p className="text-gray-400">
              Premium Islamic content, books, and apparel for modern living.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/books" className="text-gray-400 hover:text-white transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/apparel" className="text-gray-400 hover:text-white transition-colors">
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="/free-resources" className="text-gray-400 hover:text-white transition-colors">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 mb-4">Get free samples and new releases</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-700 hover:bg-emerald-800 px-4 py-2 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Barakah Qalam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
