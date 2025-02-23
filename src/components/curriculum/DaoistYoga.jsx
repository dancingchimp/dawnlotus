// src/components/curriculum/DaoistYoga.jsx

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Battery, Wind, Heart, Circle } from 'lucide-react';

const curriculum = [
  {
    level: 1,
    title: "Foundation: Western Yoga Bridge",
    description: "Establishing physical awareness through familiar poses",
    duration: "8 weeks",
    icon: Heart,
    practices: [
      {
        name: "Standing Poses",
        description: "Using warrior poses to develop root and stability",
        benefits: ["Grounding", "Physical alignment", "Energy awareness"]
      },
      {
        name: "Floor Sequences",
        description: "Down dog, cobra, and child's pose for spinal flexibility",
        benefits: ["Spinal health", "Tension release", "Breath awareness"]
      },
      {
        name: "Balance Poses",
        description: "Tree pose and variations for centering and focus",
        benefits: ["Mental clarity", "Physical balance", "Energy integration"]
      }
    ]
  },
  {
    level: 2,
    title: "Integration: Energy Principles",
    description: "Incorporating Daoist energy concepts into practice",
    duration: "12 weeks",
    icon: Wind,
    practices: [
      {
        name: "Breath Work",
        description: "Daoist breathing techniques in basic poses",
        benefits: ["Qi cultivation", "Energy circulation", "Mental focus"]
      },
      {
        name: "Energy Gates",
        description: "Identifying and opening major energy points",
        benefits: ["Energy awareness", "Blockage clearing", "Increased vitality"]
      },
      {
        name: "Moving Meditation",
        description: "Simple flowing sequences with breath focus",
        benefits: ["Mind-body connection", "Energy flow", "Stress release"]
      }
    ]
  },
  {
    level: 3,
    title: "Transformation: Daoist Principles",
    description: "Deep integration of Daoist philosophy and practice",
    duration: "16 weeks",
    icon: Battery,
    practices: [
      {
        name: "Energy Cultivation",
        description: "Advanced Qi development and circulation",
        benefits: ["Deep healing", "Energy mastery", "Spiritual connection"]
      },
      {
        name: "Meridian Flow",
        description: "Working with energy channels through movement",
        benefits: ["System balance", "Energy regulation", "Internal harmony"]
      },
      {
        name: "Stillness Practice",
        description: "Integration of stillness within movement",
        benefits: ["Deep wisdom", "Spiritual growth", "Energy refinement"]
      }
    ]
  }
];

const DaoistYoga = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-chinese text-gold-500 mb-2">道瑜伽</h2>
        <h3 className="text-3xl font-serif text-stone-100 mb-4">Daoist Yoga Curriculum</h3>
        <p className="text-stone-300 max-w-2xl mx-auto">
          A systematic approach to integrating Western yoga with Daoist principles,
          leading to deeper understanding and practice.
        </p>
      </div>

      {/* Curriculum Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {curriculum.map((level) => (
          <Card 
            key={level.level}
            className={`bg-stone-800/50 border-jade-500/10 hover:border-jade-500/30 
                       transition-all duration-300 cursor-pointer
                       ${selectedLevel === level.level ? 'border-jade-500' : ''}`}
            onClick={() => setSelectedLevel(level.level === selectedLevel ? null : level.level)}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-gold-500">
                  Level {level.level}
                </CardTitle>
                <level.icon className="text-jade-500" size={24} />
              </div>
              <h4 className="text-lg font-serif text-stone-100">{level.title}</h4>
              <p className="text-stone-400 text-sm">{level.duration}</p>
            </CardHeader>
            <CardContent>
              <p className="text-stone-300 mb-4">{level.description}</p>
              
              {/* Show practices when level is selected */}
              {selectedLevel === level.level && (
                <div className="space-y-4 mt-6 border-t border-jade-500/10 pt-4">
                  {level.practices.map((practice, index) => (
                    <div key={index} className="space-y-2">
                      <h5 className="text-gold-400 font-serif">{practice.name}</h5>
                      <p className="text-stone-400 text-sm">{practice.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {practice.benefits.map((benefit, i) => (
                          <span 
                            key={i}
                            className="text-xs bg-jade-500/10 text-jade-400 px-2 py-1 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-12 text-center">
        <p className="text-stone-400 italic">
          Each level builds upon the previous, creating a complete foundation in Daoist yoga practice.
        </p>
      </div>
    </div>
  );
};

export default DaoistYoga;