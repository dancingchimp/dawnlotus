// src/components/education/NeiGongStudy.jsx
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Flame, Wind, Battery, Circle, Book, Compass, Zap } from 'lucide-react';

const neiGongContent = {
  introduction: {
    title: "Nei Gong Overview",
    chinese: "內功概述",
    description: "Understanding the essence and purpose of internal cultivation",
    content: `Nei Gong, meaning 'internal skill' or 'internal development,' is a profound practice of inner cultivation that has its roots in the wisdom traditions of China, particularly Daoism and alchemical training. Over centuries, it has also been integrated into Chinese Buddhist practices and spread across South East Asia, where it intermingled with local traditions.

    At its essence, Nei Gong is a systematic approach to refining the three core "bodies" of human existence, a concept derived from the ancient Chinese arts:
    
    1. **Jing Gong** (靜功) – Cultivation of the physical body.
    2. **Qi Gong** (氣功) – Development of the energetic or subtle body.
    3. **Xin Gong** (心功) – Evolution of the mind and deeper consciousness.
    
    The practice begins with building a strong, healthy physical body to serve as a vessel for deeper energetic work. This is followed by cultivating the body's subtle energy system, which focuses on the flow and harmony of Qi (vital energy). Ultimately, Nei Gong moves into the refinement of the mind, enhancing awareness and spiritual connection.
    
    Throughout this journey, energy is cultivated, channels are opened, and a deep inner-healing process begins. Nei Gong training is one of the most transformative and beneficial practices a person can undertake, offering a gateway into the profound esoteric arts of ancient China.
    
    At Harmony Gate, Nei Gong is used to enhance the health and inner vitality of practitioners. Beyond this, advanced alchemical training is built upon this strong foundation, leading practitioners further along the path of personal transformation and connection to the Dao.`
  },
  lowerDantian: {
    title: "The Lower Dan Tian",
    chinese: "下丹田",
    description: "Cultivation of the body's primary energy center",
    content: `At the heart of Nei Gong practice is the cultivation of the lower Dan Tian, a vital energy center located in the lower abdomen. Developing the Dan Tian allows practitioners to restore their body's energy to a vibrant, youthful state, a process referred to in Daoism as 'returning to Spring.' This involves reactivating the body's energetic potential and creating a foundation for further practice.

    Once the lower Dan Tian is stabilized and activated, the focus shifts to harmonizing the body's energy channels to allow for an unobstructed flow of Qi. This process relies on cultivating two distinct forms of energy – Yin and Yang Qi.
    
    In Chinese philosophy and medicine, Yin and Yang are often seen as abstract, comparative concepts. However, in Nei Gong practice, they refer to two distinct types of Qi developed through systematic training:
    
    * **Yin Qi**: Organizing, consolidating, and spherical in nature, it manifests as bio-magnetic energy. This energy forms fields throughout the body, starting with the organizing field of the lower abdomen, which acts as the container for the lower Dan Tian.
    
    * **Yang Qi**: Animating, stimulating, and linear, it begins as electrical energy flowing through the nervous system. Guided by the Yin field, Yang Qi is directed into the lower Dan Tian, effectively "recharging the body's battery."
    
    This method of cultivating and mastering Yin and Yang Qi forms the foundation of classical alchemical arts. True Dan Tian development is neither imaginary nor based on vague visualization techniques—it is an exact, systematic inner science requiring disciplined practice to grasp.`
  },
  principles: {
    title: "Three Key Principles",
    chinese: "三個關鍵原則",
    description: "Core concepts for Dan Tian cultivation",
    sections: [
      {
        title: "Yi Shou Dan Tian",
        chinese: "意守丹田",
        description: "Guard the Mind within the Dan Tian",
        content: `To guide Qi towards the lower Dan Tian, focus your awareness on the lower abdomen. Precision is not necessary; simply bring your attention to the lower abdominal cavity, allowing the Qi to move naturally. Avoid intentionally leading the Qi, as this mental effort causes the fragile Yang Qi to disperse. Instead, let your mind sink gently to the abdomen, allowing the Yang Qi to follow naturally.

        While moving your awareness, thoughts may arise. This is why the mind must be guarded ("shou"). Avoid overthinking, as it disrupts and depletes Yang Qi. Instead, maintain stillness and stability, sealing off the senses and keeping the mind calm.`,
        icon: Compass
      },
      {
        title: "Qi Chen Dan Tian",
        chinese: "氣沉丹田",
        description: "Submerge the Qi in the Dan Tian",
        content: `Yang Qi should then be submerged within the Yin Qi field of the lower Dan Tian. This process is represented in the Yi Jing by the hexagrams Ji Ji (既濟) and Wei Ji (未濟):

        Ji Ji (Fire submerged in Water): Represents the successful integration of Yang Qi into the Yin Qi field, symbolizing completion.
        
        Wei Ji (Fire and Water not yet united): Indicates the need for further refinement, as the Yang Qi has not yet merged with Yin.
        
        The use of Fire and Water (instead of pure Yang and Yin) highlights how acquired patterns of thought distort Qi. The integration of Yang within Yin rectifies this imbalance.`,
        icon: Flame
      },
      {
        title: "Dan Tian Xi Qi",
        chinese: "丹田吸氣",
        description: "The Dan Tian Inhales the Qi",
        content: `Before Yang Qi can be submerged in the Yin Qi field, it must be drawn into the lower Dan Tian. While awareness can guide Qi toward the abdominal cavity, the body often resists storing Yang Qi at first, leading to leakage. This challenge reflects the body's natural hesitance to hold onto Qi.

        The term Xi (吸) means "to inhale" or "to suck." It describes how Yin Qi draws Yang Qi inward, similar to magnetic attraction. To facilitate this process, develop the Yin qualities of the lower Dan Tian. Strengthening Yin allows it to "inhale" Yang Qi into its core.
        
        An alternative phrase, Dan Tian Hu Xi (丹田呼吸), meaning "Dan Tian breathing," is sometimes used. However, this is often misunderstood as referring to physical expansion or contraction. Instead, it describes the interaction where Yin Qi pulls in and stores Yang Qi—a principle often described as "immersing Fire in Water" in Daoist classics.`,
        icon: Wind
      }
    ]
  },
  progression: {
    title: "The Path of Cultivation",
    chinese: "修煉之道",
    description: "The systematic progression of Nei Gong practice",
    content: `The process of Nei Gong unfolds systematically. Qi Gong and Dao Yin exercises are practiced to develop and strengthen the body. Once a solid foundation is established, Nei Gong is used to awaken and cultivate the energetic system. These practices serve as a platform to guide the practitioner's mind toward union with Dao (道).

    Our philosophy is one of using the system as a tool and nothing more; a way to establish the causes required for a practitioner to go deep inside and find the truth of what the ancient Eastern wisdom traditions were pointing at.
    
    The progression typically follows these stages:
    
    1. **Physical Cultivation** - Building strength, flexibility and structural alignment through Qi Gong practices.
    
    2. **Energy Awakening** - Opening channels and developing awareness of subtle energies through breath and attention.
    
    3. **Dan Tian Development** - Establishing the energetic core in the lower abdomen using the three key principles.
    
    4. **Energy Circulation** - Learning to direct and harmonize energy through the body's meridian systems.
    
    5. **Internal Alchemy** - Refining energy into increasingly subtle forms for spiritual development.
    
    Each stage builds upon the previous one, creating a holistic system that addresses the body, energy, and mind in a balanced, integrated way. The practices at Harmony Gate are structured to guide practitioners through this progression while respecting each individual's unique constitution and pace of development.`
  }
};

function NeiGongStudy() {
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
    const section = neiGongContent[activeSection];

    if (!section.sections) {
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
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-jade-500/10 rounded-lg">
                    <subsection.icon className="w-5 h-5 text-jade-500" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gold-500">{subsection.title}</CardTitle>
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
            </CardHeader>
            
            {activeSubsection === index && (
              <CardContent>
                <div className="pt-2 text-stone-300 space-y-4">
                  {subsection.content.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="leading-relaxed">{paragraph}</p>
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
      case 'lowerDantian':
        return Battery;
      case 'principles':
        return Flame;
      case 'progression':
        return Zap;
      default:
        return Book;
    }
  };

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">內功研究</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Nei Gong Study
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Exploring the ancient art of internal cultivation and its systematic approach
            to transforming body, energy, and mind.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="space-y-4 sticky top-20">
              {Object.entries(neiGongContent).map(([key, section]) => {
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
            
            {/* Practice Philosophy Note */}
            <div className="mt-12 bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-8 border border-gold-500/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-serif text-gold-500 mb-4">A Tool for Transformation</h3>
                  <p className="text-stone-300 italic">
                    "Our philosophy is one of using the system as a tool and nothing more; a way to establish 
                    the causes required for a practitioner to go deep inside and find the truth of what the 
                    ancient Eastern wisdom traditions were pointing at."
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

export default NeiGongStudy;