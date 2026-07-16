'use client';

export default function BlogFeed() {
  const posts = [
    {
      date: "July 16, 2026",
      comments: 3,
      title: "The Art of Islamic Geometric Patterns: A Beginner's Guide",
      excerpt: "Discover the fascinating world of Islamic geometric design and learn how to create your own stunning patterns with simple tools and techniques.",
      link: "#"
    },
    {
      date: "July 14, 2026",
      comments: 7,
      title: "Why Coloring Books Are More Than Just Fun",
      excerpt: "Explore the therapeutic benefits of coloring and how it can help reduce stress, improve focus, and spark creativity in both adults and children.",
      link: "#"
    },
    {
      date: "July 10, 2026",
      comments: 2,
      title: "Top 5 Islamic Calligraphy Styles You Should Know",
      excerpt: "From Thuluth to Diwani, discover the most beautiful and expressive Islamic calligraphy scripts and their unique characteristics.",
      link: "#"
    },
    {
      date: "July 5, 2026",
      comments: 12,
      title: "How to Create Beautiful Coloring Pages at Home",
      excerpt: "A step-by-step tutorial on designing your own Islamic coloring pages using free software and simple design principles.",
      link: "#"
    },
    {
      date: "June 28, 2026",
      comments: 5,
      title: "The History of Mosque Architecture: A Visual Journey",
      excerpt: "Take a stunning visual tour through the world's most beautiful mosques and learn about the architectural elements that define Islamic design.",
      link: "#"
    },
    {
      date: "June 22, 2026",
      comments: 8,
      title: "Islamic Art: A Bridge Between Cultures",
      excerpt: "Explore how Islamic art has influenced and been influenced by cultures around the world throughout history.",
      link: "#"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Latest from Our Blog
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Insights, tutorials, and stories from the world of Islamic art and literature
        </p>

        <div className="space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
          {posts.map((post, index) => (
            <article
              key={index}
              className={`py-8 md:py-10 ${
                index === 0 ? '' : 'border-t border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Date Column */}
                <div className="md:w-40 flex-shrink-0">
                  <time className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                    {post.date}
                  </time>
                </div>

                {/* Content Column */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                    <a href={post.link} className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span>💬 {post.comments} comments</span>
                    <a
                      href={post.link}
                      className="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-semibold"
                    >
                      Read more →
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup - Added at bottom of blog feed */}
        <div className="mt-16 p-8 bg-gradient-to-br from-amber-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Get More Free Resources
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Join our community and receive free Islamic art resources, updates on new releases, and exclusive discounts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
              <button className="cta-button">
                Subscribe
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              🎁 Free resources • No spam • Unsubscribe anytime
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}