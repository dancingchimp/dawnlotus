// src/components/auth/AuthForms.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { User, Mail, Lock, ArrowRight, Loader } from 'lucide-react';

function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name);
      }
      
      // Redirect to dashboard on success
      navigate('/dashboard');
    } catch (error) {
      setError(error.message || 'An error occurred during authentication');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-stone-900 pt-20 px-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-chinese text-3xl text-gold-500 mb-2">
            {isLogin ? '歡迎回來' : '加入我們'}
          </h2>
          <h1 className="text-3xl font-serif text-stone-100 mb-4">
            {isLogin ? 'Welcome Back' : 'Join the Path'}
          </h1>
          <p className="text-stone-300">
            {isLogin 
              ? 'Continue your journey with Harmony Gate'
              : 'Begin your journey of transformation'
            }
          </p>
        </div>
        
        {/* Form Card */}
        <Card className="bg-stone-800/50 border-jade-500/10">
          <CardHeader>
            <CardTitle className="text-gold-500 text-center">
              {isLogin ? 'Sign In' : 'Create Account'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Error Message */}
            {error && (
              <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 text-sm">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field - Only for Register */}
              {!isLogin && (
                <div>
                  <label htmlFor="name" className="block text-stone-300 text-sm mb-1">
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-stone-400" />
                    </div>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-stone-700/50 text-stone-100 rounded-lg py-2 pl-10 pr-4 w-full
                               border border-stone-600 focus:outline-none focus:border-jade-500/50"
                      placeholder="Your name"
                    />
                  </div>
                </div>
              )}
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-stone-300 text-sm mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-stone-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-stone-700/50 text-stone-100 rounded-lg py-2 pl-10 pr-4 w-full
                             border border-stone-600 focus:outline-none focus:border-jade-500/50"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-stone-300 text-sm mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-stone-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-stone-700/50 text-stone-100 rounded-lg py-2 pl-10 pr-4 w-full
                             border border-stone-600 focus:outline-none focus:border-jade-500/50"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 rounded-lg font-medium 
                          transition-all duration-300 flex items-center justify-center gap-2
                          ${isLogin
                            ? 'bg-jade-500 hover:bg-jade-600 text-stone-100'
                            : 'bg-gold-500 hover:bg-gold-600 text-stone-900'
                          } ${isLoading ? 'opacity-75' : ''}`}
              >
                {isLoading ? (
                  <>
                    <Loader className="w-4 h-4 animate-spin" />
                    {isLogin ? 'Signing In...' : 'Creating Account...'}
                  </>
                ) : (
                  <>
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              
              {/* Toggle Between Login/Register */}
              <div className="text-center mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsLogin(!isLogin);
                    setError('');
                  }}
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  {isLogin 
                    ? 'New here? Create an account'
                    : 'Already have an account? Sign in'
                  }
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
        
        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="mb-4">
            <p className="text-stone-400 text-sm">
              By creating an account, you agree to our
            </p>
            <div className="flex justify-center gap-4 text-jade-500 text-sm">
              <button className="hover:underline">Terms of Service</button>
              <button className="hover:underline">Privacy Policy</button>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-stone-500 text-xs">
              © {new Date().getFullYear()} Harmony Gate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForms;