'use client';

import Link from 'next/link';
import ThemeToggle from './theme-toggle';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <ThemeToggle />
        <div className="flex items-center gap-6">
          <Link href="/books" className="nav-link">
            Books
          </Link>
          <Link href="/apparel" className="nav-link">
            Apparel
          </Link>
          <Link href="/free-resources" className="nav-link">
            Free Resources
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}