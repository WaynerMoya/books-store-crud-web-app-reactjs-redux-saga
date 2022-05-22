
/* Importing all the functions from the redux-saga/effects file. */
import { all, fork, put, takeEvery } from 'redux-saga/effects';

/* Importing all the constants from the types.js file. */
import * as types from '../types'

/* This is a way to set the api url. If the environment variable is set, 
it will use that, otherwise it will use the default. */
const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001';

/**
 * It takes a config object as an argument, and returns a promise that resolves to the JSON response
 * from the API
 * @param config - This is an object that contains the following properties:
 * @returns A function that takes in a config object and returns a promise.
 */
function api(config) {
    return fetch(apiUrl + config.url, {
        method: config.method ? config.method : 'GET',
        headers: config.headers ? config.headers : {
            'Content-Type': 'application/json'
        },
        body: config.body ? JSON.stringify(config.body) : null,
    }).then(
        response => response.json()).
        catch(error => error);
}

/* A generator function that is used to fetch all the books from the database. */
function* fetchGetAllBooks() {
    try {

        const response = yield api({
            url: '/get-books',
            method: 'GET'
        });

        yield put({
            type: types.GET_BOOKS_SUCCESS, payload: {
                books: response.books,
                message: response.message || 'Successfully fetched all books'
            }
        })

    } catch (error) {
        yield put({
            type: types.GET_BOOKS_FAILURE,
            payload: { message: 'Failed to get all products', error: error }
        })
    }
}

/* A generator function that is used to fetch a single book from the database. */
function* fetchGetBook({ payload: { id } }) {
    try {

        const response = yield api({
            url: '/get-book/' + id,
            method: 'GET'
        });

        yield put({
            type: types.GET_BOOK_SUCCESS, payload: {
                books: response.books,
                message: response.message || 'Successfully fetched all books'
            }
        })

    } catch (error) {
        yield put({
            type: types.GET_BOOK_FAILURE,
            payload: { message: 'Failed to get all products', error: error }
        })
    }
}

/* A generator function that is used to update a book in the database. */
function* fetchUpdateBook({ payload: { id, book } }) {
    try {

        const response = yield api({
            url: '/get-book/' + id,
            method: 'POST',
            body: book
        })

        yield put({
            type: types.ADD_BOOK_SUCCESS, payload: {
                book: response.book || {},
                message: response.message || 'Successfully updated book'
            }
        })

    } catch (error) {
        yield put({
            type: types.UPDATE_BOOK_FAILURE,
            payload: { message: 'Failed to update the book', error: error }
        })
    }
}

/* This is a generator function that is used to delete a book from the database. */
function* fetchDeleteBook({ payload: { id } }) {
    try {

        const response = yield api({
            url: '/delete-book/' + id,
            method: 'POST'
        })

        yield put({
            type: types.DELETE_BOOK_SUCCESS,
            payload: {
                message: response.message || 'Successfully deleted book'
            }
        })

    } catch (error) {
        yield put({
            type: types.DELETE_BOOK_FAILURE,
            payload: { message: 'Failed to delete the book', error: error }
        })
    }
}

/* This is a generator function that is used to fetch all the books from the database. */
function* watchGetAllBooks() {
    yield takeEvery(types.GET_BOOKS_REQUEST, fetchGetAllBooks)
}

/* This is a generator function that is used to fetch a single book from the database. */
function* watchGetBook() {
    yield takeEvery(types.GET_BOOK_REQUEST, fetchGetBook)
}

/* This is a generator function that is used to update a book in the database. */
function* watchUpdateBook() {
    yield takeEvery(types.UPDATE_BOOK_REQUEST, fetchUpdateBook)
}

/* A generator function that is used to run all the sagas. */
function* watchDeleteBook() {
    yield takeEvery(types.DELETE_BOOK_REQUEST, fetchDeleteBook)
}

/* A generator function that is used to run all the sagas. */
function* bookSaga() {
    yield all([
        fork(watchGetAllBooks()),
        fork(watchGetBook()),
        fork(watchUpdateBook()),
        fork(watchDeleteBook())
    ]);
}

/* Exporting the bookSaga function. */
export default bookSaga;