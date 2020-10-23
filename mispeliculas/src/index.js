import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import {Provider} from 'react-redux';

import App from './componentes/App';
import * as serviceWorker from './serviceWorker';
import { createGlobalStyle } from 'styled-components';
import reducers from './redux/reducers';

const GlobalStyle = createGlobalStyle`
  body{
    margin:0;
  }
`

const store = createStore(reducers, {}, applyMiddleware(promise, reduxThunk,logger))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
