import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Navigation */}
      <nav className="p-6 border-b border-purple-100">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
          Barakah Qalam 🎨
        </h1>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Beautiful Coloring Books
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Download free samples and explore our collection of handcrafted coloring pages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/samples"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg"
            >
              📥 Download Free Samples
            </Link>
            <Link
              href="/about"
              className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-200 hover:border-purple-400 transition-all"
            >
              👤 About Author
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Free Samples</h3>
            <p className="text-gray-600">Download coloring pages for free. No sign-up required.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Beautiful Designs</h3>
            <p className="text-gray-600">Handcrafted mandalas, flowers, and intricate patterns.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Download</h3>
            <p className="text-gray-600">Get your coloring pages immediately after download.</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 mb-8">Join thousands of happy colorists</p>
          <div className="flex flex-wrap justify-center gap-8 text-4xl">
            <span>💜</span>
            <span>🌸</span>
            <span>🌺</span>
            <span>🌼</span>
            <span>🦋</span>
            <span>🌈</span>
          </div>
        </div>
      </section>
    </main>
  )
}
