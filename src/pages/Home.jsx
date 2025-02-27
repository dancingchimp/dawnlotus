// src/pages/Home.jsx
import React from 'react';
import NavBar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import CorePrinciples from '../components/sections/CorePrinciples';
import FounderSection from '../components/sections/FounderSection';
import PracticePaths from '../components/sections/PracticePaths';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="bg-stone-900 min-h-screen">
      <NavBar />
      
      {/* Main Content Sections */}
      <main>
        <HeroSection />
        <CorePrinciples />
        <PracticePaths />
        <FounderSection />
        
        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-b from-stone-900 to-stone-800 relative">
          <div className="absolute inset-0 bg-gradient-texture opacity-5" />
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-12 border border-gold-500/20
                         shadow-xl shadow-stone-950/30 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-jade-500/5 rounded-full blur-2xl"></div>
              
              <div className="text-center relative z-10">
                <h2 className="text-3xl font-serif text-gold-500 mb-6">Begin Your Journey</h2>
                <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                  Discover the transformative power of Daoist Yoga through our comprehensive 
                  curriculum of practices, theory, and guided sessions. Take the first step 
                  on your path to harmony and integration today.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="/practice"
                    className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                             rounded-xl text-lg font-medium transition-all duration-300
                             shadow-md shadow-jade-900/20 hover:shadow-lg hover:shadow-jade-900/30"
                  >
                    Explore Practices
                  </a>
                  <a 
                    href="/about"
                    className="border border-gold-500/30 text-stone-100 px-8 py-4 
                             rounded-xl text-lg font-medium transition-all duration-300
                             hover:bg-gold-500/10 hover:border-gold-500/50"
                  >
                    About Harmony Gate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;