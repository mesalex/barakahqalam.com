import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Barakah Qalam
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating thoughtful Islamic content for modern life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600">
              Barakah Qalam is dedicated to creating beautiful, high-quality Islamic art and literature that inspires creativity and spiritual reflection. We combine traditional Islamic aesthetics with modern design sensibilities to create content that resonates with contemporary audiences worldwide.
            </p>
            <p className="text-lg text-gray-600">
              Our name "Barakah Qalam" means "Blessed Pen" in Arabic, reflecting our commitment to creating content that brings blessings and inspiration to those who engage with it.
            </p>
          </div>

          <div className="aspect-square bg-gradient-to-br from-emerald-100 to-amber-100 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">📝</div>
              <h3 className="text-2xl font-semibold text-gray-700">
                Blessed Pen
              </h3>
              <p className="text-gray-600">
                Barakah Qalam
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Beautiful Design
            </h3>
            <p className="text-gray-600">
              Premium, elegant Islamic art and design
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Global Reach
            </h3>
            <p className="text-gray-600">
              Available worldwide through Amazon and Gumroad
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">💝</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Free Resources
            </h3>
            <p className="text-gray-600">
              Free samples available for everyone
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Our Collections
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📚 Books
              </h3>
              <p className="text-gray-600 mb-4">
                Premium coloring books, activity books, and educational materials featuring Islamic art, geometric patterns, and calligraphy.
              </p>
              <p className="text-gray-600">
                Available in both physical and digital formats through Amazon KDP and Gumroad.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                👕 Apparel
              </h3>
              <p className="text-gray-600 mb-4">
                Minimalist and elegant Islamic designs on premium quality apparel, including t-shirts, hoodies, and accessories.
              </p>
              <p className="text-gray-600">
                Available through Merch by Amazon with worldwide shipping.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-700 to-amber-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Have questions about our products or want to collaborate? We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a
              href="mailto:hello@barakahqalam.com"
              className="flex-1 bg-white text-emerald-700 px-6 py-4 rounded-lg font-semibold transition-colors text-center"
            >
              Email Us
            </a>
            <a
              href="/contact"
              className="flex-1 bg-transparent border-2 border-white text-white px-6 py-4 rounded-lg font-semibold transition-colors text-center"
            >
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}