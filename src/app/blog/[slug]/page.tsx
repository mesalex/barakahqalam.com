import { Metadata } from 'next';
import { blogPosts, getBlogPostBySlug, getRecentPosts } from '@/data/blog';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Barakah Qalam Blog`,
    description: post.excerpt,
    keywords: post.seoKeywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

function renderContent(content: string) {
  return content
    .split('\n')
    .map((line, i) => {
      if (line.startsWith('## ')) {
        return (
          <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-gray-900 dark:text-gray-100">
            {line.replace('## ', '')}
          </h2>
        );
      }
      if (line.startsWith('### ')) {
        return (
          <h3 key={i} className="text-xl font-semibold mt-8 mb-3 text-gray-900 dark:text-gray-100">
            {line.replace('### ', '')}
          </h3>
        );
      }
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*:?\s?(.*)/);
        if (match) {
          return (
            <li key={i} className="ml-6 mb-1 list-disc text-gray-700 dark:text-gray-300">
              <strong>{match[1]}</strong>: {match[2]}
            </li>
          );
        }
      }
      if (line.startsWith('- ')) {
        return (
          <li key={i} className="ml-6 mb-1 list-disc text-gray-700 dark:text-gray-300">
            {line.replace('- ', '')}
          </li>
        );
      }
      if (line.match(/^\d+\./)) {
        return (
          <li key={i} className="ml-6 mb-1 list-decimal text-gray-700 dark:text-gray-300">
            {line.replace(/^\d+\.\s*/, '')}
          </li>
        );
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={i} className="font-bold text-gray-900 dark:text-gray-100 mt-4 mb-2">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      }
      if (line.trim() === '') {
        return <div key={i} className="h-3" />;
      }
      return (
        <p key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
          {line}
        </p>
      );
    });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm font-semibold px-3 py-1 rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {post.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-3xl">
            {post.excerpt}
          </p>
          <time className="text-sm text-amber-600 dark:text-amber-400 font-semibold">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <article className="max-w-3xl mx-auto">
          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full max-h-96 object-cover rounded-xl mb-10 shadow-lg"
            />
          )}
          <div className="prose prose-lg max-w-none">{renderContent(post.content)}</div>
        </article>
      </section>

      {/* Tags */}
      <section className="max-w-3xl mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-2 border-t border-gray-200 dark:border-gray-700 pt-6">
          {post.seoKeywords.slice(0, 5).map((kw) => (
            <span
              key={kw}
              className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-3 py-1 rounded-full"
            >
              {kw}
            </span>
          ))}
        </div>
      </section>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="section bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Related Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {recentPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="block bg-white dark:bg-gray-700 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
                >
                  <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                    {p.category}
                  </span>
                  <h3 className="font-bold text-lg mt-1 text-gray-900 dark:text-gray-100">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-2">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
