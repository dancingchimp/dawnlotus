// src/App.jsx - Final structure with updated routes

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';
import ErrorBoundary from './components/common/ErrorBoundary';
import NotFound from './pages/NotFound';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));

// Theory section
const Theory = React.lazy(() => import('./pages/Theory'));
const EnergyCultivation = React.lazy(() => import('./pages/theory/EnergyCultivation'));

// Blog section
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));

// Daoist Yoga section
const DaoistYoga = React.lazy(() => import('./pages/practice/DaoistYoga'));
const DaoistYogaPractice = React.lazy(() => import('./pages/practice/DaoistYogaPractice'));

// Nei Gong section
const NeiGong = React.lazy(() => import('./pages/practice/NeiGong'));
const NeiGongPractice = React.lazy(() => import('./pages/practice/NeiGongPractice'));

// Tai Chi section
const TaiChi = React.lazy(() => import('./pages/practice/TaiChi'));
const TaiChiPractice = React.lazy(() => import('./pages/practice/TaiChiPractice'));

// Meditation section
const Meditation = React.lazy(() => import('./pages/practice/Meditation'));
const MeditationPractice = React.lazy(() => import('./pages/practice/MeditationPractice'));

// User Profile
const Profile = React.lazy(() => import('./pages/Profile'));

function App() {
  return (
    <AppProvider>
      <Router basename="/harmonygate">
        <Suspense fallback={<LoadingScreen />}>
          <Layout>
            <Routes>
              {/* Main Routes */}
              <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
              <Route path="/about" element={<About />} errorElement={<ErrorBoundary />} />
              
              {/* Theory Routes */}
              <Route path="/theory" element={<Theory />} errorElement={<ErrorBoundary />} />
              <Route path="/energy-cultivation" element={<EnergyCultivation />} errorElement={<ErrorBoundary />} />
              
              {/* Practice Routes - Daoist Yoga */}
              <Route path="/daoist-yoga" element={<DaoistYoga />} errorElement={<ErrorBoundary />} />
              <Route path="/daoist-yoga/practice" element={<DaoistYogaPractice />} errorElement={<ErrorBoundary />} />
              
              {/* Practice Routes - Nei Gong */}
              <Route path="/nei-gong" element={<NeiGong />} errorElement={<ErrorBoundary />} />
              <Route path="/nei-gong/practice" element={<NeiGongPractice />} errorElement={<ErrorBoundary />} />
              
              {/* Practice Routes - Tai Chi */}
              <Route path="/tai-chi" element={<TaiChi />} errorElement={<ErrorBoundary />} />
              <Route path="/tai-chi/practice" element={<TaiChiPractice />} errorElement={<ErrorBoundary />} />
              
              {/* Practice Routes - Meditation */}
              <Route path="/meditation" element={<Meditation />} errorElement={<ErrorBoundary />} />
              <Route path="/meditation/practice" element={<MeditationPractice />} errorElement={<ErrorBoundary />} />
              
              {/* Blog Routes */}
              <Route path="/blog" element={<Blog />} errorElement={<ErrorBoundary />} />
              <Route path="/blog/:slug" element={<BlogPost />} errorElement={<ErrorBoundary />} />
              
              {/* User Profile */}
              <Route path="/profile" element={<Profile />} errorElement={<ErrorBoundary />} />
              
              {/* 404 Route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </AppProvider>
  );
}

export default App;