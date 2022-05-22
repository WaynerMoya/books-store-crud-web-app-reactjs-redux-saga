import * as types from '../types'

/* Setting the initial state of the reducer. */
const initialState = {
    books: [
        // added this book to the initial state
        {
            id: 1,
            title: 'The Lord of the Rings',
            author: 'J.R.R. Tolkien',
            data: '1954-07-29',
        },
        {
            id: 2,
            title: 'The Hobbit',
            author: 'J.R.R. Tolkien',
            data: '1937-09-21',
        },
        {
            id: 3,
            title: 'The Catcher in the Rye',
            author: 'J.D. Salinger',
            data: '1951-09-21',
        },
        {
            id: 4,
            title: 'The Grapes of Wrath',
            author: 'John Steinbeck',
            data: '1939-04-21',
        }
    ],
    book: {},
    loading: false,
    message: '',
    error: null
}

/**
 * It takes in the current state and an action, and returns the next state
 * @param [state] - This is the current state of the store.
 * @param action - The action object that was dispatched.
 * @returns The state of the application.
 */
export const bookReducer = (state = initialState, action) => {
    /* Destructuring the action object. */
    const { type, payload } = action;

    switch (type) {

        /* When the GET_BOOKS_REQUEST action is dispatched, the loading 
        state is set to true and save the result books inside the books store,
        finally save message response inside the message store*/
        case types.GET_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                books: payload.books,
                message: payload.message
            }

        /* When the GET_BOOKS_FAILURE action is dispatched, the loading
         state is set to false and save the result error inside the error store,
         finally save message response inside the message store */
        case types.GET_BOOKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload.error,
                message: payload.message
            }

        /* When the GET_BOOK_REQUEST action is dispatched, the loading
         state is set to true and save the result book inside book store,
         finally save message response inside the message store */
        case types.GET_BOOK_SUCCESS:
            return {
                ...state,
                book: payload.book,
                loading: false,
                error: null,
                message: payload.message
            }

        /* When the GET_BOOK_FAILURE action is dispatched, the loading
         state is set to false and save the result error inside the error store,
         finally save message response inside the message store */
        case types.GET_BOOK_FAILURE:
            return {
                ...state,
                book: {},
                loading: false,
                error: payload.error,
                message: payload.message
            }

        /* When the DELETE_BOOK_REQUEST action is dispatched, the loading
         state is set to true. finally save message response inside message store */
        case types.ADD_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                message: payload.message
            }

        /* When the DELETE_BOOK_FAILURE action is dispatched, the loading
         state is set to false. finally save message response inside message store */
        case types.ADD_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload.error,
                message: payload.message
            }

        /* When the DELETE_BOOK_REQUEST action is dispatched, the loading
         state is set to true. finally save message response inside message store */
        case types.DELETE_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                message: payload.message
            }

        /* When the DELETE_BOOK_FAILURE action is dispatched, the loading
         state is set to false. finally save message response inside message store */
        case types.DELETE_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload.error,
                message: payload.message
            }

        /* When the UPDATE_BOOK_REQUEST action is dispatched, the loading
         state is set to true. finally save message response inside message store */
        case types.UPDATE_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                message: payload.message
            }

        /* When the UPDATE_BOOK_FAILURE action is dispatched, the loading
         state is set to false. finally save message response inside message store */
        case types.UPDATE_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: payload.error,
                message: payload.message
            }

        default:
            return state;
    }
}