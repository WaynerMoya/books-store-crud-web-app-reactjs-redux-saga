/* Importing all the types from the types.js file. */
import * as types from '../types';

/**
 * It returns an object with a type property
 */
export const getAllBooks = () => ({
    type: types.GET_BOOKS_REQUEST,
})

/**
 * It returns an object with a type property and a payload property. 
 * 
 * The type property is a string that describes the action. 
 * 
 * The payload property is an object that contains the data that the action needs to perform its job. 
 * 
 * In this case, the payload object contains the id of the book that we want to get. 
 * 
 * The payload object can contain any data that the action needs to perform its job. 
 * 
 * The payload object is optional. 
 * 
 * If the action doesn't need any data, then the payload object can be omitted. 
 * 
 * The payload object is also optional in Redux. 
 * 
 * If the action doesn't need any data, then the payload object can be omitted. 
 * 
 * The payload object is also optional in Redux. 
 * 
 * If the action doesn't need any data, then the payload object can be omitted. 
 * 
 * The payload object is also optional in Redux.
 * @param id - The id of the book to be fetched.
 */
export const getBook = (id) => ({
    type: types.GET_BOOK_REQUEST,
    payload: {
        id
    }
})

/**
 * It returns an object with a type property and a payload property. The type property is a string that
 * describes the action. The payload property is an object that contains the data that the action needs
 * to perform its task
 * @param id - The id of the book to be deleted
 */
export const deleteBook = (id) => ({
    type: types.DELETE_BOOK_REQUEST,
    payload: {
        id
    }
})

/**
 * It returns an object with a type property and a payload property. The type property is a string that
 * represents the action type. The payload property is an object that contains the data that will be
 * sent to the reducer
 * @param id - The id of the book to update
 * @param book - {
 */
export const updateBook = (id, book) => ({
    type: types.UPDATE_BOOK_REQUEST,
    payload: {
        id,
        book
    }
})