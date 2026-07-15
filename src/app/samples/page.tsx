import Link from 'next/link'

export default function Samples() {
  const samples = [
    {
      id: 1,
      title: 'Mandala Patterns',
      description: 'Intricate mandala designs for deep relaxation and meditation',
      downloadUrl: '/samples/mandala.pdf',
      thumbnail: '/samples/mandala-thumb.jpg',
      color: 'from-purple-400 to-pink-400',
    },
    {
      id: 2,
      title: 'Floral Designs',
      description: 'Beautiful flower patterns perfect for spring and summer',
      downloadUrl: '/samples/flowers.pdf',
      thumbnail: '/samples/flowers-thumb.jpg',
      color: 'from-pink-400 to-rose-400',
    },
    {
      id: 3,
      title: 'Animals',
      description: 'Cute animal coloring pages for all ages',
      downloadUrl: '/samples/animals.pdf',
      thumbnail: '/samples/animals-thumb.jpg',
      color: 'from-rose-400 to-orange-400',
    },
    {
      id: 4,
      title: 'Zentangle Patterns',
      description: 'Meditative tangle patterns for mindful coloring',
      downloadUrl: '/samples/zentangle.pdf',
      thumbnail: '/samples/zentangle-thumb.jpg',
      color: 'from-blue-400 to-indigo-400',
    },
    {
      id: 5,
      title: 'Nature Scenes',
      description: 'Scenic coloring pages featuring forests and landscapes',
      downloadUrl: '/samples/nature.pdf',
      thumbnail: '/samples/nature-thumb.jpg',
      color: 'from-green-400 to-teal-400',
    },
    {
      id: 6,
      title: 'Geometric Shapes',
      description: 'Modern geometric patterns for contemporary coloring',
      downloadUrl: '/samples/geometric.pdf',
      thumbnail: '/samples/geometric-thumb.jpg',
      color: 'from-cyan-400 to-blue-400',
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="p-6 border-b border-purple-100">
        <Link
          href="/"
          className="text-purple-700 hover:text-purple-900 font-semibold flex items-center gap-2"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
          Free Samples
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          No sign-up required • Instant download • Unlimited use
        </p>
      </section>

      {/* Samples Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {samples.map((sample) => (
            <div
              key={sample.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${sample.color} flex items-center justify-center`}>
                <div className="text-6xl">🎨</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sample.title}</h3>
                <p className="text-gray-600 mb-4">{sample.description}</p>

                <a
                  href={sample.downloadUrl}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Download Free
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Want More?</h2>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Join our newsletter to get notified when we release new coloring books and exclusive free samples
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
