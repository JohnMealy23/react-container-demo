import { ADD_RESPONSE, REMOVE_RESPONSE } from '../actions';

const initialState = [];

function response(state = initialState, action) {
    switch (action.type) {
        case ADD_RESPONSE:
            state.push(action.response);
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