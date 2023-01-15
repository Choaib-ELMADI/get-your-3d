import React from 'react';
// import { StlViewer } from "react-stl-viewer";

import './Sections.css';
import { Link } from 'react-router-dom';
import { models } from '../../data';
import { useStateContext } from '../../context/StateContext';
{/* <StlViewer
      className='main__model'
      orbitControls
      shadows
      url={ models[0].file }
/> */}


const SpecificSection = () => {
  const { filteredItems, filtering, setFilteredItems } = useStateContext();

  return (
    <div className='app__specific-section'>
      <div className="app__specific-section-top">
        <h1>Categories</h1>
        <button
          onClick={ () => {
            setFilteredItems(models);
          }}
        >See All</button>
      </div>
      <div className="app__specific-section-categories">
        {
          ["Solidworks", "Catia", "AutoCad", "Fusion"].map(cat => (
            <button 
              className={ filteredItems[0].software === cat ? 'active' : '' }
              onClick={ () => filtering(cat) }
            >
              { cat }
            </button>
          ))
        }
      </div>
      <div className="app__models-container">
        {
          filteredItems.map((model, i) => (
            <div key={ `model-${ i }` } className='model__container'>
              <img src={ model.pictures[0] } alt={ `model-${ i }` } />
              <h2>{ model.title }</h2>
              <p>{ model.description }</p>
          </div>
          ))
        }
      </div>
    </div>
  );
}

export default SpecificSection;