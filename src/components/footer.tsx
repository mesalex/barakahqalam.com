'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6">
        <div className="flex items-center gap-2">
          <span className="text-amber-600 font-bold text-lg">Barakah Qalam</span>
          <span className="text-gray-400 text-sm hidden sm:inline">—</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm hidden sm:inline">
            Thoughtful Islamic art & literature
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
          <Link href="/books" className="hover:text-amber-600 dark:hover:text-amber-400">Books</Link>
          <Link href="/apparel" className="hover:text-amber-600 dark:hover:text-amber-400">Apparel</Link>
          <Link href="/free-resources" className="hover:text-amber-600 dark:hover:text-amber-400">Free Resources</Link>
          <Link href="/about" className="hover:text-amber-600 dark:hover:text-amber-400">About</Link>
          <Link href="/contact" className="hover:text-amber-600 dark:hover:text-amber-400">Contact</Link>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
          <div className="flex gap-3">
            <a href="#" className="hover:text-amber-600 dark:hover:text-amber-400">🐦</a>
            <a href="#" className="hover:text-amber-600 dark:hover:text-amber-400">📸</a>
            <a href="#" className="hover:text-amber-600 dark:hover:text-amber-400">📱</a>
          </div>
          <span className="hidden sm:inline">© 2024</span>
        </div>
      </div>
    </footer>
  );
}
