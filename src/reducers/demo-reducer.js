import { ADD_RESPONSE, REMOVE_RESPONSE } from '../actions';

const initialState = [];
let id = 0;

function response(state = initialState, action) {
    switch (action.type) {
        case ADD_RESPONSE:
            return state.reduce((newState, response) => {
                newState.push(response);
                return newState;
            }, [{
                id: ++id,
                text: action.text
            }]);
            return state;
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