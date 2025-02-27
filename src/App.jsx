// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
import LoadingScreen from './components/common/LoadingScreen';
import ErrorBoundary from './components/common/ErrorBoundary';
import NavBar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

// Study section
const DaoistYoga = lazy(() => import('./pages/study/DaoistYoga'));
const QiGong = lazy(() => import('./pages/study/QiGong'));
const TaijiGong = lazy(() => import('./pages/study/TaijiGong'));
const Meditation = lazy(() => import('./pages/Meditation'));

// Theory section (for compatibility)
const Theory = lazy(() => import('./pages/Theory'));
const EnergyCultivation = lazy(() => import('./pages/theory/EnergyCultivation'));

// Wisdom section (previously Blog section)
const Wisdom = lazy(() => import('./pages/Blog')); // Renamed component usage
const WisdomPost = lazy(() => import('./pages/BlogPost')); // Renamed component usage

// Practice section
const Practice = lazy(() => import('./pages/Practice'));
const PracticeSessionPage = lazy(() => import('./pages/practice/PracticeSession'));
const PracticeDashboard = lazy(() => import('./pages/practice/PracticeDashboard'));
const QuickPractice = lazy(() => import('./pages/practice/QuickPractice'));

// Profile & User section
const UserProfile = lazy(() => import('./pages/profile/UserProfile'));
const UserAchievements = lazy(() => import('./pages/profile/UserAchievements'));
const UserSettings = lazy(() => import('./pages/profile/UserSettings'));

// Not Found page
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <NavBar />
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
              <Route path="/about" element={<About />} errorElement={<ErrorBoundary />} />
              
              {/* Study Routes */}
              <Route path="/study/daoist-yoga" element={<DaoistYoga />} errorElement={<ErrorBoundary />} />
              <Route path="/study/qigong" element={<QiGong />} errorElement={<ErrorBoundary />} />
              <Route path="/study/taijigong" element={<TaijiGong />} errorElement={<ErrorBoundary />} />
              <Route path="/study/meditation" element={<Meditation />} errorElement={<ErrorBoundary />} />
              <Route path="/study/wisdom" element={<Wisdom />} errorElement={<ErrorBoundary />} />
              <Route path="/study/wisdom/:slug" element={<WisdomPost />} errorElement={<ErrorBoundary />} />
              
              {/* Theory Routes (kept for compatibility) */}
              <Route path="/theory" element={<Theory />} errorElement={<ErrorBoundary />} />
              <Route path="/theory/energy-cultivation" element={<EnergyCultivation />} errorElement={<ErrorBoundary />} />
              
              {/* Practice Routes */}
              <Route path="/practice" element={<Practice />} errorElement={<ErrorBoundary />} />
              <Route path="/practice/dashboard" element={<PracticeDashboard />} errorElement={<ErrorBoundary />} />
              <Route path="/practice/:id" element={<PracticeSessionPage />} errorElement={<ErrorBoundary />} />
              <Route path="/practice/quick" element={<QuickPractice />} errorElement={<ErrorBoundary />} />
              
              {/* Profile Routes */}
              <Route path="/profile" element={<UserProfile />} errorElement={<ErrorBoundary />} />
              <Route path="/profile/achievements" element={<UserAchievements />} errorElement={<ErrorBoundary />} />
              <Route path="/profile/settings" element={<UserSettings />} errorElement={<ErrorBoundary />} />
              
              {/* Compatibility Routes */}
              <Route path="/meditation" element={<Meditation />} errorElement={<ErrorBoundary />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;