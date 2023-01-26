import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

import './Model.css';



const Model = ({ model: { title, description, software, pictures, file, category } }) => {
  const [activeImage, setActiveImage] = useState(0);

  const FILE_URL = `https://get-your-3d.netlify.app/models/${ file }`;

  const handleDownload = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

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
        <b className='bold' style={{ textTransform: 'capitalize' }}>{ category }</b>
        <div className='app__model-btns'>
          <Link to='/sections/'><button><b>View More</b></button></Link>
          <button 
            onClick={ () => handleDownload(FILE_URL) } 
          >
            <b>Download</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Model;