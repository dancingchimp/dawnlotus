// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-jade-500/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-chinese text-gold-500">和門</span>
              <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
            </div>
            <p className="text-stone-400 text-sm">
              Modern Daoist practice for transformation
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-gold-500 font-serif mb-3">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-stone-400 hover:text-jade-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/practice" className="text-stone-400 hover:text-jade-400 transition-colors">
                    Practice
                  </Link>
                </li>
                <li>
                  <Link to="/theory" className="text-stone-400 hover:text-jade-400 transition-colors">
                    Theory
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-stone-400 hover:text-jade-400 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-gold-500 font-serif mb-3">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-stone-400 hover:text-jade-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-400 hover:text-jade-400 transition-colors">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-stone-400 hover:text-jade-400 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-stone-800 text-center">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Harmony Gate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;