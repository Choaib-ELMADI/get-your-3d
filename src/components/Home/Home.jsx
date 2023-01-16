import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import { images } from '../../constants/index';
import { models } from '../../data';
import { useStateContext } from '../../context/StateContext';



const Home = () => {
  const { updateHistory } = useStateContext();

  return (
    <div className='app__home'>
      <div className='app__home-items'>

        <div className="app__home-item">
          <img src={ images.home__i1 } alt="home-1" />
          <Link className='item__link'>
            <h3>2D Drawings</h3>
          </Link>
        </div>
        <div className="app__home-item">
          <img src={ images.home__i2 } alt="home-2" />
          <Link className='item__link'>
            <h2>3D Modeling</h2>
          </Link>
        </div>
        <div className="app__home-item">
          <img src={ images.home__i3 } alt="home-3" />
          <Link className='item__link'>
            <h3>Something</h3>
          </Link>
        </div>

      </div>
      <div className='app__home-bottom'>
        <h2>Suggested For You</h2>
        <div className="app__home-suggestions">
          <div className='app__home-container'>
            {
              models.map((elt, index) => (
                <Link 
                  to={ `/models/${ elt.title }` } 
                  key={ `suggestion-${ index }` } 
                  className='app__home-suggestion'
                  onClick={ () => updateHistory(elt) }
                >
                  <div className='overlay' />
                  <img src={ elt.pictures[0] } alt={ `suggestion-${ index }` } />
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;