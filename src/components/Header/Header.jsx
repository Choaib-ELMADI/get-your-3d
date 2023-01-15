import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { DarkMode } from '../index';
import { models } from '../../data';
import { images } from '../../constants/index';
import { useStateContext } from '../../context/StateContext';



const Header = () => {
  const [query, setQuery] = useState('');

  const { atHome, setAtHome, searching, setFilteredItems } = useStateContext();

  const handleChange = (e) => {
    setQuery(e.target.value);
    setFilteredItems(searching(models, query));
  }

  return (
    <div className='app__header'>
        <Link 
          to='/'
          onClick={ () => setAtHome(true) }
          className='app__header-home' 
        >
            <img src={ images.logo__dark } alt='logo' />
            <h1>CAD Dashboard</h1>
        </Link>
        { !atHome &&
          <input 
            value={ query }
            type="search" 
            placeholder="Search..."
            onChange={ handleChange }
          />
        }
        <DarkMode />
    </div>
  );
}

export default Header;