import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { GiEmptyWoodBucketHandle } from 'react-icons/gi';
import { BiHide } from 'react-icons/bi';

import './Recent.css';
import { useStateContext } from '../../context/StateContext';



const Recent = () => {
  const { history, setHistory, hide } = useStateContext();
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
        className={ viewHistory ? 'app__recent active' : 'app__recent' }
      >
        { history.length < 1 &&
          <div className='empty-recent'>
            <GiEmptyWoodBucketHandle fontSize={ 50 } />
            <h3>There is no <span>Recent</span> items</h3>
          </div>
        }
        {
          history.length >= 1 &&
          <div className='app__recent-container'>
            <h2>
              <span>Recent</span>
              <div 
                onClick={ () => setHistory([]) }
                className='hide-icon'
              >
                clear
              </div>
            </h2>
            {
              history.map((h, i) => (
                <Link 
                  to={ `/models/${ h.link }` } 
                  className='app__recent-item' 
                  key={ i }
                >
                  <img src={ h.pictures[0] } alt="history" />
                  <label>
                    <h4>{ h.title }</h4>
                    <p>{ h.description }</p>
                  </label>
                  <button 
                    onClick={ (e) => {
                      e.preventDefault();
                      hide(h);
                    }}
                  >
                    <BiHide className='hide-icon' fontSize={ 20 } />
                  </button>
                </Link>
              ))
            }
          </div>
        }
    </div>
  </>
  );
}

export default Recent;