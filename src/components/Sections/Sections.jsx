import React, { useState } from 'react';
import { motion } from 'framer-motion';

import './Sections.css';
import { Link } from 'react-router-dom';
import { models } from '../../data';
import { useStateContext } from '../../context/StateContext';


const SpecificSection = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const { filteredItems, filtering, setFilteredItems, updateHistory, activeSection, setActiveSection } = useStateContext();

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
            setActiveSection(null);
            setAnimateCard([{ y: 100, opacity: 0 }]);
            setTimeout(() => {
              setAnimateCard([{ y: 0, opacity: 1 }]);
              setFilteredItems(models.filter(m => m.category === 'part'));
            }, 400);
          }}
        >See All</button>
      </div>
      <div className="app__specific-section-categories">
        <div className='cat-container'>
          {
          ["Solidworks", "Catia", "AutoCad", "Fusion"].map((cat, i) => (
            <button 
              key={ cat }
              className={ activeSection === i ? 'active' : '' }
              onClick={ () => {
                setActiveSection(i);
                handleClicked(cat); 
              }}
            >
              { cat }
            </button>
          ))
          }
        </div>
      </div>
      { 
        filteredItems.length < 1 &&
        <h1 style={{ marginTop: '2rem' }}>
          <span style={{ color: 'orangered' }}>No </span>
          specific items, See other 
          <span style={{ color: 'orangered' }}> Softwares</span>
        </h1>
      }
      { 
        filteredItems.length >= 1 &&
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
                <img src={ model.pictures[0] } alt={ `model-${ i }` } />
                <h5>{ model.title }</h5>
                <Link 
                  to={ `/models/${ model.link }` } 
                  onClick={ () => updateHistory(model) } 
                  className='view-link'
                >
                  Details
                </Link>
              </div>
            ))
          }
        </motion.div>
      }
    </div>
  );
}

export default SpecificSection;