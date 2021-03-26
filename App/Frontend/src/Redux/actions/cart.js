import {
    ADD_TO_BREAKFAST,
    REMOVE_FROM_BREAKFAST
} from '../Constants'

export const addToBreakfast = (payload) => {
    return {
        type: ADD_TO_BREAKFAST,
        payload
    }
}

export const removeFromRBreakfast = (payload) => {
    return {
        type: REMOVE_FROM_BREAKFAST,
        payload
    }
}