
/* Importing the all effect from the redux-saga/effects file. */
import { all } from 'redux-saga/effects';
/* Importing the bookSaga from the bookSaga.js file. */
import bookSaga from './bookSaga'

/* This is the rootSaga. It is the main saga that will run all the other sagas. */
export default function* rootSaga() {
    yield all([
        bookSaga()
    ])
}