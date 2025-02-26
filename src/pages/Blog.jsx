// src/pages/Blog.jsx - Main blog listing page

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Tag, Calendar, ArrowRight } from 'lucide-react';

// This would be replaced with your actual blog data from a CMS or local data source
import { blogPosts, categories } from '../data/blogData';

function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter posts based on category and search term
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">智慧分享</h2>
          <h1 className="text-4xl md:text-5xl font-serif text-stone-100 mb-6">
            Wisdom Teachings
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Explore the principles and practices of Daoist Yoga through our collection of 
            articles, insights, and practical guides.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between">
          {/* Search */}
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-stone-500" />
            </div>
            <input
              type="text"
              className="bg-stone-800 border border-stone-700 text-stone-100 rounded-lg py-3 pl-10 pr-4 w-full focus:ring-jade-500 focus:border-jade-500 focus:outline-none"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === 'all' 
                  ? 'bg-jade-500 text-stone-100' 
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
              onClick={() => setSelectedCategory('all')}
            >
              All Topics
            </button>
            {categories.map(category => (
              <button
                key={category.value}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value 
                    ? 'bg-jade-500 text-stone-100' 
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post (if exists) */}
        {blogPosts.filter(post => post.featured).length > 0 && (
          <div className="mb-16">
            {blogPosts.filter(post => post.featured).map(post => (
              <div 
                key={post.slug}
                className="bg-gradient-to-r from-stone-800/80 to-stone-800/40 rounded-xl overflow-hidden border border-jade-500/10 hover:border-jade-500/30 transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="aspect-video bg-stone-700 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-jade-500 text-sm font-medium bg-jade-500/10 px-3 py-1 rounded-full">
                        {categories.find(c => c.value === post.category)?.label}
                      </span>
                      <span className="text-stone-400 text-sm flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-serif text-gold-500 mb-4">{post.title}</h2>
                    <p className="text-stone-300 mb-6">{post.excerpt}</p>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center gap-2 text-jade-500 font-medium hover:text-jade-400 transition-colors"
                    >
                      Continue Reading <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div 
              key={post.slug}
              className="bg-stone-800/50 rounded-lg overflow-hidden border border-stone-700 hover:border-jade-500/30 transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video bg-stone-700 relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-jade-500 text-xs font-medium bg-jade-500/10 px-2 py-1 rounded-full">
                    {categories.find(c => c.value === post.category)?.label}
                  </span>
                  <span className="text-stone-400 text-xs flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-serif text-gold-500 mb-3">{post.title}</h3>
                <p className="text-stone-300 text-sm mb-4 flex-1">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="flex items-center gap-1 text-jade-500 text-sm font-medium hover:text-jade-400 transition-colors mt-auto"
                >
                  Read Article <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-stone-300 text-xl mb-2">No articles found</h3>
            <p className="text-stone-400">Try adjusting your search or category selection</p>
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="mt-20 bg-stone-800/30 border border-jade-500/10 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-serif text-gold-500 mb-4">Join Our Wisdom Circle</h3>
              <p className="text-stone-300 mb-4">
                Subscribe to receive our newest articles, practice resources, and event announcements 
                directly to your inbox.
              </p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  className="flex-1 bg-stone-700 border border-stone-600 text-stone-100 rounded-lg px-4 py-3 focus:ring-jade-500 focus:border-jade-500 focus:outline-none"
                  placeholder="Your email address"
                  required
                />
                <button
                  type="submit"
                  className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-stone-400 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;