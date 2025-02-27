// src/components/layout/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const footerLinks = [
  {
    title: '修練 Practice',
    links: [
      { label: 'Daoist Yoga', path: '/practice/yoga' },
      { label: 'Qigong', path: '/practice/qigong' },
      { label: 'Meditation', path: '/practice/meditation' },
    ],
  },
  {
    title: '理論 Theory',
    links: [
      { label: 'Principles', path: '/theory/principles' },
      { label: 'Philosophy', path: '/theory/philosophy' },
      { label: 'Energy Cultivation', path: '/energy-cultivation' },
    ],
  },
  {
    title: '智慧 Wisdom',
    links: [
      { label: 'All Articles', path: '/blog' },
      { label: 'Energy Insights', path: '/blog?category=Energy+Cultivation' },
      { label: 'Philosophy', path: '/blog?category=Philosophy' },
      { label: 'Practical Tips', path: '/blog?category=Daily+Practice' },
    ],
  },
  {
    title: '資源 Resources',
    links: [
      { label: 'Schedule', path: '/schedule' },
      { label: 'About Us', path: '/about' },
      { label: 'FAQ', path: '/faq' },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-jade-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-chinese text-gold-500">和門</span>
              <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
            </div>
            <p className="text-stone-400 text-sm">
              Discover the ancient wisdom of Daoist practices in a modern context.
            </p>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-gold-500 font-chinese mb-4">{section.title}</h3>
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Harmony Gate. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="text-stone-500 hover:text-gold-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
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