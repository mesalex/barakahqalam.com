'use client';

import Link from 'next/link';
import { useState } from 'react';

const posts = [
  {
    slug: "art-of-islamic-geometric-patterns",
    date: "July 16, 2026",
    comments: 3,
    title: "The Art of Islamic Geometric Patterns: A Beginner's Guide",
    excerpt: "Discover the fascinating world of Islamic geometric design and learn how to create your own stunning patterns with simple tools and techniques.",
    category: "Islamic Art"
  },
  {
    slug: "why-coloring-books-more-than-fun",
    date: "July 14, 2026",
    comments: 7,
    title: "Why Coloring Books Are More Than Just Fun",
    excerpt: "Explore the therapeutic benefits of coloring and how it can help reduce stress, improve focus, and spark creativity in both adults and children.",
    category: "Wellness"
  },
  {
    slug: "top-islamic-calligraphy-styles",
    date: "July 10, 2026",
    comments: 2,
    title: "Top 5 Islamic Calligraphy Styles You Should Know",
    excerpt: "From Thuluth to Diwani, discover the most beautiful and expressive Islamic calligraphy scripts and their unique characteristics.",
    category: "Calligraphy"
  },
  {
    slug: "create-coloring-pages-at-home",
    date: "July 5, 2026",
    comments: 9,
    title: "How to Create Beautiful Coloring Pages at Home",
    excerpt: "A step-by-step tutorial on designing your own Islamic coloring pages using free software and simple design principles.",
    category: "Tutorial"
  },
  {
    slug: "mosque-architecture-visual-journey",
    date: "June 28, 2026",
    comments: 5,
    title: "The History of Mosque Architecture: A Visual Journey",
    excerpt: "Take a stunning visual tour through the world's most beautiful mosques and learn about the architectural elements that define Islamic design.",
    category: "Architecture"
  },
  {
    slug: "islamic-art-bridge-between-cultures",
    date: "June 22, 2026",
    comments: 8,
    title: "Islamic Art: A Bridge Between Cultures",
    excerpt: "Explore how Islamic art has influenced and been influenced by cultures around the world throughout history.",
    category: "Islamic Art"
  }
];

export default function BlogFeed() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          From the Studio
        </h2>

        <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="py-6 md:py-8"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-gray-100">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold text-sm"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl shadow-lg">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">
              Get More Free Resources
            </h3>
            <p className="text-base text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
              Join our community and receive free Islamic art resources, updates on new releases, and exclusive discounts.
            </p>

            {subscribed ? (
              <div className="text-green-600 dark:text-green-400 font-semibold py-4">
                ✅ Thank you for subscribing! Check your inbox.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="email-input"
                />
                <button type="submit" className="cta-button whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              🎁 Free resources • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-base transition-all"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
}
