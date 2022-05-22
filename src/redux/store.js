/* Importing the createStore function from the redux library. */
import { createStore, applyMiddleware, compose } from 'redux';

/* Importing the rootReducer from the reducers folder. */
import rootReducer from './reducers/index';

/* Creating a store that will hold the state of the application. */
const store = createStore(rootReducer);

/* Exporting the store so that it can be imported into other files. */
export default store;