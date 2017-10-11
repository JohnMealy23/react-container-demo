/**
 * Here's the file where the state is created.
 * Below you'll see that each `case` statement returns a *brand new* state object (in this case an array).
 * *Never* return the old state, except as the `default` behavior.
 */

/**
 * Pipe in only those action types that apply to this reducer.
 */
import { ADD_RESPONSE, REMOVE_RESPONSE } from '../action-types';

const initialState = [];
let id = 0;

/**
 * Note that when you call a reducer, the only mandatory property to your `action` argument is the `type`.
 * Action types being stored in their own file, and used here and in the container, ensures that the container
 * and the applicable reducer(s) always stay in parity, in terms of the action types they use.
 */
function response(state = initialState, action) {
    switch (action.type) {
        case ADD_RESPONSE:
            const newResponse = {
                id: ++id,
                text: action.text
            };
            return state.reduce((newState, response) => {
                newState.push(response);
                return newState;
            }, [newResponse]);
        case REMOVE_RESPONSE:
            return state.reduce((responses, response) => {
                if (response.id !== action.id) {
                    responses.push(response);
                }
                return responses;
            }, []);
        default:
            return state;
    }
}

export default response;