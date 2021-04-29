import {
    ADD_TO_NEW_MENU,
    CLEAR_NEW_MENU
} from '../Constants'

export const addToNewMenu = (payload) => {
    return {
        type: ADD_TO_NEW_MENU,
        payload
    }
}

export const removeFromNewMenu = (payload) => {
    return {
        type: CLEAR_NEW_MENU,
        payload
    }
}