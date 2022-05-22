/* Importing the createStore function from the redux library. */
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

/* Importing the rootReducer from the reducers folder. */
import rootReducer from './reducers/index';

/* Importing the rootSaga from the sagas folder. */
import rootSaga from './sagas';

/* Creating a middleware that will be used to run the rootSaga. */
const sagaMiddleware = createSagaMiddleware();

/* Creating a store that will hold the state of the application. */
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
);

/* Running the rootSaga. */
sagaMiddleware.run(rootSaga)

/* Exporting the store so that it can be imported into other files. */
export default store;