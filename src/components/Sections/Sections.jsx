import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const { filteredItems, filtering, setFilteredItems, updateHistory } = useStateContext();

  const handleClicked = (x) => {
    setAnimateCard([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      filtering(x);
    }, 400);
  };

  return (
    <div className='app__specific-section'>
      <div className="app__specific-section-top">
        <h1>Categories</h1>
        <button
          onClick={ () => {
            setAnimateCard([{ y: 100, opacity: 0 }]);
            setTimeout(() => {
              setAnimateCard([{ y: 0, opacity: 1 }]);
              setFilteredItems(models);
            }, 400);
          }}
        >See All</button>
      </div>
      <div className="app__specific-section-categories">
        { filteredItems.length < 1 &&
          <h1>No Specific Items</h1>
        }
        { filteredItems.length >= 1 &&
          <div className='cat-container'>
            {
            ["Solidworks", "Catia", "AutoCad", "Fusion"].map(cat => (
              <button 
                key={ cat }
                className={ filteredItems[0].software === cat ? 'active' : '' }
                onClick={ () => handleClicked(cat) }
              >
                { cat }
              </button>
            ))
            }
          </div>
        }
      </div>
      <motion.div
        animate={ animateCard }
        transition={ { duration: 0.5, delayChildren: 2 } }
        className="app__models-container"
      >
        {
          filteredItems.map((model, i) => (
            <div 
              key={ `model-${ i }` } 
              className='model__container'
            >
              <img src={ model.pictures[3] } alt={ `model-${ i }` } />
              <h2>{ model.title }</h2>
              <Link 
                to={ `/models/${ model.title }` } 
                onClick={ () => updateHistory(model) } 
                className='view-link'
              >
                Details
              </Link>
            </div>
          ))
        }
      </motion.div>
    </div>
  );
}

export default SpecificSection;