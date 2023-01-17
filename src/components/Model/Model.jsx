import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
        <div className='app__model-stars'>
        </div>
        <p>{ description }</p>
        <b className='bold'>{ software }</b>
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