// src/pages/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">關於和門</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            About Harmony Gate
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            A modern approach to ancient wisdom, integrating traditional Daoist principles 
            with contemporary practice methods.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-serif text-gold-500 mb-4">Our Philosophy</h2>
            <div className="space-y-4 text-stone-300">
              <p>
                Harmony Gate (和門 Hé Mén) represents the threshold where opposing forces 
                meet and merge. Our name reflects both the journey and the destination: 
                the achievement of harmony through conscious practice and transformation.
              </p>
              <p>
                We believe that the path of personal cultivation transcends cultural boundaries 
                and historical contexts. Drawing from the rich tradition of Daoist energy 
                practices while integrating elements of modern yoga, we've created a system 
                that speaks to contemporary practitioners while honoring ancient wisdom.
              </p>
              <p>
                At the core of our approach is the understanding that physical postures 
                serve as gateways to energy cultivation. By working with the body's natural 
                structure and energy pathways, we create the conditions for transformation 
                on all levels—physical, energetic, and spiritual.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-radial from-jade-500/5 to-transparent opacity-50" />
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-jade-500/20 to-transparent 
                            rounded-full blur-2xl transform -rotate-12 animate-pulse-slow" />
              <div className="absolute inset-10 bg-gradient-to-tr from-gold-500/10 to-transparent 
                            rounded-full blur-xl transform rotate-45 animate-float" />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-64 h-64 text-jade-500">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" />
                  <circle cx="50" cy="26" r="6" fill="#DAA520" />
                  <circle cx="50" cy="74" r="6" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-gold-500 mb-8 text-center">Core Principles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-gold-500 mb-1">Integration</h3>
                <p className="text-stone-400 font-chinese">整合</p>
              </div>
              <p className="text-stone-300">
                Harmonizing Eastern energy principles with Western physical practices to create 
                a comprehensive system that addresses all aspects of the human experience.
              </p>
            </div>
            <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-gold-500 mb-1">Balance</h3>
                <p className="text-stone-400 font-chinese">平衡</p>
              </div>
              <p className="text-stone-300">
                Cultivating equilibrium between opposing forces: stillness and movement, 
                structure and freedom, effort and ease, yang and yin.
              </p>
            </div>
            <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-gold-500 mb-1">Transformation</h3>
                <p className="text-stone-400 font-chinese">轉化</p>
              </div>
              <p className="text-stone-300">
                Facilitating profound change through consistent practice, guiding practitioners 
                from physical awareness to energetic sensitivity to spiritual insight.
              </p>
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-gold-500 mb-6">Our Approach to Practice</h2>
          <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-serif text-gold-500 mb-4">Daoist Yoga</h3>
                <p className="text-stone-300 mb-4">
                  Our signature approach integrates traditional yoga asanas with Daoist energy principles. 
                  Physical postures are sequenced to work with the body's meridian system, creating a 
                  practice that is both physically beneficial and energetically transformative.
                </p>
                <p className="text-stone-300">
                  By applying key Daoist concepts like yin-yang balance, five element theory, and 
                  three dantian cultivation to physical practice, we create a unique system that bridges 
                  Eastern and Western approaches to body-mind development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif text-gold-500 mb-4">Progressive Development</h3>
                <p className="text-stone-300 mb-4">
                  Our curriculum follows a clear developmental path, beginning with foundational 
                  practices that establish proper structure and basic energy awareness. As practitioners 
                  progress, they learn increasingly subtle techniques for working with qi and 
                  ultimately transforming consciousness.
                </p>
                <p className="text-stone-300">
                  Each practice builds upon previous ones, creating a systematic approach to 
                  development that honors both the physical realities of the body and the energetic 
                  principles of traditional Daoist cultivation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Teacher/Instruction Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-gold-500 mb-8 text-center">Our Approach to Instruction</h2>
          
          <div className="bg-stone-800/30 p-8 rounded-xl border border-jade-500/10 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
                  <div className="absolute inset-0 bg-gradient-radial from-jade-500/20 to-transparent opacity-70 rounded-full" />
                  <svg className="w-full h-full text-jade-500 relative" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" />
                    <circle cx="50" cy="26" r="6" fill="#DAA520" />
                    <circle cx="50" cy="74" r="6" fill="currentColor" />
                  </svg>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-xl font-serif text-gold-500 mb-4">Bridging Tradition and Innovation</h3>
                <div className="space-y-4 text-stone-300">
                  <p>
                    Harmony Gate represents a modern approach to ancient wisdom that transcends traditional identities and cultural boundaries. Our curriculum is founded on authentic lineage teachings from a genuine Daoist alchemy tradition, ensuring that the practices maintain their energetic integrity and transformative potential.
                  </p>
                  <p>
                    Rather than centering our teaching around personality or individual teachers, we've developed an innovative approach: all instructional videos are guided by a custom AI instructor, created specifically to transmit these practices with precision and clarity. This allows practitioners to focus purely on the teachings rather than the teacher.
                  </p>
                  <p>
                    This fusion of authentic lineage knowledge with cutting-edge delivery represents our commitment to making these profound practices accessible to modern practitioners while maintaining their essential depth. The AI instructor embodies the principle of "formlessness" found in Daoist philosophy—presenting the teaching without the distractions of ego or personality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-gold-500">Authentic Lineage Foundation</h3>
                <p className="text-stone-400 font-chinese">真實傳承基礎</p>
              </div>
              <p className="text-stone-300 mb-4">
                The curriculum and practices you'll find at Harmony Gate are developed in consultation with genuine lineage holders who have dedicated decades to the internal cultivation arts of the Daoist tradition.
              </p>
              <p className="text-stone-300">
                Every practice, principle, and teaching has been carefully curated to ensure energetic coherence and transformative potential while being adapted for contemporary practitioners. This ensures that while the presentation is modern, the essence remains authentic.
              </p>
            </div>
            
            <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all duration-300">
              <div className="mb-4">
                <h3 className="text-xl font-serif text-gold-500">AI-Guided Instruction</h3>
                <p className="text-stone-400 font-chinese">人工智能引導教學</p>
              </div>
              <p className="text-stone-300 mb-4">
                Our custom AI instructor represents a revolutionary approach to teaching energetic practices. Created with deep knowledge of both physical alignment principles and subtle energy dynamics, the AI provides consistent, precise guidance without variation or personal idiosyncrasies.
              </p>
              <p className="text-stone-300">
                This approach creates a unique learning environment where you can develop your own relationship with the practices directly, without the intermediary of a human teacher's personality. Many practitioners report that this allows for a more direct and personal experience of the energy work.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-stone-400 italic">
              "The best teacher is one who eventually makes themselves unnecessary.
              Our approach accelerates this process by focusing purely on the transmission of the practice itself."
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-serif text-gold-500 mb-6">Begin Your Journey</h2>
          <p className="text-stone-300 max-w-3xl mx-auto mb-8">
            Ready to experience the transformative practices of Harmony Gate?
            Explore our library of Daoist Yoga practices, meditation techniques, and theoretical foundations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/practice"
              className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-8 py-4 
                       rounded-xl text-lg font-semibold transition-all duration-300"
            >
              Explore Practices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;