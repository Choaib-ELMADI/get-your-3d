import React from 'react';

import './Recent.css';
import { useStateContext } from '../../context/StateContext';



const Recent = () => {
  const { history } = useStateContext();

  return (
    <div className='app__recent'>
      { history.length < 1 &&
        <h3>There is no recent items</h3>
      }
      {
        history.length >= 1 &&
        <h3>This is your history</h3>
      }
    </div>
  );
}

export default Recent;