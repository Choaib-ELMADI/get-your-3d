import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StateContext } from './context/StateContext';
import App from './App';
import './index.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateContext>
                <App />
            </StateContext>
        </BrowserRouter>
    </React.StrictMode>
);