"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-emerald-900">
            Barakah Qalam
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/books"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              Books
            </Link>
            <Link
              href="/apparel"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              Apparel
            </Link>
            <Link
              href="/free-resources"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              Free Resources
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-emerald-700 transition-colors font-medium"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden hidden bg-white border-t border-gray-100">
        <div className="px-4 py-2 space-y-2">
          <Link
            href="/books"
            className="block py-2 text-gray-700 hover:text-emerald-700"
          >
            Books
          </Link>
          <Link
            href="/apparel"
            className="block py-2 text-gray-700 hover:text-emerald-700"
          >
            Apparel
          </Link>
          <Link
            href="/free-resources"
            className="block py-2 text-gray-700 hover:text-emerald-700"
          >
            Free Resources
          </Link>
          <Link
            href="/about"
            className="block py-2 text-gray-700 hover:text-emerald-700"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
