'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-amber-600 mb-4">
              Barakah Qalam
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Creating thoughtful Islamic art and literature to inspire and educate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/books" className="hover:text-amber-600 dark:hover:text-amber-400">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/apparel" className="hover:text-amber-600 dark:hover:text-amber-400">
                  Apparel
                </Link>
              </li>
              <li>
                <Link href="/free-resources" className="hover:text-amber-600 dark:hover:text-amber-400">
                  Free Resources
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-600 dark:hover:text-amber-400">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-600 dark:hover:text-amber-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-2xl hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                🐦
              </a>
              <a
                href="#"
                className="text-2xl hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                📸
              </a>
              <a
                href="#"
                className="text-2xl hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >
                📱
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
              © 2024 Barakah Qalam. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              <Link href="/privacy-policy" className="hover:text-amber-600 dark:hover:text-amber-400">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}