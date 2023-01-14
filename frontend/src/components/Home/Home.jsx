import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { client, urlFor } from '../../lib/client';

import './Home.css';
import { images } from '../../constants/index';
const test = [
  images.autocad, 
  images.catia, 
  images.fusion,
  images.home__i1,
  images.home__i2,
  images.home__i3,
  images.logo__dark,
  images.logo__dark,
  images.logo__dark,
  images.logo__dark,
  images.logo__light,
  images.solidworks
]



const Home = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const query = '*[_type == "model"]';
    client.fetch(query)
      .then((data) => {
        setSuggestions(data);
      })
  }, [])
  


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
              suggestions.map((elt, index) => (
                <Link 
                  to="/" 
                  key={ `suggestion-${ index }` } 
                  className='app__home-suggestion'
                >
                  <div className='overlay' />
                  <img src={ urlFor(elt.image[index]) } alt={ `suggestion-${ index }` } />
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