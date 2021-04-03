import {
    ADD_TO_BREAKFAST,
    REMOVE_FROM_BREAKFAST,
    INCREASE_COUNT,
    DECREASE_COUNT
} from '../Constants'

export const addToBreakfast = (payload) => {
    return {
        type: ADD_TO_BREAKFAST,
        payload
    }
}

export const increaseCount = (item) => dispatch => {
    dispatch({
        type: INCREASE_COUNT,
        payload: item
    })
}

export const decreaseCount = (item) => dispatch => {
    dispatch({
        type: DECREASE_COUNT,
        payload: item
    })
}

export const removeFromBreakfast = (payload) => {
    return {
        type: REMOVE_FROM_BREAKFAST,
        payload
    }
}