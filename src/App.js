import React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Home from './Pages/Home';
import Start_year from './Pages/Start_year';
import Intensity from './Pages/Intensity';
import Published from './Pages/Published';
import Title from './Pages/Title';
import Country from './Pages/Country';
import Source from './Pages/Source';
import Invoice from './Pages/Invoice';
import End_year from './Pages/End_year';
import Region from './Pages/Region';
import City from './Pages/City';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/syear" component={Start_year} />
          <Route path="/inten" component={Intensity} />
          <Route path="/publish" component={Published} />
          <Route path="/source" component={Source} />
          <Route path="/title" component={Title} />
          <Route path="/country" component={Country} />
          <Route path="/region" component={Region} />
          <Route path="/city" component={City} />
          <Route path="/invoice" component={Invoice} />
          <Route path="/eyear" component={End_year} />
        </Routes>
      </Router>
      <div className='content'></div>
      <MainContent />
    </div>
  );
}

export default App;
