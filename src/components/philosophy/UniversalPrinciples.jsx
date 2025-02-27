// src/components/philosophy/UniversalPrinciples.jsx

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Sun, Moon, Crown, Heart, Star, MapPin } from 'lucide-react';

function UniversalPrinciples() {
  const corePrinciples = [
    {
      title: "The Universal Path",
      chinese: "普世之道",
      icon: MapPin,
      description: "The journey of inner transformation exists beyond any single tradition. Whether called a Daoist, Ascendant, or Mystic, the practitioner walks toward embodying their highest divine nature.",
      points: [
        "Universal principles transcend cultural boundaries",
        "Many names describe the same journey",
        "Personal transformation as the core focus",
        "Direct experience over theoretical knowledge"
      ]
    },
    {
      title: "Divine Union",
      chinese: "天人合一",
      icon: Crown,
      description: "At its heart, this path leads to the fusion of opposing forces within - light and dark, heaven and earth, yin and yang. This union reveals our inherent divine nature.",
      points: [
        "Balance of opposing forces",
        "Integration of all aspects of self",
        "Transcendence through harmony",
        "Embodiment of higher principles"
      ]
    },
    {
      title: "Living Practice",
      chinese: "活潑修持",
      icon: Heart,
      description: "The path involves practical methods that transform body, energy, and consciousness. These practices adapt to each individual while maintaining their essential principles.",
      points: [
        "Physical cultivation as foundation",
        "Energy work for transformation",
        "Meditation for awareness",
        "Integration into daily life"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Introduction */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <h2 className="font-chinese text-3xl text-gold-500 mb-2">道之本質</h2>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
              The Essence of the Way
            </h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-stone-300 leading-relaxed mb-6">
              Beyond tradition and culture lies a universal truth: the path to embodying 
              our highest nature through the harmonization of opposing forces.
            </p>
            <p className="text-lg text-stone-400 leading-relaxed">
              This is the essence of what it means to be a Daoist - one who walks the path 
              toward divine embodiment through the fusion of yin and yang, light and dark, 
              heaven and earth.
            </p>
          </div>
        </div>

        {/* Core Principles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {corePrinciples.map((principle, index) => (
            <Card 
              key={index}
              className="bg-stone-800/30 border-jade-500/10 hover:border-jade-500/30 
                       transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-jade-500/10 rounded-xl">
                    <principle.icon className="w-6 h-6 text-jade-500" />
                  </div>
                  <div>
                    <CardTitle className="text-gold-500">{principle.title}</CardTitle>
                    <p className="text-stone-400 font-chinese text-sm">{principle.chinese}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-300 mb-6 leading-relaxed">
                  {principle.description}
                </p>
                <ul className="space-y-2">
                  {principle.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-stone-400">
                      <span className="text-jade-500">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Harmony Gate Connection */}
        <Card className="bg-stone-800/30 border-jade-500/10 mb-16">
          <CardContent className="p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-jade-500/10 rounded-xl">
                <Star className="w-6 h-6 text-jade-500" />
              </div>
              <div>
                <h3 className="text-2xl text-gold-500">The Harmony Gate Way</h3>
                <p className="text-stone-400 font-chinese">和門之道</p>
              </div>
            </div>
            
            <p className="text-center text-stone-300 leading-relaxed mb-4">
              Harmony Gate represents this universal gateway - the threshold where opposing forces 
              meet and merge. Our name reflects both the journey and the destination: the 
              achievement of harmony through conscious practice and transformation.
            </p>
            <p className="text-center text-stone-300 leading-relaxed">
              Whether you identify as a seeker, mystic, or simply someone drawn to deeper truth, 
              our practices provide a clear path toward realizing your highest potential through 
              the balance and integration of all aspects of your being.
            </p>
          </CardContent>
        </Card>

        {/* Yin-Yang Symbolism */}
        <div className="relative w-full max-w-lg mx-auto">
          <div className="absolute inset-0 bg-gradient-radial from-jade-500/5 to-transparent opacity-50" />
          <div className="flex items-center justify-center">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 rounded-full border-2 border-jade-500/30" />
              <svg viewBox="0 0 100 100" className="w-full h-full text-jade-500">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" 
                      fill="currentColor" />
                <circle cx="50" cy="26" r="6" fill="#DAA520" />
                <circle cx="50" cy="74" r="6" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversalPrinciples;