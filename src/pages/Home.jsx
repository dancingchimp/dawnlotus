// src/pages/Home.jsx - Final updated structure

import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Zap, BookOpen, ChevronRight } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-stone-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Flowing energy lines */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-jade-500/10 rounded-full blur-3xl animate-flow" />
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-flow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full 
                        bg-gradient-radial from-jade-500/5 to-transparent opacity-50" />
        </div>

        <div className="relative px-4 py-16 w-full max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main content */}
            <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
              {/* Chinese Title */}
              <div className="mb-6 font-chinese">
                <h2 className="text-3xl text-gold-500 tracking-wide">和門</h2>
                <p className="text-stone-400">Hé Mén</p>
              </div>
              
              {/* English Title */}
              <h1 className="text-5xl lg:text-6xl font-serif font-bold text-stone-100 tracking-tight mb-6">
                Harmony Gate
              </h1>

              <p className="mt-8 text-xl lg:text-2xl text-stone-300 leading-relaxed font-serif">
                Discover the ancient wisdom of Daoist yoga, where movement meets meditation, 
                and practice transforms into enlightenment.
              </p>

              <div className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start">
                <Link 
                  to="/daoist-yoga"
                  className="bg-gold-500 hover:bg-gold-600 text-stone-900 px-8 py-4 
                           rounded-xl text-lg font-semibold transition-all duration-300 
                           hover:-translate-y-1 flex items-center justify-center gap-2
                           group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-600/0 via-stone-100/20 to-gold-600/0 
                                translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  Practice Daoist Yoga
                </Link>
                
                <Link 
                  to="/theory"
                  className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                           rounded-xl text-lg font-semibold transition-all duration-300
                           hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Explore Theory
                </Link>
                
                <Link 
                  to="/about"
                  className="border border-stone-600 text-stone-100 px-8 py-4 
                           rounded-xl text-lg font-semibold transition-all duration-300
                           hover:bg-stone-800 hover:border-stone-500
                           flex items-center justify-center gap-2"
                >
                  About Us
                </Link>
              </div>
            </div>

            {/* Right side - Decorative element */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-96 h-96">
                {/* Animated Taiji (Yin-Yang) symbol */}
                <div className="absolute inset-0 bg-gradient-to-br from-jade-500/20 to-transparent 
                              rounded-full blur-2xl transform -rotate-12 animate-pulse-slow" />
                <div className="absolute inset-10 bg-gradient-to-tr from-gold-500/10 to-transparent 
                              rounded-full blur-xl transform rotate-45 animate-float" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-64 h-64 text-jade-500">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" />
                    <circle cx="50" cy="26" r="6" fill="#DAA520" />
                    <circle cx="50" cy="74" r="6" fill="currentColor" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Path of Practice Section */}
      <section className="py-24 bg-stone-900 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">修練之道</h2>
            <h3 className="text-4xl font-serif text-stone-100 mb-6">The Path of Practice</h3>
          </div>

          {/* Practice Methods Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Daoist Yoga Card */}
            <div className="bg-stone-800/30 rounded-xl border border-jade-500/10 hover:border-jade-500/30 
                          transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="font-chinese text-2xl text-gold-500 mb-2">道瑜伽</div>
                <h3 className="text-2xl font-serif text-stone-100 mb-4">Daoist Yoga</h3>
                <p className="text-stone-300 mb-6">
                  Integration of physical postures with energy cultivation, creating a complete 
                  system for transformation of body, energy, and spirit.
                </p>
                <Link 
                  to="/daoist-yoga"
                  className="inline-flex items-center gap-1 text-gold-500 hover:text-gold-400 transition-colors"
                >
                  Begin Practice <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Nei Gong Card */}
            <div className="bg-stone-800/30 rounded-xl border border-jade-500/10 hover:border-jade-500/30 
                          transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="font-chinese text-2xl text-gold-500 mb-2">內功</div>
                <h3 className="text-2xl font-serif text-stone-100 mb-4">Nei Gong</h3>
                <p className="text-stone-300 mb-6">
                  Traditional energy cultivation practices focused on developing internal power 
                  and refining essence, energy, and spirit.
                </p>
                <Link 
                  to="/nei-gong"
                  className="inline-flex items-center gap-1 text-gold-500 hover:text-gold-400 transition-colors"
                >
                  Begin Practice <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Tai Chi Card */}
            <div className="bg-stone-800/30 rounded-xl border border-jade-500/10 hover:border-jade-500/30 
                          transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="font-chinese text-2xl text-gold-500 mb-2">太極</div>
                <h3 className="text-2xl font-serif text-stone-100 mb-4">Tai Chi</h3>
                <p className="text-stone-300 mb-6">
                  Moving meditation that embodies the principles of yin and yang through 
                  flowing sequences that develop harmony and balance.
                </p>
                <Link 
                  to="/tai-chi"
                  className="inline-flex items-center gap-1 text-gold-500 hover:text-gold-400 transition-colors"
                >
                  Begin Practice <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seated Meditation Section */}
      <section className="py-24 bg-gradient-to-b from-stone-900 to-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Meditation Image/Symbol */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-jade-500/10 rounded-full" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-chinese text-8xl text-gold-500 transform -translate-y-2">靜</div>
                </div>
              </div>
            </div>
            
            {/* Meditation Content */}
            <div className="w-full md:w-1/2">
              <div className="font-chinese text-3xl text-gold-500 mb-2">靜坐</div>
              <h3 className="text-3xl font-serif text-stone-100 mb-6">Meditation</h3>
              <p className="text-xl text-stone-300 mb-6 leading-relaxed">
                Seated meditation forms the foundation of Daoist practice, allowing for deep stillness 
                and inner awareness that complements the movement practices.
              </p>
              <p className="text-stone-300 mb-8">
                Our approach integrates traditional Daoist meditation techniques with modern 
                understanding of mindfulness, creating a practice that is both authentic and accessible.
              </p>
              <Link 
                to="/meditation"
                className="inline-flex items-center gap-2 bg-jade-500 hover:bg-jade-600 text-stone-100 
                         px-6 py-3 rounded-lg transition-colors"
              >
                Learn Meditation Techniques
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Teachings Section */}
      <section className="py-24 bg-stone-800 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">核心教義</h2>
            <h3 className="text-4xl font-serif text-stone-100">Core Teachings</h3>
          </div>

          {/* Teachings Grid */}
          <div className="grid md:grid-cols-3 gap-6">
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

          {/* Theory Link */}
          <div className="mt-12 text-center">
            <Link
              to="/theory"
              className="inline-flex items-center gap-2 border border-jade-500/30 
                       text-stone-100 px-8 py-3 rounded-lg text-lg font-serif
                       hover:bg-jade-500/10 transition-all duration-300"
            >
              Explore Daoist Theory
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog/Wisdom Preview Section */}
      <section className="py-24 bg-gradient-to-b from-stone-800 to-stone-900 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-chinese text-3xl text-gold-500 mb-4">智慧分享</h2>
            <h3 className="text-4xl font-serif text-stone-100">Wisdom Teachings</h3>
          </div>

          {/* Featured Blog Post */}
          <div className="mb-12 bg-stone-800/30 border border-jade-500/10 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Featured Image */}
              <div className="h-64 md:h-auto bg-stone-700 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-jade-500/10 to-gold-500/10 opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-chinese text-8xl text-white/10">道</span>
                </div>
              </div>
              
              {/* Featured Content */}
              <div className="p-8">
                <div className="text-jade-500 text-sm inline-block bg-jade-500/10 px-3 py-1 rounded-full mb-4">
                  Theory & Philosophy
                </div>
                <h3 className="text-2xl font-serif text-gold-500 mb-4">
                  What is Daoist Yoga? Ancient Wisdom Meets Modern Practice
                </h3>
                <p className="text-stone-300 mb-6">
                  Discover how Daoist Yoga integrates ancient wisdom with modern physical practice, 
                  creating a harmonious path that transforms body, energy, and spirit.
                </p>
                <Link 
                  to="/blog/what-is-daoist-yoga"
                  className="inline-flex items-center gap-1 text-jade-500 hover:text-jade-400 transition-colors"
                >
                  Read Article <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Recent Articles */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-800/30 rounded-lg border border-stone-700 hover:border-jade-500/30 
                          transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="text-jade-500 text-xs inline-block bg-jade-500/10 px-2 py-1 rounded-full mb-3">
                  Energy Cultivation
                </div>
                <h4 className="text-xl font-serif text-gold-500 mb-3">
                  Opening the Energy Gates: Key Points in Daoist Yoga
                </h4>
                <p className="text-stone-300 text-sm mb-4">
                  Learn about the key energy gates in the body and how to work with them for 
                  better health and spiritual development.
                </p>
                <Link
                  to="/blog/opening-energy-gates"
                  className="inline-flex items-center gap-1 text-jade-500 text-sm hover:text-jade-400 transition-colors"
                >
                  Read Article <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-stone-800/30 rounded-lg border border-stone-700 hover:border-jade-500/30 
                          transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="text-jade-500 text-xs inline-block bg-jade-500/10 px-2 py-1 rounded-full mb-3">
                  Meditation
                </div>
                <h4 className="text-xl font-serif text-gold-500 mb-3">
                  Standing Meditation: The Foundation of Daoist Energy Work
                </h4>
                <p className="text-stone-300 text-sm mb-4">
                  Discover why standing meditation (Zhan Zhuang) forms the foundation of 
                  Daoist energy cultivation.
                </p>
                <Link
                  to="/blog/standing-meditation-foundation"
                  className="inline-flex items-center gap-1 text-jade-500 text-sm hover:text-jade-400 transition-colors"
                >
                  Read Article <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="bg-stone-800/30 rounded-lg border border-stone-700 hover:border-jade-500/30 
                          transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className="text-jade-500 text-xs inline-block bg-jade-500/10 px-2 py-1 rounded-full mb-3">
                  Philosophy
                </div>
                <h4 className="text-xl font-serif text-gold-500 mb-3">
                  The Three Treasures: Jing, Qi, and Shen in Daoist Practice
                </h4>
                <p className="text-stone-300 text-sm mb-4">
                  Explore the Three Treasures concept and how these fundamental energies form the 
                  foundation of Daoist cultivation.
                </p>
                <Link
                  to="/blog/three-treasures-jing-qi-shen"
                  className="inline-flex items-center gap-1 text-jade-500 text-sm hover:text-jade-400 transition-colors"
                >
                  Read Article <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 border border-gold-500/30 
                       text-stone-100 px-6 py-3 rounded-lg text-lg
                       hover:bg-gold-500/10 transition-all duration-300"
            >
              View All Wisdom Teachings
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 relative">
        <div className="absolute inset-0 bg-gradient-texture opacity-5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl font-serif text-gold-500 mb-6">Begin Your Journey</h2>
          <p className="text-xl text-stone-300 mb-8">
            Ready to experience the integration of body, energy, and spirit through Daoist practice?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/daoist-yoga"
              className="bg-gold-500 hover:bg-gold-600 text-stone-900 px-8 py-4 
                      rounded-xl text-lg font-semibold transition-all duration-300 
                      hover:-translate-y-1"
            >
              Practice Daoist Yoga
            </Link>
            <Link 
              to="/meditation"
              className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                      rounded-xl text-lg font-semibold transition-all duration-300
                      hover:-translate-y-1"
            >
              Learn Meditation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;