import React from 'react';

const Model = ({ model: { title, description, price } }) => {
  return (
    <div>
        <h1>{ title }</h1>
        <h4>{ description }</h4>
        <h1><b>{ price }</b></h1>
    </div>
  );
}

export default Model;