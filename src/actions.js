import { ADD_RESPONSE, REMOVE_RESPONSE } from './action-types.js';

export function removeResponse(id) {
    return { type: REMOVE_RESPONSE, id }
}

export function addResponse(text) {
    return { type: ADD_RESPONSE, text }
}

/**
 * How about adding the header action here?
 */