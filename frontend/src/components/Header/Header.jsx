import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { DarkMode } from '../index';



const Header = () => {
  return (
    <div className='app__header'>
        <Link className='app__header-home' to='/'>
            <b>icon</b>
            <h1>CAD Dashboard</h1>
        </Link>
        <DarkMode />
    </div>
  );
}

export default Header;