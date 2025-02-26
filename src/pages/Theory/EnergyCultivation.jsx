// src/pages/theory/EnergyCultivation.jsx
import React, { useState } from 'react';
import { Circle, Battery, Flame, Wind, Zap, BarChart } from 'lucide-react';

function EnergyCultivation() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'forming-field',
      title: "Forming the Lower Field",
      chinese: "形成下田",
      description: "The foundational stage of creating a stable magnetic container for Qi",
      content: `The first stage of energy cultivation focuses on establishing a strong, stable energy center in the lower abdomen, known as the Lower Dantian (下丹田). This center functions like a magnetic field that can attract, contain, and store Qi.

      In Daoist practice, this field is not merely conceptual but a tangible energetic structure that develops through specific techniques including:
      
      • Proper structural alignment of the body, especially the pelvis and lower spine
      • Deep, relaxed breathing that focuses awareness in the lower abdomen
      • Mind intention (Yi) that directs attention to this center without tension
      • Specific meditation and movement practices that strengthen this energetic field
      
      As the lower field develops, practitioners begin to experience sensations of warmth, fullness, or gentle pulsing in the lower abdomen. The field gradually becomes more stable and coherent, creating an electromagnetic container that can effectively store energy rather than allowing it to disperse.
      
      This foundation stage cannot be rushed or skipped. Without a properly developed lower field, attempts at more advanced energy work will be ineffective, as there will be no container to store the cultivated Qi.`,
      practices: [
        {
          name: "Standing Meditation",
          description: "Zhan Zhuang practice with focus on the lower abdomen",
          benefits: ["Grounds excess energy", "Stabilizes posture", "Creates energetic root"]
        },
        {
          name: "Lower Dantian Breathing",
          description: "Deep abdominal breathing that concentrates awareness in the lower field",
          benefits: ["Increases field density", "Expands containment capacity", "Calms the nervous system"]
        },
        {
          name: "Microcosmic Orbit Foundation",
          description: "Basic energy circulation that connects to the lower field",
          benefits: ["Establishes energy pathways", "Nourishes the field", "Creates functional connections"]
        }
      ],
      icon: Battery
    },
    {
      id: 'filling-battery',
      title: "Filling the Battery",
      chinese: "充滿能量",
      description: "Methods for generating, gathering, and storing Qi in the established field",
      content: `Once the lower field has been established as a stable container, the next stage focuses on filling this "battery" with Qi. This stage emphasizes the generation and preservation of vital energy through specific methods that draw from multiple sources:

      • External gathering: Drawing in Qi from the natural environment, including earth energy (Di Qi), heaven energy (Tian Qi), and the energy of the natural world
      • Internal generation: Creating energy through specific breath techniques, mental focus, and conscious direction of awareness
      • Conservation: Preventing energy leakage through proper physical alignments, emotional stability, and sexual energy management
      
      As the lower field begins to fill with energy, practitioners typically experience increasing sensations of warmth, fullness, and vitality. The lower abdomen may feel heavier or denser, and overall energy levels throughout the day become more stable and abundant.
      
      This stage of practice develops the "quantity" of energy available to the practitioner, creating a reservoir that can be drawn upon for health, healing, and further developmental practices. Just as a battery with greater capacity can power more functions for longer periods, a well-filled lower Dantian provides the energetic foundation for all aspects of life and practice.`,
      practices: [
        {
          name: "Six Healing Sounds",
          description: "Sound vibrations that clear organs and consolidate energy",
          benefits: ["Releases stagnant Qi", "Harmonizes organ energy", "Prevents energy dissipation"]
        },
        {
          name: "Three Centers Merge",
          description: "Gathering and condensing energy from the three Dantians",
          benefits: ["Concentrates scattered energy", "Builds energy density", "Integrates energy centers"]
        },
        {
          name: "Qi Gathering Postures",
          description: "Specific postures designed to accumulate and store energy",
          benefits: ["Increases energy absorption", "Strengthens energetic boundaries", "Builds reserve capacity"]
        }
      ],
      icon: Flame
    },
    {
      id: 'regulating-moving',
      title: "Regulating and Moving Qi",
      chinese: "調節運行氣",
      description: "Developing the ability to direct, circulate, and refine energy for specific purposes",
      content: `The third stage of energy cultivation involves learning to consciously regulate and direct the stored Qi. This is where the practitioner develops the ability to move energy in specific patterns and for particular purposes:

      • Internal Pathways: Circulating Qi through the body's meridian system and energy vessels
      • Refined Control: Developing increasing subtlety in directing energy to specific areas
      • Transformation: Converting dense energy into more refined forms through circulation
      • Application: Using directed Qi for healing, martial arts, spiritual development, or daily activities
      
      This stage transforms "raw" energy into "refined" energy through circulation and conscious intention. The classical texts describe this as "Jing transforming into Qi, and Qi transforming into Shen" - a process of progressive refinement from dense physical essence to subtle spiritual energy.
      
      As practitioners develop skill in regulating and moving Qi, they experience greater responsiveness of energy to intention, increased sensitivity to subtle energetic qualities, and the ability to apply energy cultivation to specific goals. The energy body becomes increasingly integrated with the physical and spiritual aspects of being.`,
      practices: [
        {
          name: "Small Circulation",
          description: "Moving energy through the Governing and Conception vessels",
          benefits: ["Opens central energy channels", "Balances Yin and Yang energies", "Creates continuous energy flow"]
        },
        {
          name: "Organ Energy Balancing",
          description: "Directing Qi to harmonize the Five Element energies of the organs",
          benefits: ["Resolves energy blockages", "Supports organ health", "Creates systemic balance"]
        },
        {
          name: "Energy Projection",
          description: "Extending Qi beyond the body's boundaries for healing or martial applications",
          benefits: ["Develops Yi (intention) power", "Strengthens energy extension", "Increases sensitivity to external Qi"]
        }
      ],
      icon: Wind
    },
    {
      id: 'advanced-refinement',
      title: "Advanced Energy Refinement",
      chinese: "高級能量精煉",
      description: "Transforming and refining energy into increasingly subtle forms",
      content: `The advanced stage of energy cultivation focuses on the alchemical transformation of energy into increasingly refined and spiritual forms. This stage represents the transition from primarily energetic work to the domain of spirit:

      • Refining Dense to Subtle: Transforming physical and emotional energies into pure awareness
      • Unifying the Three Treasures: Bringing Jing (essence), Qi (energy), and Shen (spirit) into harmonious relationship
      • Transcending Duality: Moving beyond the separation of self and other, inside and outside
      • Returning to the Source: Reconnecting with the primordial nature of consciousness
      
      At this stage, practice becomes increasingly subtle and internal. While the external forms may appear similar to earlier stages, the internal experience shifts dramatically as awareness becomes more refined and expanded.
      
      This level of practice traditionally belongs to the realm of "internal alchemy" (Nei Dan), where the practitioner works with the most subtle aspects of consciousness using energy as a vehicle for spiritual transformation. The ultimate goal is the integration of individual consciousness with universal awareness—returning to the Dao.`,
      practices: [
        {
          name: "Grand Circulation",
          description: "Complete energy circulation through all major and minor channels",
          benefits: ["Integrates all body systems", "Harmonizes energy distribution", "Creates whole-body connectivity"]
        },
        {
          name: "Internal Alchemy",
          description: "Traditional methods for transforming energy into spiritual essence",
          benefits: ["Refines consciousness", "Develops spiritual perception", "Transcends ordinary limitations"]
        },
        {
          name: "Empty Stillness Practice",
          description: "Maintaining awareness while letting go of all energetic manipulation",
          benefits: ["Cultivates wu-wei (non-doing)", "Develops presence", "Returns to natural state"]
        }
      ],
      icon: Zap
    }
  ];

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">能量修煉</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Energy Cultivation
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            The systematic development of internal energy (Qi) through progressive stages
            of cultivation, regulation, and refinement.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {stages.map((stage, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center cursor-pointer"
                onClick={() => setActiveStage(index)}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    index === activeStage 
                      ? 'bg-jade-500 text-stone-900' 
                      : index < activeStage 
                        ? 'bg-jade-500/30 text-jade-500' 
                        : 'bg-stone-800 text-stone-400'
                  }`}
                >
                  {index + 1}
                </div>
                <span className={`text-sm text-center hidden md:block transition-colors duration-300 ${
                  index === activeStage 
                    ? 'text-jade-500' 
                    : 'text-stone-400'
                }`}>
                  {stage.title}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full h-1 bg-stone-800 relative">
            <div 
              className="absolute h-1 bg-jade-500 transition-all duration-300"
              style={{ width: `${((activeStage) / (stages.length - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Current Stage Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Stage Overview */}
          <div className="md:col-span-1">
            <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-jade-500/10 rounded-lg">
                  {React.createElement(stages[activeStage].icon, { className: "text-jade-500 w-6 h-6" })}
                </div>
                <div>
                  <h3 className="text-gold-500 font-serif text-xl">{stages[activeStage].title}</h3>
                  <p className="text-stone-400 font-chinese">{stages[activeStage].chinese}</p>
                </div>
              </div>
              
              <p className="text-stone-300 mb-6">
                {stages[activeStage].description}
              </p>
              
              <h4 className="text-gold-400 font-serif mb-3">Key Practices</h4>
              <div className="space-y-3">
                {stages[activeStage].practices.map((practice, index) => (
                  <div key={index} className="bg-stone-800/50 p-3 rounded-lg">
                    <h5 className="text-jade-400 font-medium mb-1">{practice.name}</h5>
                    <p className="text-stone-300 text-sm mb-2">{practice.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {practice.benefits.map((benefit, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-0.5 bg-jade-500/10 text-jade-300 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Detailed Description */}
          <div className="md:col-span-2">
            <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10">
              <h3 className="text-2xl font-serif text-gold-500 mb-6">{stages[activeStage].title}</h3>
              <div className="text-stone-300 space-y-4">
                {stages[activeStage].content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="leading-relaxed">{paragraph}</p>
                ))}
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-stone-700">
                <button
                  onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeStage > 0 
                      ? 'text-jade-500 hover:text-jade-400'
                      : 'text-stone-600 cursor-not-allowed'
                  }`}
                  disabled={activeStage === 0}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Previous Stage
                </button>
                
                <button
                  onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeStage < stages.length - 1 
                      ? 'text-jade-500 hover:text-jade-400'
                      : 'text-stone-600 cursor-not-allowed'
                  }`}
                  disabled={activeStage === stages.length - 1}
                >
                  Next Stage
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Further Learning */}
        <div className="bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-8 border border-jade-500/20">
          <h3 className="text-2xl font-serif text-gold-500 mb-4">Application in Daoist Yoga Practice</h3>
          <p className="text-stone-300 mb-6">
            In Daoist Yoga, these stages of energy cultivation are integrated into physical practice through specific sequences, breathwork, and meditation techniques. Each posture and movement is designed to support one or more aspects of this developmental process:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-stone-800/50 p-5 rounded-lg border border-jade-500/10">
              <div className="flex items-center gap-3 mb-3">
                <Battery className="text-jade-500 w-5 h-5" />
                <h4 className="text-gold-400 font-serif">Foundation Practices</h4>
              </div>
              <p className="text-stone-300 text-sm">
                Focus on proper alignment, stability, and rooting to establish the energetic container in the lower Dantian.
              </p>
            </div>
            
            <div className="bg-stone-800/50 p-5 rounded-lg border border-jade-500/10">
              <div className="flex items-center gap-3 mb-3">
                <Flame className="text-jade-500 w-5 h-5" />
                <h4 className="text-gold-400 font-serif">Energy Building</h4>
              </div>
              <p className="text-stone-300 text-sm">
                Sequences that generate and store energy through specific breathing patterns and dynamic movements.
              </p>
            </div>
            
            <div className="bg-stone-800/50 p-5 rounded-lg border border-jade-500/10">
              <div className="flex items-center gap-3 mb-3">
                <Wind className="text-jade-500 w-5 h-5" />
                <h4 className="text-gold-400 font-serif">Flow Practices</h4>
              </div>
              <p className="text-stone-300 text-sm">
                Dynamic sequences that teach practitioners to direct and circulate energy through the meridian system.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="/practice/daoist-yoga" 
              className="inline-flex items-center gap-2 bg-jade-500 hover:bg-jade-600 text-stone-100 px-6 py-3 rounded-lg transition-colors"
            >
              Explore Related Practices
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnergyCultivation;