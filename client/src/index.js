import React from 'react';
import ReactDOM from 'react-dom';
// Keeps track of global state, gives access to store
import { Provider } from 'react-redux'
import './index.css'
import store from './store'
import App from './App'



ReactDOM.render(<Provider store={store}>
                  <App />
                </Provider>,
                 document.getElementById('root'));