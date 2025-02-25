// src/components/education/DaoistYogaCurriculum.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Wind, FlameIcon, Droplet, Sun, Moon, CircleIcon } from 'lucide-react';

const curriculumLevels = [
  {
    level: 1,
    title: "Foundation: Western Bridge",
    chinese: "基礎：西方橋樑",
    description: "Establishing body awareness and meridian opening through familiar yoga poses",
    icon: Droplet,
    modules: [
      {
        name: "Standing Postures",
        chinese: "站立姿勢",
        description: "Adapting warrior poses to activate leg meridians and develop root",
        practices: [
          {
            name: "Earth Grounding Sequence",
            description: "Builds connection to earth energy and opens Kidney/Urinary Bladder meridians",
            asanas: ["Mountain Pose", "Horse Stance", "Warrior II", "Wide-Legged Forward Fold"],
            energyFocus: "Earth Element, Lower Dantian Activation"
          },
          {
            name: "Spleen/Stomach Meridian Opening",
            description: "Focuses on the central line of the body to strengthen digestive energy",
            asanas: ["Warrior I", "Chair Pose", "Standing Forward Fold", "Standing Half Moon"],
            energyFocus: "Earth Element, Central Channel Alignment"
          }
        ]
      },
      {
        name: "Floor Work",
        chinese: "地面工作",
        description: "Using seated and prone poses to open upper body meridians",
        practices: [
          {
            name: "Lung/Large Intestine Opening",
            description: "Focuses on the arm meridians that govern elimination and reception",
            asanas: ["Downward Dog", "Cobra", "Child's Pose", "Thread the Needle"],
            energyFocus: "Metal Element, Chest Expansion"
          },
          {
            name: "Heart/Small Intestine Balance",
            description: "Works with the meridians associated with emotional processing",
            asanas: ["Sphinx", "Seated Forward Fold", "Butterfly", "Easy Twist"],
            energyFocus: "Fire Element, Middle Dantian Opening"
          }
        ]
      }
    ]
  },
  {
    level: 2,
    title: "Integration: Energy Principles",
    chinese: "整合：能量原理",
    description: "Incorporating Daoist energy concepts into yoga practice",
    icon: Wind,
    modules: [
      {
        name: "Breath Cultivation",
        chinese: "呼吸培養",
        description: "Using specific breathing techniques with asanas to direct energy",
        practices: [
          {
            name: "Lower Dantian Breathing",
            description: "Establishing the body's foundation energy center through breath awareness",
            asanas: ["Dragon Pose", "Low Lunge with Twist", "Squat Pose", "Supine Spinal Twist"],
            energyFocus: "Water Element, Jing Cultivation"
          },
          {
            name: "Reverse Breathing Integration",
            description: "Traditional Daoist breathing method applied to dynamic movement",
            asanas: ["Sun Salutation Variation", "Side Angle Pose", "Warrior III", "Bridge Pose"],
            energyFocus: "Fire Element, Qi Direction"
          }
        ]
      },
      {
        name: "Meridian Flow Sequences",
        chinese: "經絡流動序列",
        description: "Flowing practices designed around specific meridian pathways",
        practices: [
          {
            name: "Liver/Gallbladder Sequence",
            description: "Working with the wood element meridians to promote flexibility and vision",
            asanas: ["Wide Angle Forward Fold", "Side Plank", "Standing Split", "Pigeon Pose"],
            energyFocus: "Wood Element, Vision and Planning"
          },
          {
            name: "Kidney/Urinary Bladder Sequence",
            description: "Strengthening the body's foundational energy through back-body opening",
            asanas: ["Forward Fold", "Half Moon", "Camel", "Seated Wide Angle"],
            energyFocus: "Water Element, Willpower and Essence"
          }
        ]
      }
    ]
  },
  {
    level: 3,
    title: "Transformation: Daoist Alchemy",
    chinese: "轉化：道家煉丹",
    description: "Advanced practices that facilitate spiritual development",
    icon: FlameIcon,
    modules: [
      {
        name: "Inner Alchemy Fundamentals",
        chinese: "內丹基礎",
        description: "Working with the Three Treasures through integrated practice",
        practices: [
          {
            name: "Jing to Qi Transformation",
            description: "Converting physical essence into vital energy",
            asanas: ["Shoulder Stand", "Plow", "Fish Pose", "Embryo Pose"],
            energyFocus: "Lower to Middle Dantian Connection"
          },
          {
            name: "Qi to Shen Refinement",
            description: "Refining vital energy into spiritual consciousness",
            asanas: ["Lotus Preparation", "Heart-Opening Sequence", "Third Eye Meditation Pose"],
            energyFocus: "Middle to Upper Dantian Connection"
          }
        ]
      },
      {
        name: "Microcosmic Orbit",
        chinese: "小周天",
        description: "Circulating energy through the governing and conception vessels",
        practices: [
          {
            name: "Central Channel Alignment",
            description: "Preparing the main energy pathway for circulation",
            asanas: ["Staff Pose", "Seated Meditation", "Forward Fold Series", "Gentle Backbends"],
            energyFocus: "Du Mai and Ren Mai Vessels"
          },
          {
            name: "Full Orbit Activation",
            description: "Completing the energy circulation practice",
            asanas: ["Seated Twist Series", "Embryo Pose", "Inverted Poses", "Savasana with Awareness"],
            energyFocus: "Complete Energy Circuit Integration"
          }
        ]
      }
    ]
  }
];

function DaoistYogaCurriculum() {
  const [activeLevel, setActiveLevel] = useState(0);
  const [activeModule, setActiveModule] = useState(0);
  const [activePractice, setActivePractice] = useState(0);

  return (
    <div className="min-h-screen bg-stone-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">道瑜伽課程</h2>
          <h1 className="text-4xl font-serif text-stone-100 mb-6">
            Daoist Yoga Curriculum
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            A systematic approach to integrating Western yoga with Daoist principles,
            creating a transformative practice that cultivates body, energy, and spirit.
          </p>
        </div>

        {/* Level Selection */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {curriculumLevels.map((level, index) => {
            const Icon = level.icon;
            return (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  activeLevel === index 
                    ? 'bg-stone-800/70 border-jade-500/50' 
                    : 'bg-stone-800/30 hover:bg-stone-800/50'
                }`}
                onClick={() => {
                  setActiveLevel(index);
                  setActiveModule(0);
                  setActivePractice(0);
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-jade-500/10 rounded-xl">
                      <Icon className="w-6 h-6 text-jade-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="bg-jade-500/20 text-jade-400 px-2 py-0.5 rounded-full text-xs">
                          Level {level.level}
                        </span>
                      </div>
                      <CardTitle className="text-gold-500 mt-1">{level.title}</CardTitle>
                      <p className="text-stone-400 font-chinese text-sm">{level.chinese}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-300">{level.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Module Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {curriculumLevels[activeLevel].modules.map((module, index) => (
            <Card 
              key={index}
              className={`cursor-pointer transition-all duration-300 ${
                activeModule === index 
                  ? 'bg-stone-800/70 border-jade-500/50' 
                  : 'bg-stone-800/30 hover:bg-stone-800/50'
              }`}
              onClick={() => {
                setActiveModule(index);
                setActivePractice(0);
              }}
            >
              <CardHeader>
                <div>
                  <CardTitle className="text-gold-500">{module.name}</CardTitle>
                  <p className="text-stone-400 font-chinese text-sm">{module.chinese}</p>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-stone-300">{module.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practice Selection */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {curriculumLevels[activeLevel].modules[activeModule].practices.map((practice, index) => (
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
                <CardTitle className="text-gold-500">{practice.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-300 mb-4">{practice.description}</p>
                <div className="bg-jade-500/10 text-jade-400 px-3 py-2 rounded-lg text-sm">
                  Energy Focus: {practice.energyFocus}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Practice Details */}
        <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10">
          <h3 className="text-2xl font-serif text-gold-500 mb-6">
            {curriculumLevels[activeLevel].modules[activeModule].practices[activePractice].name}
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-serif text-gold-400 mb-4">Practice Focus</h4>
              <p className="text-stone-300 mb-6">
                {curriculumLevels[activeLevel].modules[activeModule].practices[activePractice].description}
              </p>
              
              <div className="bg-stone-800/50 p-6 rounded-xl border border-jade-500/10 mb-6">
                <h5 className="text-lg font-serif text-gold-400 mb-3">Energy Concepts</h5>
                <p className="text-stone-300">
                  {curriculumLevels[activeLevel].modules[activeModule].practices[activePractice].energyFocus}
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-serif text-gold-400 mb-4">Key Postures</h4>
              <div className="space-y-3">
                {curriculumLevels[activeLevel].modules[activeModule].practices[activePractice].asanas.map((asana, index) => (
                  <div key={index} className="flex items-center gap-3 bg-stone-800/50 p-4 rounded-lg">
                    <CircleIcon className="w-4 h-4 text-jade-500" />
                    <span className="text-stone-300">{asana}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-stone-700">
            <p className="text-stone-400 italic text-center">
              "The physical postures serve as gateways to energy cultivation. By working with the body's natural structure and energy pathways, we create the conditions for transformation on all levels."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaoistYogaCurriculum;