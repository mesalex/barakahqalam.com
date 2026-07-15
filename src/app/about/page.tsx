import Link from 'next/link'

export default function About() {
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
          About Barakah Qalam
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Discover the story behind the coloring book creator
        </p>
      </section>

      {/* Story */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🌸 Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Barakah Qalam was born from a simple passion: bringing peace and creativity to people through the art of coloring. What started as a personal hobby of creating intricate mandala patterns has blossomed into a collection of beautiful coloring books that bring joy to thousands of colorists around the world.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Each design is carefully crafted with love, attention to detail, and a deep understanding of what makes coloring both relaxing and rewarding. Our patterns range from simple designs perfect for beginners to intricate masterpieces that challenge and inspire experienced colorists.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe in making creativity accessible to everyone. That's why we offer free samples and regularly release new content at no cost. Our mission is to spread the joy of coloring and help people find their own path to mindfulness and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-lg p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">
              ✨ Our Mission
            </h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <span>Provide beautiful, high-quality coloring designs that inspire creativity and relaxation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">💚</span>
                <span>Make coloring accessible to everyone through free samples and affordable coloring books</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🌟</span>
                <span>Create a community of colorists who share their passion and creativity</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-2xl">🧘</span>
                <span>Help people find mindfulness and stress relief through the art of coloring</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Creativity</h3>
              <p className="text-gray-600">Every design is unique and crafted with imagination</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Love</h3>
              <p className="text-gray-600">Each pattern is created with care and passion</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">Building a supportive community of colorists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions, feedback, or just want to say hello? We'd love to hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
          >
            Send a Message
          </Link>
        </div>
      </section>
    </main>
  )
}
