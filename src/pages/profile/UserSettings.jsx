// src/pages/profile/UserSettings.jsx
import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ArrowLeft, Save, User, Bell, Lock, Eye, EyeOff } from 'lucide-react';

const UserSettings = () => {
  const { user, logout } = useAuth();
  
  // Mock user data if not available from auth context
  const initialUserData = user || {
    name: "Harmony Seeker",
    email: "user@example.com",
    preferences: {
      practiceReminders: true,
      reminderTime: "07:00",
      darkMode: true,
      language: "en",
      notifyAchievements: true,
      notifyUpdates: true
    }
  };
  
  const [userData, setUserData] = useState(initialUserData);
  const [showPassword, setShowPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [activeTab, setActiveTab] = useState('account');
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      // Handle nested objects (preferences)
      const [parent, child] = name.split('.');
      setUserData({
        ...userData,
        [parent]: {
          ...userData[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      });
    } else {
      // Handle top-level properties
      setUserData({
        ...userData,
        [name]: type === 'checkbox' ? checked : value
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log('Saving settings:', userData);
    
    // Show success message
    alert('Settings saved successfully!');
  };
  
  // Handle password change
  const handlePasswordChange = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match.');
      return;
    }
    
    if (newPassword.length < 8) {
      alert('New password must be at least 8 characters long.');
      return;
    }
    
    // In a real app, you would verify the current password and update
    console.log('Changing password');
    
    // Reset fields and show success message
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    alert('Password changed successfully!');
  };
  
  // Handle logout
  const handleLogout = () => {
    logout();
    // In a real app, this would redirect to login page
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-stone-900 pt-20">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center mb-8">
          <a 
            href="/profile"
            className="flex items-center gap-2 text-stone-400 hover:text-stone-300 transition-colors mr-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Profile</span>
          </a>
          
          <div>
            <h1 className="text-2xl font-serif text-gold-500">Account Settings</h1>
            <p className="text-stone-400">
              Manage your account preferences
            </p>
          </div>
        </div>
        
        {/* Settings Content */}
        <div className="grid md:grid-cols-12 gap-8">
          {/* Tab Navigation */}
          <div className="md:col-span-3">
            <div className="bg-stone-800/30 rounded-xl p-4 border border-jade-500/10 sticky top-24">
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('account')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'account'
                      ? 'bg-jade-500/20 text-jade-400'
                      : 'text-stone-400 hover:bg-stone-800 hover:text-stone-300'
                  }`}
                >
                  <User size={18} />
                  <span>Account</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('notifications')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'notifications'
                      ? 'bg-jade-500/20 text-jade-400'
                      : 'text-stone-400 hover:bg-stone-800 hover:text-stone-300'
                  }`}
                >
                  <Bell size={18} />
                  <span>Notifications</span>
                </button>
                
                <button
                  onClick={() => setActiveTab('password')}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === 'password'
                      ? 'bg-jade-500/20 text-jade-400'
                      : 'text-stone-400 hover:bg-stone-800 hover:text-stone-300'
                  }`}
                >
                  <Lock size={18} />
                  <span>Password</span>
                </button>
              </nav>
              
              <div className="mt-8 pt-4 border-t border-stone-700">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-stone-400 hover:text-stone-300 transition-colors text-center"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="md:col-span-9">
            {/* Account Settings */}
            {activeTab === 'account' && (
              <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
                <h2 className="text-xl font-serif text-gold-500 mb-6">Account Information</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-stone-300 mb-2">Display Name</label>
                    <input
                      type="text"
                      name="name"
                      value={userData.name}
                      onChange={handleInputChange}
                      className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-stone-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-stone-300 mb-2">Language</label>
                    <select
                      name="preferences.language"
                      value={userData.preferences.language}
                      onChange={handleInputChange}
                      className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500"
                    >
                      <option value="en">English</option>
                      <option value="zh">Chinese (Simplified)</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="darkMode"
                      name="preferences.darkMode"
                      checked={userData.preferences.darkMode}
                      onChange={handleInputChange}
                      className="mr-2 h-4 w-4 text-jade-500 rounded focus:ring-jade-500 focus:ring-opacity-25 border-stone-600 bg-stone-700"
                    />
                    <label htmlFor="darkMode" className="text-stone-300">Use Dark Mode</label>
                  </div>
                  
                  <div className="pt-4 border-t border-stone-700">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2 bg-jade-500 hover:bg-jade-600 text-stone-100 rounded-lg transition-colors"
                    >
                      <Save size={18} />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
                <h2 className="text-xl font-serif text-gold-500 mb-6">Notification Preferences</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-stone-300 font-medium">Practice Reminders</h3>
                      <p className="text-stone-400 text-sm">Receive daily reminders to practice</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="preferences.practiceReminders"
                        checked={userData.preferences.practiceReminders}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-stone-400 after:border-stone-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-jade-500"></div>
                    </label>
                  </div>
                  
                  {userData.preferences.practiceReminders && (
                    <div>
                      <label className="block text-stone-300 mb-2">Reminder Time</label>
                      <input
                        type="time"
                        name="preferences.reminderTime"
                        value={userData.preferences.reminderTime}
                        onChange={handleInputChange}
                        className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-stone-300 font-medium">Achievement Notifications</h3>
                      <p className="text-stone-400 text-sm">Get notified when you earn achievements</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="preferences.notifyAchievements"
                        checked={userData.preferences.notifyAchievements}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-stone-400 after:border-stone-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-jade-500"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-stone-300 font-medium">Content Updates</h3>
                      <p className="text-stone-400 text-sm">Receive notifications about new content and features</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        name="preferences.notifyUpdates"
                        checked={userData.preferences.notifyUpdates}
                        onChange={handleInputChange}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-stone-400 after:border-stone-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-jade-500"></div>
                    </label>
                  </div>
                  
                  <div className="pt-4 border-t border-stone-700">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2 bg-jade-500 hover:bg-jade-600 text-stone-100 rounded-lg transition-colors"
                    >
                      <Save size={18} />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Password Settings */}
            {activeTab === 'password' && (
              <div className="bg-stone-800/30 rounded-xl p-6 border border-jade-500/10">
                <h2 className="text-xl font-serif text-gold-500 mb-6">Change Password</h2>
                
                <form onSubmit={handlePasswordChange} className="space-y-6">
                  <div>
                    <label className="block text-stone-300 mb-2">Current Password</label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500 pr-10"
                        required
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-300"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-stone-300 mb-2">New Password</label>
                    <input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500"
                      required
                      minLength={8}
                    />
                    <p className="text-stone-400 text-xs mt-1">
                      Password must be at least 8 characters long
                    </p>
                  </div>
                  
                  <div>
                    <label className="block text-stone-300 mb-2">Confirm New Password</label>
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full bg-stone-700 border border-stone-600 rounded-lg px-4 py-2 text-stone-300 focus:outline-none focus:ring-2 focus:ring-jade-500"
                      required
                    />
                  </div>
                  
                  <div className="pt-4 border-t border-stone-700">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2 bg-jade-500 hover:bg-jade-600 text-stone-100 rounded-lg transition-colors"
                    >
                      <Save size={18} />
                      <span>Change Password</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;