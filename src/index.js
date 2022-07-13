import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-actions';

// console.log(store.dispatch(addContact));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
