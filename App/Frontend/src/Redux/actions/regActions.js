import {
    ADD_TO_REG,
    REMOVE_FROM_REG
    ADD_NEW
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

export const addNew = (payload) => {
    return {
        type: ADD_NEW,
        payload
    }
}