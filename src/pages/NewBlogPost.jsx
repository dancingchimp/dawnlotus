// src/pages/NewBlogPost.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewBlogPost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    chineseTitle: '',
    excerpt: '',
    content: '',
    categories: [],
    coverImage: '/api/placeholder/800/450', // Default placeholder
  });

  const [newCategory, setNewCategory] = useState('');

  // Available categories
  const availableCategories = [
    'Philosophy', 
    'Energy Cultivation', 
    'Daily Practice', 
    'Theory', 
    'Practice', 
    'Wellbeing',
    'Balance',
    'Seasonal Wisdom'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategoryToggle = (category) => {
    setFormData(prev => {
      const updatedCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      
      return {
        ...prev,
        categories: updatedCategories
      };
    });
  };

  const addNewCategory = () => {
    if (newCategory.trim() && !availableCategories.includes(newCategory)) {
      setFormData(prev => ({
        ...prev,
        categories: [...prev.categories, newCategory]
      }));
      setNewCategory('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, this would send the data to an API
    console.log('Submitting blog post:', formData);
    
    // Simulate success and redirect
    alert('Blog post created successfully! (This is just a demo)');
    navigate('/blog');
  };

  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-3xl text-gold-500 mb-4">新文章</h2>
          <h1 className="text-4xl font-serif text-stone-100 mb-6">
            Create New Article
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto">
            Share your wisdom and insights with the Harmony Gate community.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title Fields */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gold-500 mb-2">Title (English)</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-gold-500 mb-2">Title (Chinese)</label>
              <input
                type="text"
                name="chineseTitle"
                value={formData.chineseTitle}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-gold-500 mb-2">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500 focus:border-transparent"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Categories */}
          <div>
            <label className="block text-gold-500 mb-2">Categories</label>
            <div className="flex flex-wrap gap-2 mb-4">
              {availableCategories.map(category => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryToggle(category)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    formData.categories.includes(category)
                      ? 'bg-jade-500 text-stone-900'
                      : 'bg-stone-800 text-stone-400 hover:bg-stone-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="Add new category..."
                className="w-full px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500 focus:border-transparent"
              />
              <button
                type="button"
                onClick={addNewCategory}
                className="px-4 py-2 bg-gold-500 text-stone-900 rounded-lg hover:bg-gold-600 transition-colors"
              >
                Add
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div>
            <label className="block text-gold-500 mb-2">Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-stone-800 border border-stone-700 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500 focus:border-transparent font-mono"
              rows="15"
              required
              placeholder="Write your content here... HTML formatting is supported for headings, paragraphs, lists, etc."
            ></textarea>
            <p className="text-stone-400 text-sm mt-2">
              You can use HTML tags like &lt;h2&gt;, &lt;p&gt;, &lt;ul&gt;, &lt;li&gt; for formatting.
            </p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-jade-500 text-stone-100 rounded-lg text-lg font-semibold hover:bg-jade-600 transition-colors"
            >
              Publish Article
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewBlogPost;