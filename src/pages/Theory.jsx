// src/pages/Theory.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Theory topics
const theoryTopics = [
  {
    id: 'foundations',
    title: 'Theoretical Foundations',
    chinese: '理論基礎',
    description: 'Core concepts that form the basis of Daoist practice and philosophy',
    image: '/api/placeholder/400/225',
    isExpanded: true,
    sections: [
      {
        title: 'Yin-Yang Theory',
        chinese: '陰陽理論',
        content: `The concept of Yin and Yang is central to Daoist thought, representing complementary yet opposing forces that exist in all aspects of life. The familiar symbol of Yin-Yang (太極圖 Taiji Tu) represents this balance through the integration of dark and light, each containing a seed of the other.

        In practice, we work with this principle by recognizing the natural alternation between activity and rest, structure and release, outward and inward focus. All movements contain elements of both Yin and Yang, though in different proportions.

        Understanding this dynamic balance is essential for developing a practice that is sustainable, effective, and aligned with natural principles.`
      },
      {
        title: 'Three Treasures',
        chinese: '三寶',
        content: `The Three Treasures (San Bao) represent the fundamental energies of life:

        1. **Jing (精)** - Essence: The dense, material foundation of life. In the body, this corresponds to reproductive energy, bone marrow, and constitutional strength.

        2. **Qi (氣)** - Energy: The vital force that animates all life. It flows through the body's meridian system and can be cultivated through breath, movement, and meditation.

        3. **Shen (神)** - Spirit: The most refined aspect of energy, associated with consciousness, awareness, and spiritual connection.

        In Daoist practice, we work to conserve Jing, cultivate Qi, and refine Shen—transforming denser forms of energy into more subtle ones through a process known as "internal alchemy."`,
        isLocked: true
      },
      {
        title: 'Five Elements',
        chinese: '五行',
        content: `The Five Elements theory (Wu Xing) describes how energy transforms through five phases: Water, Wood, Fire, Earth, and Metal. Each element has specific qualities and correspondences, including:

        - **Wood (木)**: Growth, expansion, flexibility
        - **Fire (火)**: Transformation, passion, activity
        - **Earth (土)**: Stability, nourishment, centering
        - **Metal (金)**: Contraction, refinement, precision
        - **Water (水)**: Flowing, yielding, depth

        These elements interact through creative and controlling cycles. The creative cycle follows the order above (Wood feeds Fire, Fire creates Earth ash, etc.), while the controlling cycle maintains balance (Water controls Fire, Fire melts Metal, etc.).

        In practice, we use movements and breathing techniques that embody each element's qualities, helping to balance our energy system.`
      }
    ]
  },
  {
    id: 'energetics',
    title: 'Energy Systems',
    chinese: '能量系統',
    description: 'Understanding the body's energy centers, pathways, and cultivation methods',
    image: '/api/placeholder/400/225',
    sections: [
      {
        title: 'Meridian System',
        chinese: '經絡系統',
        content: `The meridian system (Jing Luo) is a network of pathways through which qi (vital energy) flows throughout the body. This network includes:

        - **12 Primary Meridians**: Paired channels that correspond to specific organs and functions
        - **8 Extraordinary Vessels**: Deeper channels that regulate and store energy
        - **Connecting Channels**: Secondary pathways that link the primary meridians

        In Daoist Yoga, physical postures are often designed to open, stretch, or stimulate specific meridian pathways. By working systematically with these channels, we can address energetic imbalances, remove blockages, and enhance the overall flow of qi.

        Understanding the meridian system helps practitioners to work more intelligently with their body's energy, moving beyond simply stretching muscles to cultivating and directing internal energy.`
      },
      {
        title: 'Three Dantians',
        chinese: '三丹田',
        content: `The three Dantians are major energy centers in the body, sometimes compared to the chakra system found in Indian yogic traditions, though with important differences:

        1. **Lower Dantian** (下丹田): Located in the lower abdomen, about 1.5-3 inches below the navel and inside the body. This center is the foundation of energy cultivation, associated with vitality, structural stability, and jing (essence).

        2. **Middle Dantian** (中丹田): Located at the center of the chest near the heart. This center governs emotional balance, harmony, and the transformation of energy. It's associated with the heart's intelligence and compassion.

        3. **Upper Dantian** (上丹田): Located between the eyebrows and extending into the center of the brain. This center relates to spiritual awareness, higher consciousness, and the refinement of energy into shen (spirit).

        In practice, we typically begin by developing the lower dantian as a stable foundation, then progressively work with the middle and upper centers as our practice matures.`,
        isLocked: true
      },
      {
        title: 'Small and Grand Circulation',
        chinese: '小周天與大周天',
        content: `Circulation practices are methods for deliberately directing qi through specific pathways in the body:

        - **Small Circulation** (Xiao Zhou Tian): Also known as the "Microcosmic Orbit," this foundational practice involves circulating energy through the two primary vessels—the Governing Vessel (Du Mai) up the spine and the Conception Vessel (Ren Mai) down the front of the body. This forms a continuous loop of energy.

        - **Grand Circulation** (Da Zhou Tian): Once the Small Circulation is established, practice can expand to the Grand Circulation, which includes the extremities and all major energy pathways in the body.

        These circulation methods form the basis of many advanced Daoist energy practices, including internal alchemy, and are typically learned after establishing a strong foundation in basic energy awareness.`,
        isLocked: true
      }
    ]
  },
  {
    id: 'practice',
    title: 'Practice Principles',
    chinese: '修練原則',
    description: 'Key concepts that guide effective practice methodology',
    image: '/api/placeholder/400/225',
    sections: [
      {
        title: 'Three Alignments',
        chinese: '三合',
        content: `The Three Alignments (San He) refer to the harmonization of body, breath, and mind—the three elements that must be integrated for effective practice:

        1. **Body Alignment** (形合): Correct physical structure and posture, which creates the proper container for energy work.

        2. **Breath Alignment** (息合): Coordinating movement with breath and using breath to direct energy.

        3. **Mind Alignment** (意合): Maintaining focused awareness and clear intention during practice.

        When these three aspects are unified, practice becomes exponentially more effective. In Daoist traditions, this is expressed through the principle that "Yi (intention) leads Qi (energy)," highlighting the essential role of focused awareness in directing energy.`
      },
      {
        title: 'Natural Movement',
        chinese: '自然運動',
        content: `Natural movement principles in Daoist practice emphasize working with, rather than against, the body's inherent design:

        - **Structural Integrity**: Maintaining the body's natural alignments to prevent energy leakage and maximize stability.
        
        - **Spiral Forces**: Utilizing the body's natural spiraling patterns for efficient power generation and energy circulation.
        
        - **Central Equilibrium**: Maintaining balance around the central axis, allowing for stability with minimal effort.
        
        - **Connected Movement**: Moving as an integrated whole rather than as isolated parts.

        These principles apply to both dynamic movement practices like Daoist Yoga and still meditation postures, ensuring that practice works with the body's natural design rather than forcing it into unnatural configurations.`
      },
      {
        title: 'Progressive Cultivation',
        chinese: '漸進式修煉',
        content: `Daoist practice follows a clear developmental sequence, recognizing that attempting advanced practices without proper foundation can be ineffective or even harmful:

        1. **Jing Gong (静功)**: "Still" or "quiet" practices that develop awareness, proper structure, and energy sensitivity.
        
        2. **Dong Gong (动功)**: "Moving" practices that cultivate energy flow, strength, and coordination.
        
        3. **Integration**: The harmonization of stillness and movement, where the qualities developed in both still and moving practices become unified.

        This progressive approach ensures that practitioners develop a solid foundation before attempting more advanced methods. In traditional Daoist training, students might spend months or years on foundational practices before being introduced to more complex techniques.`,
        isLocked: true
      }
    ]
  }
];

function Theory() {
  const [activeTopics, setActiveTopics] = useState(
    Object.fromEntries(theoryTopics.map(topic => [topic.id, topic.isExpanded || false]))
  );

  const toggleTopic = (topicId) => {
    setActiveTopics({
      ...activeTopics,
      [topicId]: !activeTopics[topicId]
    });
  };

  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">道家理論</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Daoist Theory
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore the philosophical and practical foundations of Daoist practice,
            from fundamental concepts to advanced energetic principles.
          </p>
        </div>

        {/* Theory Topics */}
        <div className="space-y-12">
          {theoryTopics.map((topic) => (
            <div key={topic.id} className="bg-stone-800/30 rounded-xl overflow-hidden border border-jade-500/10">
              {/* Topic Header */}
              <div 
                className="p-6 flex items-center justify-between cursor-pointer"
                onClick={() => toggleTopic(topic.id)}
              >
                <div>
                  <h2 className="text-2xl font-serif text-gold-500">{topic.title}</h2>
                  <p className="text-stone-400 font-chinese">{topic.chinese}</p>
                </div>
                <div>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 text-jade-500 transition-transform duration-300 ${
                      activeTopics[topic.id] ? 'transform rotate-180' : ''
                    }`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Topic Content */}
              {activeTopics[topic.id] && (
                <div>
                  <div className="px-6 pb-6">
                    <p className="text-stone-300 mb-6">{topic.description}</p>
                    
                    {/* Topic Sections */}
                    <div className="space-y-6">
                      {topic.sections.map((section, index) => (
                        <div key={index} className="relative">
                          {/* Locked Overlay */}
                          {section.isLocked && (
                            <div className="absolute inset-0 bg-stone-900/70 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl z-10">
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                className="h-8 w-8 text-gold-500 mb-2" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                              <p className="text-gold-400 font-medium mb-2">Premium Content</p>
                              <Link 
                                to="/subscription"
                                className="text-sm bg-gold-500 hover:bg-gold-600 text-stone-900 px-4 py-2 
                                         rounded-lg transition-all duration-300"
                              >
                                Unlock Access
                              </Link>
                            </div>
                          )}

                          <div className={`p-6 bg-stone-800/50 rounded-xl border border-jade-500/10 ${section.isLocked ? 'blur-sm' : ''}`}>
                            <div className="mb-4">
                              <h3 className="text-xl font-serif text-gold-500 mb-1">{section.title}</h3>
                              <p className="text-stone-400 font-chinese">{section.chinese}</p>
                            </div>
                            <div className="text-stone-300 prose prose-invert max-w-none">
                              {section.content.split('\n\n').map((paragraph, i) => (
                                <p key={i} className="mb-4">{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Resources CTA */}
        <div className="mt-16 bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-8 border border-gold-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-serif text-gold-500 mb-2">Deepen Your Understanding</h3>
              <p className="text-stone-300 mb-4">
                Our comprehensive educational resources help you integrate theoretical knowledge with practical application.
                Subscribe to unlock advanced content and guided learning paths.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/subscription"
                  className="bg-gold-500 hover:bg-gold-600 text-stone-900 px-6 py-3 
                           rounded-lg font-medium transition-all duration-300"
                >
                  Explore Subscription Options
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <svg className="w-32 h-32 text-jade-500/30" viewBox="0 0 100 100">
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
  );
}

export default Theory;