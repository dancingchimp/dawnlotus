// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import PracticeOverview from '../components/sections/PracticeOverview';
import DaoistYogaConcept from '../components/sections/DaoistYogaConcept';
import TeachingsSection from '../components/TeachingsSection';
import PhilosophySection from '../components/PhilosophySection';

function Home() {
  return (
    <div className="bg-stone-900">
      {/* Hero Section */}
      <Hero />

      {/* What is Daoist Yoga Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-chinese text-3xl text-gold-500 mb-4">道瑜伽</h2>
              <h3 className="text-4xl font-serif text-stone-100 mb-6">What is Daoist Yoga?</h3>
              <div className="space-y-4 text-stone-300">
                <p>
                  Daoist Yoga represents a revolutionary integration of traditional Chinese energy arts with accessible physical postures. At its core is the understanding that physical forms serve as gateways to energy cultivation.
                </p>
                <p>
                  Unlike conventional yoga systems that focus primarily on flexibility or physical fitness, Daoist Yoga emphasizes the subtle energy work that happens within and through the physical forms.
                </p>
                <p>
                  Our approach recognizes that body, breath, and mind must work in harmony to create the conditions for transformation on all levels—physical, energetic, and spiritual.
                </p>
              </div>
              <div className="mt-8">
                <Link 
                  to="/practice"
                  className="inline-flex items-center gap-2 bg-jade-500 hover:bg-jade-600 text-stone-100 
                           px-6 py-3 rounded-lg transition-all duration-300"
                >
                  <span>Explore Our Practices</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-jade-500/5 to-transparent opacity-50" />
              <div className="bg-stone-800/30 rounded-xl overflow-hidden border border-jade-500/10">
                <img 
                  src="/api/placeholder/600/400" 
                  alt="Daoist Yoga Practice" 
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h4 className="text-xl font-serif text-gold-500 mb-2">A Comprehensive System</h4>
                  <p className="text-stone-300">
                    Daoist Yoga integrates physical opening, energy cultivation, and spiritual refinement into a holistic practice that addresses all aspects of human experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 px-4 bg-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">三支柱</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">The Three Pillars</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Our approach to Daoist Yoga is built upon three essential pillars that create a complete system for transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1: Physical Foundation */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-jade-500/10 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jade-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-gold-500 mb-2">Physical Foundation</h4>
              <p className="text-stone-300 mb-4">
                Using modified yoga postures and traditional qigong movements to create a strong, flexible, and aligned physical vessel.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Opening key meridian pathways</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Strengthening core energy centers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Creating proper structural alignment</span>
                </li>
              </ul>
            </div>
            
            {/* Pillar 2: Energy Cultivation */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-jade-500/10 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jade-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-gold-500 mb-2">Energy Cultivation</h4>
              <p className="text-stone-300 mb-4">
                Specific techniques to generate, store, and circulate qi throughout the body's meridian system.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Developing the three dantians</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Opening energy gates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Circulating qi in specific patterns</span>
                </li>
              </ul>
            </div>
            
            {/* Pillar 3: Spiritual Integration */}
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300">
              <div className="rounded-full w-16 h-16 flex items-center justify-center bg-jade-500/10 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-jade-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-serif text-gold-500 mb-2">Spiritual Integration</h4>
              <p className="text-stone-300 mb-4">
                Meditative awareness and philosophical principles that connect practice to daily living.
              </p>
              <ul className="space-y-2 text-stone-400">
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Developing presence and awareness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Cultivating inner stillness</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-jade-500 mt-1">•</span>
                  <span>Embodying Daoist principles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daoist Yoga Concept Section */}
      <DaoistYogaConcept />

      {/* Practice Paths */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">修練之道</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">Practice Paths</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Explore our diverse offerings, each providing a unique gateway to Daoist wisdom and energy cultivation.
            </p>
          </div>
          
          <PracticeOverview />
        </div>
      </section>

      {/* Core Teachings Section */}
      <section className="py-24 px-4 bg-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">核心教義</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">Core Teachings</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              The foundational concepts that guide our practice and understanding.
            </p>
          </div>
          
          <TeachingsSection />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">道家哲學</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">Daoist Philosophy</h3>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Ancient wisdom that remains profoundly relevant to modern life and practice.
            </p>
          </div>
          
          <PhilosophySection />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-b from-stone-800 to-stone-900 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-12 border border-gold-500/20">
            <div className="text-center">
              <h2 className="text-3xl font-serif text-gold-500 mb-6">Begin Your Journey</h2>
              <p className="text-xl text-stone-300 max-w-3xl mx-auto mb-8">
                Discover the transformative power of Daoist Yoga through our comprehensive 
                curriculum of practices, theory, and guided sessions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/practice"
                  className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                           rounded-xl text-lg font-semibold transition-all duration-300"
                >
                  Explore Practices
                </Link>
                <Link 
                  to="/about"
                  className="border border-gold-500/30 text-stone-100 px-8 py-4 
                           rounded-xl text-lg font-semibold transition-all duration-300
                           hover:bg-gold-500/10 hover:border-gold-500/50"
                >
                  About Harmony Gate
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;