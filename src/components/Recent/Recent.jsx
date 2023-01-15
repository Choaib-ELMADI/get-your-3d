import React, { useState } from 'react';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

import './Recent.css';
import { useStateContext } from '../../context/StateContext';



const Recent = () => {
  const { history } = useStateContext();
  const [viewHistory, setViewHistory] = useState(false);

  return (
    <>
      <button 
        className='recent-btn'
        onClick={ () => setViewHistory(!viewHistory) }
      >
        <BsFillArrowLeftCircleFill className='icon' fontSize={ 24 } /> 
        History
      </button>
      <div 
        className={ viewHistory ? 'app__recent' : 'app__recent active' }
      >
        { history.length < 1 &&
          <h3>There is no recent items</h3>
        }
        {
          history.length >= 1 &&
          <div className='app__recent-container'>
            {
              history.map((h, i) => (
                <div className='app__recent-item' key={ i }>
                  <img src={ h.pictures[0] } alt="history" />
                  <label>
                    <h4>{ h.title }</h4>
                    <p>{ h.description }</p>
                  </label>
                </div>
              ))
            }
          </div>
        }
    </div>
  </>
  );
}

export default Recent;