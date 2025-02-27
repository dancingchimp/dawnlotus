// src/pages/BlogPost.jsx
import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';

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
    author: {
      name: 'Li Mingxuan',
      title: 'Daoist Yoga Teacher',
      avatar: '/api/placeholder/80/80'
    },
    content: `
      <h2>The Nature of Qi in Everyday Life</h2>
      
      <p>Energy, or Qi (氣), is not merely an abstract concept in Daoist philosophy—it is a tangible reality that influences every aspect of our lives. From the moment we wake up to when we fall asleep, Qi flows through our bodies, affecting our physical health, emotional well-being, and mental clarity.</p>
      
      <p>The ancient Daoists observed these energy patterns and developed sophisticated systems to understand and work with them. Today, we can integrate this wisdom into our modern lives in practical ways.</p>
      
      <h3>Signs of Qi Flow in Your Daily Experience</h3>
      
      <p>Qi manifests in various ways throughout your day:</p>
      
      <ul>
        <li><strong>Morning Energy:</strong> The quality of your waking energy reveals much about your overall Qi balance. Clear, refreshed waking indicates good energy circulation, while grogginess may suggest stagnation.</li>
        <li><strong>Energy Fluctuations:</strong> Notice the natural rise and fall of your energy throughout the day. These cycles follow both your body's rhythms and the broader patterns of nature.</li>
        <li><strong>Digestive Function:</strong> The efficient transformation of food into energy is a direct reflection of good Qi function in the Spleen and Stomach systems.</li>
        <li><strong>Emotional Stability:</strong> Smooth-flowing Qi creates emotional equilibrium, while blocked energy often manifests as irritability, anxiety, or lethargy.</li>
      </ul>
      
      <h2>Practical Techniques for Sensing Qi</h2>
      
      <p>Developing sensitivity to energy flow is the first step toward consciously working with it. Try these simple practices:</p>
      
      <h3>Hand Awareness Exercise</h3>
      
      <p>Begin by rubbing your palms together vigorously for 30 seconds, creating warmth through friction. Slowly separate your hands about two inches apart, keeping your attention focused on the space between them. Notice any sensations—tingling, pulsing, magnetic resistance, or warmth. These are common perceptions of Qi.</p>
      
      <p>With practice, you'll be able to sense these energetic qualities without the preliminary rubbing, developing a natural awareness of the energy field that surrounds and permeates your body.</p>
      
      <h3>Breath and Energy Connection</h3>
      
      <p>Sit comfortably with your spine erect but relaxed. Begin by simply observing your natural breath without attempting to change it. After a few minutes, imagine that your breath is carrying energy:</p>
      
      <ul>
        <li>As you inhale, visualize fresh, vital Qi entering through your nose and flowing down to your lower abdomen (lower Dantian).</li>
        <li>As you exhale, sense this energy circulating throughout your body, nourishing every cell.</li>
        <li>Continue this practice for 5-10 minutes, maintaining gentle focus without strain.</li>
      </ul>
      
      <h2>Daily Qi Awareness</h2>
      
      <p>Once you've begun developing sensitivity to energy, you can integrate this awareness into daily activities:</p>
      
      <h3>Mindful Movement</h3>
      
      <p>Whether practicing formal exercises like Daoist Yoga or simply walking to work, bring attention to the sensation of energy moving with your physical body. Notice how different movements create different patterns of Qi flow.</p>
      
      <h3>Energetic Eating</h3>
      
      <p>Before meals, take a moment to sense the quality of energy in your food. After eating, observe how different foods affect your energy levels. This practice naturally guides you toward choices that support your individual energy balance.</p>
      
      <h3>Environmental Qi</h3>
      
      <p>Different environments contain different qualities of Qi. Pay attention to how you feel in various settings—natural environments, your workplace, your home. This awareness can help you arrange your spaces and choose locations that support balanced energy.</p>
      
      <h2>Conclusion: The Living Experience of Energy</h2>
      
      <p>Understanding Qi isn't just theoretical knowledge—it's a lived experience that transforms your relationship with yourself and the world around you. Through consistent practice and observation, you'll develop an intuitive sense of energy that guides your choices and enhances your practice.</p>
      
      <p>Remember that sensing energy is a natural human capacity that simply needs to be reawakened. Be patient with yourself as you develop this skill, approaching it with curiosity rather than expectation.</p>
      
      <p>As your awareness grows, you'll discover that the ancient Daoist understanding of Qi provides profound insights into modern living, offering a bridge between timeless wisdom and contemporary life.</p>
    `
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
    author: {
      name: 'Wei Cheng',
      title: 'Daoist Philosophy Teacher',
      avatar: '/api/placeholder/80/80'
    },
    content: `
      <h2>The Fundamental Principle of Harmony</h2>
      
      <p>At the heart of Daoist philosophy lies the concept of Yin and Yang (陰陽)—complementary forces that exist in dynamic relationship with each other. This principle is not merely philosophical abstraction but a practical framework for understanding and navigating life's complexities.</p>
      
      <p>In traditional Daoist thought, the interplay of these forces creates the rhythm of existence itself. Everything contains both Yin and Yang aspects in varying proportions, constantly shifting and transforming. Nothing is absolutely Yin or absolutely Yang—rather, these qualities exist relative to each other.</p>
      
      <h3>Understanding the Qualities of Yin and Yang</h3>
      
      <p>While many are familiar with the basic concept, truly applying Yin-Yang theory requires a deeper understanding of their qualities:</p>
      
      <ul>
        <li><strong>Yin Qualities:</strong> Receptive, cool, quiet, introspective, contracting, nurturing, stable, substantial</li>
        <li><strong>Yang Qualities:</strong> Active, warm, expressive, outward-focused, expanding, dynamic, changing, ethereal</li>
      </ul>
      
      <p>It's important to remember that these qualities are not fixed moral categories—neither Yin nor Yang is inherently "better." Both are essential, and balance emerges through their appropriate relationship.</p>
      
      <h2>Recognizing Imbalance in Modern Life</h2>
      
      <p>Our contemporary world often emphasizes Yang qualities: constant activity, productivity, growth, and outward achievement. This cultural bias can lead to personal and collective imbalance, manifesting as:</p>
      
      <ul>
        <li>Burnout from excessive activity without adequate rest</li>
        <li>Anxiety from constant stimulation without sufficient reflection</li>
        <li>Environmental degradation from expansion without conservation</li>
        <li>Disconnection from overemphasis on individuality without community</li>
      </ul>
      
      <p>Similarly, an overemphasis on Yin qualities can lead to stagnation, isolation, and inability to manifest change in the world. True harmony requires appropriate balance.</p>
      
      <h2>Practical Applications of Yin-Yang Balance</h2>
      
      <h3>In Daily Rhythms</h3>
      
      <p>Consider your daily schedule through the lens of Yin and Yang:</p>
      
      <ul>
        <li>Balance periods of activity (Yang) with periods of rest (Yin)</li>
        <li>Alternate focused work (Yang) with receptive reflection (Yin)</li>
        <li>Complement social engagement (Yang) with solitary introspection (Yin)</li>
      </ul>
      
      <p>Rather than rigid scheduling, this approach invites awareness of natural rhythms and responsive adjustments.</p>
      
      <h3>In Physical Practice</h3>
      
      <p>Daoist Yoga exemplifies Yin-Yang balance through:</p>
      
      <ul>
        <li>Combining dynamic movement (Yang) with meditative stillness (Yin)</li>
        <li>Balancing strength-building (Yang) with flexibility development (Yin)</li>
        <li>Harmonizing active postures with receptive breath awareness</li>
      </ul>
      
      <p>Each practice session becomes a microcosm of balanced living, training our bodies and minds to recognize and maintain harmony.</p>
      
      <h3>In Emotional Life</h3>
      
      <p>Emotional wisdom through Yin-Yang understanding might include:</p>
      
      <ul>
        <li>Acknowledging that all emotions have their appropriate place and time</li>
        <li>Recognizing when to express feelings (Yang) and when to process internally (Yin)</li>
        <li>Understanding that emotional balance isn't about eliminating certain feelings but finding their proper proportion</li>
      </ul>
      
      <h2>The Principle of Cyclic Balance</h2>
      
      <p>Perhaps the most profound insight of Yin-Yang philosophy is that balance isn't static—it's cyclic and dynamic. In natural systems, Yin gradually transforms into Yang, which then returns to Yin, creating a perpetual cycle of renewal.</p>
      
      <p>This principle teaches us that life's challenges often arise not from external circumstances but from resistance to natural cycles of change. When we understand these patterns, we can flow with them rather than against them.</p>
      
      <h2>Conclusion: Living the Middle Way</h2>
      
      <p>The Daoist concept of balance doesn't suggest a tepid middle ground that avoids extremes. Rather, it invites us to experience the full spectrum of life while understanding how apparently opposite qualities complement and generate each other.</p>
      
      <p>By cultivating awareness of Yin and Yang in daily experience, we develop an intuitive sense of when to advance and when to retreat, when to act and when to observe. This is the essence of living in harmony with the Dao—not rigid adherence to rules but responsive awareness of natural balance.</p>
      
      <p>As you move through your day, consider asking: "What quality of energy is needed here? More Yin or more Yang?" This simple practice can transform your relationship with yourself and the world around you, bringing greater harmony to all aspects of life.</p>
    `
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
    categories: ['Wellbeing', 'Philosophy'],
    author: {
      name: 'Sarah Chen',
      title: 'Meditation Instructor',
      avatar: '/api/placeholder/80/80'
    },
    content: `<p>Content for "A Daoist Approach to Stress" will be displayed here.</p>`
  },
  {
    id: 4,
    slug: 'meridian-theory-yoga',
    title: 'Meridian Theory in Daoist Yoga',
    chinese: '道瑜伽中的經絡理論',
    excerpt: 'How traditional Chinese medicine's understanding of energy pathways informs and enhances yoga practice.',
    date: '2024-08-30',
    readTime: '12 min',
    coverImage: '/api/placeholder/800/450',
    categories: ['Theory', 'Practice'],
    author: {
      name: 'Michael Liu',
      title: 'TCM Practitioner & Yoga Teacher',
      avatar: '/api/placeholder/80/80'
    },
    content: `<p>Content for "Meridian Theory in Daoist Yoga" will be displayed here.</p>`
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
    categories: ['Theory', 'Energy Cultivation'],
    author: {
      name: 'Huang Meifeng',
      title: 'Daoist Cultivation Expert',
      avatar: '/api/placeholder/80/80'
    },
    content: `<p>Content for "The Three Treasures" will be displayed here.</p>`
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
    categories: ['Practice', 'Seasonal Wisdom'],
    author: {
      name: 'Jordan Wu',
      title: 'Seasonal Practice Guide',
      avatar: '/api/placeholder/80/80'
    },
    content: `<p>Content for "Adapting Practice to the Seasons" will be displayed here.</p>`
  }
];

// Get related posts based on categories
const getRelatedPosts = (currentPost, allPosts) => {
  const currentCategories = currentPost.categories;
  
  return allPosts
    .filter(post => 
      post.id !== currentPost.id && 
      post.categories.some(category => currentCategories.includes(category))
    )
    .sort((a, b) => {
      // Count matching categories
      const aMatches = a.categories.filter(category => currentCategories.includes(category)).length;
      const bMatches = b.categories.filter(category => currentCategories.includes(category)).length;
      
      // Sort by number of matching categories
      return bMatches - aMatches;
    })
    .slice(0, 3); // Get top 3 related posts
};

function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find the post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If post not found, show error or redirect
  if (!post) {
    return (
      <div className="min-h-screen bg-stone-900 py-24 px-4 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-gold-500 mb-4">Article Not Found</h2>
          <p className="text-stone-300 mb-6">
            The article you're looking for does not exist or has been moved.
          </p>
          <button 
            onClick={() => navigate('/blog')}
            className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-6 py-3 
                   rounded-lg transition-all duration-300"
          >
            Return to Articles
          </button>
        </div>
      </div>
    );
  }
  
  // Get related posts
  const relatedPosts = getRelatedPosts(post, blogPosts);

  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-stone-400 hover:text-jade-500 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Articles
        </Link>
        
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((category) => (
              <span 
                key={category}
                className="px-3 py-1 text-xs rounded-full bg-jade-500/10 text-jade-400"
              >
                {category}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl font-serif text-gold-500 mb-2">
            {post.title}
          </h1>
          <p className="text-stone-400 font-chinese text-lg mb-6">
            {post.chinese}
          </p>
          
          <div className="flex items-center justify-between border-t border-b border-stone-700 py-4 mb-8">
            <div className="flex items-center gap-4">
              <img 
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-stone-200">{post.author.name}</p>
                <p className="text-stone-400 text-sm">{post.author.title}</p>
              </div>
            </div>
            
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
        </div>
        
        {/* Featured Image */}
        <div className="mb-10">
          <img 
            src={post.coverImage}
            alt={post.title}
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>
        
        {/* Article Content */}
        <div className="prose prose-invert prose-jade max-w-none mb-16">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        {/* Share Links */}
        <div className="flex items-center gap-4 border-t border-stone-700 pt-8 mb-16">
          <span className="text-stone-400">Share this article:</span>
          <button className="p-2 rounded-full bg-stone-800 text-stone-300 hover:bg-jade-500/20 hover:text-jade-500 transition-colors">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
        
        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-2xl font-serif text-gold-500 mb-6">Related Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="bg-stone-800/30 rounded-xl overflow-hidden border border-jade-500/10 
                           hover:border-jade-500/30 transition-all duration-300 group"
                >
                  <img 
                    src={relatedPost.coverImage}
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="p-4">
                    <h4 className="text-md font-serif text-gold-500 mb-2 group-hover:text-gold-400 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <div className="flex items-center text-stone-400 text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relatedPost.readTime} read
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BlogPost;