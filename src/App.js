import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, Navbar, Home, Recent, Footer } from './components/index';
import  SpecificSection from './sections/[slug]';



const App = () => {
  return (
    <div className='app'>

      <Header />

      <div className='app__main-home'>
        <Navbar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          {
            ["Solidworks", "Catia", "AutoCad", "Fusion-360"].map((section, i) => (
              <Route key={ i } path={ `/sections/${ section }` } element={ <SpecificSection /> } />
            ))
          }
        </Routes>
        
        <Recent />
      </div>

      <Footer />

    </div>
  );
}

export default App;