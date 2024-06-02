import React from 'react';
import Charts from './components/Charts';
import './index.css';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-white text-3xl mb-4 text-center">Security Alerts Dashboard</h1>
      <Charts />
    </div>
  );
}

export default App;
