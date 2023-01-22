import React from 'react';
import { useStateContext } from '../../context/StateContext';

import { Model } from '../index';
import './Dr-Ass.css';



const Dr_Ass = () => {
    const { filteredItems } = useStateContext();

    return (
        <div className='drawings-assemblies'>
            <h1>Drawings <span style={{ color: 'orangered' }}>&</span> Assemblies</h1>
            {
                filteredItems.map((f, i) => (
                    <Model key={ i } model={ f } />
                ))
            }
        </div>
    );
}

export default Dr_Ass;