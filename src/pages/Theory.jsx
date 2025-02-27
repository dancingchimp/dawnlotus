// src/pages/Theory.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeFields from '../components/theory/ThreeFields';
import EnergySystem from '../components/theory/EnergySystem';

function Theory() {
  const [activeTopics, setActiveTopics] = useState({
    foundations: true,
    energetics: false,
    practice: false
  });

  const toggleTopic = (topicId) => {
    setActiveTopics({
      ...activeTopics,
      [topicId]: !activeTopics[topicId]
    });
  };

  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">道家理論</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Daoist Theory
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore the philosophical and practical foundations of Daoist practice,
            from fundamental concepts to advanced energetic principles.
          </p>
        </div>

        {/* Custom Energy System Components */}
        <ThreeFields />
        
        <EnergySystem />

        {/* Further Learning */}
        <div className="mt-16 bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-8 border border-jade-500/20">
          <h3 className="text-2xl font-serif text-gold-500 mb-4">Deepen Your Understanding</h3>
          <p className="text-stone-300 mb-6">
            Our comprehensive educational resources help you integrate theoretical knowledge with practical application.
            Explore the links below to dive deeper into specific aspects of Daoist theory.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link 
              to="/energy-cultivation"
              className="bg-stone-800/50 p-5 rounded-lg border border-jade-500/10 hover:border-jade-500/30 transition-all duration-300"
            >
              <h4 className="text-gold-400 font-serif mb-2">Energy Cultivation</h4>
              <p className="text-stone-300 text-sm">
                Learn about the systematic development of internal energy through progressive stages.
              </p>
            </Link>
            
            <div className="bg-stone-800/50 p-5 rounded-lg border border-jade-500/10 opacity-60">
              <h4 className="text-gold-400 font-serif mb-2">Five Elements Theory</h4>
              <p className="text-stone-300 text-sm">
                Explore the cycles of transformation that govern all natural phenomena.
              </p>
              <p className="text-stone-400 text-xs mt-2">(Coming Soon)</p>
            </div>
            
            <div className="bg-stone-800/50 p-5 rounded-lg border border-jade-500/10 opacity-60">
              <h4 className="text-gold-400 font-serif mb-2">Yin-Yang Balance</h4>
              <p className="text-stone-300 text-sm">
                Understand the interplay of opposing yet complementary forces.
              </p>
              <p className="text-stone-400 text-xs mt-2">(Coming Soon)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theory;