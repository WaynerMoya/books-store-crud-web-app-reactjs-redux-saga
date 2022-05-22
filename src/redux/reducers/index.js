/* Importing the combineReducers function from the redux library. */
import { combineReducers } from 'redux';

/* Importing the bookReducer from the book.js file. */
import { bookReducer } from './book'

/* Combining the bookReducer with the rootReducer. */
const rootReducer = combineReducers({
    bookReducer: bookReducer
});

/* Exporting the rootReducer. */
export default rootReducer;