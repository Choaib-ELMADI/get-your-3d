import React from 'react';
import { Link } from 'react-router-dom';

import './NotFound.css';
import { images } from '../../constants/index';



const NotFound = () => {
  return (
    <div className='app__not-found'>
      <h1>Looks Like You Are Lost</h1>
      <img src={ images.not__found } alt='not__found' />
      <Link to="/" className='link'><h1>Go Home</h1></Link>
    </div>
  );
}

export default NotFound;