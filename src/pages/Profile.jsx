// src/pages/Profile.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="min-h-screen bg-stone-900 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-chinese text-3xl text-gold-400 mb-4">個人信息</h2>
          <h1 className="text-4xl font-serif text-stone-100 mb-6">
            Your Profile
          </h1>
          <p className="text-stone-200 max-w-3xl mx-auto">
            Manage your account and track your journey on the Daoist path.
          </p>
        </div>
        
        {/* User can customize this page later */}
        <div className="text-center p-8 mb-8 bg-stone-800/50 rounded-xl">
          <p className="text-stone-300">
            Profile details and customization will be available in a future update.
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/progress"
            className="bg-jade-600 hover:bg-jade-500 text-stone-100 px-6 py-3 
                     rounded-lg transition-colors inline-block"
          >
            View Your Progress
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;