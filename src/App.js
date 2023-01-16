import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header, Navbar, Home, SpecificSection, Recent, Footer } from './components/index';
import { routes } from './paths';



const App = () => {
  const routeElements = routes.map(({ path, element }, index) => 
    <Route 
      path={ path } 
      element={ element } 
      key={ index }
    />
  )

  return (
    <div className='app'>
      <Header />

      <div className='app__main-home'>
        <Navbar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/sections/" element={ <SpecificSection /> } />
          { routeElements }
        </Routes>
        
        <Recent />
      </div>

      <Footer />

    </div>
  );
}

export default App;