import Link from 'next/link'

export default function Contact() {
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
          Contact Us
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          We'd love to hear from you!
        </p>
      </section>

      {/* Contact Form */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option>General Inquiry</option>
                  <option>Feedback</option>
                  <option>Collaboration</option>
                  <option>Report an Issue</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Or reach us on social media
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://pinterest.com/barakahqalam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all"
              >
                📌 Pinterest
              </a>
              <a
                href="https://twitter.com/barakahqalam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all"
              >
                🐦 Twitter
              </a>
              <a
                href="https://instagram.com/barakahqalam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-all"
              >
                📸 Instagram
              </a>
              <a
                href="https://threads.net/@barakahqalam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all"
              >
                🧵 Threads
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
