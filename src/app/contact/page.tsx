'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Have questions, suggestions, or feedback? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:border-amber-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-semibold">hello@barakahqalam.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Social Media</p>
                    <div className="flex gap-4 mt-2">
                      <a
                        href="#"
                        className="text-2xl hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        🐦
                      </a>
                      <a
                        href="#"
                        className="text-2xl hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        📸
                      </a>
                      <a
                        href="#"
                        className="text-2xl hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                      >
                        📱
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We typically respond within 24-48 hours. For urgent matters, please
                  use the contact form above.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">What We Can Help With</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Product inquiries</li>
                  <li>• Feedback and suggestions</li>
                  <li>• Bulk orders</li>
                  <li>• Collaboration opportunities</li>
                  <li>• Technical support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}