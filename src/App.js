import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className='content'></div>
      <MainContent />
    </div>
  );
}

export default App;
