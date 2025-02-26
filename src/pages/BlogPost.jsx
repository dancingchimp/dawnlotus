// src/pages/BlogPost.jsx - Individual blog post page

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark, ThumbsUp, Facebook, Twitter, Linkedin } from 'lucide-react';

// This would be replaced with your actual blog data source
import { blogPosts, categories } from '../data/blogData';

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    // Find the current post
    const currentPost = blogPosts.find(p => p.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Find related posts in the same category
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.slug !== slug)
        .slice(0, 3);
      setRelatedPosts(related);

      // Scroll to top
      window.scrollTo(0, 0);
    } else {
      // Redirect to 404 if post not found
      navigate('/not-found');
    }
  }, [slug, navigate]);

  // Share functionality
  const shareUrl = window.location.href;
  const shareTitle = post?.title || 'Harmony Gate Article';

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-stone-900 flex items-center justify-center">
        <div className="animate-pulse flex space-x-4">
          <div className="h-12 w-12 bg-stone-700 rounded-full"></div>
          <div className="space-y-4">
            <div className="h-4 bg-stone-700 rounded w-36"></div>
            <div className="h-4 bg-stone-700 rounded w-80"></div>
          </div>
        </div>
      </div>
    );
  }

  const categoryName = categories.find(c => c.value === post.category)?.label || '';

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back link */}
        <div className="mb-8">
          <Link 
            to="/blog" 
            className="flex items-center gap-2 text-stone-400 hover:text-gold-500 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Articles
          </Link>
        </div>

        {/* Article Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-jade-500 text-sm font-medium bg-jade-500/10 px-3 py-1 rounded-full">
              {categoryName}
            </span>
            <span className="text-stone-400 text-sm flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="text-stone-400 text-sm flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readingTime} min read
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gold-500 mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            {post.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="aspect-video bg-stone-700 rounded-xl overflow-hidden mb-12 relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>

        {/* Article Footer */}
        <div className="border-t border-stone-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags && post.tags.map(tag => (
              <Link 
                key={tag}
                to={`/blog?tag=${tag}`}
                className="text-stone-400 text-sm bg-stone-800 px-3 py-1 rounded-full hover:bg-jade-500/10 hover:text-jade-500 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          {/* Share & Save Buttons */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="flex items-center gap-2 text-stone-400 hover:text-gold-500 transition-colors"
              >
                <Share2 className="h-5 w-5" />
                <span className="text-sm">Share</span>
              </button>

              {/* Share Menu Dropdown */}
              {showShareMenu && (
                <div className="absolute right-0 bottom-10 bg-stone-800 rounded-lg shadow-xl p-3 w-36 z-10">
                  <a 
                    href={shareLinks.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 text-stone-300 hover:bg-stone-700 rounded"
                  >
                    <Facebook className="h-4 w-4" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a 
                    href={shareLinks.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 text-stone-300 hover:bg-stone-700 rounded"
                  >
                    <Twitter className="h-4 w-4" />
                    <span className="text-sm">Twitter</span>
                  </a>
                  <a 
                    href={shareLinks.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-2 text-stone-300 hover:bg-stone-700 rounded"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="text-sm">LinkedIn</span>
                  </a>
                </div>
              )}
            </div>

            <button className="flex items-center gap-2 text-stone-400 hover:text-gold-500 transition-colors">
              <Bookmark className="h-5 w-5" />
              <span className="text-sm">Save</span>
            </button>

            <button className="flex items-center gap-2 text-stone-400 hover:text-gold-500 transition-colors">
              <ThumbsUp className="h-5 w-5" />
              <span className="text-sm">Helpful</span>
            </button>
          </div>
        </div>

        {/* Author Box */}
        <div className="mt-12 bg-stone-800/40 border border-jade-500/10 rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-stone-700">
              <img 
                src="/images/sovereign-harmony.jpg" 
                alt="Sovereign Harmony" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-gold-500 font-serif text-xl mb-1">Sovereign Harmony</h3>
              <p className="text-stone-300 text-sm">
                The Sovereign Harmony approach maintains the integrity of transmission while allowing the 
                practices to speak directly to each individual's experience. The true teacher is the practice itself.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-serif text-gold-500 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map(related => (
                <div 
                  key={related.slug}
                  className="bg-stone-800/50 rounded-lg overflow-hidden border border-stone-700 hover:border-jade-500/30 transition-all duration-300"
                >
                  <div className="aspect-video bg-stone-700 relative overflow-hidden">
                    <img 
                      src={related.image} 
                      alt={related.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-serif text-gold-500 mb-2 line-clamp-2">{related.title}</h4>
                    <p className="text-stone-400 text-sm mb-4 line-clamp-3">{related.excerpt}</p>
                    <Link
                      to={`/blog/${related.slug}`}
                      className="text-jade-500 text-sm font-medium hover:text-jade-400 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comment Section - Optional */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif text-gold-500 mb-6">Discussion</h3>
          <div className="bg-stone-800/40 border border-stone-700 rounded-xl p-6">
            <form className="mb-8">
              <textarea
                className="w-full bg-stone-700 border border-stone-600 rounded-lg p-4 text-stone-100 focus:ring-jade-500 focus:border-jade-500 focus:outline-none min-h-24 mb-4"
                placeholder="Share your thoughts or questions..."
              ></textarea>
              <button 
                type="submit"
                className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Post Comment
              </button>
            </form>
            <div className="text-center text-stone-400">
              <p>Be the first to start the conversation.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;