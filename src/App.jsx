import React, { Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Practice = React.lazy(() => import('./pages/Practice'));
const Theory = React.lazy(() => import('./pages/Theory'));
const Meditation = React.lazy(() => import('./pages/Meditation'));
const About = React.lazy(() => import('./pages/About'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <AppProvider>
      <ErrorBoundary>
        <Router>
          <Suspense fallback={<LoadingScreen />}>
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/practice" element={<Practice />} />
                <Route path="/theory" element={<Theory />} />
                <Route path="/meditation" element={<Meditation />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </Suspense>
        </Router>
      </ErrorBoundary>
    </AppProvider>
  );
}

export default App;