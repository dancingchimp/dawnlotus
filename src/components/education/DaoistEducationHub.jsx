// src/components/education/DaoistEducationHub.jsx

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const educationalPaths = {
  overview: {
    title: "Program Overview",
    chinese: "課程概述",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
    sections: [
      {
        name: "Our Approach",
        chinese: "我們的方法",
        topics: [
          "Integration of Traditional & Modern",
          "Systematic Progress",
          "Personal Development",
          "Community Support"
        ]
      },
      {
        name: "Study Method",
        chinese: "學習方法",
        topics: [
          "Regular Practice",
          "Theory Study",
          "Group Sessions",
          "Personal Reflection"
        ]
      }
    ]
  },
  foundations: {
    title: "Theoretical Foundations",
    chinese: "理論基礎",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
    sections: [
      {
        name: "Core Concepts",
        chinese: "核心概念",
        topics: [
          "Three Treasures: Jing, Qi, Shen",
          "Five Elements Theory",
          "Yin-Yang Balance",
          "Energy Centers (Dantians)"
        ]
      },
      {
        name: "Energy Principles",
        chinese: "能量原理",
        topics: [
          "Qi Flow Mechanics",
          "Meridian System Basics",
          "Energy Cultivation Theory",
          "Mind-Body Connection"
        ]
      }
    ]
  },
  practices: {
    title: "Practice Paths",
    chinese: "修練途徑",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    paths: [
      {
        name: "Daoist Yoga",
        chinese: "道瑜伽",
        description: "Integrating Western asanas with qi cultivation",
        levels: [
          "Foundation Poses & Breathing",
          "Energy Building Sequences",
          "Advanced Flow & Circulation"
        ]
      },
      {
        name: "Qigong",
        chinese: "氣功",
        description: "Essential energy work practices",
        levels: [
          "Standing Meditation",
          "Eight Pieces of Brocade",
          "Five Animals Play"
        ]
      },
      {
        name: "Meditation",
        chinese: "靜坐",
        description: "Still and moving meditation practices",
        levels: [
          "Breath Awareness",
          "Energy Circulation",
          "Spiritual Development"
        ]
      }
    ]
  },
  community: {
    title: "Learning Community",
    chinese: "學習社群",
    icon: (props) => (
      <svg xmlns="http://www.w3.org/2000/svg" className={props.className || "h-6 w-6"} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: [
      {
        name: "Study Groups",
        chinese: "學習小組",
        description: "Join virtual practice circles for shared learning"
      },
      {
        name: "Mentorship",
        chinese: "導師指導",
        description: "Connect with experienced practitioners for guidance"
      },
      {
        name: "Live Sessions",
        chinese: "實時課程",
        description: "Weekly online classes and interactive workshops"
      }
    ]
  }
};

const ContentSection = ({ section }) => {
  const Icon = section.icon;
  
  return (
    <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-jade-500/10 rounded-xl">
          <Icon className="w-8 h-8 text-jade-500" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gold-500">{section.title}</h2>
          <p className="text-stone-400 font-chinese">{section.chinese}</p>
        </div>
      </div>

      {section.sections && (
        <div className="grid md:grid-cols-2 gap-6">
          {section.sections.map((s, idx) => (
            <Card key={idx} className="bg-stone-800/50 border-jade-500/10 hover:border-jade-500/30 transition-all">
              <CardHeader>
                <div>
                  <CardTitle className="text-xl text-gold-500">{s.name}</CardTitle>
                  <p className="text-stone-400 font-chinese text-sm">{s.chinese}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {s.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-300">
                      <span className="text-jade-500 text-xs">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {section.paths && (
        <div className="space-y-6">
          {section.paths.map((path, idx) => (
            <div key={idx} className="bg-stone-800/50 p-6 rounded-xl border border-jade-500/10 
                                   hover:border-jade-500/30 transition-all">
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-gold-500">{path.name}</h3>
                <p className="text-stone-400 font-chinese text-sm">{path.chinese}</p>
              </div>
              <p className="text-stone-400 mb-4">{path.description}</p>
              <div className="space-y-2">
                {path.levels.map((level, i) => (
                  <div key={i} className="flex items-center gap-2 text-stone-300">
                    <span className="text-jade-500 text-xs">•</span>
                    {level}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {section.features && (
        <div className="grid md:grid-cols-3 gap-6">
          {section.features.map((feature, idx) => (
            <Card key={idx} className="bg-stone-800/50 border-jade-500/10 hover:border-jade-500/30 transition-all">
              <CardHeader>
                <div>
                  <CardTitle className="text-xl text-gold-500">{feature.name}</CardTitle>
                  <p className="text-stone-400 font-chinese text-sm">{feature.chinese}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

function DaoistEducationHub() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">道家藝術學院</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-100 mb-6">
            Daoist Arts Academy
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            A comprehensive journey through traditional Daoist practices, 
            adapted for modern practitioners seeking deeper understanding 
            and transformation.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {Object.entries(educationalPaths).map(([key, section]) => {
            const Icon = section.icon;
            return (
              <Card 
                key={key}
                className={`cursor-pointer transition-all duration-300 ${
                  activeSection === key 
                    ? 'bg-stone-800/70 border-jade-500/50' 
                    : 'bg-stone-800/30 hover:bg-stone-800/50'
                }`}
                onClick={() => setActiveSection(key)}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-jade-500/10 rounded-xl">
                      <Icon className="w-6 h-6 text-jade-500" />
                    </div>
                    <div>
                      <CardTitle className="text-gold-500">{section.title}</CardTitle>
                      <p className="text-stone-400 font-chinese text-sm">{section.chinese}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Content Section */}
        <ContentSection section={educationalPaths[activeSection]} />
      </div>
    </div>
  );
}

export default DaoistEducationHub;