// src/components/practice/DaoistFoundationPractices.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CircleIcon, TreePine, Wind, Activity, UserIcon, Heart } from 'lucide-react';

const foundationPractices = {
  standing: {
    title: "Standing Practices",
    chinese: "站立修練",
    description: "Standing practices form the foundation of Daoist energy cultivation. Often referred to as Zhan Zhuang (站樁) or 'standing like a tree,' these seemingly simple postures develop extraordinary internal qualities with consistent practice.",
    practices: [
      {
        title: "Earth Connection",
        chinese: "地連接",
        description: "Establishing proper root and connection to ground energy",
        duration: "10-15 min",
        level: "Beginner",
        keyPoints: [
          "Feet parallel at shoulder width",
          "Knees slightly bent",
          "Tailbone tucked slightly",
          "Focus on soles of feet",
          "Let gravity align the body"
        ],
        benefits: [
          "Builds structural stability",
          "Develops energetic root",
          "Calms the nervous system",
          "Prepares for all other practices"
        ],
        icon: TreePine
      },
      {
        title: "Central Channel Alignment",
        chinese: "中脉校正",
        description: "Aligning the body's central energy pathway for optimal flow",
        duration: "10-20 min",
        level: "Beginner",
        keyPoints: [
          "Vertical alignment of three dantians",
          "Back of neck long and relaxed",
          "Shoulders dropped and rounded",
          "Tailbone neither tucked nor arched",
          "Crown of head gently lifting"
        ],
        benefits: [
          "Corrects postural imbalances",
          "Opens energy flow through central channel",
          "Relieves chronic tension patterns",
          "Increases breath capacity"
        ],
        icon: Activity
      },
      {
        title: "Energy Sphere Holding",
        chinese: "抱氣球",
        description: "Cultivating energy awareness through the classic 'holding the ball' posture",
        duration: "15-30 min",
        level: "Beginner to Intermediate",
        keyPoints: [
          "Arms rounded as if holding a sphere",
          "Elbows heavy and relaxed",
          "Shoulders away from ears",
          "Feeling expansion between palms",
          "Mind relaxed but present"
        ],
        benefits: [
          "Develops energy sensitivity in hands",
          "Strengthens arms without tension",
          "Opens chest and lung capacity",
          "Cultivates mental stillness"
        ],
        icon: CircleIcon
      }
    ]
  },
  breathing: {
    title: "Breath Cultivation",
    chinese: "呼吸修煉",
    description: "Breath is the bridge between body and mind, physical and energetic. These foundational breathing methods establish proper patterns and connect breathing with energy cultivation.",
    practices: [
      {
        title: "Natural Breathing",
        chinese: "自然呼吸",
        description: "Establishing awareness of natural breath patterns without manipulation",
        duration: "10-15 min",
        level: "Beginner",
        keyPoints: [
          "Observe breath without changing it",
          "Notice natural rhythm and depth",
          "Feel movement in abdomen and chest",
          "Allow breath to gradually deepen",
          "Return awareness when mind wanders"
        ],
        benefits: [
          "Calms the nervous system",
          "Establishes baseline awareness",
          "Releases breath holding patterns",
          "Prepares for advanced techniques"
        ],
        icon: Wind
      },
      {
        title: "Lower Dantian Breathing",
        chinese: "下丹田呼吸",
        description: "Developing deep abdominal breathing centered in the lower energy center",
        duration: "15-20 min",
        level: "Beginner to Intermediate",
        keyPoints: [
          "Breath initiates from lower abdomen",
          "Belly expands on inhale",
          "Gentle contraction on exhale",
          "Breath becomes slower and deeper",
          "Mind stays centered in lower dantian"
        ],
        benefits: [
          "Strengthens energy foundation",
          "Improves digestive function",
          "Increases oxygen efficiency",
          "Cultivates mental stability"
        ],
        icon: UserIcon
      },
      {
        title: "Reverse Abdominal Breathing",
        chinese: "逆腹式呼吸",
        description: "Traditional Daoist breathing technique for energy generation and circulation",
        duration: "10-15 min",
        level: "Intermediate",
        keyPoints: [
          "Abdomen gently contracts on inhale",
          "Abdomen relaxes outward on exhale",
          "Perineum lifts slightly on inhale",
          "Back expands with inhalation",
          "Breath remains smooth and relaxed"
        ],
        benefits: [
          "Generates stronger energy circulation",
          "Massages internal organs",
          "Activates deeper energy pathways",
          "Prepares for circulation practices"
        ],
        icon: Heart
      }
    ]
  },
  seated: {
    title: "Seated Practices",
    chinese: "坐姿修練",
    description: "Seated practices develop stability, energy awareness, and internal stillness. These foundational methods establish the proper container for meditation and energy refinement.",
    practices: [
      {
        title: "Stable Seat",
        chinese: "穩定坐姿",
        description: "Establishing proper seated alignment for meditation and energy work",
        duration: "15-30 min",
        level: "Beginner",
        keyPoints: [
          "Sit on front edge of cushion",
          "Pelvis tilted slightly forward",
          "Lower back maintains natural curve",
          "Shoulders relaxed and chest open",
          "Head balanced atop spine"
        ],
        benefits: [
          "Creates stable foundation",
          "Reduces strain during meditation",
          "Improves energy flow through torso",
          "Develops body awareness"
        ],
        icon: UserIcon
      },
      {
        title: "Inner Smile",
        chinese: "內觀微笑",
        description: "Gentle meditation that cultivates positive energy and healing intention",
        duration: "10-15 min",
        level: "Beginner",
        keyPoints: [
          "Generate genuine feeling of smile",
          "Direct smiling energy to face/head",
          "Move smile energy down to organs",
          "Bathe each organ in smiling energy",
          "Collect energy in lower dantian"
        ],
        benefits: [
          "Transforms negative emotions",
          "Releases tension in organs",
          "Enhances immune function",
          "Cultivates healing awareness"
        ],
        icon: Heart
      },
      {
        title: "Lower Dantian Focus",
        chinese: "下丹田專注",
        description: "Concentration practice to develop the body's foundation energy center",
        duration: "15-20 min",
        level: "Beginner to Intermediate",
        keyPoints: [
          "Attention centered 2-3 inches below navel",
          "Breath naturally flows to dantian",
          "Feel warmth gathering in center",
          "Maintain relaxed but clear focus",
          "Gently return when attention wanders"
        ],
        benefits: [
          "Builds energy in foundation center",
          "Improves concentration",
          "Grounds excess mental energy",
          "Prepares for circulation practices"
        ],
        icon: CircleIcon
      }
    ]
  }
};

function DaoistFoundationPractices() {
  const [activeCategory, setActiveCategory] = useState('standing');
  const [activePractice, setActivePractice] = useState(0);

  return (
    <div className="min-h-screen bg-stone-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">基礎修練</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Foundation Practices
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Essential methods for establishing proper structure, breath awareness, and energy sensitivity. 
            These foundational practices form the basis of all advanced Daoist cultivation.
          </p>
        </div>
        
        {/* Category Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(foundationPractices).map(([key, category]) => (
            <Card 
              key={key}
              className={`cursor-pointer transition-all duration-300 ${
                activeCategory === key 
                  ? 'bg-stone-800/70 border-jade-500/50' 
                  : 'bg-stone-800/30 hover:bg-stone-800/50'
              }`}
              onClick={() => {
                setActiveCategory(key);
                setActivePractice(0);
              }}
            >
              <CardHeader>
                <CardTitle className="text-gold-500">{category.title}</CardTitle>
                <p className="text-stone-400 font-chinese">{category.chinese}</p>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        {/* Category Description */}
        <div className="mb-12">
          <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10">
            <h3 className="text-2xl font-serif text-gold-500 mb-4">
              {foundationPractices[activeCategory].title}
            </h3>
            <p className="text-stone-300">
              {foundationPractices[activeCategory].description}
            </p>
          </div>
        </div>
        
        {/* Practice Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {foundationPractices[activeCategory].practices.map((practice, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activePractice === index 
                  ? 'bg-stone-800/70 border-jade-500/50' 
                  : 'bg-stone-800/30 hover:bg-stone-800/50'
              }`}
              onClick={() => setActivePractice(index)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-jade-500/10 rounded-lg">
                    {React.createElement(practice.icon, { 
                      className: "w-5 h-5 text-jade-500"
                    })}
                  </div>
                  <div>
                    <CardTitle className="text-gold-500">{practice.title}</CardTitle>
                    <p className="text-stone-400 font-chinese">{practice.chinese}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-300 text-sm">{practice.description}</p>
                <div className="flex items-center gap-2 mt-3 text-stone-400 text-sm">
                  <span>{practice.duration}</span>
                  <span>•</span>
                  <span>{practice.level}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Practice Details */}
        <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Key Points */}
            <div>
              <h3 className="text-2xl font-serif text-gold-500 mb-6">
                {foundationPractices[activeCategory].practices[activePractice].title}
              </h3>
              <p className="text-stone-300 mb-6">
                {foundationPractices[activeCategory].practices[activePractice].description}
              </p>
              
              <h4 className="text-xl font-serif text-gold-400 mb-4">Key Points</h4>
              <ul className="space-y-3 mb-8">
                {foundationPractices[activeCategory].practices[activePractice].keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-stone-300">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Column: Benefits */}
            <div>
              <div className="bg-stone-800/50 p-6 rounded-xl border border-jade-500/10 mb-8">
                <h4 className="text-xl font-serif text-gold-400 mb-4">Practice Details</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-stone-400 text-sm">Duration</p>
                    <p className="text-stone-300">
                      {foundationPractices[activeCategory].practices[activePractice].duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-stone-400 text-sm">Level</p>
                    <p className="text-stone-300">
                      {foundationPractices[activeCategory].practices[activePractice].level}
                    </p>
                  </div>
                </div>
              </div>
              
              <h4 className="text-xl font-serif text-gold-400 mb-4">Benefits</h4>
              <ul className="space-y-3">
                {foundationPractices[activeCategory].practices[activePractice].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-stone-300">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Practice Tips */}
        <div className="mt-12 bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-6 border border-gold-500/20">
          <h4 className="text-xl font-serif text-gold-500 mb-4">Practice Wisdom</h4>
          <div className="text-stone-300 italic">
            "These foundation practices may seem simple, but they contain the essence of all advanced methods. 
            Master the basics before seeking the complex. Consistency is more important than duration—daily 
            practice of even a few minutes will yield greater results than occasional longer sessions."
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaoistFoundationPractices;