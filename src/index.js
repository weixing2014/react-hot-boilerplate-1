import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import noteApp from './reducers'

let store = createStore(noteApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
