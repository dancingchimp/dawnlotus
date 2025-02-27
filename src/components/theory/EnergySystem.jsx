// src/components/theory/EnergySystem.jsx

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Battery, Wind, Flame, Circle } from 'lucide-react';

const energySystemContent = {
  foundation: {
    title: "Forming the Energy Container",
    chinese: "形成能量容器",
    description: "Establishing a stable energetic structure in the lower field",
    content: `The first stage of energy cultivation focuses on establishing a strong, stable energy center in the lower abdomen, known as the Lower Field (下田). This center functions like a magnetic container that can attract, hold, and store vital energy.

    In Daoist practice, this field is not merely conceptual but a tangible energetic structure that develops through specific techniques including:
    
    • Proper structural alignment of the body, especially the pelvis and lower spine
    • Deep, relaxed breathing that focuses awareness in the lower abdomen
    • Mental intention (Yi) that directs attention to this center without tension
    • Specific meditation and movement practices that strengthen this energetic field
    
    As the lower field develops, practitioners begin to experience sensations of warmth, fullness, or gentle pulsing in the lower abdomen. The field gradually becomes more stable and coherent, creating an electromagnetic container that can effectively store energy rather than allowing it to disperse.
    
    This foundation stage cannot be rushed or skipped. Without a properly developed lower field, attempts at more advanced energy work will be ineffective, as there will be no container to store the cultivated energy.`,
    icon: Battery
  },
  accumulation: {
    title: "Energy Accumulation",
    chinese: "能量積累",
    description: "Methods for generating, gathering, and storing qi in the established field",
    content: `Once the lower field has been established as a stable container, the next stage focuses on filling this "battery" with qi. This stage emphasizes the generation and preservation of vital energy through specific methods that draw from multiple sources:

    • External gathering: Drawing in qi from the natural environment, including earth energy, heaven energy, and the energy of the natural world
    • Internal generation: Creating energy through specific breath techniques, mental focus, and conscious direction of awareness
    • Conservation: Preventing energy leakage through proper physical alignments, emotional stability, and sexual energy management
    
    As the lower field begins to fill with energy, practitioners typically experience increasing sensations of warmth, fullness, and vitality. The lower abdomen may feel heavier or denser, and overall energy levels throughout the day become more stable and abundant.
    
    This stage of practice develops the "quantity" of energy available to the practitioner, creating a reservoir that can be drawn upon for health, healing, and further developmental practices. Just as a battery with greater capacity can power more functions for longer periods, a well-filled lower field provides the energetic foundation for all aspects of life and practice.`,
    icon: Flame
  },
  circulation: {
    title: "Energy Circulation",
    chinese: "能量循環",
    description: "Developing the ability to direct, circulate, and refine energy",
    content: `The third stage of energy cultivation involves learning to consciously regulate and direct the stored qi. This is where the practitioner develops the ability to move energy in specific patterns and for particular purposes:

    • Internal Pathways: Circulating qi through the body's meridian system and energy vessels
    • Refined Control: Developing increasing subtlety in directing energy to specific areas
    • Transformation: Converting dense energy into more refined forms through circulation
    • Application: Using directed qi for healing, martial arts, spiritual development, or daily activities
    
    This stage transforms "raw" energy into "refined" energy through circulation and conscious intention. The classical texts describe this as "Jing transforming into Qi, and Qi transforming into Shen" - a process of progressive refinement from dense physical essence to subtle spiritual energy.
    
    As practitioners develop skill in regulating and moving qi, they experience greater responsiveness of energy to intention, increased sensitivity to subtle energetic qualities, and the ability to apply energy cultivation to specific goals. The energy body becomes increasingly integrated with the physical and spiritual aspects of being.`,
    icon: Wind
  }
};

function EnergySystem() {
  const [activeSection, setActiveSection] = useState('foundation');

  return (
    <div className="space-y-12">
      {/* Overview */}
      <div className="text-center">
        <h2 className="text-2xl font-chinese text-gold-500 mb-2">能量系統</h2>
        <h3 className="text-3xl font-serif text-stone-100 mb-4">Energy Cultivation System</h3>
        <p className="text-stone-300 max-w-2xl mx-auto">
          A systematic approach to developing internal energy through progressive stages of practice.
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(energySystemContent).map(([key, section]) => {
          const Icon = section.icon;
          return (
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

      {/* Content Display */}
      <Card className="bg-stone-800/30 border-jade-500/10">
        <CardContent className="p-6">
          <h3 className="text-2xl font-serif text-gold-500 mb-4">
            {energySystemContent[activeSection].title}
          </h3>
          <div className="text-stone-300 space-y-4">
            {energySystemContent[activeSection].content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Practices Section */}
      <div className="bg-stone-800/50 p-6 rounded-xl border border-jade-500/20">
        <h3 className="text-xl font-serif text-gold-500 mb-4">Integration with Daoist Yoga</h3>
        <p className="text-stone-300 mb-6">
          In our Daoist Yoga approach, these energy cultivation principles are seamlessly integrated with physical yoga postures and movement sequences. Each posture and movement is designed not just for physical flexibility and strength, but specifically to support energy development:
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-stone-800/70 p-4 rounded-lg border border-jade-500/10">
            <h4 className="text-jade-400 font-serif mb-2">Foundation Poses</h4>
            <p className="text-stone-300 text-sm">
              Adapted standing and seated poses that establish proper alignment of the spine and pelvis, creating the conditions for the lower field to develop.
            </p>
          </div>
          
          <div className="bg-stone-800/70 p-4 rounded-lg border border-jade-500/10">
            <h4 className="text-jade-400 font-serif mb-2">Energy Building Sequences</h4>
            <p className="text-stone-300 text-sm">
              Dynamic movements coordinated with specific breathing patterns that generate and accumulate energy in the lower field.
            </p>
          </div>
          
          <div className="bg-stone-800/70 p-4 rounded-lg border border-jade-500/10">
            <h4 className="text-jade-400 font-serif mb-2">Circulation Flows</h4>
            <p className="text-stone-300 text-sm">
              Flowing sequences that teach practitioners to direct and circulate energy through the meridian system and three fields for healing and transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergySystem;