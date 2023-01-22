import { models } from '../data';

import React, { createContext, useContext, useState } from 'react';
const Context = createContext();



export const StateContext = ({ children }) => {
    const [history, setHistory] = useState([]);
    const [activeSection, setActiveSection] = useState(-1);
    const [filteredItems, setFilteredItems] = useState(models.filter(m => m.category === 'part'));

    const filtering = (section) => {
        setFilteredItems(models.filter(model => 
            (model.software === section) && (model.category === 'part')
        ));
    };

    const updateHistory = (elt) => {
        if (history.length < 1) setHistory([...history, elt]);
        else {
            history.map(h => {
                if (elt.title !== h.title) setHistory([...history, elt]);
                else {
                    const exist = history.filter(h => h.title !== elt.title);
                    setHistory([
                        ...exist,
                        elt
                    ])
                }
            });
        };
    };

    const hide = (itm) => {
        setHistory(
            history.filter(h => h.title !== itm.title)
        )
    };

    const filterDrawings = (cat) => {
        setFilteredItems(models.filter(model => 
            model.category === cat
        ));
    };


    return (
        <Context.Provider
            value= {{
                activeSection,
                setActiveSection,
                history,
                setHistory,
                filtering,
                filteredItems,
                setFilteredItems,
                updateHistory,
                hide,
                filterDrawings,
            }}
        >
            { children }
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);