// src/App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';
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
const NewBlogPost = React.lazy(() => import('./pages/NewBlogPost'));

// Practice section
const Practice = React.lazy(() => import('./pages/Practice'));
const PracticeDetail = React.lazy(() => import('./pages/PracticeDetail'));
const DaoistYoga = React.lazy(() => import('./pages/practice/DaoistYoga'));
const DaoistYogaPractice = React.lazy(() => import('./pages/practice/DaoistYogaPractice'));

// Nei Gong section
const NeiGong = React.lazy(() => import('./pages/practice/NeiGong'));
const NeiGongPractice = React.lazy(() => import('./pages/practice/NeiGongPractice'));

// Tai Chi section
const TaiChi = React.lazy(() => import('./pages/practice/TaiChi'));
const TaiChiPractice = React.lazy(() => import('./pages/practice/TaiChiPractice'));

// Meditation section
const Meditation = React.lazy(() => import('./pages/Meditation'));
const MeditationPractice = React.lazy(() => import('./pages/practice/MeditationPractice'));

// User Profile
const Profile = React.lazy(() => import('./pages/Profile'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const LogPractice = React.lazy(() => import('./pages/LogPractice'));

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <Router>
          <Suspense fallback={<LoadingScreen />}>
            <Layout>
              <Routes>
                {/* Main Routes */}
                <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
                <Route path="/about" element={<About />} errorElement={<ErrorBoundary />} />
                
                {/* Theory Routes */}
                <Route path="/theory" element={<Theory />} errorElement={<ErrorBoundary />} />
                <Route path="/energy-cultivation" element={<EnergyCultivation />} errorElement={<ErrorBoundary />} />
                
 />} />
                <Route path="/blog/:slug" element={<BlogPost />} errorElement={<ErrorBoundary />} />
                <Route path="/blog/new" element={<NewBlogPost />} errorElement={<ErrorBoundary />} />
                
                {/* Practice Routes */}
                <Route path="/practice" element={<Practice />} errorElement={<ErrorBoundary />} />
                <Route path="/practice/:practiceId" element={<PracticeDetail />} errorElement={<ErrorBoundary />} />
                
                {/* Specialized Practice Routes */}
                <Route path="/daoist-yoga" element={<DaoistYoga />} errorElement={<ErrorBoundary />} />
                <Route path="/daoist-yoga/practice" element={<DaoistYogaPractice />} errorElement={<ErrorBoundary />} />
                <Route path="/nei-gong" element={<NeiGong />} errorElement={<ErrorBoundary />} />
                <Route path="/nei-gong/practice" element={<NeiGongPractice />} errorElement={<ErrorBoundary />} />
                <Route path="/tai-chi" element={<TaiChi />} errorElement={<ErrorBoundary />} />
                <Route path="/tai-chi/practice" element={<TaiChiPractice />} errorElement={<ErrorBoundary />} />
                <Route path="/meditation" element={<Meditation />} errorElement={<ErrorBoundary />} />
                <Route path="/meditation/practice" element={<MeditationPractice />} errorElement={<ErrorBoundary />} />
                
                {/* User Profile Routes */}
                <Route path="/profile" element={<Profile />} errorElement={<ErrorBoundary />} />
                <Route path="/dashboard" element={<Dashboard />} errorElement={<ErrorBoundary />} />
                <Route path="/log-practice" element={<LogPractice />} errorElement={<ErrorBoundary />} />
                
                {/* 404 Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Suspense>
        </Router>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;