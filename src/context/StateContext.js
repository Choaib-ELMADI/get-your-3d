import { models } from '../data';

import React, { createContext, useContext, useState } from 'react';
const Context = createContext();



export const StateContext = ({ children }) => {
    const [history, setHistory] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [atHome, setAtHome] = useState(true);

    const filtering = (section) => {
        setFilteredItems(models.filter(model => 
            model.software === section
        ));
    };

    const searching = (items, query) => {
        query = query.toLowerCase();
        return items.filter(item =>
          item.title.split(' ').some(word =>
            word.toLowerCase().startsWith(query)
          )
        );
    }


    return (
        <Context.Provider
            value= {{
                history,
                filtering,
                filteredItems,
                setFilteredItems,
                atHome,
                setAtHome,
                searching,
            }}
        >
            { children }
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);