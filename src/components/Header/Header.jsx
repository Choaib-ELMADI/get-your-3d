import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { DarkMode } from '../index';
import { images } from '../../constants/index';
import { useStateContext } from '../../context/StateContext';



const Header = () => {
  const { setActiveSection } = useStateContext();

  return (
    <div className='app__header'>
        <Link 
          to='/'
          className='app__header-home'
          onClick={ () => setActiveSection(-1) }
        >
            <img src={ images.logo__dark } alt='logo' />
            <h1>CAD Dashboard</h1>
        </Link>
        <DarkMode />
    </div>
  );
}

export default Header;