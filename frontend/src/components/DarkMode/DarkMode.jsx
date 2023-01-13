import React from 'react';

import './DarkMode.css';



const DarkMode = () => {
  return (
    <div app__dark-light>
        <label htmlFor="darkLight">
            <input 
                type="checkbox" 
                name="darkLight" 
                id="darkLight" 
            />
            <div className='modeCircle' />
        </label>
    </div>
  );
}

export default DarkMode;