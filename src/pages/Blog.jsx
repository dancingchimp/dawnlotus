// src/pages/Blog.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Tag, Search } from 'lucide-react';

// Sample blog posts data - in a real application, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    slug: 'understanding-qi-flow',
    title: 'Understanding Qi Flow in Daily Life',
    chinese: '理解日常生活中的氣流',
    excerpt: 'Discover how energy flows through your body and affects your daily experience, with practical observations and techniques.',
    date: '2024-10-12',
    readTime: '8 min',
    coverImage: '/api/placeholder/800/450',
    categories: ['Energy Cultivation', 'Daily Practice'],
    featured: true
  },
  {
    id: 2,
    slug: 'yin-yang-balance',
    title: 'The Art of Yin-Yang Balance',
    chinese: '陰陽平衡的藝術',
    excerpt: 'Exploring the ancient concept of complementary forces and how to apply this wisdom to create harmony in modern life.',
    date: '2024-09-28',
    readTime: '6 min',
    coverImage: '/api/placeholder/800/450',
    categories: ['Philosophy', 'Balance'],
    featured: true
  },
  {
    id: 3,
    slug: 'daoist-approach-stress',
    title: 'A Daoist Approach to Stress',
    chinese: '道家減壓方法',
    excerpt: 'Ancient wisdom offers powerful insights into managing modern stress through principles of flow, acceptance, and non-action.',
    date: '2024-09-15',
    readTime: '10 min',
    coverImage: '/api/placeholder/800/450',
    categories: ['Wellbeing', 'Philosophy']
  },
  {
    id: 4,
    slug: 'meridian-theory-yoga',
    title: 'Meridian Theory in Daoist Yoga',
    chinese: '道瑜伽中的經絡理論',
    excerpt: 'How traditional Chinese medicine\'s understanding of energy pathways informs and enhances yoga practice.',
    date: '2024-08-30',
    readTime: '12 min',
    coverImage: '/api/placeholder/800/450',
    categories: ['Theory', 'Practice']
  },
  {
    id: 5,
    slug: 'three-treasures',
    title: 'The Three Treasures: Jing, Qi, and Shen',
    chinese: '三寶：精、氣、神',
    excerpt: 'An exploration of the foundational energies in Daoist practice and how to cultivate them for health and spiritual development.',
    date: '2024-08-15',
    readTime: '9 min',
    coverImage: '/api/placeholder/800/450',
    categories: ['Theory', 'Energy Cultivation']
  },
  {
    id: 6,
    slug: 'seasonal-practice',
    title: 'Adapting Practice to the Seasons',
    chinese: '順應季節的修練',
    excerpt: 'How to align your Daoist Yoga practice with natural cycles for maximum benefit and harmony.',
    date: '2024-07-22',
    readTime: '7 min',
    coverImage: '/api/placeholder/800/450',
    categories: ['Practice', 'Seasonal Wisdom']
  }
];

function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  // Extract unique categories from blog posts
  const categories = [...new Set(blogPosts.flatMap(post => post.categories))];
  
  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.categories.includes(selectedCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">智慧分享</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Wisdom & Insights
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore Daoist philosophy, practice insights, and the integration of ancient wisdom
            with modern life through our collection of articles.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 justify-between mb-12">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-stone-400" />
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500 focus:border-transparent w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-stone-400">Filter:</span>
              <select
                className="px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500 focus:border-transparent"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Topics</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <Link
            to="/blog/new"
            className="px-4 py-2 bg-jade-500 text-stone-100 rounded-lg hover:bg-jade-600 transition-colors flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Article
          </Link>
        </div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-serif text-gold-500 mb-6">Featured Insights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Link 
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="bg-stone-800/30 rounded-xl overflow-hidden border border-jade-500/10 
                           hover:border-jade-500/30 transition-all duration-300 group"
                >
                  <img 
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((category) => (
                        <span 
                          key={category}
                          className="px-3 py-1 text-xs rounded-full bg-jade-500/10 text-jade-400"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-serif text-gold-500 mb-1 group-hover:text-gold-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-stone-400 font-chinese text-sm mb-3">{post.chinese}</p>
                    <p className="text-stone-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-stone-400 text-sm">
                      <span className="flex items-center gap-1 mr-4">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} read
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Regular Posts */}
        <div>
          <h2 className="text-2xl font-serif text-gold-500 mb-6">All Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link 
                key={post.id}
                to={`/blog/${post.slug}`}
                className="bg-stone-800/30 rounded-xl overflow-hidden border border-jade-500/10 
                         hover:border-jade-500/30 transition-all duration-300 group"
              >
                <img 
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.categories.map((category) => (
                      <span 
                        key={category}
                        className="px-2 py-0.5 text-xs rounded-full bg-jade-500/10 text-jade-400"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-serif text-gold-500 mb-1 group-hover:text-gold-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-stone-400 font-chinese text-sm mb-3">{post.chinese}</p>
                  <p className="text-stone-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center text-stone-400 text-xs">
                    <span className="flex items-center gap-1 mr-3">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime} read
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl text-stone-300 mb-2">No articles found</h3>
            <p className="text-stone-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;