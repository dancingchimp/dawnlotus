// src/components/education/TaiChiStudy.jsx
import React, { useState, useEffect } from 'react';
import { BookOpen, Compass, Feather, Wind, Circle, Move } from 'lucide-react';

const taiChiContent = {
  essence: {
    title: "The Essence of Taijiquan",
    chinese: "太極拳的本質",
    description: "Understanding the core principles that define authentic Tai Chi practice",
    content: `If we were to pick two key qualities that traditional Taijiquan really excels at teaching, they would be release (Yin) and conscious absorption (Yang). When these two qualities are applied correctly, something quite special happens: the mobilisation of inner force (Jin). This is where Taijiquan really shines—using a mix of body development, mental focus, and internal mechanics to teach us how Yin and Yang work together in the body. This interplay, of course, is central to Daoist philosophy.

    Taijiquan revolves around the study of 37 core postures, or Shi. Each one has its own way of mobilising the body's Qi, and these postures are the foundation of everything else. Originally, they came from a blend of Nei Gong, Gong Fu principles, and alchemical practices, but over time they were connected into the flowing sequence most people recognise today as the Taiji form. The postures themselves teach us the balance of Yin and Yang, while the transitions between them are based on the theory of the Wu Xing (the Five Phases). It's this philosophical underpinning that ties Taijiquan so strongly to the Daoist tradition, even though its exact origins are still wrapped in myth and legend.
    
    The real key to Taijiquan is learning how to transform your body and how it functions, guided by Taiji's principles. It's not about using the usual contractive muscles to move your body, but rather retraining yourself to rely on the inner engine—that deep, internal power that makes Taijiquan so unique. This shift changes everything, and it's what separates effective training from just going through the motions.
    
    This transformation is achieved by understanding how to establish the correct combination of 'releases and pulls' within the body and then sinking the Qi until a certain degree of 'fullness' arises. Rather than being an art focused solely on technique, Taijiquan trains fundamental inner qualities known as 'Song' (release) and 'Ting' (listening energy). These qualities are the key to mobilising Qi and Jin, and they form the heart of what makes Taijiquan unique.`
  },
  movingMeditation: {
    title: "Moving Meditation",
    chinese: "動中冥想",
    description: "The meditative aspects of Taijiquan practice",
    content: `Taijiquan (Tai Chi) is renowned as a form of moving meditation, blending mindfulness, physical movement, and inner transformation. While this concept may seem unfamiliar to some, those who engage deeply with the practice come to appreciate its profound benefits. Rooted in Daoist alchemical principles and Chan Buddhist absorption techniques, Taijiquan offers a holistic path to mental clarity and physical well-being.

    Unlike traditional seated meditation, Taijiquan integrates awareness into motion, allowing practitioners to cultivate mindfulness while flowing through harmonious movements. This dynamic form of meditation encourages stabilization of awareness within the body, conscious release of tension, and a deep connection between mind and body.
    
    The philosophical foundation of Taijiquan reflects its Daoist and Buddhist influences. Daoism emphasizes transformation, balance, and harmony, qualities mirrored in the continuous, fluid movements of Taijiquan. Meanwhile, Chan Buddhism brings a focus on present-moment awareness and detachment from mental distractions, fostering a grounded and focused state of mind.
    
    The practice of Taijiquan supports physical health by improving balance, flexibility, posture, and circulation while reducing tension and strengthening the body's internal systems. However, its mental benefits are perhaps even more profound. By cultivating emotional resilience, mental clarity, and the ability to release stress and negative thought patterns, Taijiquan transforms mental states, promoting inner peace and holistic well-being.
    
    In traditional Chinese culture, the mind-body connection is central to understanding health. Taijiquan reflects this perspective by addressing the root causes of internal imbalances through the evolution of mental states. While the physical movements are beneficial on their own, the most significant changes occur when the mind and body are harmonized through consistent practice.`
  },
  modernPractice: {
    title: "Modern Practice",
    chinese: "現代練習",
    description: "How Taijiquan has evolved to meet contemporary needs",
    content: `Historically, Taijiquan (Tai Chi) was developed as a powerful martial art, with its practitioners renowned for their combative skills. Families like the Yangs became famous for their mastery of hand-to-hand combat and the practical application of Taijiquan in real-world confrontations. However, in modern times, the need for physical combat skills has greatly diminished. Many of us will never face a life-threatening physical confrontation, and the focus of Taijiquan has shifted to align with the needs of contemporary life.

    In today's world, Taijiquan has evolved into a discipline focused on self-development, health, and healing. Its martial origins remain a part of its heritage, but for most practitioners, the combative aspects take a backseat to its broader benefits. Modern practice emphasizes enhancing physical health, cultivating mental clarity, and harmonizing the body and mind for a more fulfilling life.
    
    At Harmony Gate, traditional partner work and basic martial arts skills are still taught as a way to preserve the roots of Taijiquan and give practitioners a sense of its original purpose. Partner work provides a platform to develop sensitivity and awareness, refine physical coordination, and deepen the understanding of Taijiquan's principles of yielding, balance, and flow. However, the primary focus is not on preparing for combat but on using these practices as tools for self-discovery and personal growth.
    
    The overarching goal of Taijiquan practice at Harmony Gate is to improve the nature of the body and mind, fostering well-being and happiness. By learning to release tension, move mindfully, and cultivate inner awareness, practitioners can transform their daily lives. Combat skills, while valuable for historical context and physical discipline, are secondary to the broader purpose of living a healthy and harmonious life.`
  },
  coreprinciples: {
    title: "Core Principles",
    chinese: "核心原則",
    description: "The fundamental concepts that guide authentic Taijiquan practice",
    sections: [
      {
        title: "Song - Conscious Release",
        chinese: "鬆",
        description: "The principle of letting go of unnecessary tension",
        content: `Song is often translated simply as "relaxation," but it's actually much more nuanced than that. It refers to a state of dynamic release where unnecessary tension is consciously let go, while maintaining the structural integrity and alignment of the body.

        True Song is not collapse or limpness. Instead, it's an intelligent release that distinguishes between necessary and unnecessary tension. This quality allows Qi to flow freely through the body and is the foundation for developing internal power. Without Song, Taijiquan becomes stiff and mechanical, losing its depth and transformative potential.
        
        Developing Song requires patient practice and heightened body awareness. It begins with identifying areas of habitual tension—often in the shoulders, chest, lower back, and joints—and consciously releasing them without compromising structure. Over time, this conscious release extends deeper into the body, affecting not just muscles but also tendons, ligaments, and eventually the fascia and internal organs.
        
        The state of Song creates the conditions for deeper energetic work, allowing for the cultivation of Jin (refined force) and the mobilization of Qi throughout the meridian system.`,
        icon: Feather
      },
      {
        title: "Ting - Listening Energy",
        chinese: "聽",
        description: "Developing subtle awareness and responsiveness",
        content: `Ting, often translated as "listening energy," is the cultivated sensitivity that allows a practitioner to perceive subtle forces, intentions, and energetic qualities both within their own body and in interaction with others.

        This internal awareness begins with listening to one's own body—feeling the distribution of weight, the quality of balance, the flow of breath, and the movement of Qi. As this sensitivity develops, it extends outward, allowing the practitioner to "listen" through physical contact in partner work, sensing the opponent's force, intention, and center of gravity before these manifest as obvious movement.
        
        Ting is developed through both solo practice and partner exercises. In solo practice, the slow, deliberate movements of the form create space for internal awareness to grow. In partner work, especially Tui Shou (Push Hands), the quality of Ting allows for appropriate and effortless responses based on direct perception rather than reaction.
        
        The development of Ting transforms Taijiquan from a sequence of memorized movements into a living, responsive art that adapts to changing circumstances with awareness and intelligence.`,
        icon: Compass
      },
      {
        title: "Jin - Internal Force",
        chinese: "勁",
        description: "The refined power that emerges through proper practice",
        content: `Jin represents the refined, internal force that emerges through proper Taijiquan practice. Unlike external muscular strength (Li), Jin is characterized by its efficiency, subtlety, and connection to intent and awareness.

        There are many types of Jin discussed in traditional Taijiquan, including:
        
        • Peng Jin (掤勁) - Expanding, resilient force
        • Lu Jin (履勁) - Yielding, diverting force
        • Ji Jin (擠勁) - Pressing, penetrating force
        • An Jin (按勁) - Sinking, stabilizing force
        
        These and other Jin expressions are not techniques to be applied, but rather qualities that emerge naturally when the body is properly aligned, the mind is clear, and unnecessary tension is released.
        
        The development of Jin requires the integration of physical structure, breath, awareness, and intent (Yi). When these elements work in harmony, power is generated not from muscular exertion but from the unified coordination of the whole body, supported by connection to the ground and guided by focused intent.
        
        Jin manifests most clearly in partner work, where its efficiency and effectiveness become immediately apparent. However, its development begins in solo practice through the cultivation of proper alignment, rootedness, and the ability to issue force from the whole body acting as an integrated unit.`,
        icon: Wind
      },
      {
        title: "Wu Wei - Non-Doing",
        chinese: "無為",
        description: "Effortless action through alignment with natural principles",
        content: `Wu Wei, often translated as "non-doing" or "non-action," is a Daoist concept central to Taijiquan practice. It refers not to passivity or inaction, but to action that arises naturally and effortlessly in alignment with the Dao or the natural way of things.

        In Taijiquan, Wu Wei manifests as movement that feels effortless despite its effectiveness. This quality emerges when the practitioner has released unnecessary tension, aligned with proper structure, and integrated body and mind. Actions then arise from a deep place of centered awareness rather than from striving or force.
        
        Wu Wei in practice means letting go of the desire to control or force outcomes, instead allowing responses to emerge naturally from a state of present awareness. When applied to martial aspects, this means neither resisting nor collapsing when faced with force, but rather finding the natural path of least resistance.
        
        The cultivation of Wu Wei requires patience and the willingness to let go of habitual patterns of tension, reaction, and force. Through consistent practice, what initially requires conscious effort gradually becomes effortless and natural—the hallmark of advanced Taijiquan.`,
        icon: Circle
      }
    ]
  },
  benefits: {
    title: "Benefits of Practice",
    chinese: "修練益處",
    description: "The transformative effects of consistent Taijiquan practice",
    sections: [
      {
        title: "Physical Benefits",
        chinese: "身體益處",
        description: "How Taijiquan transforms the physical body",
        content: `Regular Taijiquan practice offers a wealth of physical benefits that contribute to overall health and longevity:

        • **Improved Balance and Coordination**: The slow, deliberate movements and weight shifts in Taijiquan develop exceptional balance and whole-body coordination, reducing the risk of falls, especially in older practitioners.
        
        • **Enhanced Flexibility and Range of Motion**: The gentle stretching inherent in Taijiquan postures gradually increases flexibility throughout the body, with particular benefits for the spine, hips, and shoulders.
        
        • **Strengthened Core and Lower Body**: Despite its gentle appearance, Taijiquan builds significant strength in the legs, hips, and core, creating a stable foundation for all movement.
        
        • **Optimized Posture and Alignment**: The emphasis on proper structural alignment corrects postural imbalances, reducing strain on the body and improving efficiency of movement.
        
        • **Regulated Breath and Increased Lung Capacity**: The coordination of movement with breath in Taijiquan naturally deepens and regulates breathing patterns, increasing lung capacity and oxygen efficiency.
        
        • **Improved Circulation**: The combination of gentle movement, deep breathing, and release of tension enhances both blood and lymphatic circulation, supporting overall cardiovascular health.
        
        • **Reduced Chronic Pain**: Many practitioners report significant reduction in chronic pain conditions, particularly those related to the back, neck, and joints.
        
        These physical benefits tend to develop gradually but sustainably, creating lasting changes in the body that support health and vitality even into advanced age.`,
        icon: Move
      },
      {
        title: "Mental and Emotional Benefits",
        chinese: "心理和情緒益處",
        description: "The impact of Taijiquan on mental and emotional wellbeing",
        content: `The mental and emotional benefits of Taijiquan are profound and far-reaching, often becoming the primary motivation for long-term practitioners:

        • **Stress Reduction**: The meditative movement of Taijiquan activates the parasympathetic nervous system, reducing stress hormones and creating a state of calm alertness.
        
        • **Improved Focus and Concentration**: The mental discipline required to maintain awareness throughout the form strengthens the capacity for sustained attention in all areas of life.
        
        • **Emotional Regulation**: Regular practice cultivates the ability to observe emotions without being overwhelmed by them, creating space for more skillful responses to emotional triggers.
        
        • **Enhanced Mind-Body Connection**: Taijiquan bridges the gap between mental and physical experience, creating an integrated awareness that contributes to overall wellbeing.
        
        • **Cognitive Clarity**: The combination of movement, breath, and focused attention has been shown to improve cognitive function and may help maintain mental clarity with aging.
        
        • **Reduced Anxiety and Depression**: Many studies have demonstrated Taijiquan's effectiveness in reducing symptoms of anxiety and depression, often comparable to other interventions.
        
        • **Improved Sleep Quality**: The regulation of the nervous system and reduction of stress contribute to better sleep patterns and more restful sleep.
        
        These mental and emotional benefits often begin to manifest early in one's practice journey and tend to deepen over time as the integration of mind and body becomes more refined.`,
        icon: BookOpen
      }
    ]
  }
};

function TaiChiStudy() {
  const [activeSection, setActiveSection] = useState('essence');
  const [activeSubsection, setActiveSubsection] = useState(null);

  const handleSectionClick = (sectionKey) => {
    setActiveSection(sectionKey);
    setActiveSubsection(null);
  };

  const handleSubsectionClick = (subsectionIndex) => {
    setActiveSubsection(activeSubsection === subsectionIndex ? null : subsectionIndex);
  };

  const renderContentSection = () => {
    const section = taiChiContent[activeSection];

    if (!section.sections) {
      return (
        <div className="bg-stone-800/30 border border-jade-500/10 p-6 rounded-xl">
          <h3 className="text-2xl font-serif text-gold-500 mb-4">{section.title}</h3>
          <div className="text-stone-300 space-y-4">
            {section.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="leading-relaxed">{paragraph}</p>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-serif text-gold-500 mb-2">{section.title}</h3>
        <p className="text-stone-300 mb-6">{section.description}</p>
        
        {section.sections && section.sections.map((subsection, index) => (
          <div 
            key={index}
            className="bg-stone-800/30 border border-jade-500/10 hover:border-jade-500/30 
                     transition-all duration-300 rounded-xl overflow-hidden"
          >
            <div 
              className="p-6 cursor-pointer"
              onClick={() => handleSubsectionClick(index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-jade-500/10 rounded-lg">
                    <subsection.icon className="w-5 h-5 text-jade-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-gold-500">{subsection.title}</h4>
                    <p className="text-stone-400 font-chinese">{subsection.chinese}</p>
                    <p className="text-stone-300 text-sm mt-1">{subsection.description}</p>
                  </div>
                </div>
                <div className="p-2 bg-jade-500/10 rounded-full">
                  <Circle className={`w-6 h-6 text-jade-500 transition-transform duration-300 ${
                    activeSubsection === index ? 'transform rotate-90' : ''
                  }`} />
                </div>
              </div>
            </div>
            
            {activeSubsection === index && (
              <div className="px-6 pb-6">
                <div className="pt-2 text-stone-300 space-y-4">
                  {subsection.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const getIconForSection = (sectionKey) => {
    switch (sectionKey) {
      case 'essence':
        return Circle;
      case 'movingMeditation':
        return Wind;
      case 'modernPractice':
        return Move;
      case 'coreprinciples':
        return Compass;
      case 'benefits':
        return BookOpen;
      default:
        return Circle;
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">太極拳研究</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Taijiquan Study
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore the ancient art of Taijiquan (Tai Chi) as a path to balance,
            mindfulness, and internal development through harmonious movement.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="space-y-4 sticky top-20">
              {Object.entries(taiChiContent).map(([key, section]) => {
                const Icon = getIconForSection(key);
                return (
                  <div
                    key={key}
                    className={`cursor-pointer transition-all duration-300 p-4 rounded-xl border
                      ${activeSection === key 
                        ? 'bg-stone-800/70 border-jade-500/50' 
                        : 'bg-stone-800/30 hover:bg-stone-800/50 border-jade-500/10'
                      }`}
                    onClick={() => handleSectionClick(key)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-jade-500/10 rounded-lg">
                        <Icon className="w-5 h-5 text-jade-500" />
                      </div>
                      <div>
                        <h3 className="text-gold-500 text-lg font-serif">{section.title}</h3>
                        <p className="text-stone-400 font-chinese text-sm">{section.chinese}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Content Area */}
          <div className="md:col-span-3">
            {renderContentSection()}
            
            {/* Taijiquan Quote */}
            <div className="mt-12 bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-8 border border-gold-500/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif text-gold-500 mb-4">The Path of Harmony</h3>
                  <p className="text-stone-300 italic">
                    "Taijiquan offers a journey into the profound balance of Yin and Yang. Through its practice, 
                    we learn not just to move with grace, but to live with harmony—finding the perfect equilibrium 
                    between effort and ease, movement and stillness, strength and softness."
                  </p>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 bg-gradient-radial from-jade-500/10 to-transparent opacity-70" />
                    <svg className="w-full h-full text-jade-500" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" />
                      <circle cx="50" cy="26" r="6" fill="#DAA520" />
                      <circle cx="50" cy="74" r="6" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaiChiStudy;