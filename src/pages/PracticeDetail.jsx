// src/pages/PracticeDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Sample practice data (same as in Practice.jsx)
const practiceSamples = [
  {
    id: 'foundation-sequence',
    title: 'Foundation Sequence',
    chinese: '基礎序列',
    category: 'daoist-yoga',
    level: 'Beginner',
    duration: '20 min',
    description: 'Essential postures that open the body\'s meridian system while building strength and flexibility.',
    longDescription: `This foundation sequence forms the basis of our Daoist Yoga practice. It integrates traditional yoga postures with principles of Qigong to create a practice that both opens the physical body and builds energy awareness.

    The sequence follows the natural flow of energy through the body's meridian system, beginning with postures that activate the lower body and gradually moving upward through the torso, arms, and head.
    
    Each movement is coordinated with breath, allowing for deeper opening and greater energy cultivation. As you practice, focus on maintaining a relaxed but engaged quality in each posture.`,
    benefits: [
      'Increases flexibility along meridian pathways',
      'Builds core strength and stability',
      'Develops body awareness and proper alignment',
      'Cultivates smooth, even breathing',
      'Establishes a foundation for energy cultivation'
    ],
    instructor: 'Master Chen',
    videoUrl: 'https://example.com/videos/foundation-sequence.mp4', // This would be a real URL in production
    image: '/api/placeholder/1200/675',
    isLocked: false,
    notes: [
      {
        timeCode: 120, // 2 minutes
        note: 'Notice how each movement follows the breath - inhale to expand, exhale to contract'
      },
      {
        timeCode: 300, // 5 minutes
        note: 'Focus on maintaining a relaxed quality in the shoulders and neck'
      },
      {
        timeCode: 480, // 8 minutes
        note: 'Feel the connection between the hands and the heart center'
      }
    ],
    relatedPractices: ['standing-meditation', 'lower-dantian', 'meridian-theory']
  },
  {
    id: 'standing-meditation',
    title: 'Standing Meditation',
    chinese: '站樁功',
    category: 'qigong',
    level: 'Beginner',
    duration: '15 min',
    description: 'Zhan Zhuang practice for developing root, structural alignment, and energy awareness.',
    longDescription: `Standing meditation, or Zhan Zhuang (站樁), is one of the most fundamental practices in Qigong. Often called "Standing like a tree," this practice develops internal strength, structural alignment, and deep relaxation simultaneously.

    In this guided session, you'll learn the proper stance and alignment principles, breathing techniques, and mental focus that make this simple practice so powerful. While the external form appears motionless, internally there is rich activity as you cultivate awareness of subtle energy movements.
    
    This practice serves as an excellent foundation for all other Qigong and Daoist Yoga practices, as it builds your capacity to sense and direct energy throughout the body.`,
    benefits: [
      'Develops strong energetic root and connection to earth',
      'Corrects structural alignment issues',
      'Builds internal strength without tension',
      'Increases energy sensitivity and awareness',
      'Calms the mind and nervous system'
    ],
    instructor: 'Master Liu',
    videoUrl: 'https://example.com/videos/standing-meditation.mp4',
    image: '/api/placeholder/1200/675',
    isLocked: false,
    notes: [
      {
        timeCode: 90, // 1.5 minutes
        note: 'Focus on relaxing the shoulders while maintaining structure'
      },
      {
        timeCode: 210, // 3.5 minutes
        note: 'Breathe naturally, allowing the breath to deepen on its own'
      },
      {
        timeCode: 450, // 7.5 minutes
        note: 'Notice any sensations of warmth, tingling, or pulsing in the hands'
      }
    ],
    relatedPractices: ['foundation-sequence', 'eight-brocades', 'inner-smile']
  }
  // Other practice data would be defined here
];

function PracticeDetail() {
  const { practiceId } = useParams();
  const [practice, setPractice] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotes, setShowNotes] = useState(true);

  // In a real app, you would fetch the practice data from an API
  useEffect(() => {
    // Find the practice in our sample data
    const foundPractice = practiceSamples.find(p => p.id === practiceId);
    setPractice(foundPractice);
  }, [practiceId]);

  if (!practice) {
    return (
      <div className="min-h-screen bg-stone-900 py-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <svg className="w-12 h-12 text-jade-500 animate-spin mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="text-stone-300">Loading practice...</p>
        </div>
      </div>
    );
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, this would control the video playback
  };

  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            to="/practice"
            className="inline-flex items-center text-stone-400 hover:text-jade-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Practices
          </Link>
        </div>

        {/* Practice Header */}
        <div className="mb-8">
          <div className="flex items-center mb-2">
            <span className="px-3 py-1 bg-jade-500/20 text-jade-400 rounded-full text-sm mr-3">
              {practice.category === 'daoist-yoga' ? 'Daoist Yoga' : 
               practice.category === 'qigong' ? 'Qigong' : 
               practice.category === 'meditation' ? 'Meditation' : 'Theory'}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              practice.level === 'Beginner' ? 'bg-jade-500/20 text-jade-400' :
              practice.level === 'Intermediate' ? 'bg-gold-500/20 text-gold-400' :
              'bg-amber-500/20 text-amber-400'
            }`}>
              {practice.level}
            </span>
          </div>
          <h1 className="text-4xl font-serif text-gold-500 mb-2">{practice.title}</h1>
          <p className="text-stone-400 font-chinese text-xl mb-4">{practice.chinese}</p>
          <div className="flex items-center text-stone-300 mb-6">
            <span className="flex items-center mr-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-jade-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {practice.duration}
            </span>
            <span className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-jade-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {practice.instructor}
            </span>
          </div>
        </div>

        {/* Video Player */}
        <div className="mb-12">
          <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
            <img 
              src={practice.image} 
              alt={practice.title} 
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay */}
            <div 
              className="absolute inset-0 flex items-center justify-center cursor-pointer bg-stone-900/50"
              onClick={togglePlay}
            >
              <div className="p-4 bg-jade-500/20 rounded-full">
                {isPlaying ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-jade-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-jade-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
              </div>
            </div>

            {/* Practice Notes Toggle */}
            <div className="absolute top-4 right-4">
              <button
                onClick={() => setShowNotes(!showNotes)}
                className={`p-2 rounded-full transition-colors ${
                  showNotes ? 'bg-jade-500/20 text-jade-400' : 'bg-stone-800/50 text-stone-400'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>

            {/* Practice Notes */}
            {showNotes && (
              <div className="absolute left-4 right-20 bottom-4">
                <div className="bg-stone-900/80 border-l-2 border-jade-500 rounded p-3 backdrop-blur-sm">
                  <p className="text-stone-300">
                    <span className="text-jade-400 font-medium">Practice Note:</span> {practice.notes[0].note}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Left Column: Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif text-gold-500 mb-4">About This Practice</h2>
            <div className="text-stone-300 space-y-4 mb-8">
              {practice.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h2 className="text-2xl font-serif text-gold-500 mb-4">Benefits</h2>
            <ul className="text-stone-300 space-y-2 mb-8">
              {practice.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-jade-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Practice Info & Related */}
          <div>
            <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10 mb-8">
              <h3 className="text-xl font-serif text-gold-500 mb-4">Practice Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-stone-400 text-sm mb-1">Category</h4>
                  <p className="text-stone-300">
                    {practice.category === 'daoist-yoga' ? 'Daoist Yoga' : 
                     practice.category === 'qigong' ? 'Qigong' : 
                     practice.category === 'meditation' ? 'Meditation' : 'Theory'}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-stone-400 text-sm mb-1">Level</h4>
                  <p className="text-stone-300">{practice.level}</p>
                </div>
                
                <div>
                  <h4 className="text-stone-400 text-sm mb-1">Duration</h4>
                  <p className="text-stone-300">{practice.duration}</p>
                </div>
                
                <div>
                  <h4 className="text-stone-400 text-sm mb-1">Instructor</h4>
                  <p className="text-stone-300">{practice.instructor}</p>
                </div>
              </div>
            </div>

            {/* Related Practices */}
            {practice.relatedPractices && practice.relatedPractices.length > 0 && (
              <div>
                <h3 className="text-xl font-serif text-gold-500 mb-4">Related Practices</h3>
                <div className="space-y-4">
                  {practice.relatedPractices.map(relatedId => {
                    const related = practiceSamples.find(p => p.id === relatedId);
                    if (!related) return null;
                    
                    return (
                      <Link 
                        key={relatedId}
                        to={`/practice/${relatedId}`}
                        className="flex items-center gap-4 p-4 bg-stone-800/30 rounded-lg 
                                border border-jade-500/10 hover:border-jade-500/30 
                                transition-all duration-300"
                      >
                        <img 
                          src="/api/placeholder/80/45" 
                          alt={related.title} 
                          className="w-20 h-12 object-cover rounded"
                        />
                        <div>
                          <h4 className="text-gold-500">{related.title}</h4>
                          <p className="text-stone-400 text-sm">{related.duration} • {related.level}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Practice Navigation */}
        <div className="border-t border-stone-800 pt-8 flex justify-between">
          <div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center text-jade-500 hover:text-jade-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              Back to Top
            </button>
          </div>
          <div>
            <Link 
              to="/practice"
              className="inline-flex items-center text-stone-400 hover:text-jade-400 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              All Practices
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PracticeDetail;