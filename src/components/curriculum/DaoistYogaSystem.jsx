import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Wind, Heart, Star, Circle } from 'lucide-react';

const DaoistYogaSystem = () => {
  const [activeSection, setActiveSection] = useState('principles');

  const framework = {
    principles: {
      title: "Core Integration Principles",
      chinese: "核心整合原理",
      sections: [
        {
          title: "Foundation Principles",
          aspects: [
            {
              name: "Channel Awareness",
              description: "Understanding how asanas relate to meridian pathways",
              key_points: [
                "Major channel mapping",
                "Key points and junctions",
                "Energy flow patterns"
              ]
            },
            {
              name: "Energy Center Activation",
              description: "Working with dantians through physical forms",
              key_points: [
                "Lower dantian stabilization",
                "Middle dantian expansion",
                "Upper dantian refinement"
              ]
            },
            {
              name: "Breath Integration",
              description: "Harmonizing breath with movement and energy",
              key_points: [
                "Natural breath patterns",
                "Energy directing methods",
                "Advanced breath work"
              ]
            }
          ]
        }
      ]
    },
    theory: {
      title: "Theoretical Framework",
      chinese: "理論框架",
      sections: [
        {
          title: "Energy Principles",
          aspects: [
            {
              name: "Three Treasures Integration",
              description: "Working with Jing, Qi, and Shen through movement",
              key_points: [
                "Physical essence cultivation",
                "Energy development methods",
                "Spiritual aspects of practice"
              ]
            },
            {
              name: "Five Elements Theory",
              description: "Element relationships in movement patterns",
              key_points: [
                "Element correspondences",
                "Transformation cycles",
                "Balancing methods"
              ]
            },
            {
              name: "Yin-Yang Balance",
              description: "Understanding complementary aspects of practice",
              key_points: [
                "Dynamic vs static forms",
                "Building vs circulating",
                "Opening vs consolidating"
              ]
            }
          ]
        }
      ]
    },
    methodology: {
      title: "Teaching Methodology",
      chinese: "教學方法",
      sections: [
        {
          title: "Pedagogical Approach",
          aspects: [
            {
              name: "Progressive Development",
              description: "Systematic approach to practice integration",
              key_points: [
                "Foundation building",
                "Skill progression",
                "Advanced integration"
              ]
            },
            {
              name: "Individual Adaptation",
              description: "Adjusting practices for individual needs",
              key_points: [
                "Body awareness",
                "Energy sensitivity",
                "Personal cultivation"
              ]
            },
            {
              name: "Safety Principles",
              description: "Maintaining safe and effective practice",
              key_points: [
                "Physical preparation",
                "Energy management",
                "Practice guidelines"
              ]
            }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">道瑜伽系統</h2>
          <h1 className="text-4xl font-serif text-stone-100 mb-6">
            Daoist Yoga Framework
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            A foundational framework for integrating Western yoga asanas 
            with traditional Daoist energy practices.
          </p>
        </div>

        {/* Navigation */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {Object.entries(framework).map(([key, section]) => (
            <Card
              key={key}
              className={`cursor-pointer transition-all duration-300 ${
                activeSection === key 
                  ? 'bg-stone-800/70 border-jade-500' 
                  : 'bg-stone-800/30 hover:bg-stone-800/50'
              }`}
              onClick={() => setActiveSection(key)}
            >
              <CardHeader>
                <div>
                  <CardTitle className="text-gold-500">{section.title}</CardTitle>
                  <p className="text-stone-400 font-chinese">{section.chinese}</p>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        {/* Content */}
        <div className="space-y-8">
          {framework[activeSection].sections.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <h3 className="text-2xl text-stone-100 font-serif">{section.title}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {section.aspects.map((aspect, i) => (
                  <Card 
                    key={i}
                    className="bg-stone-800/30 border-jade-500/10 hover:border-jade-500/30 
                             transition-all duration-300"
                  >
                    <CardHeader>
                      <CardTitle className="text-gold-500">{aspect.name}</CardTitle>
                      <p className="text-stone-300">{aspect.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {aspect.key_points.map((point, p) => (
                          <li key={p} className="flex items-center gap-2 text-stone-400">
                            <Circle className="w-1.5 h-1.5 text-jade-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DaoistYogaSystem;