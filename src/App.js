import './App.scss';
import React from "react";
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import APropos from './components/pages/APropos';
import Evenements from './components/pages/Evenements';
import Horaires from './components/pages/Horaires';
import Tarifs from './components/pages/Tarifs';


function App() {
  return (
    <div className="App">
      <>
        <Router>
          {/* <SocialBar /> */}
          <Navbar />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/a-propos' element={<APropos />} />
            <Route path='/horaires' element={<Horaires />} />
            <Route path='/tarifs' element={<Tarifs />} />
            <Route path='/evenements' element={<Evenements />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
