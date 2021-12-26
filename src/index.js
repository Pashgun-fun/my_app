import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state"

let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state = {store} dispatch = {state.dispatch.bind(state)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state.getState());

state.subscribe(rerenderEntireTree)



reportWebVitals();
