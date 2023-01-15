import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [history, setHistory] = useState(['']);


    return (
        <Context.Provider
            value= {{
                history,
                setHistory,
            }}
        >
            { children }
        </Context.Provider>
    );
}

export const useStateContext = () => useContext(Context);