// src/components/theory/TheoryFoundations.jsx

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const theoreticalConcepts = {
  fundamentals: {
    title: "Core Principles",
    chinese: "核心原理",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    concepts: [
      {
        name: "Yin-Yang Theory",
        chinese: "陰陽理論",
        description: "Understanding the interplay of opposing yet complementary forces",
        key_points: [
          "Balance and harmony",
          "Cyclic nature of change",
          "Mutual transformation",
          "Dynamic equilibrium"
        ]
      },
      {
        name: "Three Treasures",
        chinese: "三寶",
        description: "The three fundamental energies of life",
        key_points: [
          "Jing (精) - Essence",
          "Qi (氣) - Energy",
          "Shen (神) - Spirit",
          "Cultivation methods"
        ]
      },
      {
        name: "Five Elements",
        chinese: "五行",
        description: "The five phases of natural transformation",
        key_points: [
          "Wood, Fire, Earth, Metal, Water",
          "Generative cycle",
          "Control cycle",
          "Seasonal correspondences"
        ]
      }
    ]
  },
  energetics: {
    title: "Energy Systems",
    chinese: "能量系統",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    concepts: [
      {
        name: "Three Dantians",
        chinese: "三丹田",
        description: "The three major energy centers in the body",
        key_points: [
          "Lower Dantian - Foundation",
          "Middle Dantian - Transformation",
          "Upper Dantian - Refinement",
          "Energy cultivation sequence"
        ]
      },
      {
        name: "Meridian System",
        chinese: "經絡系統",
        description: "The pathways of qi flow throughout the body",
        key_points: [
          "12 Primary channels",
          "8 Extraordinary vessels",
          "Major points and gates",
          "Qi flow patterns"
        ]
      },
      {
        name: "Energy Gates",
        chinese: "氣門",
        description: "Key points for energy cultivation and circulation",
        key_points: [
          "Location and function",
          "Opening sequence",
          "Circulation methods",
          "Safety principles"
        ]
      }
    ]
  },
  practice: {
    title: "Practice Principles",
    chinese: "修練原則",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    concepts: [
      {
        name: "Three Alignments",
        chinese: "三合",
        description: "Harmonizing body, breath, and mind",
        key_points: [
          "Physical alignment",
          "Breath coordination",
          "Mental focus",
          "Integration methods"
        ]
      },
      {
        name: "Natural Movement",
        chinese: "自然運動",
        description: "Principles of efficient and harmonious movement",
        key_points: [
          "Root and connection",
          "Central equilibrium",
          "Spiral force",
          "Whole body unity"
        ]
      },
      {
        name: "Mind Intention",
        chinese: "意念",
        description: "The role of consciousness in practice",
        key_points: [
          "Yi leads qi",
          "Mental focus techniques",
          "Energy visualization",
          "Meditative states"
        ]
      }
    ]
  }
};

function TheoryFoundations() {
  const [activeCategory, setActiveCategory] = useState('fundamentals');

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="text-center">
        <h2 className="text-2xl font-chinese text-gold-500 mb-2">道家理論</h2>
        <h3 className="text-3xl font-serif text-stone-100 mb-4">Daoist Theory</h3>
        <p className="text-stone-300 max-w-2xl mx-auto">
          Understanding the fundamental principles that guide practice and development.
        </p>
      </div>

      {/* Category Selection */}
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(theoreticalConcepts).map(([key, category]) => {
          const Icon = category.icon;
          return (
            <Card
              key={key}
              className={`cursor-pointer transition-all duration-300 ${
                activeCategory === key 
                  ? 'bg-stone-800/70 border-jade-500' 
                  : 'bg-stone-800/30 hover:bg-stone-800/50'
              }`}
              onClick={() => setActiveCategory(key)}
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-jade-500/10 rounded-xl">
                    <Icon className="w-6 h-6 text-jade-500" />
                  </div>
                  <div>
                    <CardTitle>{category.title}</CardTitle>
                    <p className="text-stone-400 font-chinese text-sm">{category.chinese}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          );
        })}
      </div>

      {/* Content Display */}
      <div className="grid md:grid-cols-3 gap-6">
        {theoreticalConcepts[activeCategory].concepts.map((concept, idx) => (
          <Card key={idx} className="bg-stone-800/30 border-jade-500/10 hover:border-jade-500/30 
                                   transition-all duration-300">
            <CardHeader>
              <div className="mb-2">
                <CardTitle>{concept.name}</CardTitle>
                <p className="text-stone-400 font-chinese text-sm">{concept.chinese}</p>
              </div>
              <p className="text-stone-300 text-sm">{concept.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {concept.key_points.map((point, i) => (
                  <li key={i} className="flex items-center gap-2 text-stone-400">
                    <span className="text-jade-500 text-xs">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TheoryFoundations;