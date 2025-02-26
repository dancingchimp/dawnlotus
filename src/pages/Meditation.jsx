// src/pages/Meditation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Meditation() {
  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">靜坐</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Meditation
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            The cultivation of stillness and insight for transformation and liberation.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Introduction */}
          <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-500/10 reveal">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif text-gold-500 mb-6">The Path of Seclusion</h2>
              <div className="text-stone-300 space-y-4">
                <p>
                  Meditation in its true essence is an act of seclusion, not a social activity. 
                  It is a progressive path of withdrawing from the constant movement and stress 
                  of ordinary experience into deeper levels of stillness and clarity.
                </p>
                <p>
                  This seclusion begins with the body—stilling physical movement and finding a 
                  stable posture. It extends to the senses—reducing the input from multiple sense 
                  gates and focusing on a single object. Finally, it leads to seclusion from mental 
                  defilements that cause suffering for ourselves and those around us.
                </p>
                <p>
                  At Harmony Gate, we teach meditation as a systematic practice that cultivates 
                  both tranquility (shamatha) and clear seeing (vipassana), eventually leading to 
                  insight into the nature of reality itself.
                </p>
              </div>
            </div>
          </div>

          {/* Mind Training Section */}
          <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-500/10 reveal reveal-delay-1">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-serif text-gold-500 mb-6">Mind Training: The Essential Foundation</h2>
              <div className="text-stone-300 space-y-4">
                <p>
                  Before one can truly experience meditation proper—absorption into jhanic states—a period of mental training is required. Just as a musician must learn scales before playing a concerto, a meditator must develop fundamental mind skills before deep meditation can arise.
                </p>
                <p>
                  This preliminary training is not meditation itself, but rather the cultivation of the qualities that make meditation possible. These skills include:
                </p>
                <ul className="space-y-3 pl-6 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <div>
                      <span className="text-gold-400 font-medium">Mindfulness (Sati)</span>
                      <p className="mt-1">The ability to remain present and aware of what is happening right now, whether in the body, feelings, mind states, or mental objects. This quality prevents the mind from wandering unnoticed.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <div>
                      <span className="text-gold-400 font-medium">Sustained Attention (Vitakka)</span>
                      <p className="mt-1">The ability to place and maintain attention on a chosen object without constantly losing focus. This is like steadily pointing a flashlight without the beam constantly jumping to different places.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <div>
                      <span className="text-gold-400 font-medium">Letting Go (Vossagga)</span>
                      <p className="mt-1">The ability to release distractions, tension, and unhelpful mental states without becoming entangled in them. This creates mental space and lightness.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <div>
                      <span className="text-gold-400 font-medium">Energy Regulation (Viriya)</span>
                      <p className="mt-1">The skill of finding the right balance between effort and relaxation. Too much effort creates tension; too little leads to dullness. Balanced energy keeps the mind alert yet relaxed.</p>
                    </div>
                  </li>
                </ul>
                <p className="mt-4">
                  By systematically developing these mental skills through structured practice, the mind gradually becomes more capable of entering and sustaining deeper states of meditation. Without this foundation, attempts to reach absorption will typically result in either restlessness or sleepiness, as the untrained mind lacks the necessary stability and clarity.
                </p>
              </div>
            </div>
          </div>

          {/* The Three Phases */}
          <div className="reveal reveal-delay-2">
            <h2 className="text-2xl font-serif text-gold-500 mb-8 text-center">The Three Phases of Practice</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Mental Development */}
              <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-serif text-gold-500 mb-1">Mental Development</h3>
                  <p className="text-stone-400 font-chinese">心靈發展</p>
                </div>
                <p className="text-stone-300 mb-4">
                  The preliminary practices that prepare the mind for deeper meditation. These include 
                  learning to be present, developing the ability to control thoughts, and cultivating 
                  wholesome mental states.
                </p>
                <p className="text-stone-300">
                  Without this foundation, attempts at deeper meditation often lead to frustration, 
                  as the untrained mind lacks the stability to remain with a single object.
                </p>
              </div>

              {/* Shamatha */}
              <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-serif text-gold-500 mb-1">Tranquil Abiding</h3>
                  <p className="text-stone-400 font-chinese">奢摩他</p>
                </div>
                <p className="text-stone-300 mb-4">
                  The cultivation of mental stillness by resting—not forcing—the mind on a 
                  single object. As the mind settles, the senses gradually fall away, and the 
                  awareness becomes clearer and more unified.
                </p>
                <p className="text-stone-300">
                  This practice leads to progressive stages of absorption (jhana) characterized 
                  by increasing joy, peace, and clarity as the mind becomes more unified.
                </p>
              </div>

              {/* Vipassana */}
              <div className="bg-stone-800/30 p-6 rounded-xl border border-jade-500/10 hover:border-jade-500/30 transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-serif text-gold-500 mb-1">Clear Seeing</h3>
                  <p className="text-stone-400 font-chinese">毗婆舍那</p>
                </div>
                <p className="text-stone-300 mb-4">
                  The practice of seeing reality clearly as it is. This is not a momentary insight 
                  but an ongoing clarity of perception that recognizes the fundamental nature of 
                  all experience.
                </p>
                <p className="text-stone-300">
                  Through this practice, we directly perceive the impermanent, unsatisfactory, and 
                  selfless nature of all phenomena, leading to the freedom from suffering that comes 
                  with non-attachment.
                </p>
              </div>
            </div>
          </div>

          {/* Meditation Proper */}
          <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-500/10 reveal reveal-delay-1">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif text-gold-500 mb-6">Meditation Proper: Absorption</h2>
                <div className="text-stone-300 space-y-4">
                  <p>
                    True meditation (jhana) is absorption into the light of consciousness. It begins with focusing 
                    on a single object through one sense gate. As practice deepens, the object becomes more 
                    simple and singular, losing its edges and complexity.
                  </p>
                  <p>
                    Gradually, the sense gates fall away one by one—first sound, then sensation in the body, 
                    and so on—until only awareness of the meditation object remains. Eventually, a luminous 
                    sign (nimitta) arises as consciousness is no longer dispersed through the senses but 
                    gathered inward.
                  </p>
                  <p>
                    When awareness itself turns inward onto this sign and enters it fully, one experiences 
                    absorption (jhana)—the mind uniting with pure consciousness, separated from all sense 
                    experience.
                  </p>
                  <p>
                    This is meditation proper, and it forms the foundation for the liberating insights that 
                    lead to freedom from suffering.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-serif text-gold-500 mb-6">The Path of Rest</h2>
                <div className="text-stone-300 space-y-4">
                  <p>
                    A key insight for meditation practice is understanding the difference between 
                    concentration and rest. Meditation is not about concentrating forcefully on an 
                    object but about allowing the mind to rest naturally upon it.
                  </p>
                  <p>
                    Concentration implies effort, strain, and eventually exhaustion. Rest implies 
                    ease, natural stability, and the capacity to remain for long periods without fatigue. 
                    The mind that rests on its object is like an object gently placed on a surface rather 
                    than held tightly in a clenched hand.
                  </p>
                  <p>
                    When we learn to let the mind rest—on the breath, on a visual object, or on any other 
                    support—it naturally settles and becomes clear, just as muddy water clarifies when 
                    left undisturbed.
                  </p>
                  <p>
                    This quality of restful attention, rather than forceful concentration, is the heart 
                    of effective meditation practice.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Challenge of Stillness */}
          <div className="reveal reveal-delay-2">
            <h2 className="text-2xl font-serif text-gold-500 mb-8 text-center">The Challenge of Stillness</h2>
            <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-500/10">
              <div className="max-w-4xl mx-auto text-stone-300 space-y-4">
                <p>
                  For those serious about meditation, we recommend a simple but profound practice: sit still.
                  Not moving, not adjusting, not seeking comfort—simply remaining physically still for an 
                  extended period. This practice reveals the reality of stress (dukkha) more directly than 
                  any philosophical teaching.
                </p>
                <p>
                  When we sit completely still, we encounter pain, discomfort, and the mind's constant urge 
                  to escape these sensations. This is not a punishment but a revelation—showing us how we 
                  habitually run from discomfort through constant subtle movements, distractions, and adjustments.
                </p>
                <p>
                  By facing this reality directly—remaining still even as discomfort arises—we gain insight 
                  into our relationship with sensation. We learn that while pain may arise in the body, 
                  suffering arises when the mind reacts with aversion, craving for it to end, or the belief 
                  that "I am in pain."
                </p>
                <p>
                  This practice of physical stillness serves as a foundation for mental stillness, teaching 
                  us to remain equanimous with all experience rather than constantly seeking to escape what 
                  is unpleasant or cling to what is pleasant.
                </p>
              </div>
            </div>
          </div>

          {/* Progression Stages */}
          <div className="reveal reveal-delay-1">
            <h2 className="text-2xl font-serif text-gold-500 mb-8 text-center">Stages of Meditation Progress</h2>
            <div className="bg-stone-800/30 rounded-xl p-8 border border-jade-500/10">
              <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-stone-300">
                  Meditation development follows a natural progression of deepening stillness and clarity. 
                  Understanding these stages helps practitioners recognize their progress and navigate the path skillfully.
                </p>
                
                <div className="space-y-6">
                  {/* Stage 1 */}
                  <div className="relative pl-8 border-l-2 border-jade-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-jade-500/20 border border-jade-500"></div>
                    <h3 className="text-xl font-serif text-gold-500 mb-2">1. Initial Settling</h3>
                    <p className="text-stone-300">
                      The mind begins to settle onto the meditation object but constantly becomes 
                      distracted. Awareness of distraction develops, allowing the practitioner to notice 
                      when attention has wandered and gently return it to the object.
                    </p>
                  </div>
                  
                  {/* Stage 2 */}
                  <div className="relative pl-8 border-l-2 border-jade-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-jade-500/20 border border-jade-500"></div>
                    <h3 className="text-xl font-serif text-gold-500 mb-2">2. Sustained Attention</h3>
                    <p className="text-stone-300">
                      The mind can remain with the meditation object for longer periods. Distractions still 
                      arise but are noticed more quickly. Physical comfort increases as the body learns to 
                      settle into the meditation posture.
                    </p>
                  </div>
                  
                  {/* Stage 3 */}
                  <div className="relative pl-8 border-l-2 border-jade-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-jade-500/20 border border-jade-500"></div>
                    <h3 className="text-xl font-serif text-gold-500 mb-2">3. Subtle Awareness</h3>
                    <p className="text-stone-300">
                      Awareness becomes more refined, noticing subtle aspects of the meditation object. 
                      The mind becomes less reactive to distractions and begins to find genuine interest 
                      in the meditation object itself.
                    </p>
                  </div>
                  
                  {/* Stage 4 */}
                  <div className="relative pl-8 border-l-2 border-jade-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-jade-500/20 border border-jade-500"></div>
                    <h3 className="text-xl font-serif text-gold-500 mb-2">4. Unification</h3>
                    <p className="text-stone-300">
                      The mind begins to unify with the meditation object. Brief experiences of joy and 
                      ease arise. The boundary between observer and observed starts to soften. Awareness 
                      becomes more panoramic while remaining centered on the object.
                    </p>
                  </div>
                  
                  {/* Stage 5 */}
                  <div className="relative pl-8 border-l-2 border-jade-500/30">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-jade-500/30 border border-jade-500"></div>
                    <h3 className="text-xl font-serif text-gold-500 mb-2">5. Absorption Threshold</h3>
                    <p className="text-stone-300">
                      A significant shift occurs as the meditation object transforms into a mental sign 
                      (nimitta). This sign might appear as light, a visual pattern, or a felt sense of 
                      presence. As the mind becomes drawn to this sign, the threshold of absorption approaches.
                    </p>
                  </div>
                  
                  {/* Stage 6 */}
                  <div className="relative pl-8">
                    <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gold-500/30 border border-gold-500"></div>
                    <h3 className="text-xl font-serif text-gold-500 mb-2">6. Full Absorption</h3>
                    <p className="text-stone-300">
                      The mind fully merges with the meditation object, entering a state of absorption (jhana). 
                      Sensory input fades significantly or completely. Deep joy, tranquility, and clarity 
                      arise as the mind experiences complete unification and freedom from the five hindrances.
                    </p>
                  </div>
                </div>
                
                <p className="text-stone-300 pt-4">
                  These stages are not strictly linear, and practitioners may move between them in different 
                  meditation sessions. Regular practice with proper guidance allows for steady progress through 
                  these stages, cultivating the mental qualities that support both deeper concentration and 
                  liberating insight.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-8 border border-gold-500/20 reveal">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h2 className="text-2xl font-serif text-gold-500 mb-4">Our Approach to Teaching</h2>
                <p className="text-stone-300 mb-4">
                  At Harmony Gate, we offer a structured approach to meditation that honors both traditional 
                  wisdom and modern understanding. Our teaching emphasizes:
                </p>
                <ul className="text-stone-300 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Proper physical foundation through stable, aligned posture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Training in restful attention rather than forceful concentration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Progressive development from basic mindfulness to deeper absorption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Integration of both tranquility and insight practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-jade-500 font-bold mt-1">•</span>
                    <span>Support for navigating the challenges of regular practice</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48">
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

          {/* Practice Resources - Coming Soon */}
          <div className="text-center reveal">
            <h2 className="text-2xl font-serif text-gold-500 mb-4">Practice Resources</h2>
            <p className="text-stone-300 mb-8 max-w-3xl mx-auto">
              We are developing guided meditation practices, instructional videos, and progress tracking tools to support your meditation journey. These resources are designed to guide you through each stage of development with clarity and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link 
                to="#"
                className="bg-stone-800/50 px-6 py-3 rounded-lg border border-jade-500/20 text-stone-300"
              >
                <span className="opacity-65">Guided Practices (Coming Soon)</span>
              </Link>
              
              <Link 
                to="#"
                className="bg-stone-800/50 px-6 py-3 rounded-lg border border-jade-500/20 text-stone-300"
              >
                <span className="opacity-65">Meditation Timer (Coming Soon)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meditation;