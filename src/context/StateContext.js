import { models } from '../data';

import React, { createContext, useContext, useState } from 'react';
const Context = createContext();



export const StateContext = ({ children }) => {
    const [history, setHistory] = useState(['']);
    const [filteredItems, setFilteredItems] = useState(models);

    const filtering = (section) => {
        setFilteredItems(models.filter(model => 
            model.software === section
        ));
    };


    return (
        <Context.Provider
            value= {{
                history,
                filtering,
                filteredItems,
                setFilteredItems,
            }}
        >
            { children }
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);