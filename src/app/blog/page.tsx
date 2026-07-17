import { Metadata } from 'next';
import { getAllPosts } from '@/data/blog';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Barakah Qalam',
  description: 'Insights, tutorials, and stories from the world of Islamic art and literature.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Insights, tutorials, and stories from the world of Islamic art and literature
          </p>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="py-8 md:py-10"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-40 flex-shrink-0">
                    <time className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <div className="mt-1">
                      <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300 mb-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold text-sm"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
