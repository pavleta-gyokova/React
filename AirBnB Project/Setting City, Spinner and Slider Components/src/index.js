import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';

const middleware = [reduxPromise, reduxThunk];
const theStore = applyMiddleware(...middleware)(createStore)(rootReducer);

ReactDOM.render(
  <Provider store={theStore}>
    <App />
  </Provider>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
