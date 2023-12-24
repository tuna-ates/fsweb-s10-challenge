import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore,combineReducers,applyMiddleware } from 'redux';
import minnetReducer from './reducers';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk'
import { ToastContainer } from 'react-toastify';
import logger from 'redux-logger';


const store = createStore(minnetReducer, applyMiddleware(thunk,logger))

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer/>
    </Provider>   
  </BrowserRouter>
  
);
