import React from 'react';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import DashboardHeader from './components/DashboardHeader';

function App() {
    return (
        <div className="app">
            <DashboardHeader />
            <Sidebar />
            <MainContent />
        </div>
    );
}

export default App;