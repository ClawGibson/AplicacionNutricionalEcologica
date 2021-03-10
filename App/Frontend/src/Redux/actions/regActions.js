import {
    ADD_TO_REG,
    REMOVE_FROM_REG
} from '../Constants'

export const addToReg = (payload) => {
    return {
        type: ADD_TO_REG,
        payload
    }
}

export const removeFromReg = (payload) => {
    return {
        type: REMOVE_FROM_REG,
        payload
    }
}