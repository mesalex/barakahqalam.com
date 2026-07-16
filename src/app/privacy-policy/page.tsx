'use client';

import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <nav className="navbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-amber-600">
            Barakah Qalam
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/books" className="nav-link">
              Books
            </Link>
            <Link href="/apparel" className="nav-link">
              Apparel
            </Link>
            <Link href="/free-resources" className="nav-link">
              Free Resources
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">
              Barakah Qalam collects information you provide directly to us, including:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• Email addresses (for newsletter subscriptions and free resources)</li>
              <li>• Contact information (name, email, message content)</li>
              <li>• Purchase information (if you make a purchase)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• Send you the free resources you requested</li>
              <li>• Send you updates about new products and promotions</li>
              <li>• Respond to your inquiries and comments</li>
              <li>• Improve our products and services</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
            <p className="text-gray-700 mb-4">
              We take reasonable measures to help protect information about you from
              unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
            <p className="text-gray-700 mb-4">
              You can:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• Opt out of receiving marketing emails</li>
              <li>• Unsubscribe from our newsletter at any time</li>
              <li>• Request that we delete your information</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We use third-party services to facilitate our operations, including:
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• Amazon for product sales and fulfillment</li>
              <li>• Email service providers for newsletter delivery</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us at
              hello@barakahqalam.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-amber-600 mb-4">
                Barakah Qalam
              </h3>
              <p className="text-gray-600 text-sm">
                Creating thoughtful Islamic art and literature to inspire and educate.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/books" className="hover:text-amber-600">
                    Books
                  </Link>
                </li>
                <li>
                  <Link href="/apparel" className="hover:text-amber-600">
                    Apparel
                  </Link>
                </li>
                <li>
                  <Link href="/free-resources" className="hover:text-amber-600">
                    Free Resources
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-2xl hover:text-amber-600 transition-colors"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-amber-600 transition-colors"
                >
                  📸
                </a>
                <a
                  href="#"
                  className="text-2xl hover:text-amber-600 transition-colors"
                >
                  📱
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                © 2024 Barakah Qalam. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
