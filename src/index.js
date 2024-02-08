
import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from "./App";

import "./Ecamerce"
import Index from './Ecamerce';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <React.StrictMode>

            <Index />
        </React.StrictMode>
    </BrowserRouter>

);
