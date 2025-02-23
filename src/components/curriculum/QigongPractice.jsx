// src/components/curriculum/QigongPractice.jsx

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Flame, Wind, Star, Circle } from 'lucide-react';

const qigongProgression = [
  {
    level: 1,
    title: "Foundation: Energy Awareness",
    chinese: "基礎：能量覺知",
    description: "Developing sensitivity to qi and basic standing practices",
    duration: "8 weeks",
    icon: Wind,
    practices: [
      {
        name: "Zhan Zhuang",
        chinese: "站樁",
        description: "Standing meditation to develop root and energy awareness",
        benefits: ["Grounding", "Energy sensitivity", "Structural alignment"]
      },
      {
        name: "Ba Duan Jin",
        chinese: "八段錦",
        description: "Eight Pieces of Brocade for overall health",
        benefits: ["Joint mobility", "Energy circulation", "Organ health"]
      },
      {
        name: "Basic Breathing",
        chinese: "基本呼吸",
        description: "Natural breathing methods for qi cultivation",
        benefits: ["Breath awareness", "Energy building", "Mental clarity"]
      }
    ]
  },
  {
    level: 2,
    title: "Development: Energy Circulation",
    chinese: "發展：能量循環",
    description: "Working with specific energy pathways and patterns",
    duration: "12 weeks",
    icon: Flame,
    practices: [
      {
        name: "Yi Jin Jing",
        chinese: "易筋經",
        description: "Muscle/Tendon Changing Classic for strength and flexibility",
        benefits: ["Tendon strength", "Deep stretching", "Power development"]
      },
      {
        name: "Five Animals",
        chinese: "五禽戲",
        description: "Animal movement patterns for health and vitality",
        benefits: ["Natural movement", "Organ energetics", "Emotional balance"]
      },
      {
        name: "Small Circulation",
        chinese: "小周天",
        description: "Working with the governing and conception vessels",
        benefits: ["Energy pathways", "Internal balance", "Healing potential"]
      }
    ]
  },
  {
    level: 3,
    title: "Mastery: Energy Transformation",
    chinese: "精通：能量轉化",
    description: "Advanced practices for spiritual development",
    duration: "16 weeks",
    icon: Star,
    practices: [
      {
        name: "Grand Circulation",
        chinese: "大周天",
        description: "Complete energy system cultivation",
        benefits: ["Full body integration", "Spiritual development", "Deep healing"]
      },
      {
        name: "Inner Alchemy",
        chinese: "內丹術",
        description: "Transformative practices for spiritual refinement",
        benefits: ["Energy refinement", "Spiritual growth", "Higher consciousness"]
      },
      {
        name: "Emptiness Practice",
        chinese: "空修",
        description: "Advanced meditation with qi circulation",
        benefits: ["Deep stillness", "Energy mastery", "Spiritual insight"]
      }
    ]
  }
];

function QigongPractice() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <div className="space-y-8">
      {/* Overview Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-chinese text-gold-500 mb-2">氣功修練</h2>
        <h3 className="text-3xl font-serif text-stone-100 mb-4">Qigong Practice</h3>
        <p className="text-stone-300 max-w-2xl mx-auto">
          Traditional energy cultivation practices for health, vitality, and spiritual development.
        </p>
      </div>

      {/* Progression Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {qigongProgression.map((level) => (
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
              <div>
                <h4 className="text-lg font-serif text-stone-100">{level.title}</h4>
                <p className="text-stone-400 font-chinese text-sm">{level.chinese}</p>
              </div>
              <p className="text-stone-400 text-sm">{level.duration}</p>
            </CardHeader>
            <CardContent>
              <p className="text-stone-300 mb-4">{level.description}</p>
              
              {selectedLevel === level.level && (
                <div className="space-y-4 mt-6 border-t border-jade-500/10 pt-4">
                  {level.practices.map((practice, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h5 className="text-gold-400 font-serif">{practice.name}</h5>
                        <span className="text-stone-400 font-chinese text-sm">
                          {practice.chinese}
                        </span>
                      </div>
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
          Each level progressively develops both physical practice and energy awareness.
        </p>
      </div>
    </div>
  );
}

export default QigongPractice;