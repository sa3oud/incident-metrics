// src/App.jsx
import React, { useState } from 'react';
import { Activity, AlertCircle, Server } from 'lucide-react';
import HomePage from './components/HomePage';
import SystemMetrics from './components/SystemMetrics';
import ApplicationMetrics from './components/ApplicationMetrics';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'system':
        return <SystemMetrics />;
      case 'application':
        return <ApplicationMetrics />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        {currentPage !== 'home' && (
          <button
            onClick={() => setCurrentPage('home')}
            className="m-4 px-4 py-2 text-pink-600 hover:text-pink-700 flex items-center gap-2"
          >
            ← Back to Home
          </button>
        )}
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
