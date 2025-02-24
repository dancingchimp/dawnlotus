// src/components/education/DaoistYogaEducation.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Flame, Wind, Battery, Circle, Book } from 'lucide-react';

const daoistYogaCurriculum = {
  introduction: {
    title: "Introduction",
    chinese: "介紹",
    description: "Overview of Daoist Yoga as a comprehensive system of transformation",
    content: `Daoist Yoga is a transformative practice that bridges traditional Chinese energy arts with modern yoga approaches. Unlike conventional yoga systems that focus primarily on physical postures (asanas), Daoist Yoga emphasizes the subtle energy work that happens within and through the physical forms.

    At its core, this approach recognizes that physical postures serve as gateways to energy cultivation. Each pose and movement sequence is designed to work with the body's meridian system and energy centers, creating the conditions for both physical development and energetic transformation.
    
    Our curriculum follows a natural progression that honors both traditional Daoist principles and the realities of modern practitioners' needs and backgrounds. By combining the structural benefits of yoga postures with the energy awareness of Daoist practices, we create a comprehensive system for holistic development.`
  },
  foundations: {
    title: "Foundational Practices",
    chinese: "基礎修練",
    description: "Essential methods for establishing proper structure and energy awareness",
    sections: [
      {
        title: "Standing Practices",
        chinese: "站立修練",
        description: "Developing structure, alignment, and root through standing postures",
        practices: [
          {
            name: "Grounding Stance",
            description: "The foundational posture for developing root and connection to earth",
            benefits: ["Builds structural stability", "Develops energy root", "Calms the nervous system"]
          },
          {
            name: "Energy Alignment",
            description: "Proper vertical alignment of the energy centers for optimal flow",
            benefits: ["Corrects postural imbalances", "Opens central energy channel", "Relieves tension"]
          },
          {
            name: "Channel Awareness",
            description: "Sensing and opening the body's main energy pathways while standing",
            benefits: ["Increases energy sensitivity", "Clears meridian blockages", "Prepares for movement practices"]
          }
        ]
      },
      {
        title: "Seated Practices",
        chinese: "坐姿修練",
        description: "Developing core stability and breath control through seated postures",
        practices: [
          {
            name: "Centered Posture",
            description: "Establishing proper seated alignment for meditation and energy work",
            benefits: ["Stabilizes lower back", "Creates optimal breathing conditions", "Balances energy centers"]
          },
          {
            name: "Breath Foundation",
            description: "Natural breathing techniques that form the basis of energy cultivation",
            benefits: ["Deepens breath capacity", "Increases oxygen efficiency", "Prepares for advanced breathing"]
          },
          {
            name: "Lower Field Activation",
            description: "Awakening and strengthening the lower energy center (dantian)",
            benefits: ["Builds core energy", "Stabilizes practice foundation", "Improves digestive function"]
          }
        ]
      }
    ]
  },
  energetics: {
    title: "Energy Development",
    chinese: "能量發展",
    description: "Methods for cultivating, refining, and circulating internal energy",
    sections: [
      {
        title: "Breath Work",
        chinese: "呼吸工作",
        description: "Advanced breathing techniques for energy cultivation and circulation",
        practices: [
          {
            name: "Anchoring the Breath",
            description: "Techniques to center and deepen the breath into the lower abdomen",
            benefits: ["Creates energetic stability", "Deepens relaxation", "Builds foundation for advanced work"]
          },
          {
            name: "Reverse Abdominal Breathing",
            description: "Traditional Daoist breathing method for energy generation",
            benefits: ["Increases energy generation", "Massages internal organs", "Activates energy pathways"]
          },
          {
            name: "Channel Breathing",
            description: "Directing breath awareness through specific meridian pathways",
            benefits: ["Opens energy channels", "Increases qi sensitivity", "Balances organ systems"]
          }
        ]
      },
      {
        title: "Energy Flow",
        chinese: "能量流動",
        description: "Methods for directing and circulating energy through the body",
        practices: [
          {
            name: "Small Circulation",
            description: "Guiding energy through the central orbit of governing and conception vessels",
            benefits: ["Creates energy cycle", "Balances yin and yang", "Clears central channel blockages"]
          },
          {
            name: "Channel Opening Sequence",
            description: "Systematic opening of the major meridian pathways through movement",
            benefits: ["Clears energy stagnation", "Increases overall vitality", "Balances organ function"]
          },
          {
            name: "Energy Gate Activation",
            description: "Working with key energy points that regulate flow throughout the system",
            benefits: ["Opens restricted pathways", "Enhances energy circulation", "Connects major energy centers"]
          }
        ]
      }
    ]
  },
  integration: {
    title: "Movement Integration",
    chinese: "動作整合",
    description: "Dynamic practices that combine physical movement with energy cultivation",
    sections: [
      {
        title: "Dynamic Flows",
        chinese: "動態流動",
        description: "Flowing sequences that integrate physical development with energy work",
        practices: [
          {
            name: "Meridian Flow Sequence",
            description: "Movements designed to open and energize specific meridian pathways",
            benefits: ["Increases flexibility along meridians", "Clears energy blockages", "Balances organ systems"]
          },
          {
            name: "Five Elements Practice",
            description: "Movement sequences that embody the qualities of Water, Wood, Fire, Earth, and Metal",
            benefits: ["Balances elemental energies", "Harmonizes emotional qualities", "Creates systemic balance"]
          },
          {
            name: "Spiral Energy Cultivation",
            description: "Circular and spiral movements that generate and direct internal force",
            benefits: ["Develops whole-body connection", "Builds internal power", "Enhances energy circulation"]
          }
        ]
      },
      {
        title: "Transformation Practices",
        chinese: "轉化修練",
        description: "Advanced methods for spiritual development and energy refinement",
        practices: [
          {
            name: "Three Treasures Circulation",
            description: "Working with the transformation of Jing (essence) to Qi (energy) to Shen (spirit)",
            benefits: ["Refines energy quality", "Promotes spiritual development", "Creates internal harmony"]
          },
          {
            name: "Stillness in Movement",
            description: "Maintaining meditative awareness within dynamic practice",
            benefits: ["Deepens mind-body integration", "Heightens energy sensitivity", "Cultivates presence"]
          },
          {
            name: "Energy Body Development",
            description: "Advanced practices for developing and refining the subtle energy body",
            benefits: ["Expands energy field", "Increases intuitive awareness", "Promotes spiritual connection"]
          }
        ]
      }
    ]
  }
};

function DaoistYogaEducation() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [activeSubsection, setActiveSubsection] = useState(null);

  const handleSectionClick = (sectionKey) => {
    setActiveSection(sectionKey);
    setActiveSubsection(null);
  };

  const handleSubsectionClick = (subsectionIndex) => {
    setActiveSubsection(activeSubsection === subsectionIndex ? null : subsectionIndex);
  };

  const renderContentSection = () => {
    const section = daoistYogaCurriculum[activeSection];

    if (activeSection === 'introduction') {
      return (
        <Card className="bg-stone-800/30 border-jade-500/10">
          <CardContent className="p-6">
            <h3 className="text-2xl font-serif text-gold-500 mb-4">{section.title}</h3>
            <div className="text-stone-300 space-y-4">
              {section.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-serif text-gold-500 mb-2">{section.title}</h3>
        <p className="text-stone-300 mb-6">{section.description}</p>
        
        {section.sections && section.sections.map((subsection, index) => (
          <Card 
            key={index}
            className="bg-stone-800/30 border-jade-500/10 hover:border-jade-500/30 
                     transition-all duration-300"
          >
            <CardHeader 
              className="cursor-pointer"
              onClick={() => handleSubsectionClick(index)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-xl text-gold-500">{subsection.title}</CardTitle>
                  <p className="text-stone-400 font-chinese">{subsection.chinese}</p>
                  <p className="text-stone-300 text-sm mt-1">{subsection.description}</p>
                </div>
                <div className="p-2 bg-jade-500/10 rounded-full">
                  <Circle className={`w-6 h-6 text-jade-500 transition-transform duration-300 ${
                    activeSubsection === index ? 'transform rotate-90' : ''
                  }`} />
                </div>
              </div>
            </CardHeader>
            
            {activeSubsection === index && (
              <CardContent>
                <div className="space-y-6 pt-2">
                  {subsection.practices.map((practice, i) => (
                    <div key={i} className="p-4 bg-stone-800/70 rounded-lg border border-jade-500/5">
                      <h4 className="text-lg font-serif text-gold-400 mb-2">{practice.name}</h4>
                      <p className="text-stone-300 text-sm mb-3">{practice.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {practice.benefits.map((benefit, b) => (
                          <span 
                            key={b}
                            className="text-xs px-2 py-1 bg-jade-500/10 text-jade-400 rounded-full"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    );
  };

  const getIconForSection = (sectionKey) => {
    switch (sectionKey) {
      case 'introduction':
        return Book;
      case 'foundations':
        return Battery;
      case 'energetics':
        return Flame;
      case 'integration':
        return Wind;
      default:
        return Book;
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">道瑜伽教育</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Daoist Yoga Education
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            A comprehensive approach integrating physical postures with energy cultivation,
            creating a complete system for body-mind transformation.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="space-y-4 sticky top-20">
              {Object.entries(daoistYogaCurriculum).map(([key, section]) => {
                const Icon = getIconForSection(key);
                return (
                  <Card
                    key={key}
                    className={`cursor-pointer transition-all duration-300 ${
                      activeSection === key 
                        ? 'bg-stone-800/70 border-jade-500/50' 
                        : 'bg-stone-800/30 hover:bg-stone-800/50'
                    }`}
                    onClick={() => handleSectionClick(key)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-jade-500/10 rounded-lg">
                          <Icon className="w-5 h-5 text-jade-500" />
                        </div>
                        <div>
                          <CardTitle className="text-gold-500 text-lg">{section.title}</CardTitle>
                          <p className="text-stone-400 font-chinese text-sm">{section.chinese}</p>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            {renderContentSection()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaoistYogaEducation;