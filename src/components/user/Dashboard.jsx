// src/components/user/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User, Calendar, BookOpen, Play, Lock, ArrowRight } from 'lucide-react';

// Mock data for practices
const mockUserPractices = [
  {
    id: 'practice1',
    title: 'Foundation Breath Work',
    category: 'Qigong',
    duration: '15 min',
    level: 'Beginner',
    thumbnailUrl: '/api/placeholder/320/180',
    subscription: 'free',
    releaseDate: null,
    progress: 75
  },
  {
    id: 'practice2',
    title: 'Morning Energy Cultivation',
    category: 'Daoist Yoga',
    duration: '25 min',
    level: 'Intermediate',
    thumbnailUrl: '/api/placeholder/320/180',
    subscription: 'monthly',
    releaseDate: null,
    progress: 30
  },
  {
    id: 'practice3',
    title: 'Advanced Meridian Flow',
    category: 'Daoist Yoga',
    duration: '45 min',
    level: 'Advanced',
    thumbnailUrl: '/api/placeholder/320/180',
    subscription: 'annual',
    releaseDate: '2025-01-25',
    progress: 0
  }
];

// Mock upcoming releases
const mockUpcomingReleases = [
  {
    id: 'upcoming1',
    title: 'Jade Gate Opening Sequence',
    category: 'Qigong',
    releaseDate: '2025-03-01',
    thumbnailUrl: '/api/placeholder/320/180'
  },
  {
    id: 'upcoming2',
    title: 'Inner Alchemy Meditation',
    category: 'Meditation',
    releaseDate: '2025-03-08',
    thumbnailUrl: '/api/placeholder/320/180'
  }
];

function Dashboard() {
  const { currentUser, canAccessContent, SUBSCRIPTION_TYPES } = useAuth();
  const [recentPractices, setRecentPractices] = useState([]);
  const [recommendedPractices, setRecommendedPractices] = useState([]);
  const [upcomingReleases, setUpcomingReleases] = useState([]);

  useEffect(() => {
    // In a real app, these would be API calls based on user data
    // For now, we'll use our mock data
    setRecentPractices(mockUserPractices.filter(p => 
      canAccessContent(p.subscription, p.releaseDate) && p.progress > 0
    ));
    
    setRecommendedPractices(mockUserPractices.filter(p => 
      canAccessContent(p.subscription, p.releaseDate)
    ));
    
    // Only show upcoming releases for annual subscribers
    if (currentUser?.subscription === SUBSCRIPTION_TYPES.ANNUAL) {
      setUpcomingReleases(mockUpcomingReleases);
    } else {
      setUpcomingReleases([]);
    }
  }, [currentUser, canAccessContent, SUBSCRIPTION_TYPES]);

  const formatReleaseDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  // Show upgrade prompt based on subscription level
  const renderUpgradePrompt = () => {
    if (!currentUser || currentUser.subscription === SUBSCRIPTION_TYPES.FREE) {
      return (
        <Card className="bg-gradient-to-r from-jade-500/20 to-gold-500/20 border-gold-500/30 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-gold-500 mb-2">Unlock the Full Experience</h3>
            <p className="text-stone-300 mb-4">
              Subscribe to access premium practices, detailed theory, and weekly new content releases.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/subscription/monthly"
                className="bg-jade-500 hover:bg-jade-600 text-stone-100 px-4 py-2 
                         rounded-lg text-sm transition-all duration-300"
              >
                Monthly Plan
              </Link>
              <Link 
                to="/subscription/annual"
                className="bg-gold-500 hover:bg-gold-600 text-stone-900 px-4 py-2 
                         rounded-lg text-sm transition-all duration-300"
              >
                Annual Plan
              </Link>
            </div>
          </CardContent>
        </Card>
      );
    } else if (currentUser.subscription === SUBSCRIPTION_TYPES.MONTHLY) {
      return (
        <Card className="bg-gradient-to-r from-jade-500/10 to-gold-500/10 border-gold-500/20 mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-serif text-gold-500 mb-2">Unlock Weekly Content</h3>
            <p className="text-stone-300 mb-4">
              Upgrade to our annual plan to access exclusive weekly content releases and advanced practices.
            </p>
            <Link 
              to="/subscription/annual"
              className="bg-gold-500 hover:bg-gold-600 text-stone-900 px-4 py-2 
                       rounded-lg text-sm transition-all duration-300 inline-block"
            >
              Upgrade to Annual
            </Link>
          </CardContent>
        </Card>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-stone-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header with user info */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 bg-jade-500/10 rounded-full">
              <User className="w-8 h-8 text-jade-500" />
            </div>
            <div>
              <h1 className="text-3xl font-serif text-stone-100">{`Welcome, ${currentUser?.name || 'Practitioner'}`}</h1>
              <p className="text-stone-400">
                {currentUser?.subscription === SUBSCRIPTION_TYPES.FREE 
                  ? 'Free Member' 
                  : currentUser?.subscription === SUBSCRIPTION_TYPES.MONTHLY 
                    ? 'Monthly Subscriber' 
                    : 'Annual Member'}
              </p>
            </div>
          </div>
        </div>

        {/* Upgrade prompt if needed */}
        {renderUpgradePrompt()}

        {/* Continue Practice Section */}
        {recentPractices.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-gold-500 mb-6">Continue Your Practice</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPractices.map(practice => (
                <Card 
                  key={practice.id}
                  className="bg-stone-800/50 border-jade-500/10 hover:border-jade-500/30 
                           transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={practice.thumbnailUrl} 
                      alt={practice.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-stone-900/70 px-3 py-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-stone-300">{practice.duration}</span>
                        <span className="text-xs text-jade-400">{practice.level}</span>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-stone-700">
                      <div 
                        className="h-full bg-jade-500"
                        style={{ width: `${practice.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-serif text-gold-500">{practice.title}</h3>
                    <p className="text-stone-400 text-sm mb-4">{practice.category}</p>
                    <Link 
                      to={`/practice/${practice.id}`}
                      className="flex items-center gap-2 text-jade-400 hover:text-jade-300 
                               transition-colors text-sm"
                    >
                      <Play className="w-4 h-4" />
                      Continue Practice
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Recommended Practices */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif text-gold-500 mb-6">Recommended Practices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendedPractices.map(practice => (
              <Card 
                key={practice.id}
                className="bg-stone-800/50 border-jade-500/10 hover:border-jade-500/30 
                         transition-all duration-300"
              >
                <div className="relative">
                  <img 
                    src={practice.thumbnailUrl} 
                    alt={practice.title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-stone-900/70 px-3 py-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-stone-300">{practice.duration}</span>
                      <span className="text-xs text-jade-400">{practice.level}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-serif text-gold-500">{practice.title}</h3>
                  <p className="text-stone-400 text-sm mb-4">{practice.category}</p>
                  <Link 
                    to={`/practice/${practice.id}`}
                    className="flex items-center gap-2 text-jade-400 hover:text-jade-300 
                             transition-colors text-sm"
                  >
                    <Play className="w-4 h-4" />
                    Begin Practice
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link 
              to="/library"
              className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 
                       transition-colors"
            >
              View Full Library
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Upcoming Releases - Only for Annual Members */}
        {upcomingReleases.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-serif text-gold-500 mb-6">Upcoming Releases</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingReleases.map(release => (
                <Card 
                  key={release.id}
                  className="bg-stone-800/30 border-gold-500/10 
                           transition-all duration-300"
                >
                  <div className="relative">
                    <img 
                      src={release.thumbnailUrl} 
                      alt={release.title}
                      className="w-full h-40 object-cover rounded-t-lg filter grayscale opacity-70"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="p-3 bg-stone-900/80 rounded-full">
                        <Calendar className="w-6 h-6 text-gold-500" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="bg-gold-500/10 text-gold-500 text-xs px-2 py-1 rounded-full 
                                  inline-block mb-2">
                      Releasing {formatReleaseDate(release.releaseDate)}
                    </div>
                    <h3 className="text-lg font-serif text-gold-500">{release.title}</h3>
                    <p className="text-stone-400 text-sm">{release.category}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;