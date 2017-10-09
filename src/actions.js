export const ADD_RESPONSE = 'ADD_RESPONSE';
export const REMOVE_RESPONSE = 'REMOVE_RESPONSE';

export function removeResponse(id) {
    return { type: REMOVE_RESPONSE, id }
}

export function addResponse(text) {
    return { type: ADD_RESPONSE, text }
}