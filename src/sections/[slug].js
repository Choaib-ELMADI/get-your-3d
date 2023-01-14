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
      <div className='model__container'>
        <h2>{ models[0].title }</h2>
        <p>{ models[0].description }</p>
      </div>
    </div>
  );
}

export default SpecificSection;