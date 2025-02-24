// src/components/player/VideoPlayer.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize, SkipBack, SkipForward } from 'lucide-react';

// This would be fetched from an API in a real application
const mockVideoData = {
  'intro1': {
    title: 'Introduction to Daoist Yoga',
    description: 'Learn the fundamental principles that bridge Western yoga and Daoist practice.',
    videoUrl: 'https://example.com/videos/intro1.mp4', // This would be a real URL in production
    instructor: 'Master Chen',
    notes: [
      {
        timeCode: 120, // 2 minutes
        note: 'Notice the connection between breath and movement'
      },
      {
        timeCode: 300, // 5 minutes
        note: 'Key concept: Energy follows intention'
      }
    ],
    relatedVideos: ['breath1', 'morning1'],
    transcript: `
      Welcome to the Harmony Gate introduction to Daoist Yoga. Today we'll explore the fundamental 
      principles that connect traditional yogic practices with Daoist energy cultivation methods.
      
      The integration of these systems offers a powerful approach to developing both physical 
      flexibility and internal energy awareness. Throughout this session, I'll introduce key 
      concepts that form the foundation of our practice.
      
      First, we'll discuss how the body's meridian system relates to physical postures. Then, 
      we'll explore how breath work serves as the bridge between outer form and inner cultivation.
    `
  },
  // Additional videos would be defined here
};

function VideoPlayer() {
  const { videoId } = useParams();
  const { currentUser, updateProgress, canAccessContent } = useAuth();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [activeNote, setActiveNote] = useState(null);
  const [showTranscript, setShowTranscript] = useState(false);
  
  const videoData = mockVideoData[videoId];
  
  // Check if user has access to this video
  useEffect(() => {
    // In a real app, you'd fetch the video data and check access
    // For now, we'll simulate this with our mock data
    if (!videoData) {
      navigate('/library');
      return;
    }
    
    // Check if user can access this content
    // In a real app, you'd get the subscription level required from the video data
    const hasAccess = canAccessContent('free', null); // Assuming this is free content for demo
    if (!hasAccess) {
      navigate('/subscription');
    }
  }, [videoId, navigate, canAccessContent]);
  
  // Initialize player
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const onLoadedMetadata = () => {
      setDuration(video.duration);
    };
    
    const onTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
      
      // Update user progress every 10 seconds
      if (Math.floor(video.currentTime) % 10 === 0) {
        const progressPercent = Math.floor((video.currentTime / video.duration) * 100);
        updateProgress(videoId, progressPercent);
      }
      
      // Check for notes to display
      const currentNotes = videoData.notes.filter(note => 
        Math.abs(note.timeCode - video.currentTime) < 3 // Show notes within 3 seconds of their timecode
      );
      
      if (currentNotes.length > 0 && !activeNote) {
        setActiveNote(currentNotes[0]);
        setTimeout(() => setActiveNote(null), 5000); // Hide note after 5 seconds
      }
    };
    
    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('timeupdate', onTimeUpdate);
    
    // In a real app, we would set the video source here
    // For demo purposes, we're just setting up the player without actual video
    
    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, [videoId, videoData, updateProgress, activeNote]);
  
  // Player controls
  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };
  
  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.muted = !video.muted;
    setIsMuted(!isMuted);
  };
  
  const handleSeek = (e) => {
    const video = videoRef.current;
    if (!video) return;
    
    const seekTime = (e.target.value / 100) * duration;
    video.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  
  const toggleFullscreen = () => {
    const videoContainer = document.getElementById('video-container');
    if (!videoContainer) return;
    
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoContainer.requestFullscreen();
    }
  };
  
  const skipForward = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.currentTime = Math.min(video.currentTime + 10, duration);
  };
  
  const skipBackward = () => {
    const video = videoRef.current;
    if (!video) return;
    
    video.currentTime = Math.max(video.currentTime - 10, 0);
  };
  
  // Format time in MM:SS format
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  if (!videoData) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="min-h-screen bg-stone-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <div className="mb-4">
          <Link 
            to="/library"
            className="flex items-center gap-2 text-stone-400 hover:text-jade-400 
                     transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Library
          </Link>
        </div>
        
        {/* Video Container */}
        <div 
          id="video-container"
          className="relative bg-black rounded-xl overflow-hidden mb-8"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            className="w-full aspect-video"
            // src={videoData.videoUrl} // In a real app, this would be set
            poster="/api/placeholder/1200/675" // Placeholder for demo
            onClick={togglePlay}
          />
          
          {/* Play Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-900/50 cursor-pointer"
                 onClick={togglePlay}>
              <div className="p-4 bg-jade-500/20 rounded-full">
                <Play className="w-12 h-12 text-jade-500" />
              </div>
            </div>
          )}
          
          {/* Active Note */}
          {activeNote && (
            <div className="absolute top-4 left-4 right-4 bg-stone-900/80 p-4 rounded-lg
                          border-l-4 border-jade-500 animate-fadeIn">
              <p className="text-jade-400 text-sm font-medium">Practice Note:</p>
              <p className="text-stone-100">{activeNote.note}</p>
            </div>
          )}
          
          {/* Controls Bar */}
          <div className={`absolute bottom-0 left-0 right-0 bg-stone-900/80 px-4 py-2
                          transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
            {/* Progress Bar */}
            <div className="relative w-full h-1 bg-stone-700 rounded-full mb-2 cursor-pointer">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="absolute inset-0 w-full opacity-0 cursor-pointer"
              />
              <div 
                className="h-full bg-jade-500 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Controls */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button onClick={togglePlay} className="text-stone-300 hover:text-jade-400 transition-colors">
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5" />
                  )}
                </button>
                
                {/* Skip backward */}
                <button onClick={skipBackward} className="text-stone-300 hover:text-jade-400 transition-colors">
                  <SkipBack className="w-5 h-5" />
                </button>
                
                {/* Skip forward */}
                <button onClick={skipForward} className="text-stone-300 hover:text-jade-400 transition-colors">
                  <SkipForward className="w-5 h-5" />
                </button>
                
                {/* Volume */}
                <button onClick={toggleMute} className="text-stone-300 hover:text-jade-400 transition-colors">
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
                
                {/* Time */}
                <div className="text-stone-300 text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              
              <div>
                {/* Fullscreen */}
                <button onClick={toggleFullscreen} className="text-stone-300 hover:text-jade-400 transition-colors">
                  <Maximize className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video Info */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif text-gold-500 mb-2">{videoData.title}</h1>
          <p className="text-stone-400 mb-4">Instructor: {videoData.instructor}</p>
          <p className="text-stone-300">{videoData.description}</p>
        </div>
        
        {/* Transcript Toggle */}
        <div className="mb-8">
          <button
            onClick={() => setShowTranscript(!showTranscript)}
            className="text-jade-500 hover:text-jade-400 font-medium transition-colors"
          >
            {showTranscript ? 'Hide Transcript' : 'Show Transcript'}
          </button>
          
          {showTranscript && (
            <div className="mt-4 p-6 bg-stone-800/50 rounded-xl border border-jade-500/10">
              <h3 className="text-lg font-serif text-gold-500 mb-4">Transcript</h3>
              <div className="whitespace-pre-line text-stone-300">
                {videoData.transcript}
              </div>
            </div>
          )}
        </div>
        
        {/* Related Videos */}
        {videoData.relatedVideos && videoData.relatedVideos.length > 0 && (
          <div>
            <h3 className="text-xl font-serif text-gold-500 mb-4">Continue Your Practice</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videoData.relatedVideos.map(relatedId => {
                const related = mockVideoData[relatedId];
                if (!related) return null;
                
                return (
                  <Link 
                    key={relatedId}
                    to={`/practice/${relatedId}`}
                    className="bg-stone-800/30 p-4 rounded-xl border border-jade-500/10 
                             hover:border-jade-500/30 transition-all duration-300"
                  >
                    <div className="mb-2">
                      <h4 className="text-lg font-serif text-gold-500">{related.title}</h4>
                      <p className="text-stone-400 text-sm">Instructor: {related.instructor}</p>
                    </div>
                    <p className="text-stone-300 text-sm line-clamp-2">{related.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoPlayer;