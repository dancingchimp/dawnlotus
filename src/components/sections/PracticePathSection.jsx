// src/components/sections/PracticePathsSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { Yoga, Wind, Activity, BookOpen } from 'lucide-react';

const practicePaths = [
  {
    title: 'Daoist Yoga',
    chinese: '道瑜伽',
    icon: Yoga,
    description: 'Integration of physical postures with energy cultivation',
    features: [
      'Adapted asanas for energy cultivation',
      'Meridian-based sequences',
      'Body-energy integration'
    ],
    path: '/daoist-yoga'
  },
  {
    title: 'Nei Gong',
    chinese: '內功',
    icon: Wind,
    description: 'Internal energy development and circulation practices',
    features: [
      'Standing meditation',
      'Energy gates opening',
      'Internal alchemy'
    ],
    path: '/nei-gong'
  },
  {
    title: 'Tai Chi',
    chinese: '太極',
    icon: Activity,
    description: 'Flowing movement meditation for balance and harmony',
    features: [
      'Classical form practice',
      'Push hands partner work',
      'Energy applications'
    ],
    path: '/tai-chi'
  },
  {
    title: 'Meditation',
    chinese: '靜坐',
    icon: BookOpen,
    description: 'Seated practices for mental clarity and spiritual development',
    features: [
      'Breath awareness',
      'Energy circulation',
      'Stillness cultivation'
    ],
    path: '/meditation'
  }
];

function PracticePathsSection() {
  return (
    <section className="py-24 bg-stone-900 relative">
      <div className="absolute inset-0 bg-gradient-texture opacity-5" />
      
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">修練之道</h2>
          <h3 className="text-4xl font-serif text-stone-100 mb-6">The Path of Practice</h3>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore the four integrated paths of Daoist cultivation at Harmony Gate.
          </p>
        </div>
        
        {/* Practice Paths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practicePaths.map((path, index) => (
            <div 
              key={index}
              className="bg-stone-800/30 rounded-xl border border-jade-500/10 hover:border-jade-500/30 
                       transition-all duration-300 overflow-hidden flex flex-col"
            >
              {/* Path Header */}
              <div className="p-6 border-b border-jade-500/10">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 bg-jade-500/10 rounded-lg">
                    <path.icon className="w-6 h-6 text-jade-500" />
                  </div>
                  <div>
                    <h4 className="text-gold-500 font-serif text-xl">{path.title}</h4>
                    <p className="text-stone-400 font-chinese text-sm">{path.chinese}</p>
                  </div>
                </div>
                <p className="text-stone-300 text-sm">{path.description}</p>
              </div>
              
              {/* Path Features */}
              <div className="p-6 flex-1">
                <ul className="space-y-2 mb-6">
                  {path.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-stone-400 text-sm">
                      <span className="text-jade-500 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Path Link */}
              <div className="p-4 mt-auto">
                <Link 
                  to={path.path}
                  className="block w-full bg-stone-700/50 hover:bg-jade-500 text-stone-300 hover:text-stone-100 
                           text-center py-2 rounded-lg text-sm font-medium transition-all duration-300"
                >
                  Explore Path
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Unity Message */}
        <div className="mt-16 text-center">
          <p className="text-stone-400 italic max-w-2xl mx-auto">
            While presented as distinct paths, these practices form an integrated whole in the Daoist tradition,
            each supporting and enhancing the others in a comprehensive approach to cultivation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PracticePathsSection;