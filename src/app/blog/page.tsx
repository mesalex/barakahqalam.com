import { Metadata } from 'next';
import { getAllPosts } from '@/data/blog';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Qalam Studio | Barakah Qalam',
  description: 'Reflections, tutorials, and stories from the Qalam Studio.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      <section className="section">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Qalam Studio</h1>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
            {posts.map((post) => (
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
        </div>
      </section>

      <Footer />
    </div>
  );
}
