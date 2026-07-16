'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Last updated: January 1, 2024
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="section bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Barakah Qalam collects information you provide directly to us, including:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>• Email addresses (for newsletter subscriptions and free resources)</li>
              <li>• Contact information (name, email, message content)</li>
              <li>• Purchase information (if you make a purchase)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>• Send you the free resources you requested</li>
              <li>• Send you updates about new products and promotions</li>
              <li>• Respond to your inquiries and comments</li>
              <li>• Improve our products and services</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Data Storage and Security</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We take reasonable measures to help protect information about you from
              unauthorized access, alteration, disclosure, or destruction. However, no
              method of transmission over the Internet is 100% secure.
            </p>

            <h2 className="text-2xl font-bold mb-4">Your Choices</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              You can:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>• Opt out of receiving marketing emails</li>
              <li>• Unsubscribe from our newsletter at any time</li>
              <li>• Request that we delete your information</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use third-party services to facilitate our operations, including:
            </p>
            <ul className="text-gray-700 dark:text-gray-300 mb-6 space-y-2">
              <li>• Amazon for product sales and fulfillment</li>
              <li>• Email service providers for newsletter delivery</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you have any questions about this Privacy Policy, please contact us at
              hello@barakahqalam.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}