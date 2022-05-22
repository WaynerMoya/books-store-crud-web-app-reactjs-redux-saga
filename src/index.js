import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* A component that makes the store available to all the components 
in the application without passing it explicitly. */
import { Provider } from 'react-redux'

/* Importing the store from the redux folder. */
import store from './redux/store'

/* Importing the bootstrap css file. */
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

