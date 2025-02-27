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

// Meditation section
const Meditation = React.lazy(() => import('./pages/Meditation'));

// Practice section
const Practice = React.lazy(() => import('./pages/Practice'));

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
                
                {/* Blog Routes */}
                <Route path="/blog" element={<Blog />} errorElement={<ErrorBoundary />} />
                <Route path="/blog/new" element={<NewBlogPost />} errorElement={<ErrorBoundary />} />
                <Route path="/blog/:slug" element={<BlogPost />} errorElement={<ErrorBoundary />} />
                
                {/* Practice Routes */}
                <Route path="/practice" element={<Practice />} errorElement={<ErrorBoundary />} />
                
                {/* Meditation Routes */}
                <Route path="/meditation" element={<Meditation />} errorElement={<ErrorBoundary />} />
                
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