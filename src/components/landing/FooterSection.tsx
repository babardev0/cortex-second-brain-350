import React from 'react';
import { Link } from 'react-router-dom';

interface FooterSectionProps {
  show?: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ show = true }) => {
  const currentYear = new Date().getFullYear();

  if (!show) return null;

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">FUBH</h3>
            <p className="text-gray-600 mb-4 max-w-md">
              Empowering users with powerful tools for content management and video downloading. 
              Built with privacy and security in mind.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:babar.dev0@gmail.com"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:babar.dev0@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:babar.dev0@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Contact Support
                </a>
              </li>
              <li>
                <Link 
                  to="/how"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  How It Works
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} FUBH. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm mt-2 md:mt-0">
              All Video Downloader - Secure and Fast
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}; 