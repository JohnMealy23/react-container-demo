import { ADD_RESPONSE, REMOVE_RESPONSE } from '../actions';

const initialState = [];
let id = 0;

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