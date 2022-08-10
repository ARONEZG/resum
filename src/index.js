import React from 'react';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {BrowserRouter} from 'react-router-dom'

import store from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderEntireTree(state) {

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                     state={state}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}


renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


