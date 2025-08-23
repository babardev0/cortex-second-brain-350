import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <>
      <Helmet>
        <title>Privacy Policy | FUBH</title>
        <meta 
          name="description" 
          content="Read the official privacy policy of FUBH apps. Learn how we handle your data, storage permissions, and security." 
        />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {currentYear}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Welcome to FUBH ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our "All Video Downloader" application and related services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our app, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our application.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Personal Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, such as:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Email address (when you contact us for support)</li>
                    <li>Device information and identifiers</li>
                    <li>Usage data and app preferences</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Automatically Collected Information
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our app may automatically collect certain information, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Device type and operating system</li>
                    <li>App usage statistics and crash reports</li>
                    <li>Network information and IP address</li>
                    <li>Download history and preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. How We Use Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the collected information for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To provide and maintain our video downloading services</li>
                <li>To improve app functionality and user experience</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze usage patterns and optimize performance</li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            {/* Data Sharing & Security */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Data Sharing & Security
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Data Sharing
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>To comply with legal requirements or court orders</li>
                    <li>To protect our rights, property, or safety</li>
                    <li>With your explicit consent</li>
                    <li>To trusted service providers who assist in operating our app</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Security Measures
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
                  </p>
                </div>
              </div>
            </section>

            {/* Permissions Usage */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Permissions Usage
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Storage Access
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our app requires storage access permissions to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Save downloaded videos to your device</li>
                    <li>Access and manage downloaded content</li>
                    <li>Create and manage app-specific folders</li>
                    <li>Cache temporary files for better performance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Network Access
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Network permissions are required to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Connect to video hosting platforms</li>
                    <li>Download video content</li>
                    <li>Check for app updates</li>
                    <li>Send crash reports and analytics (if enabled)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third Party Services & Ads */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Third Party Services & Ads
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Third-Party Services
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Our app may integrate with third-party services for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                    <li>Analytics and performance monitoring</li>
                    <li>Crash reporting and error tracking</li>
                    <li>Advertising services (if applicable)</li>
                    <li>Payment processing (if applicable)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">
                    Advertising
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    If our app displays advertisements, these may be served by third-party ad networks. These networks may use cookies and similar technologies to collect information about your app usage and deliver personalized ads.
                  </p>
                </div>
              </div>
            </section>

            {/* User Rights */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. User Rights
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request access to your personal data</li>
                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                <li><strong>Deletion:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Withdrawal:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Contact Information
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Organization:</strong> FUBH
                  </p>
                  <p className="text-gray-700">
                    <strong>Email:</strong> 
                    <a 
                      href="mailto:babar.dev0@gmail.com" 
                      className="text-blue-600 hover:text-blue-800 underline ml-1"
                    >
                      babar.dev0@gmail.com
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <strong>App:</strong> All Video Downloader
                  </p>
                </div>
              </div>
            </section>

            {/* Updates to Policy */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Updates to This Policy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              © {currentYear} FUBH. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy; 