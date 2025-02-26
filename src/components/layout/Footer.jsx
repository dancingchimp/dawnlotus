// src/components/layout/Footer.jsx - Corrected with contact information

import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: 'Practice',
    links: [
      { label: 'Daoist Yoga', path: '/daoist-yoga' },
      { label: 'Nei Gong', path: '/nei-gong' },
      { label: 'Tai Chi', path: '/tai-chi' },
      { label: 'Meditation', path: '/meditation' },
    ],
  },
  {
    title: 'Theory',
    links: [
      { label: 'Daoist Principles', path: '/theory' },
      { label: 'Energy Cultivation', path: '/energy-cultivation' },
      { label: 'Wisdom Teachings', path: '/blog' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Practice Schedule', path: '/schedule' },
      { label: 'Recommended Reading', path: '/resources' },
      { label: 'Frequently Asked Questions', path: '/faq' },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-jade-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-chinese text-gold-500">和門</span>
              <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
            </div>
            <p className="text-stone-400 text-sm">
              Discover the ancient wisdom of Daoist practices in a modern context.
            </p>
            <div className="pt-4">
              <p className="text-stone-500 text-xs">
                © {new Date().getFullYear()} Harmony Gate
              </p>
              <p className="text-stone-500 text-xs">
                All rights reserved.
              </p>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-gold-500 font-serif mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-stone-400 hover:text-gold-400 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Section */}
          <div>
            <h3 className="text-gold-500 font-serif mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://many.bio/sovereignharmony" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M12 2a9.96 9.96 0 0 1 7.071 2.929 9.96 9.96 0 0 1 2.929 7.071 9.96 9.96 0 0 1-2.929 7.071A9.96 9.96 0 0 1 12 22a9.96 9.96 0 0 1-7.071-2.929A9.96 9.96 0 0 1 2 12a9.96 9.96 0 0 1 2.929-7.071A9.96 9.96 0 0 1 12 2Z" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                  <span>Visit Our Link Hub</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://signal.me/#eu/--flkIBHugKFa1TKXL56Kmeaedgfnriw96sBgiKuTB1izx9pLetA-K8vts4rIN90" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-stone-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <span>Message on Signal</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contact@harmonygate.com" 
                  className="text-stone-400 hover:text-gold-400 transition-colors duration-300 flex items-center gap-2"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>Email Us</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-gold-400 transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-500 hover:text-gold-400 transition-colors duration-300"
              >
                <span className="sr-only">YouTube</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <div className="flex space-x-6">
              <a
                href="/privacy-policy"
                className="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;