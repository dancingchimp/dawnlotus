// src/pages/Practice.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PracticeCard from '../components/practice/PracticeCard';

// Practice categories with their Chinese names
const practiceCategories = [
  { id: 'all', name: 'All Practices', chinese: '所有修練' },
  { id: 'daoist-yoga', name: 'Daoist Yoga', chinese: '道瑜伽' },
  { id: 'qigong', name: 'Qigong', chinese: '氣功' },
  { id: 'meditation', name: 'Meditation', chinese: '靜坐' },
  { id: 'theory', name: 'Theory', chinese: '理論' }
];

// Sample practice data (reusing the data from the original Practice.jsx)
const practiceSamples = [
  {
    id: 'foundation-sequence',
    title: 'Foundation Sequence',
    chinese: '基礎序列',
    category: 'daoist-yoga',
    level: 'Beginner',
    duration: '20 min',
    description: 'Essential postures that open the body\'s meridian system while building strength and flexibility.',
    image: '/api/placeholder/400/225',
    isLocked: false
  },
  {
    id: 'standing-meditation',
    title: 'Standing Meditation',
    chinese: '站樁功',
    category: 'qigong',
    level: 'Beginner',
    duration: '15 min',
    description: 'Zhan Zhuang practice for developing root, structural alignment, and energy awareness.',
    image: '/api/placeholder/400/225',
    isLocked: false
  },
  {
    id: 'morning-energy',
    title: 'Morning Energy Cultivation',
    chinese: '晨間能量培養',
    category: 'daoist-yoga',
    level: 'Intermediate',
    duration: '25 min',
    description: 'Start your day with this sequence designed to awaken and circulate energy through all meridians.',
    image: '/api/placeholder/400/225',
    isLocked: true
  },
  {
    id: 'lower-dantian',
    title: 'Lower Dantian Activation',
    chinese: '下丹田激活',
    category: 'meditation',
    level: 'Beginner',
    duration: '15 min',
    description: 'Learn to sense and activate your body\'s foundation energy center.',
    image: '/api/placeholder/400/225',
    isLocked: false
  },
  {
    id: 'meridian-theory',
    title: 'Meridian System Essentials',
    chinese: '經絡系統基礎',
    category: 'theory',
    level: 'Beginner',
    duration: '30 min',
    description: 'Understanding the body\'s energy pathways and their relationship to physical practice.',
    image: '/api/placeholder/400/225',
    isLocked: false
  },
  {
    id: 'five-elements',
    title: 'Five Elements Flow',
    chinese: '五行流動',
    category: 'daoist-yoga',
    level: 'Intermediate',
    duration: '40 min',
    description: 'A complete practice that cycles through movements representing Water, Wood, Fire, Earth, and Metal.',
    image: '/api/placeholder/400/225',
    isLocked: true
  },
  {
    id: 'eight-brocades',
    title: 'Eight Pieces of Brocade',
    chinese: '八段錦',
    category: 'qigong',
    level: 'Beginner',
    duration: '20 min',
    description: 'Traditional Qigong sequence to strengthen the body and cultivate vital energy.',
    image: '/api/placeholder/400/225',
    isLocked: false
  },
  {
    id: 'inner-smile',
    title: 'Inner Smile Meditation',
    chinese: '內觀微笑',
    category: 'meditation',
    level: 'Beginner',
    duration: '10 min',
    description: 'Gentle meditation practice that promotes healing and positive energy circulation.',
    image: '/api/placeholder/400/225',
    isLocked: false
  },
  {
    id: 'advanced-flow',
    title: 'Advanced Meridian Flow',
    chinese: '進階經絡流動',
    category: 'daoist-yoga',
    level: 'Advanced',
    duration: '50 min',
    description: 'A comprehensive practice working with all major meridian pathways and energy gates.',
    image: '/api/placeholder/400/225',
    isLocked: true
  },
];

function Practice() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPractices, setFilteredPractices] = useState([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Initialize reveal animation state
  const [revealActive, setRevealActive] = useState(false);

  useEffect(() => {
    // Filter practices based on category and search term
    const filtered = practiceSamples.filter(practice => {
      const matchesCategory = selectedCategory === 'all' || practice.category === selectedCategory;
      const matchesSearch = practice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            practice.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    setFilteredPractices(filtered);
    
    // Activate reveal animations
    setTimeout(() => {
      setRevealActive(true);
    }, 100);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="section-elegant bg-stone-900">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">修練庫</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6 text-gradient-gold">
            Practice Library
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore our collection of Daoist practices, ranging from foundational 
            techniques to advanced transformational methods.
          </p>
        </div>

        {/* Search and Category Filters */}
        <div className="mb-12 reveal reveal-delay-1">
          <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10 backdrop-blur-elegant">
            <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
              {/* Category Tabs */}
              <div className="flex flex-wrap gap-2 justify-center">
                {practiceCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full transition-all duration-500 ${
                      selectedCategory === category.id
                        ? 'bg-jade-500/20 text-jade-400 border border-jade-500/50 shadow-md shadow-jade-900/20'
                        : 'text-stone-400 hover:text-jade-400 border border-transparent hover:border-jade-500/20'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              
              {/* Search Box */}
              <div className={`relative w-full md:w-64 transition-all duration-300 ${
                isSearchFocused ? 'md:w-72' : 'md:w-64'
              }`}>
                <input
                  type="text"
                  placeholder="Search practices..."
                  className="w-full bg-stone-800/70 border border-stone-700 text-stone-300 rounded-full px-4 py-2
                           focus:outline-none focus:border-jade-500/50 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 absolute right-3 top-2.5 transition-colors duration-300 ${
                    isSearchFocused ? 'text-jade-500' : 'text-stone-400'
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Practice Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPractices.map((practice, index) => (
            <div 
              key={practice.id} 
              className={`reveal ${index % 3 === 0 ? '' : index % 3 === 1 ? 'reveal-delay-1' : 'reveal-delay-2'} ${
                revealActive ? 'active' : ''
              }`}
            >
              <PracticeCard practice={practice} />
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredPractices.length === 0 && (
          <div className="text-center py-16 reveal">
            <p className="text-stone-400 mb-4">No practices found matching your filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-jade-500 hover:text-jade-400 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
        
        {/* Subscription Prompt */}
        <div className="mt-16 bg-gradient-to-r from-jade-500/10 to-gold-500/10 rounded-xl p-8 border border-gold-500/20 reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-serif text-gradient-gold mb-2">Unlock the Full Experience</h3>
              <p className="text-stone-300 mb-4">
                Subscribe to gain access to our complete library of premium content, including advanced sequences, 
                in-depth theory, and exclusive weekly releases.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/subscription"
                  className="btn-gold px-6 py-3 inline-flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                  View Subscription Plans
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-float">
              <svg className="w-32 h-32 text-jade-500/30" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M50,2 A48,48 0 0,1 50,98 A24,24 0 0,1 50,50 A24,24 0 0,0 50,2" fill="currentColor" />
                <circle cx="50" cy="26" r="6" fill="#DAA520" />
                <circle cx="50" cy="74" r="6" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-jade-500/5 rounded-full blur-3xl animate-float opacity-40 z-0" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl animate-float opacity-40 z-0" 
             style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}

export default Practice;