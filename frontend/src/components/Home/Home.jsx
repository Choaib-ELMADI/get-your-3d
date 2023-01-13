import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
import { images } from '../../constants/index';



const Home = () => {
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
      <div className="app__home-suggestions">
        
      </div>
    </div>
  );
}

export default Home;