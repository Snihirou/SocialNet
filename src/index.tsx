import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from 'react-router-dom';

// setInterval(() => {
//     store.dispatch({type: "FAKE"})
// }, 1000)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));

reportWebVitals();

