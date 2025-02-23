// src/pages/Home.jsx

import React from 'react';
import Hero from '../components/Hero';
import PracticeOverview from '../components/sections/PracticeOverview';
import TeachingsSection from '../components/sections/TeachingsSection';
import PhilosophySection from '../components/sections/PhilosophySection';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Practice Overview */}
      <section className="py-24 bg-stone-900 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">修練之道</h2>
            <h3 className="text-4xl font-serif text-stone-100">The Path of Practice</h3>
          </div>
          <PracticeOverview />
        </div>
      </section>

      {/* Core Teachings */}
      <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">核心教義</h2>
            <h3 className="text-4xl font-serif text-stone-100">Core Teachings</h3>
          </div>
          <TeachingsSection />
        </div>
      </section>

      {/* Philosophy Overview */}
      <section className="py-24 bg-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">道家哲學</h2>
            <h3 className="text-4xl font-serif text-stone-100">Daoist Philosophy</h3>
          </div>
          <PhilosophySection />
        </div>
      </section>
    </div>
  );
}

export default Home;