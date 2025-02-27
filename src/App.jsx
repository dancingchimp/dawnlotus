// src/App.jsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/layout/Layout';
import LoadingScreen from './components/common/LoadingScreen';
import ErrorBoundary from './components/common/ErrorBoundary';
import NotFound from './pages/NotFound';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
const Practice = React.lazy(() => import('./pages/Practice'));
const Theory = React.lazy(() => import('./pages/Theory'));
const Meditation = React.lazy(() => import('./pages/Meditation'));
const About = React.lazy(() => import('./pages/About'));
const EnergyCultivation = React.lazy(() => import('./pages/theory/EnergyCultivation'));

function App() {
  return (
    <AppProvider>
      {/* Remove the basename prop or set it to "/" for the root domain deployment */}
      <Router>
        <Suspense fallback={<LoadingScreen />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} errorElement={<ErrorBoundary />} />
              <Route path="/practice" element={<Practice />} errorElement={<ErrorBoundary />} />
              <Route path="/theory" element={<Theory />} errorElement={<ErrorBoundary />} />
              <Route path="/meditation" element={<Meditation />} errorElement={<ErrorBoundary />} />
              <Route path="/about" element={<About />} errorElement={<ErrorBoundary />} />
              <Route path="/energy-cultivation" element={<EnergyCultivation />} errorElement={<ErrorBoundary />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </AppProvider>
  );
}

export default App;