// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

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
          
          {/* Direct implementation of practice cards */}
          <div className="grid md:grid-cols-3 gap-8 home-practices-grid">
            {/* Daoist Yoga */}
            <Link
              to="/practice"
              className="bg-stone-800/30 rounded-xl border border-jade-500/10 
                       hover:border-jade-500/30 transition-all duration-300 practice-path-card"
            >
              <div className="study-title">
                <h3 className="practice-path-title">Daoist Yoga</h3>
                <p className="practice-path-chinese">道瑜伽</p>
              </div>
              <p className="practice-path-description">
                Integration of physical postures with energy cultivation
              </p>
            </Link>
            
            {/* Qigong */}
            <Link
              to="/practice/qigong"
              className="bg-stone-800/30 rounded-xl border border-jade-500/10 
                       hover:border-jade-500/30 transition-all duration-300 practice-path-card"
            >
              <div className="study-title">
                <h3 className="practice-path-title">Qigong</h3>
                <p className="practice-path-chinese">氣功</p>
              </div>
              <p className="practice-path-description">
                Traditional energy development practices
              </p>
            </Link>
            
            {/* Meditation */}
            <Link
              to="/meditation"
              className="bg-stone-800/30 rounded-xl border border-jade-500/10 
                       hover:border-jade-500/30 transition-all duration-300 practice-path-card"
            >
              <div className="study-title">
                <h3 className="practice-path-title">Meditation</h3>
                <p className="practice-path-chinese">靜坐</p>
              </div>
              <p className="practice-path-description">
                Still and moving meditation techniques
              </p>
            </Link>
          </div>
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
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Yin-Yang */}
            <div className="bg-stone-800/30 rounded-lg p-6 border border-gold-500/10 
                           hover:border-gold-500/30 transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="font-chinese text-2xl text-gold-500 group-hover:scale-110 
                              transition-transform duration-300 inline-block">
                  陰陽
                </h3>
                <p className="text-stone-400 text-sm">Yīn Yáng</p>
              </div>
              
              <h4 className="text-lg font-serif text-stone-100 mb-2">Duality</h4>
              <p className="text-stone-300">Understanding and balancing opposing forces within body and mind.</p>
            </div>
            
            {/* Qi */}
            <div className="bg-stone-800/30 rounded-lg p-6 border border-gold-500/10 
                           hover:border-gold-500/30 transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="font-chinese text-2xl text-gold-500 group-hover:scale-110 
                              transition-transform duration-300 inline-block">
                  氣
                </h3>
                <p className="text-stone-400 text-sm">Qì</p>
              </div>
              
              <h4 className="text-lg font-serif text-stone-100 mb-2">Vital Energy</h4>
              <p className="text-stone-300">Cultivating and directing life force through practice and awareness.</p>
            </div>
            
            {/* Dao */}
            <div className="bg-stone-800/30 rounded-lg p-6 border border-gold-500/10 
                           hover:border-gold-500/30 transition-all duration-300 group">
              <div className="mb-4">
                <h3 className="font-chinese text-2xl text-gold-500 group-hover:scale-110 
                              transition-transform duration-300 inline-block">
                  道
                </h3>
                <p className="text-stone-400 text-sm">Dào</p>
              </div>
              
              <h4 className="text-lg font-serif text-stone-100 mb-2">The Way</h4>
              <p className="text-stone-300">Following the natural path of harmony and spiritual development.</p>
            </div>
          </div>
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
          
          <div className="relative">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Natural Harmony */}
              <div 
                className="bg-stone-800/30 rounded-xl p-8 border border-gold-500/10 
                         hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <h3 className="font-chinese text-2xl text-gold-500 mb-2">
                    自然和諧
                  </h3>
                  <h4 className="text-xl font-serif text-stone-100">
                    Natural Harmony
                  </h4>
                </div>

                <p className="text-stone-300 mb-6">
                  Aligning practice with the natural rhythms of the universe and our own bodies.
                </p>

                <div className="bg-stone-800/50 rounded-lg p-4">
                  <p className="font-chinese text-lg text-gold-400 mb-1">
                    道法自然
                  </p>
                  <p className="text-stone-400 text-sm italic">
                    The Way follows nature
                  </p>
                </div>
              </div>
              
              {/* Balance Cultivation */}
              <div 
                className="bg-stone-800/30 rounded-xl p-8 border border-gold-500/10 
                         hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <h3 className="font-chinese text-2xl text-gold-500 mb-2">
                    平衡修養
                  </h3>
                  <h4 className="text-xl font-serif text-stone-100">
                    Balance Cultivation
                  </h4>
                </div>

                <p className="text-stone-300 mb-6">
                  Developing equilibrium between movement and stillness, effort and ease.
                </p>

                <div className="bg-stone-800/50 rounded-lg p-4">
                  <p className="font-chinese text-lg text-gold-400 mb-1">
                    致虛極，守靜篤
                  </p>
                  <p className="text-stone-400 text-sm italic">
                    Attain utmost emptiness, maintain tranquility
                  </p>
                </div>
              </div>
              
              {/* Mindful Integration */}
              <div 
                className="bg-stone-800/30 rounded-xl p-8 border border-gold-500/10 
                         hover:border-gold-500/30 transition-all duration-300 group"
              >
                <div className="mb-6">
                  <h3 className="font-chinese text-2xl text-gold-500 mb-2">
                    正念合一
                  </h3>
                  <h4 className="text-xl font-serif text-stone-100">
                    Mindful Integration
                  </h4>
                </div>

                <p className="text-stone-300 mb-6">
                  Unifying body, breath, and spirit through conscious practice.
                </p>

                <div className="bg-stone-800/50 rounded-lg p-4">
                  <p className="font-chinese text-lg text-gold-400 mb-1">
                    天人合一
                  </p>
                  <p className="text-stone-400 text-sm italic">
                    Heaven and human become one
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-stone-900 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl font-serif text-gold-500 mb-6">Begin Your Journey</h2>
          <p className="text-xl text-stone-300 mb-8">
            Explore our practices and discover the profound transformation that comes 
            from integrating ancient wisdom with modern methods.
          </p>
          
          <Link
            to="/practice"
            className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                     rounded-xl text-lg font-medium transition-all duration-300 
                     hover:-translate-y-1 inline-block"
          >
            Explore Practices
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;