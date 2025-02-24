// src/components/library/VideoLibrary.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Search, Filter, Lock, Clock, BarChart, Tag, Play } from 'lucide-react';

// Mock data for our video library
const mockLibraryContent = [
  // Free content
  {
    id: 'intro1',
    title: 'Introduction to Daoist Yoga',
    description: 'Learn the fundamental principles that bridge Western yoga and Daoist practice.',
    category: 'Theory',
    focus: ['Foundation', 'Principles'],
    duration: '15 min',
    level: 'Beginner',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Chen',
    subscription: 'free',
    releaseDate: null
  },
  {
    id: 'breath1',
    title: 'Foundation Breath Work',
    description: 'Essential breathing techniques to develop energy awareness.',
    category: 'Qigong',
    focus: ['Breathing', 'Energy Awareness'],
    duration: '12 min',
    level: 'Beginner',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Chen',
    subscription: 'free',
    releaseDate: null
  },
  
  // Monthly subscription content
  {
    id: 'morning1',
    title: 'Morning Energy Cultivation',
    description: 'Start your day with this energizing sequence that opens the meridians.',
    category: 'Daoist Yoga',
    focus: ['Energy', 'Morning Practice'],
    duration: '25 min',
    level: 'Intermediate',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Liu',
    subscription: 'monthly',
    releaseDate: null
  },
  {
    id: 'five-elements1',
    title: 'Five Elements Theory',
    description: 'Understand the five phases of energy transformation.',
    category: 'Theory',
    focus: ['Five Elements', 'Energy Cycles'],
    duration: '30 min',
    level: 'Intermediate',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Chen',
    subscription: 'monthly',
    releaseDate: null
  },
  {
    id: 'meditation1',
    title: 'Lower Dantian Meditation',
    description: 'Focus on your body's foundation center of energy.',
    category: 'Meditation',
    focus: ['Dantian', 'Energy Centers'],
    duration: '20 min',
    level: 'Beginner',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Liu',
    subscription: 'monthly',
    releaseDate: null
  },
  
  // Annual subscription content - already released
  {
    id: 'meridian1',
    title: 'Advanced Meridian Flow',
    description: 'A complete practice working with all major meridian pathways.',
    category: 'Daoist Yoga',
    focus: ['Meridians', 'Flow'],
    duration: '45 min',
    level: 'Advanced',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Chen',
    subscription: 'annual',
    releaseDate: '2025-01-10'
  },
  {
    id: 'inner-alchemy1',
    title: 'Introduction to Inner Alchemy',
    description: 'Begin the journey of energy refinement and spiritual transformation.',
    category: 'Theory',
    focus: ['Inner Alchemy', 'Transformation'],
    duration: '35 min',
    level: 'Advanced',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Liu',
    subscription: 'annual',
    releaseDate: '2025-01-17'
  },
  
  // Annual subscription - upcoming releases
  {
    id: 'jade-gate1',
    title: 'Jade Gate Opening Sequence',
    description: 'Open the body's energy gates with this specialized sequence.',
    category: 'Qigong',
    focus: ['Energy Gates', 'Opening'],
    duration: '40 min',
    level: 'Intermediate',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Chen',
    subscription: 'annual',
    releaseDate: '2025-03-01'
  },
  {
    id: 'inner-alchemy2',
    title: 'Inner Alchemy Meditation',
    description: 'Advanced meditation practices for spiritual development.',
    category: 'Meditation',
    focus: ['Inner Alchemy', 'Spiritual Development'],
    duration: '30 min',
    level: 'Advanced',
    thumbnailUrl: '/api/placeholder/320/180',
    instructor: 'Master Liu',
    subscription: 'annual',
    releaseDate: '2025-03-08'
  }
];

// Categories for filtering
const categories = ['All', 'Daoist Yoga', 'Qigong', 'Meditation', 'Theory'];
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
const focusAreas = ['All', 'Breathing', 'Energy Awareness', 'Dantian', 'Meridians', 
                     'Five Elements', 'Inner Alchemy', 'Energy Gates', 'Flow', 
                     'Morning Practice', 'Transformation', 'Spiritual Development'];

function VideoLibrary() {
  const { currentUser, canAccessContent, SUBSCRIPTION_TYPES } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedFocus, setSelectedFocus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const [filteredContent, setFilteredContent] = useState([]);

  useEffect(() => {
    // Apply filters
    const filterContent = () => {
      return mockLibraryContent.filter(content => {
        // Search filter
        const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             content.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             content.instructor.toLowerCase().includes(searchTerm.toLowerCase());
        
        // Category filter
        const matchesCategory = selectedCategory === 'All' || content.category === selectedCategory;
        
        // Level filter
        const matchesLevel = selectedLevel === 'All' || content.level === selectedLevel;
        
        // Focus filter
        const matchesFocus = selectedFocus === 'All' || content.focus.includes(selectedFocus);
        
        return matchesSearch && matchesCategory && matchesLevel && matchesFocus;
      });
    };
    
    setFilteredContent(filterContent());
  }, [searchTerm, selectedCategory, selectedLevel, selectedFocus]);

  const formatReleaseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const isContentLocked = (content) => {
    return !canAccessContent(content.subscription, content.releaseDate);
  };

  const isUpcoming = (content) => {
    if (!content.releaseDate) return false;
    
    const now = new Date();
    const releaseDate = new Date(content.releaseDate);
    return releaseDate > now;
  };

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">修練庫</h2>
          <h1 className="text-4xl font-serif text-stone-100 mb-6">Practice Library</h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore our collection of Daoist practices, ranging from foundational
            techniques to advanced transformational methods.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-12">
          <div className="bg-stone-800/50 rounded-xl p-4 border border-jade-500/10">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-stone-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search practices..."
                  className="bg-stone-700/50 text-stone-100 rounded-lg py-2 pl-10 pr-4 w-full
                           border border-stone-600 focus:outline-none focus:border-jade-500/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              {/* Filter Toggle Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="bg-stone-700/50 text-stone-300 hover:text-jade-400 rounded-lg 
                         px-4 py-2 flex items-center gap-2 transition-colors duration-300
                         border border-stone-600"
              >
                <Filter className="h-5 w-5" />
                Filters
              </button>
            </div>

            {/* Expandable Filters */}
            {showFilters && (
              <div className="mt-4 grid md:grid-cols-3 gap-4 pt-4 border-t border-stone-700">
                {/* Category Filter */}
                <div>
                  <label className="block text-stone-400 text-sm mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-stone-700/50 text-stone-100 rounded-lg py-2 px-3 w-full
                             border border-stone-600 focus:outline-none focus:border-jade-500/50"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                {/* Level Filter */}
                <div>
                  <label className="block text-stone-400 text-sm mb-2">Level</label>
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="bg-stone-700/50 text-stone-100 rounded-lg py-2 px-3 w-full
                             border border-stone-600 focus:outline-none focus:border-jade-500/50"
                  >
                    {levels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
                
                {/* Focus Area Filter */}
                <div>
                  <label className="block text-stone-400 text-sm mb-2">Focus Area</label>
                  <select
                    value={selectedFocus}
                    onChange={(e) => setSelectedFocus(e.target.value)}
                    className="bg-stone-700/50 text-stone-100 rounded-lg py-2 px-3 w-full
                             border border-stone-600 focus:outline-none focus:border-jade-500/50"
                  >
                    {focusAreas.map(focus => (
                      <option key={focus} value={focus}>{focus}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(content => (
            <Card 
              key={content.id}
              className={`bg-stone-800/50 border-jade-500/10 hover:border-jade-500/30 
                       transition-all duration-300 ${isContentLocked(content) ? 'opacity-75' : ''}`}
            >
              <div className="relative">
                <img 
                  src={content.thumbnailUrl} 
                  alt={content.title}
                  className={`w-full h-40 object-cover rounded-t-lg ${isUpcoming(content) ? 'filter grayscale' : ''}`}
                />
                
                {/* Duration Badge */}
                <div className="absolute top-2 right-2 bg-stone-900/80 text-stone-300 text-xs 
                              px-2 py-1 rounded-full flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {content.duration}
                </div>
                
                {/* Level Badge */}
                <div className="absolute top-2 left-2 bg-stone-900/80 text-xs 
                              px-2 py-1 rounded-full flex items-center gap-1"
                    style={{
                      color: content.level === 'Beginner' ? '#9EC2B5' : 
                             content.level === 'Intermediate' ? '#F4CF62' : '#E57373'
                    }}
                >
                  <BarChart className="w-3 h-3" />
                  {content.level}
                </div>
                
                {/* Lock Overlay for Locked Content */}
                {isContentLocked(content) && (
                  <div className="absolute inset-0 bg-stone-900/70 flex flex-col items-center justify-center">
                    <Lock className="w-8 h-8 text-gold-500 mb-2" />
                    {content.subscription === 'monthly' ? (
                      <span className="text-gold-400 text-sm font-medium">Monthly Subscription</span>
                    ) : content.subscription === 'annual' ? (
                      <span className="text-gold-400 text-sm font-medium">Annual Subscription</span>
                    ) : null}
                  </div>
                )}
                
                {/* Upcoming Release Overlay */}
                {isUpcoming(content) && !isContentLocked(content) && (
                  <div className="absolute inset-0 bg-stone-900/70 flex flex-col items-center justify-center">
                    <div className="bg-gold-500/20 text-gold-500 text-sm px-3 py-1 rounded-full">
                      Coming {formatReleaseDate(content.releaseDate)}
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-4">
                {/* Category Badge */}
                <div className="flex items-center gap-1 mb-2">
                  <Tag className="w-3 h-3 text-jade-500" />
                  <span className="text-xs text-jade-400">{content.category}</span>
                </div>
                
                <h3 className="text-lg font-serif text-gold-500 mb-1">{content.title}</h3>
                <p className="text-stone-400 text-sm mb-4">{content.description}</p>
                
                {/* Focus Areas */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {content.focus.map((area, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-jade-500/10 text-jade-400 px-2 py-1 rounded-full"
                    >
                      {area}
                    </span>
                  ))}
                </div>
                
                {/* Instructor */}
                <p className="text-stone-500 text-xs mb-4">Instructor: {content.instructor}</p>
                
                {/* Action Button */}
                {!isContentLocked(content) && !isUpcoming(content) ? (
                  <Link 
                    to={`/practice/${content.id}`}
                    className="flex items-center gap-2 text-jade-400 hover:text-jade-300 
                             transition-colors text-sm"
                  >
                    <Play className="w-4 h-4" />
                    Begin Practice
                  </Link>
                ) : !isUpcoming(content) ? (
                  <Link 
                    to={`/subscription/${content.subscription}`}
                    className="flex items-center gap-2 text-gold-500 hover:text-gold-400 
                             transition-colors text-sm"
                  >
                    <Lock className="w-4 h-4" />
                    Unlock Content
                  </Link>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredContent.length === 0 && (
          <div className="text-center py-16">
            <p className="text-stone-400 mb-4">No practices found matching your filters.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSelectedFocus('All');
              }}
              className="text-jade-500 hover:text-jade-400 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>