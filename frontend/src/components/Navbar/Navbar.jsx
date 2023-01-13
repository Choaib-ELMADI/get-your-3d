import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const sections = ["Solidworks", "Catia", "AutoCad", "Drawings"];



const Navbar = () => {
  const [activeSection, setActiveSection] = useState(-1);

  return (
    <div className='app__navbar'>
      <Link
        to="/"
        onClick={ () => setActiveSection(-1) }
        className={ 
          activeSection === -1 ?
          'app__navbar-section active' : 
          'app__navbar-section'
        }
      >
        Home
      </Link>
      {
        sections.map((section, index) => (
          <Link 
            key={ section }
            to="/Section"
            onClick={ () => setActiveSection(index) }
            className={ 
              activeSection === index ?
              'app__navbar-section active' : 
              'app__navbar-section'
            }
          >
            { section }
          </Link>
        ))
      }
    </div>
  );
}

export default Navbar;