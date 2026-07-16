'use client';

import { useTheme } from '@/app/theme-provider';
import Link from 'next/link';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-4">
      <Link href="/" className="text-2xl font-bold text-amber-600">
        Barakah Qalam
      </Link>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <span className="text-2xl">🌙</span>
        ) : (
          <span className="text-2xl">☀️</span>
        )}
      </button>
    </div>
  );
}