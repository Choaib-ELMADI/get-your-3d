import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import './Model.css';



const Model = ({ model: { title, description, software, pictures } }) => {
  const [activeImage, setActiveImage] = useState(0);


  return (
    <div className='app__model'>
      <div className="app__model-pic">
        <img src={ pictures[activeImage] } alt="picture" />
        <div className="app__model-small-pics">
          {
            pictures.slice(0, 4).map((pic, i) => (
              <img 
              key={ i }
                src={ pic } 
                alt="picture" 
                onPointerEnter={ () => setActiveImage(i) }
                className={ i === activeImage ? "active" : "" }
              />
            ))
          }
        </div>
      </div>
      <div className="app__model-info">
        <h1>{ title }</h1>
        <p>{ description }</p>
        <div className='app__model-stars'>
          <AiFillStar fontSize={ 21 } />
          <AiFillStar fontSize={ 21 } />
          <AiFillStar fontSize={ 21 } />
          <AiFillStar fontSize={ 21 } />
          <AiFillStar fontSize={ 21 } />
        </div>
        <b className='bold'>{ software }</b>
        <div className="app__model-file-info">
          <p><b>Date</b> : 22/01/2023</p>
          <p><b>Size</b> : 1.5Gb</p>
        </div>
        <div className='app__model-btns'>
          <Link to='/sections/'><button><b>View More</b></button></Link>
          <button 
            onClick={''} 
          >
            <b>Download</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;