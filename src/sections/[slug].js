import React from 'react';
// import { StlViewer } from "react-stl-viewer";

import './sections.css';
import { models } from '../data';
{/* <StlViewer
      className='main__model'
      orbitControls
      shadows
      url={ models[0].file }
/> */}


const SpecificSection = () => {
  return (
    <div className='app__specific-section'>
      <h1>this is a specific Section</h1>
      <div className="app__models-container">
        {
          models.map((model, i) => (
            <div key={ `model-${ i }` } className='model__container'>
              <h2>{ model.title }</h2>
              <p>{ model.description }</p>
              <img src={ model.pictures[0] } alt={ `model-${ i }` } />
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default SpecificSection;