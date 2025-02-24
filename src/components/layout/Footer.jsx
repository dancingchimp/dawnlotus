import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-jade-500/10">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-chinese text-gold-500">和門</span>
              <span className="text-lg font-serif text-stone-100">Harmony Gate</span>
            </div>
            <p className="text-stone-400 text-sm">
              Modern Daoist practice for transformation.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-stone-800">
          <p className="text-center text-stone-500 text-sm">
            © {new Date().getFullYear()} Harmony Gate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;